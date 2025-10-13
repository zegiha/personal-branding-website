import { PutObjectCommand } from "@aws-sdk/client-s3";
import sizeOf from "image-size";
import { type NextRequest, NextResponse } from "next/server";
import * as z from "zod";
import { R2Client } from "@/shared/r2Client";

const SchemePostImage = z.object({
  url: z.optional(z.string()),
  file: z.optional(z.file()),
});

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();

    const file = formData.get("file") as File | null;
    const url = formData.get("url") as string | null;

    if (url === null && file === null) {
      return NextResponse.json({ status: 401, message: "wrong body" });
    }

    if (url !== null) {
      const getBufferAndMeta: () => Promise<{
        buffer: Buffer;
        width: number;
        height: number;
        type?: string;
      } | null> = async () => {
        try {
          const buffer: Buffer = await fetch(url)
            .then((res) => res.arrayBuffer())
            .then((res) => Buffer.from(res));

          const { width, height, type } = sizeOf(buffer);

          return {
            buffer,
            width,
            height,
            type,
          };
        } catch (e) {
          console.error("failed to fetch url", e);
          return null;
        }
      };

      const bufferAndMeta = await getBufferAndMeta();
      if (!bufferAndMeta) {
        return NextResponse.json({ status: 500, message: "failed to download image" });
      }

      const { buffer, width, height, type } = bufferAndMeta;
      if (!type) {
        return NextResponse.json({ status: 500, message: `wrong ext type: ${type}` });
      }

      const fileName = `${crypto.randomUUID()}.${type}`;

      return await uploadImage({
        fileName,
        buffer,
        type,
        width,
        height,
      });
    } else if (file !== null) {
      const arrayBuffer = await file.arrayBuffer();
      const buffer: Buffer = Buffer.from(arrayBuffer);

      const { width, height, type } = sizeOf(buffer);
      if (type === undefined) {
        return NextResponse.json({ status: 500, message: `wrong ext type: ${type}` });
      }

      const fileName = `${crypto.randomUUID()}.${type}`;

      return await uploadImage({
        fileName,
        buffer,
        type,
        width,
        height,
      });
    }
  } catch (e) {
    console.error(e);
  }
}

async function uploadImage({
  fileName,
  buffer,
  type,
  width,
  height,
}: {
  fileName: string;
  buffer: Buffer;
  type: string;
  width: number;
  height: number;
}) {
  try {
    const command = new PutObjectCommand({
      Bucket: process.env.R2_BUCKET_NAME,
      Key: fileName,
      Body: buffer,
      ContentType: `image/${type}`,
    });

    await R2Client.send(command);

    return NextResponse.json({
      status: 200,
      message: "success",
      data: {
        url: `${process.env.R2_PUBLIC_END_POINT}/${fileName}`,
        width,
        height,
      },
    });
  } catch (e) {
    console.error("failed to upload image to bucket", e);
  }
}
