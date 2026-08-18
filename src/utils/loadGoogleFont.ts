import { readFile } from "node:fs/promises";
import path from "node:path";

async function loadLocalFont(weight: number): Promise<ArrayBuffer> {
  const fileName = weight >= 700 ? "atkinson-bold.woff" : "atkinson-regular.woff";
  const fontPath = path.join(process.cwd(), "public", "fonts", fileName);
  return readFile(fontPath);
}

async function loadGoogleFont(font: string, text: string, weight: number): Promise<ArrayBuffer> {
  const API = `https://fonts.googleapis.com/css2?family=${font}:wght@${weight}&text=${encodeURIComponent(text)}`;

  const css = await (
    await fetch(API, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_6_8; de-at) AppleWebKit/533.21.1 (KHTML, like Gecko) Version/5.0.5 Safari/533.21.1",
      },
    })
  ).text();

  const resource = css.match(/src: url\((.+?)\) format\('(opentype|truetype)'\)/);

  if (!resource) throw new Error("Failed to download dynamic font");

  const res = await fetch(resource[1]);

  if (!res.ok) {
    throw new Error("Failed to download dynamic font. Status: " + res.status);
  }

  return res.arrayBuffer();
}

async function loadGoogleFonts(
  text: string
): Promise<Array<{ name: string; data: ArrayBuffer; weight: number; style: string }>> {
  const fontsConfig = [
    {
      name: "IBM Plex Mono",
      font: "IBM+Plex+Mono",
      weight: 400,
      style: "normal",
    },
    {
      name: "IBM Plex Mono",
      font: "IBM+Plex+Mono",
      weight: 700,
      style: "bold",
    },
  ];

  const fonts = await Promise.all(
    fontsConfig.map(async ({ name, font, weight, style }) => {
      let data: ArrayBuffer;

      try {
        data = await loadGoogleFont(font, text, weight);
      } catch {
        data = await loadLocalFont(weight);
      }

      return { name, data, weight, style };
    })
  );

  return fonts;
}

export default loadGoogleFonts;
