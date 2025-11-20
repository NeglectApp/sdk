// src/client.ts
import {
  TokenDataService,
  WalletDataService,
  PairDataService,
  OpenAPI,
} from "./generated";

export interface NeglectClientOptions {
  apiKey: string;
  baseUrl?: string;
}

export class NeglectClient {
  public tokens = TokenDataService;
  public wallets = WalletDataService;
  public pairs = PairDataService;

  constructor(options: NeglectClientOptions) {
    const { apiKey, baseUrl = "https://api.neglect.trade" } = options;
    if (!apiKey) throw new Error("Neglect SDK: apiKey is required");

    OpenAPI.BASE = baseUrl;
    OpenAPI.TOKEN = apiKey;
    OpenAPI.HEADERS = { Authorization: `Bearer ${apiKey}` };

    return new Proxy(this, {
      get: (target, prop: string) => {
        // If property exists (tokens, wallets, etc.)
        if (prop in target) return (target as any)[prop];

        // Look into generated services for method match:
        for (const svc of [TokenDataService, WalletDataService, PairDataService]) {
          if (typeof (svc as any)[prop] === "function") {
            return (svc as any)[prop];
          }
        }

        return undefined;
      },
    });
  }
}
