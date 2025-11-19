// src/modules/tokens.ts

import { NeglectClient } from "../client";

export interface TokenPriceResponse {
  price: number;
  updatedAt: string;
}

export class TokensModule {
  private client: NeglectClient;

  constructor(client: NeglectClient) {
    this.client = client;
  }

  price(address: string): Promise<TokenPriceResponse> {
    return this.client.request(`/tokens/${address}/price`);
  }

  // Future endpoints:

  // metadata(address: string) {
  //   return this.client.request(`/tokens/${address}/metadata`);
  // }

  // live() {
  //   return this.client.request(`/tokens/live`);
  // }

  // holders(address: string) {
  //   return this.client.request(`/tokens/${address}/holders`);
  // }

  // trades(address: string) {
  //   return this.client.request(`/tokens/${address}/trades`);
  // }
}
