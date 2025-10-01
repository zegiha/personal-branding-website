import sharp from "sharp"; // import * as sharp from "sharp" 도 가능하지만 default import 권장
import { ThemeModeEnum } from "../const/ThemeModeEnum";

export async function getTextColorForImage(url: string): Promise<ThemeModeEnum> {
  // 1. 이미지 다운로드 → ArrayBuffer 변환
  const res = await fetch(url);
  const arrayBuffer = await res.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);

  // 2. sharp로 읽기
  const image = sharp(buffer);

  // 3. 리사이즈 + raw 픽셀 추출
  const { data, info } = await image
    .resize(100, 100, { fit: "inside" })
    .raw()
    .toBuffer({ resolveWithObject: true });

  // 4. 명도 평균 계산
  let totalLuminance = 0;
  let count = 0;
  for (let i = 0; i < data.length; i += info.channels) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];
    const luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b;
    totalLuminance += luminance;
    count++;
  }

  const avgLuminance = totalLuminance / count;
  return avgLuminance > 128 ? ThemeModeEnum.LIGHT : ThemeModeEnum.DARK;
}
