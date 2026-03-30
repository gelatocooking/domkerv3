#!/usr/bin/env node

const fs = require("node:fs/promises");
const path = require("node:path");

const IMAGE_EXTENSIONS = new Set([".jpg", ".jpeg", ".png", ".webp", ".avif", ".tif", ".tiff"]);
const BASE_DIR = path.join(process.cwd(), "public", "realizacje", "realizacje");
const AUDIT_DIR = path.join(process.cwd(), "audit");
const OUTPUT_HTML = path.join(AUDIT_DIR, "rotation-review.html");
const OUTPUT_JSON = path.join(AUDIT_DIR, "rotation-review-data.json");

async function getDirectories(rootDir) {
  const entries = await fs.readdir(rootDir, { withFileTypes: true });
  return entries
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
    .sort((a, b) => a.localeCompare(b, "pl"));
}

async function getImagesForDirectory(rootDir, dirName) {
  const dirPath = path.join(rootDir, dirName);
  const entries = await fs.readdir(dirPath, { withFileTypes: true });

  return entries
    .filter((entry) => entry.isFile() && IMAGE_EXTENSIONS.has(path.extname(entry.name).toLowerCase()))
    .map((entry) => ({
      directory: dirName,
      fileName: entry.name,
      relativePath: path.posix.join("public", "realizacje", "realizacje", dirName, entry.name),
    }))
    .sort((a, b) => a.fileName.localeCompare(b.fileName, "pl"));
}

