// scripts/generate-shortcuts.js
//
// Auto-scans generated OpenAPI services and generates typed shortcut
// methods directly on NeglectClient.
//
// This runs AFTER openapi-typescript-codegen finishes generating /src/generated/*

const fs = require("fs");
const path = require("path");

const GENERATED_SERVICES_DIR = path.join(__dirname, "..", "src", "generated", "services");
const CLIENT_PATH = path.join(__dirname, "..", "src", "client.ts");
const METHOD_BLOCKLIST = {
  // Add service -> Set<methodName> entries to prevent shortcut generation.
  DefaultService: new Set(["getMcpConfig"]),
};

function pascalToCamel(name) {
  return name.charAt(0).toLowerCase() + name.slice(1);
}

function generateShortcuts() {
  const files = fs.readdirSync(GENERATED_SERVICES_DIR).filter(f => f.endsWith("Service.ts"));

  const imports = [];
  const shortcutMethods = [];

  for (const file of files) {
    const serviceName = file.replace(".ts", ""); // ex: TokenDataService
    const servicePath = `./generated/services/${serviceName}`;
    const blockedMethods = METHOD_BLOCKLIST[serviceName];

    imports.push(`import { ${serviceName} } from "${servicePath}";`);

    const serviceContent = fs.readFileSync(path.join(GENERATED_SERVICES_DIR, file), "utf8");

    // find static method names
    const regex = /static\s+([a-zA-Z0-9_]+)\s*\(/g;
    let match;
    while ((match = regex.exec(serviceContent)) !== null) {
      const methodName = match[1];

      if (blockedMethods?.has(methodName)) continue;

      shortcutMethods.push(`
  public ${methodName} = (...args: Parameters<typeof ${serviceName}.${methodName}>) =>
    ${serviceName}.${methodName}(...args);`);
    }
  }

  const output = `
// AUTO-GENERATED CLIENT — DO NOT EDIT MANUALLY
// This file is updated by scripts/generate-shortcuts.js

import { OpenAPI } from "./generated/core/OpenAPI";
${imports.join("\n")}

export interface NeglectClientOptions {
  apiKey: string;
  baseUrl?: string;
}

export class NeglectClient {

  constructor(options: NeglectClientOptions) {
    const { apiKey, baseUrl = "https://api.neglect.trade" } = options;

    if (!apiKey) throw new Error("Neglect SDK: apiKey is required");

    OpenAPI.BASE = baseUrl;
    OpenAPI.TOKEN = apiKey;
    OpenAPI.HEADERS = {
      Authorization: \`Bearer \${apiKey}\`,
    };
  }

  // 🔥 Auto-generated shortcuts:
${shortcutMethods.join("\n")}
}
`;

  fs.writeFileSync(CLIENT_PATH, output, "utf8");

  console.log("✨ Successfully generated NeglectClient shortcuts!");
}

generateShortcuts();
