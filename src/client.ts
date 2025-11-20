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
  private apiKey: string;
  private baseUrl: string;

  // Public modules
  public tokens: TokenDataService;
  public wallets: WalletDataService;
  public pairs: PairDataService;

  constructor(options: NeglectClientOptions) {
    const { apiKey, baseUrl = "https://api.neglect.trade" } = options;

    if (!apiKey) {
      throw new Error("Neglect SDK: apiKey is required");
    }

    this.apiKey = apiKey;
    this.baseUrl = baseUrl;

    /**
     * Configure global OpenAPI runtime
     * This ensures all generated service classes automatically:
     *   - Use your base URL
     *   - Send the Bearer token
     */
    OpenAPI.BASE = this.baseUrl;
    OpenAPI.TOKEN = this.apiKey;
    OpenAPI.HEADERS = {
      Authorization: `Bearer ${this.apiKey}`,
    };

    // Attach auto-generated OpenAPI services (no constructor args!)
    this.tokens = new TokenDataService();
    this.wallets = new WalletDataService();
    this.pairs = new PairDataService();
  }
}
