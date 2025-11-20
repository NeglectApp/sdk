/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type TokenAuditBatchResponse = Array<{
    mint?: string;
    token_supply?: number;
    dev_supply?: {
        tokens?: number;
        percent?: number;
    };
    top_10_supply?: {
        tokens?: number;
        percent?: number;
    };
    bundlers_supply?: number;
    insiders_supply?: number;
    snipers_supply?: number;
    lp_burn_supply?: number;
    dev_wallet?: string | null;
}>;
