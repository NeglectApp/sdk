// src/client.ts

import { TokensModule } from "./modules/tokens";

export interface NeglectClientOptions {
  apiKey: string;
  baseUrl?: string;
}

export class NeglectClient {
  private apiKey: string;
  private baseUrl: string;

  public tokens: TokensModule;

  constructor(options: NeglectClientOptions) {
    const { apiKey, baseUrl = "https://api.neglect.trade" } = options;

    if (!apiKey) {
      throw new Error("Neglect SDK: apiKey is required");
    }

    this.apiKey = apiKey;
    this.baseUrl = baseUrl;

    // attach modules
    this.tokens = new TokensModule(this);
  }

  async request<T = any>(
    path: string,
    opts: {
      method?: string;
      body?: any;
      headers?: Record<string, string>;
    } = {}
  ): Promise<T> {
    const url = `${this.baseUrl}${path}`;

    const res = await fetch(url, {
      method: opts.method ?? "GET",
      headers: {
        "Authorization": `Bearer ${this.apiKey}`,
        "Content-Type": "application/json",
        ...(opts.headers ?? {})
      },
      body: opts.body ? JSON.stringify(opts.body) : undefined
    });

    if (!res.ok) {
      let text: string;

      try {
        text = await res.text();
      } catch {
        text = "Unknown error";
      }

      throw new Error(`Neglect SDK error (${res.status}): ${text}`);
    }

    return res.json() as Promise<T>;
  }
}
