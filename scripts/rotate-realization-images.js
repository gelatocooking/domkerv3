#!/usr/bin/env node

const fs = require("node:fs/promises");
const path = require("node:path");
const sharp = require("sharp");

const IMAGE_EXTENSIONS = new Set([".jpg", ".jpeg", ".png", ".webp", ".avif", ".tif", ".tiff"]);
const DEFAULT_BASE_DIR = path.join(process.cwd(), "public", "realizacje", "realizacje");

function printHelp() {
  console.log(`
Uzycie:
  node scripts/rotate-realization-images.js --dir "<nazwa_katalogu>" --angle 90
  node scripts/rotate-realization-images.js --all --angle 180
  node scripts/rotate-realization-images.js --dir "<nazwa_katalogu>" --angle 90 --dry-run

Opcje:
  --dir <nazwa>       Obraca pliki tylko w jednym katalogu realizacji.
  --all               Obraca pliki we wszystkich katalogach realizacji.
  --angle <kat>       Kat obrotu: 90, -90, 180, 270. Domyslnie 90.
  --base-dir <sciezka> Nadpisuje domyslna sciezke bazowa.
  --dry-run           Pokazuje co zostaloby obrocone bez zapisu zmian.
  --help              Pokazuje ta pomoc.
`);
}

function parseArgs(argv) {
  const args = {
    angle: 90,
    dryRun: false,
    all: false,
    dir: null,
    baseDir: DEFAULT_BASE_DIR,
  };

  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i];

    if (arg === "--help" || arg === "-h") {
      printHelp();
      process.exit(0);
    }

    if (arg === "--dry-run") {
      args.dryRun = true;
      continue;
    }

    if (arg === "--all") {
      args.all = true;
      continue;
    }

    if (arg === "--dir") {
      args.dir = argv[i + 1] ?? null;
      i += 1;
      continue;
    }

    if (arg === "--angle") {
      args.angle = Number(argv[i + 1]);
      i += 1;
      continue;
    }

    if (arg === "--base-dir") {
      args.baseDir = path.resolve(argv[i + 1] ?? "");
      i += 1;
      continue;
    }

    throw new Error(`Nieznana opcja: ${arg}`);
  }

  if (!args.all && !args.dir) {
    throw new Error("Podaj --dir <nazwa_katalogu> albo --all.");
  }

  if (args.all && args.dir) {
    throw new Error("Uzyj tylko jednej opcji: --dir albo --all.");
  }

  if (![90, -90, 180, 270].includes(args.angle)) {
    throw new Error("Dozwolone katy obrotu to: 90, -90, 180, 270.");
  }

  return args;
}

async function directoryExists(targetPath) {
  try {
    const stats = await fs.stat(targetPath);
    return stats.isDirectory();
  } catch {
    return false;
  }
}

async function getTargetDirectories(baseDir, dirName, useAll) {
  if (!(await directoryExists(baseDir))) {
    throw new Error(`Nie znaleziono katalogu bazowego: ${baseDir}`);
  }

  if (!useAll) {
    const targetDir = path.join(baseDir, dirName);
    if (!(await directoryExists(targetDir))) {
      throw new Error(`Nie znaleziono katalogu realizacji: ${targetDir}`);
    }

    return [targetDir];
  }

  const entries = await fs.readdir(baseDir, { withFileTypes: true });
  return entries
    .filter((entry) => entry.isDirectory())
    .map((entry) => path.join(baseDir, entry.name))
    .sort((a, b) => a.localeCompare(b, "pl"));
}

async function getImageFiles(dirPath) {
  const entries = await fs.readdir(dirPath, { withFileTypes: true });

  return entries
    .filter((entry) => entry.isFile() && IMAGE_EXTENSIONS.has(path.extname(entry.name).toLowerCase()))
    .map((entry) => path.join(dirPath, entry.name))
    .sort((a, b) => a.localeCompare(b, "pl"));
}

async function rotateImage(filePath, angle, dryRun) {
  if (dryRun) {
    return;
  }

  const image = sharp(filePath, { animated: true });
  const metadata = await image.metadata();
  const pipeline = image.rotate(angle);
  let outputBuffer;

  if (metadata.format === "jpeg") {
    outputBuffer = await pipeline.jpeg({ mozjpeg: true }).toBuffer();
    await fs.writeFile(filePath, outputBuffer);
    return;
  }

  if (metadata.format === "png") {
    outputBuffer = await pipeline.png().toBuffer();
    await fs.writeFile(filePath, outputBuffer);
    return;
  }

  if (metadata.format === "webp") {
    outputBuffer = await pipeline.webp({ quality: 100 }).toBuffer();
    await fs.writeFile(filePath, outputBuffer);
    return;
  }

  if (metadata.format === "avif") {
    outputBuffer = await pipeline.avif({ quality: 100 }).toBuffer();
    await fs.writeFile(filePath, outputBuffer);
    return;
  }

  if (metadata.format === "tiff") {
    outputBuffer = await pipeline.tiff().toBuffer();
    await fs.writeFile(filePath, outputBuffer);
    return;
  }

  outputBuffer = await pipeline.toBuffer();
  await fs.writeFile(filePath, outputBuffer);
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  const directories = await getTargetDirectories(args.baseDir, args.dir, args.all);

  let rotatedFiles = 0;

  for (const dirPath of directories) {
    const files = await getImageFiles(dirPath);

    if (files.length === 0) {
      console.log(`Pomijam pusty katalog: ${path.basename(dirPath)}`);
      continue;
    }

    console.log(`\n${args.dryRun ? "[dry-run] " : ""}Katalog: ${path.basename(dirPath)}`);

    for (const filePath of files) {
      await rotateImage(filePath, args.angle, args.dryRun);
      rotatedFiles += 1;
      console.log(`  ${args.dryRun ? "do obrotu" : "obrocono"}: ${path.basename(filePath)}`);
    }
  }

  console.log(`\nZakonczono. ${args.dryRun ? "Do obrotu" : "Obrocono"} plikow: ${rotatedFiles}`);
}

main().catch((error) => {
  console.error(`Blad: ${error.message}`);
  process.exit(1);
});
