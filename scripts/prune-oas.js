// scripts/prune-oas.js
// Removes disallowed routes from the downloaded OpenAPI spec before codegen.

const fs = require("fs");
const path = require("path");

const OAS_PATH = path.join(__dirname, "..", "routes.oas.json");
const REMOVED_PATHS = ["/.well-known/mcp-config"];

function pruneOas() {
  if (!fs.existsSync(OAS_PATH)) {
    console.warn(`[prune-oas] No routes.oas.json found at ${OAS_PATH}`);
    return;
  }

  const raw = fs.readFileSync(OAS_PATH, "utf8");
  let oas;
  try {
    oas = JSON.parse(raw);
  } catch (err) {
    console.error("[prune-oas] Failed to parse routes.oas.json:", err);
    process.exit(1);
  }

  let pruned = false;
  for (const route of REMOVED_PATHS) {
    if (oas.paths?.[route]) {
      delete oas.paths[route];
      pruned = true;
      console.log(`[prune-oas] Removed blocked path: ${route}`);
    }
  }

  if (pruned) {
    fs.writeFileSync(OAS_PATH, JSON.stringify(oas, null, 2));
  } else {
    console.log("[prune-oas] No blocked paths found; no changes made.");
  }
}

pruneOas();