function buildHtml(items) {
  const payload = JSON.stringify(items).replace(/</g, "\\u003c");

  return `<!doctype html>
<html lang="pl">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Rotation Review</title>
  <style>
    :root {
      --bg: #f2efe8;
      --panel: rgba(255,255,255,0.82);
      --line: rgba(21, 28, 24, 0.12);
      --text: #151c18;
      --muted: #5f6c64;
      --accent: #136f63;
      --accent-2: #d95d39;
      --shadow: 0 18px 40px rgba(21, 28, 24, 0.12);
    }

    * { box-sizing: border-box; }
    body {
      margin: 0;
      font-family: Georgia, "Times New Roman", serif;
      color: var(--text);
      background:
        radial-gradient(circle at top left, rgba(217, 93, 57, 0.12), transparent 28%),
        radial-gradient(circle at top right, rgba(19, 111, 99, 0.16), transparent 24%),
        linear-gradient(180deg, #f7f2e7 0%, var(--bg) 100%);
    }

    .shell {
      width: min(1500px, calc(100vw - 32px));
      margin: 24px auto 48px;
    }

    .toolbar {
      position: sticky;
      top: 12px;
      z-index: 20;
      display: grid;
      gap: 12px;
      padding: 18px;
      border: 1px solid var(--line);
      border-radius: 22px;
      background: var(--panel);
      backdrop-filter: blur(14px);
      box-shadow: var(--shadow);
    }

    .toolbarRow {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      align-items: center;
      justify-content: space-between;
    }

    .toolbarGroup {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      align-items: center;
    }

    h1 {
      margin: 0;
      font-size: clamp(28px, 4vw, 46px);
      line-height: 1;
    }

    .hint {
      color: var(--muted);
      font-size: 14px;
    }

    select, button, textarea {
      font: inherit;
    }

    select, button {
      border-radius: 999px;
      border: 1px solid var(--line);
      padding: 10px 14px;
      background: white;
      color: var(--text);
    }

    button {
      cursor: pointer;
    }

    button.primary {
      background: var(--accent);
      border-color: var(--accent);
      color: white;
    }

    button.warn {
      background: var(--accent-2);
      border-color: var(--accent-2);
      color: white;
    }

    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
      gap: 18px;
      margin-top: 18px;
    }

    .card {
      overflow: hidden;
      border: 1px solid var(--line);
      border-radius: 22px;
      background: rgba(255,255,255,0.84);
      box-shadow: var(--shadow);
    }

    .frame {
      display: grid;
      place-items: center;
      min-height: 280px;
      padding: 18px;
      background:
        linear-gradient(135deg, rgba(19, 111, 99, 0.08), rgba(217, 93, 57, 0.08)),
        repeating-linear-gradient(45deg, rgba(21, 28, 24, 0.035), rgba(21, 28, 24, 0.035) 8px, transparent 8px, transparent 16px);
    }

    .frame img {
      max-width: 100%;
      max-height: 320px;
      border-radius: 14px;
      box-shadow: 0 10px 30px rgba(21, 28, 24, 0.18);
      transform: rotate(var(--rotation, 0deg));
      transition: transform 180ms ease;
      background: white;
    }

    .cardBody {
      padding: 14px;
      display: grid;
      gap: 10px;
    }

    .meta {
      display: grid;
      gap: 4px;
    }

    .dir {
      font-size: 12px;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      color: var(--muted);
    }

    .file {
      font-size: 14px;
      word-break: break-word;
    }

    .actions {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 8px;
    }

    .actions button.active {
      background: var(--accent);
      border-color: var(--accent);
      color: white;
    }

    .footerPanel {
      margin-top: 18px;
      padding: 18px;
      border: 1px solid var(--line);
      border-radius: 22px;
      background: rgba(255,255,255,0.84);
      box-shadow: var(--shadow);
      display: grid;
      gap: 12px;
    }

    textarea {
      width: 100%;
      min-height: 180px;
      resize: vertical;
      border-radius: 18px;
      border: 1px solid var(--line);
      padding: 14px;
      background: #fffdfa;
    }

    .summary {
      font-size: 14px;
      color: var(--muted);
    }

    .hidden {
      display: none;
    }
  </style>
</head>
<body>
  <div class="shell">
    <div class="toolbar">
      <div class="toolbarRow">
        <div>
          <h1>Review obrotu zdjęć</h1>
          <div class="hint">Zaznacz tylko błędnie obrócone zdjęcia. Zmiany zapisują się lokalnie w przeglądarce.</div>
        </div>
        <div class="toolbarGroup">
          <button id="clearAll" type="button">Wyczyść zaznaczenia</button>
          <button id="downloadJson" type="button">Pobierz JSON</button>
          <button id="copyJson" class="primary" type="button">Kopiuj JSON</button>
        </div>
      </div>
      <div class="toolbarRow">
        <div class="toolbarGroup">
          <label for="dirFilter">Katalog</label>
          <select id="dirFilter"></select>
          <label for="changedOnly">
            <input id="changedOnly" type="checkbox" />
            tylko oznaczone
          </label>
        </div>
        <div class="summary" id="summary"></div>
      </div>
    </div>

    <div class="grid" id="grid"></div>

    <div class="footerPanel">
      <div>Wynik do zapisania jako <code>audit/rotation-decisions.json</code></div>
      <textarea id="jsonOutput" spellcheck="false"></textarea>
    </div>
  </div>

  <script>
    const items = ${payload};
    const STORAGE_KEY = "rotation-review-decisions-v1";
    const rotations = ["0", "-90", "90", "180"];
    const rotationLabels = {
      "0": "OK",
      "-90": "90° w lewo",
      "90": "90° w prawo",
      "180": "180°"
    };

    const state = {
      filter: "all",
      changedOnly: false,
      decisions: loadDecisions()
    };

    const grid = document.getElementById("grid");
    const dirFilter = document.getElementById("dirFilter");
    const changedOnly = document.getElementById("changedOnly");
    const jsonOutput = document.getElementById("jsonOutput");
    const summary = document.getElementById("summary");

    function loadDecisions() {
      try {
        return JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
      } catch {
        return {};
      }
    }

    function saveDecisions() {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state.decisions));
    }

    function getKey(item) {
      return item.relativePath;
    }

    function getExportPayload() {
      const entries = Object.entries(state.decisions)
        .filter(([, angle]) => String(angle) !== "0")
        .map(([relativePath, angle]) => ({ relativePath, angle: Number(angle) }))
        .sort((a, b) => a.relativePath.localeCompare(b.relativePath, "pl"));

      return {
        generatedAt: new Date().toISOString(),
        decisions: entries
      };
    }

    function refreshExport() {
      const payload = getExportPayload();
      jsonOutput.value = JSON.stringify(payload, null, 2);
      summary.textContent = "Oznaczone zdjęcia: " + payload.decisions.length + " / " + items.length;
      saveDecisions();
    }

    function createFilterOptions() {
      const dirs = ["all", ...new Set(items.map((item) => item.directory))];
      dirFilter.innerHTML = "";

      for (const dir of dirs) {
        const option = document.createElement("option");
        option.value = dir;
        option.textContent = dir === "all" ? "Wszystkie" : dir;
        dirFilter.appendChild(option);
      }
    }

    function render() {
      grid.innerHTML = "";

      const filtered = items.filter((item) => {
        const key = getKey(item);
        const hasDecision = state.decisions[key] && String(state.decisions[key]) !== "0";

        if (state.filter !== "all" && item.directory !== state.filter) {
          return false;
        }

        if (state.changedOnly && !hasDecision) {
          return false;
        }

        return true;
      });

      for (const item of filtered) {
        const key = getKey(item);
        const current = String(state.decisions[key] ?? "0");
        const card = document.createElement("article");
        card.className = "card";

        const actions = rotations.map((rotation) => {
          const activeClass = current === rotation ? "active" : "";
          return '<button type="button" class="' + activeClass + '" data-key="' + key + '" data-rotation="' + rotation + '">' + rotationLabels[rotation] + "</button>";
        }).join("");

        card.innerHTML = [
          '<div class="frame"><img loading="lazy" src="../' + item.relativePath.replace(/"/g, "&quot;") + '" alt="' + item.fileName.replace(/"/g, "&quot;") + '" style="--rotation:' + current + 'deg" /></div>',
          '<div class="cardBody">',
          '<div class="meta">',
          '<div class="dir">' + item.directory + "</div>",
          '<div class="file">' + item.fileName + "</div>",
          "</div>",
          '<div class="actions">' + actions + "</div>",
          "</div>"
        ].join("");

        grid.appendChild(card);
      }

      refreshExport();
    }

    grid.addEventListener("click", (event) => {
      const button = event.target.closest("button[data-key]");
      if (!button) {
        return;
      }

      const key = button.dataset.key;
      const rotation = button.dataset.rotation;

      if (rotation === "0") {
        delete state.decisions[key];
      } else {
        state.decisions[key] = Number(rotation);
      }

      render();
    });

    dirFilter.addEventListener("change", () => {
      state.filter = dirFilter.value;
      render();
    });

    changedOnly.addEventListener("change", () => {
      state.changedOnly = changedOnly.checked;
      render();
    });

    document.getElementById("clearAll").addEventListener("click", () => {
      state.decisions = {};
      render();
    });

    document.getElementById("copyJson").addEventListener("click", async () => {
      await navigator.clipboard.writeText(jsonOutput.value);
    });

    document.getElementById("downloadJson").addEventListener("click", () => {
      const blob = new Blob([jsonOutput.value], { type: "application/json" });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "rotation-decisions.json";
      link.click();
      URL.revokeObjectURL(url);
    });

    createFilterOptions();
    render();
  </script>
</body>
</html>`;
}

async function main() {
  const directories = await getDirectories(BASE_DIR);
  const items = [];

  for (const dirName of directories) {
    const dirItems = await getImagesForDirectory(BASE_DIR, dirName);
    items.push(...dirItems);
  }

  await fs.mkdir(AUDIT_DIR, { recursive: true });
  await fs.writeFile(OUTPUT_JSON, JSON.stringify(items, null, 2));
  await fs.writeFile(OUTPUT_HTML, buildHtml(items));

  console.log(`Wygenerowano: ${OUTPUT_HTML}`);
  console.log(`Dane: ${OUTPUT_JSON}`);
  console.log(`Liczba zdjęć: ${items.length}`);
}

main().catch((error) => {
  console.error(`Blad: ${error.message}`);
  process.exit(1);
});
