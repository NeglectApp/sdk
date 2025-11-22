
// AUTO-GENERATED CLIENT — DO NOT EDIT MANUALLY
// This file is updated by scripts/generate-shortcuts.js

import { OpenAPI } from "./generated/core/OpenAPI";
import { DefaultService } from "./generated/services/DefaultService";
import { McpServerService } from "./generated/services/McpServerService";
import { PairDataService } from "./generated/services/PairDataService";
import { TokenDataService } from "./generated/services/TokenDataService";
import { WalletDataService } from "./generated/services/WalletDataService";

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
      Authorization: `Bearer ${apiKey}`,
    };
  }

  // 🔥 Auto-generated shortcuts:

  public getApiHealth = (...args: Parameters<typeof DefaultService.getApiHealth>) =>
    DefaultService.getApiHealth(...args);

  public mcpServer = (...args: Parameters<typeof McpServerService.mcpServer>) =>
    McpServerService.mcpServer(...args);

  public getPairAudit = (...args: Parameters<typeof PairDataService.getPairAudit>) =>
    PairDataService.getPairAudit(...args);

  public getPairAuditMultiple = (...args: Parameters<typeof PairDataService.getPairAuditMultiple>) =>
    PairDataService.getPairAuditMultiple(...args);

  public getTokenMetadata = (...args: Parameters<typeof TokenDataService.getTokenMetadata>) =>
    TokenDataService.getTokenMetadata(...args);

  public getTokenMarketdata = (...args: Parameters<typeof TokenDataService.getTokenMarketdata>) =>
    TokenDataService.getTokenMarketdata(...args);

  public getTokenHolders = (...args: Parameters<typeof TokenDataService.getTokenHolders>) =>
    TokenDataService.getTokenHolders(...args);

  public getTrendingTokens = (...args: Parameters<typeof TokenDataService.getTrendingTokens>) =>
    TokenDataService.getTrendingTokens(...args);

  public searchTokens = (...args: Parameters<typeof TokenDataService.searchTokens>) =>
    TokenDataService.searchTokens(...args);

  public getLatestGraduatedTokens = (...args: Parameters<typeof TokenDataService.getLatestGraduatedTokens>) =>
    TokenDataService.getLatestGraduatedTokens(...args);

  public getTokenAth = (...args: Parameters<typeof TokenDataService.getTokenAth>) =>
    TokenDataService.getTokenAth(...args);

  public getTokenHistory = (...args: Parameters<typeof TokenDataService.getTokenHistory>) =>
    TokenDataService.getTokenHistory(...args);

  public getTokenByPool = (...args: Parameters<typeof TokenDataService.getTokenByPool>) =>
    TokenDataService.getTokenByPool(...args);

  public getTokenPerformance = (...args: Parameters<typeof TokenDataService.getTokenPerformance>) =>
    TokenDataService.getTokenPerformance(...args);

  public getTokenPrice = (...args: Parameters<typeof TokenDataService.getTokenPrice>) =>
    TokenDataService.getTokenPrice(...args);

  public getTokenHistoryRange = (...args: Parameters<typeof TokenDataService.getTokenHistoryRange>) =>
    TokenDataService.getTokenHistoryRange(...args);

  public getTokenAudit = (...args: Parameters<typeof TokenDataService.getTokenAudit>) =>
    TokenDataService.getTokenAudit(...args);

  public getTokenAuditMultiple = (...args: Parameters<typeof TokenDataService.getTokenAuditMultiple>) =>
    TokenDataService.getTokenAuditMultiple(...args);

  public getTokensByDeployer = (...args: Parameters<typeof WalletDataService.getTokensByDeployer>) =>
    WalletDataService.getTokensByDeployer(...args);

  public getWalletHoldings = (...args: Parameters<typeof WalletDataService.getWalletHoldings>) =>
    WalletDataService.getWalletHoldings(...args);

  public getWalletTokenPnl = (...args: Parameters<typeof WalletDataService.getWalletTokenPnl>) =>
    WalletDataService.getWalletTokenPnl(...args);
}
