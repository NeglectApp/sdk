/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class PairDataService {
    /**
     * Get Pair Audit
     * Returns audit data for a single liquidity pair and its underlying token. Includes token-level distribution (developer, top holders, insiders, bundlers) and pair-level ownership breakdown (snipers, LP burn).
     * @param pairAddress The pair address (e.g., liquidity pool address)
     * @returns any Pair audit data returned successfully
     * @throws ApiError
     */
    public static getPairAudit(
        pairAddress: string,
    ): CancelablePromise<{
        data: {
            /**
             * Total token supply
             */
            tokenSupply: number;
            developer: {
                tokenSupply?: number;
                percent?: number;
                /**
                 * Developer wallet (pair.dev_wallet takes priority over token.dev_wallet)
                 */
                walletAddress?: string | null;
            };
            top10Holders: {
                tokenSupply?: number;
                percent?: number;
            };
            insiders: {
                tokenSupply?: number;
                percent?: number;
            };
            bundlers: {
                tokenSupply?: number;
                percent?: number;
            };
            snipers: {
                tokenSupply?: number;
                percent?: number;
            };
            lpBurn: {
                tokenSupply?: number;
                percent?: number;
            };
            /**
             * Whether token metadata/audit row was present
             */
            tokenFound: boolean;
        };
        meta: {
            pairAddress: string;
            tokenAddress: string;
        };
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/pairs/{pairAddress}/audit',
            path: {
                'pairAddress': pairAddress,
            },
            errors: {
                400: `Missing or invalid pairAddress`,
                404: `Pair not found`,
                500: `Internal server error`,
            },
        });
    }
    /**
     * Get Pair Audit (Multiple)
     * Returns audit data for multiple liquidity pairs in a single batch call. Accepts up to 10 pair addresses via the `addresses` query parameter. Each entry includes pair-level and token-level audit details including developer, top holders, insiders, bundlers, snipers, and LP burn distribution.
     *
     * **Cost:** 10 credits per request.
     * @param addresses Comma-separated list of up to 10 pair addresses
     * @returns any Batch pair audit data returned successfully
     * @throws ApiError
     */
    public static getPairAuditMultiple(
        addresses: string,
    ): CancelablePromise<Array<{
        /**
         * Pair address
         */
        pairAddress: string;
        /**
         * Token mint address associated with the pair
         */
        tokenAddress: string;
        /**
         * Total token supply from the token record
         */
        tokenSupply?: number;
        developer?: {
            tokenSupply?: number;
            percent?: number;
            /**
             * Developer wallet (pair.dev_wallet takes priority over token.dev_wallet)
             */
            walletAddress?: string | null;
        };
        top10Holders?: {
            tokenSupply?: number;
            percent?: number;
        };
        insiders?: {
            tokenSupply?: number;
            percent?: number;
        };
        bundlers?: {
            tokenSupply?: number;
            percent?: number;
        };
        snipers?: {
            tokenSupply?: number;
            percent?: number;
        };
        lpBurn?: {
            tokenSupply?: number;
            percent?: number;
        };
    }>> {
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
