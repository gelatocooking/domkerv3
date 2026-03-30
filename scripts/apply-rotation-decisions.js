#!/usr/bin/env node

const fs = require("node:fs/promises");
const path = require("node:path");
const sharp = require("sharp");

const DEFAULT_FILE = path.join(process.cwd(), "audit", "rotation-decisions.json");
const BASE_DIR = process.cwd();

function parseArgs(argv) {
  const args = {
    file: DEFAULT_FILE,
    dryRun: false,
  };

  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i];

    if (arg === "--dry-run") {
      args.dryRun = true;
      continue;
    }

    if (arg === "--file") {
      args.file = path.resolve(argv[i + 1] ?? "");
      i += 1;
      continue;
    }

    if (arg === "--help" || arg === "-h") {
      console.log(`
Uzycie:
  node scripts/apply-rotation-decisions.js
  node scripts/apply-rotation-decisions.js --file ".\\\\audit\\\\rotation-decisions.json"
  node scripts/apply-rotation-decisions.js --dry-run
`);
      process.exit(0);
    }

    throw new Error(\`Nieznana opcja: \${arg}\`);
  }

  return args;
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
  } else if (metadata.format === "png") {
    outputBuffer = await pipeline.png().toBuffer();
  } else if (metadata.format === "webp") {
    outputBuffer = await pipeline.webp({ quality: 100 }).toBuffer();
  } else if (metadata.format === "avif") {
    outputBuffer = await pipeline.avif({ quality: 100 }).toBuffer();
  } else if (metadata.format === "tiff") {
    outputBuffer = await pipeline.tiff().toBuffer();
  } else {
    outputBuffer = await pipeline.toBuffer();
  }

  await fs.writeFile(filePath, outputBuffer);
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  const raw = await fs.readFile(args.file, "utf8");
  const parsed = JSON.parse(raw);
  const decisions = Array.isArray(parsed) ? parsed : parsed.decisions;

  if (!Array.isArray(decisions)) {
    throw new Error("Plik decyzji musi zawierać tablicę lub pole decisions.");
  }

  let changed = 0;

  for (const decision of decisions) {
    const relativePath = decision.relativePath;
    const angle = Number(decision.angle);

    if (!relativePath || ![90, -90, 180, 270].includes(angle)) {
      throw new Error("Nieprawidlowy wpis w pliku decyzji.");
    }

    const absolutePath = path.resolve(BASE_DIR, relativePath);

    console.log(\`\${args.dryRun ? "[dry-run] " : ""}\${angle} -> \${relativePath}\`);
    await rotateImage(absolutePath, angle, args.dryRun);
    changed += 1;
  }

  console.log(\`Zakonczono. \${args.dryRun ? "Do zmiany" : "Zmieniono"} plikow: \${changed}\`);
}

main().catch((error) => {
  console.error(\`Blad: \${error.message}\`);
  process.exit(1);
});
