/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PairAuditBatchResponse } from '../models/PairAuditBatchResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class PairDataService {
    /**
     * Get Pair Audit
     * Returns audit data for a liquidity pair. Includes token-level developer and top 10 holder breakdowns (tokens + percent) and pair-level bundler, insider, sniper, and LP burn percentages.
     * @param pairAddress The pair's address (e.g., liquidity pool or market address)
     * @returns any Pair audit data returned successfully
     * @throws ApiError
     */
    public static getPairAudit(
        pairAddress: string,
    ): CancelablePromise<{
        /**
         * Total token supply
         */
        token_supply?: number;
        /**
         * Developer-owned supply (tokens + percent)
         */
        dev_supply?: {
            tokens?: number;
            percent?: number;
        };
        /**
         * Top 10 holder-owned supply (tokens + percent)
         */
        top_10_supply?: {
            tokens?: number;
            percent?: number;
        };
        /**
         * Bundler-held supply percentage
         */
        bundlers_supply?: number;
        /**
         * Insider-held supply percentage
         */
        insiders_supply?: number;
        /**
         * Sniper-held supply percentage
         */
        snipers_supply?: number;
        /**
         * LP burn supply percentage
         */
        lp_burn_supply?: number;
        /**
         * Developer wallet address (from the token record only)
         */
        dev_wallet?: string | null;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/pairs/{pairAddress}/audit',
            path: {
                'pairAddress': pairAddress,
            },
        });
    }
    /**
     * Get Pair Audit (Multiple)
     * Returns audit data for multiple liquidity pairs in a single batch call. Accepts up to 10 pair addresses via a comma-separated `addresses` query parameter. Each result includes token-level supply distributions and pair-level ownership breakdowns — including developer, top holders, bundlers, insiders, snipers, and LP burn percentages.
     *
     * **Cost:** 10 credits per request.
     * @param addresses Comma-separated list of up to 10 pair addresses
     * @returns PairAuditBatchResponse Batch pair audit data returned successfully
     * @throws ApiError
     */
    public static getPairAuditMultiple(
        addresses: string,
    ): CancelablePromise<PairAuditBatchResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/pairs/audit',
            query: {
                'addresses': addresses,
            },
            errors: {
                400: `Missing or invalid query parameter`,
                500: `Internal server error`,
            },
        });
    }
}
