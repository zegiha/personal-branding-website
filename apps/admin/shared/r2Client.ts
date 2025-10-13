import { S3Client } from "@aws-sdk/client-s3";

export const R2Client = new S3Client({
  region: "auto",
  endpoint: process.env.R2_END_POINT || "",
  credentials: {
    accessKeyId: process.env.R2_ACCESS_KEY || "",
    secretAccessKey: process.env.R2_PRIVATE_ACCESS_KEY || "",
  },
});
