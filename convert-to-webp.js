import fs from "fs";
import path from "path";
import sharp from "sharp";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const assetsFolder = path.join(__dirname, "src/assets");

const allowedExt = [".webp", ".jpg", ".jpeg"];

async function convertImages(folder) {
  const files = fs.readdirSync(folder);

  for (const file of files) {
    const filePath = path.join(folder, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      await convertImages(filePath);
      continue;
    }

    const ext = path.extname(file).toLowerCase();

    if (ext === ".webp") continue;
    if (!allowedExt.includes(ext)) continue;

    const outputPath = filePath.replace(ext, ".webp");

    try {
      await sharp(filePath).webp({ quality: 80 }).toFile(outputPath);

      console.log(`Converted: ${file}`);
    } catch (err) {
      console.error(`Failed: ${file}`, err);
    }
  }
}

convertImages(assetsFolder);
