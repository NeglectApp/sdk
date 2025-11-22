// scripts/strip-blocked-methods.js
// Removes blocked methods from generated service files as a post-codegen safety net.

const fs = require("fs");
const path = require("path");

const GENERATED_SERVICES_DIR = path.join(__dirname, "..", "src", "generated", "services");

const BLOCKED = {
  DefaultService: ["getMcpConfig"],
};

function stripMethod(servicePath, methodName) {
  const methodPattern = new RegExp(
    `\\n\\s+public\\s+static\\s+${methodName}\\s*\\([^)]*\\)\\s*:[^{]+{[\\s\\S]*?\\n\\s+}\\n`,
    "m"
  );

  const content = fs.readFileSync(servicePath, "utf8");
  if (!methodPattern.test(content)) return false;

  const next = content.replace(methodPattern, "\n");
  fs.writeFileSync(servicePath, next, "utf8");
  return true;
}

function stripBlockedMethods() {
  let strippedAny = false;

  for (const [serviceName, methods] of Object.entries(BLOCKED)) {
    const servicePath = path.join(GENERATED_SERVICES_DIR, `${serviceName}.ts`);
    if (!fs.existsSync(servicePath)) continue;

    for (const method of methods) {
      const stripped = stripMethod(servicePath, method);
      if (stripped) {
        strippedAny = true;
        console.log(`[strip-blocked-methods] Removed ${serviceName}.${method}`);
      }
    }
  }

  if (!strippedAny) {
    console.log("[strip-blocked-methods] No blocked methods found; no changes made.");
  }
}

stripBlockedMethods();
