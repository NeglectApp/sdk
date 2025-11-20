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
  constructor(options: NeglectClientOptions) {
    const { apiKey, baseUrl = "https://api.neglect.trade" } = options;

    if (!apiKey) {
      throw new Error("Neglect SDK: apiKey is required");
    }

    /**
     * Configure OpenAPI runtime globals
     * All generated services automatically use these.
     */
    OpenAPI.BASE = baseUrl;
    OpenAPI.TOKEN = apiKey;
    OpenAPI.HEADERS = {
      Authorization: `Bearer ${apiKey}`,
    };
  }

  /** 
   * Expose static generated service classes directly 
   * (this is how openapi-typescript-codegen expects usage)
   */
  public tokens = TokenDataService;
  public wallets = WalletDataService;
  public pairs = PairDataService;
}
