/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TokenAuditBatchResponse } from '../models/TokenAuditBatchResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class TokenDataService {
    /**
     * Get Metadata for Token
     * Returns the metadata for a given token address stored in the database.
     * @param tokenAddress The token's address (e.g., a Solana address)
     * @returns any Token metadata returned successfully
     * @throws ApiError
     */
    public static getTokenMetadata(
        tokenAddress: string,
    ): CancelablePromise<{
        address: string;
        name?: string;
        symbol: string;
        description?: string;
        image?: string;
        website?: string;
        twitter?: string;
        telegram?: string;
        discord?: string;
        supply?: number;
        decimals?: number;
        devWallet?: string;
        createdAt?: string;
        graduatedAt?: string;
        bondingAddress?: string;
        marketAddress?: string;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/tokens/{tokenAddress}/metadata',
            path: {
                'tokenAddress': tokenAddress,
            },
            errors: {
                400: `Missing token address path parameter`,
                404: `Token not found`,
                500: `Unexpected server error`,
            },
        });
    }
    /**
     * Get Real-Time Market Data for a Token
     * Returns real-time metrics including price, market capitalization, FDV, liquidity, total and circulating supply, and current holder count. This endpoint does not use time windows and does not include trade statistics.
     * @param tokenAddress The token's mint address (e.g., a Solana SPL token address)
     * @returns any Real-time market data returned successfully
     * @throws ApiError
     */
    public static getTokenMarketdata(
        tokenAddress: string,
    ): CancelablePromise<{
        price?: number;
        marketCap?: number;
        fdv?: number;
        liquidity?: number;
        totalSupply?: number;
        remainingSupply?: number;
        holdersCount?: number;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/tokens/{tokenAddress}/market-data',
            path: {
                'tokenAddress': tokenAddress,
            },
            errors: {
                400: `Missing or invalid token address`,
                404: `Token or its trading pairs not found`,
                500: `Unexpected server error`,
            },
        });
    }
    /**
     * Get Token Holders
     * Returns ranked holder wallets, amounts, and percentage ownership for a given token address.
     * @param tokenAddress The token's mint address (e.g., Solana token address)
     * @param limit Optional limit on number of holders returned (default: 25, max: 100)
     * @returns any List of holders returned successfully
     * @throws ApiError
     */
    public static getTokenHolders(
        tokenAddress: string,
        limit: number = 25,
    ): CancelablePromise<Array<{
        /**
         * Rank of the holder by token amount (1 = top holder)
         */
        rank: number;
        /**
         * Public key of the holder wallet
         */
        walletAddress: string;
        /**
         * Token amount held by the wallet (UI units)
         */
        amount: number;
        /**
         * Percentage of total token supply owned by the wallet
         */
        percentageOwned: number;
    }>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/tokens/{tokenAddress}/holders',
            path: {
                'tokenAddress': tokenAddress,
            },
            query: {
                'limit': limit,
            },
            errors: {
                400: `Missing or invalid token address`,
                404: `Token or holders not found`,
                500: `Unexpected server error`,
            },
        });
    }
    /**
     * Get Trending Tokens
     * Returns a list of trending tokens ordered by transaction count for a given interval.
     * @param interval Time interval window for counting transactions (default: 5m)
     * @returns any List of trending tokens
     * @throws ApiError
     */
    public static getTrendingTokens(
        interval: '1m' | '5m' | '30m' | '1h' = '5m',
    ): CancelablePromise<Array<{
        address?: string;
        symbol?: string;
        txns?: number;
        mcap?: number;
        price?: number;
        holdersCount?: number;
    }>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/tokens/trending',
            query: {
                'interval': interval,
            },
            errors: {
                400: `Invalid interval specified`,
                500: `Unexpected server error`,
            },
        });
    }
    /**
     * Search Tokens
     * Performs a flexible search for tokens by name, symbol, or address, with optional filters, sorting, and symbol-only mode.
     * @param searchQuery
     * @param limit Number of results to return (1–25)
     * @param sortBy Field to sort results by
     * @param sortOrder Sort order direction
     * @param symbolOnly If true, only searches the symbol field
     * @returns any List of matching tokens
     * @throws ApiError
     */
    public static searchTokens(
        searchQuery?: string,
        limit: number = 10,
        sortBy: 'created' | 'name' | 'symbol' | 'mcap' = 'created',
        sortOrder: 'asc' | 'desc' = 'desc',
        symbolOnly: boolean = false,
    ): CancelablePromise<Array<{
        address: string;
        symbol: string;
        name: string;
        createdAt?: string;
        marketCap?: number;
    }>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/tokens/search',
            query: {
                'searchQuery': searchQuery,
                'limit': limit,
                'sortBy': sortBy,
                'sortOrder': sortOrder,
                'symbolOnly': symbolOnly,
            },
            errors: {
                400: `Invalid input (e.g., sortBy not allowed)`,
                500: `Unexpected server error`,
            },
        });
    }
    /**
     * Get Latest Graduated Tokens
     * Fetches the most recently graduated tokens, ordered by graduation time (descending).
     * @param limit Number of results to return (1–100). Defaults to 25.
     * @returns any List of graduated tokens
     * @throws ApiError
     */
    public static getLatestGraduatedTokens(
        limit: number = 25,
    ): CancelablePromise<Array<{
        tokenAddress: string;
        tokenName?: string | null;
        tokenSymbol?: string | null;
        createdAt?: string | null;
        graduatedAt: string;
    }>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/tokens/graduated',
            query: {
                'limit': limit,
            },
            errors: {
                500: `Unexpected server error`,
            },
        });
    }
    /**
     * Get Token ATH
     * Returns the all-time-high (ATH) market cap and the timestamp when it occurred, based on all historical trades for the token.
     * @param tokenAddress The token's mint address (Solana SPL token).
     * @returns any ATH data returned successfully
     * @throws ApiError
     */
    public static getTokenAth(
        tokenAddress: string,
    ): CancelablePromise<{
        /**
         * The highest market cap ever recorded for the token.
         */
        ath: number;
        /**
         * ISO timestamp of when the ATH occurred, or null if no valid ATH exists.
         */
        timestamp: string | null;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/tokens/{tokenAddress}/ath',
            path: {
                'tokenAddress': tokenAddress,
            },
            errors: {
                400: `Missing or invalid token address`,
                404: `No trades found for token, so ATH cannot be calculated`,
                500: `Unexpected server error`,
            },
        });
    }
    /**
     * Get Historical Token Price
     * Fetches historical price, market cap, or liquidity snapshots for a token across multiple time windows.
     * @param requestBody
     * @returns any Historical data returned successfully
     * @throws ApiError
     */
    public static getTokenHistory(
        requestBody: {
            /**
             * The token's address
             */
            token: string;
            /**
             * List of metrics to fetch (default: ["price"])
             */
            metrics?: Array<'price' | 'mcap' | 'liquidity'>;
        },
    ): CancelablePromise<Record<string, {
        current?: number | null;
        '1d'?: number | null;
        '3d'?: number | null;
        '5d'?: number | null;
        '7d'?: number | null;
        '14d'?: number | null;
        '30d'?: number | null;
    }>> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/tokens/{tokenAddress}/history',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Missing token or invalid metrics`,
                500: `Unexpected server error`,
            },
        });
    }
    /**
     * Get Metadata by Pool Address
     * Fetches token metadata for a given pool (market) address.
     * @param poolAddress The pool (market) address linked to the token
     * @returns any Token metadata for the given pool address
     * @throws ApiError
     */
    public static getTokenByPool(
        poolAddress: string,
    ): CancelablePromise<{
        address: string;
        name?: string;
        symbol: string;
        description?: string | null;
        image?: string | null;
        website?: string | null;
        twitter?: string | null;
        telegram?: string | null;
        discord?: string | null;
        supply?: string;
        decimals?: number;
        devWallet?: string | null;
        createdAt: string;
        graduatedAt?: string | null;
        marketAddress: string;
        bondingAddress: string;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/tokens/by-pool/{poolAddress}',
            path: {
                'poolAddress': poolAddress,
            },
            errors: {
                400: `Missing or invalid pool address`,
                404: `Token not found for the provided pool address`,
                500: `Unexpected server error`,
            },
        });
    }
    /**
     * Get Token Performance
     * Returns percentage performance change for selected metrics over multiple time windows compared to the current value.
     * @param requestBody
     * @returns any Performance data showing % change from current value across time windows.
     * @throws ApiError
     */
    public static getTokenPerformance(
        requestBody: {
            /**
             * Token address to fetch performance data for
             */
            token: string;
            /**
             * List of metrics to evaluate. Supported values: `price`, `mcap`, `liquidity`.
             */
            metrics?: Array<'price' | 'mcap' | 'liquidity'>;
        },
    ): CancelablePromise<Record<string, {
        /**
         * Change vs 1 day ago (%)
         */
        '1d'?: number | null;
        /**
         * Change vs 3 days ago (%)
         */
        '3d'?: number | null;
        /**
         * Change vs 5 days ago (%)
         */
        '5d'?: number | null;
        /**
         * Change vs 7 days ago (%)
         */
        '7d'?: number | null;
        /**
         * Change vs 14 days ago (%)
         */
        '14d'?: number | null;
        /**
         * Change vs 30 days ago (%)
         */
        '30d'?: number | null;
    }>> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/tokens/{tokenAddress}/performance',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Invalid or missing request body`,
                500: `Unexpected server error`,
            },
        });
    }
    /**
     * Get Token Price
     * Returns the latest price, market cap, and liquidity for a specific token address.
     * @param tokenAddress The token's contract address
     * @returns any Token pricing information
     * @throws ApiError
     */
    public static getTokenPrice(
        tokenAddress: string,
    ): CancelablePromise<{
        /**
         * Latest token price in SOL or USD depending on stored unit
         */
        price: number;
        /**
         * Token market capitalization
         */
        mcap: number;
        /**
         * Liquidity available for the token
         */
        liquidity: number;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/tokens/{tokenAddress}/price',
            path: {
                'tokenAddress': tokenAddress,
            },
            errors: {
                400: `Missing tokenAddress parameter`,
                404: `Token not found`,
                500: `Server error`,
            },
        });
    }
    /**
     * Get Token History Range
     * Returns the lowest and highest values of selected metrics (price, market cap, liquidity) within a specified time range for a token.
     * @param tokenAddress The token's contract address
     * @param requestBody
     * @returns any Range results for the token
     * @throws ApiError
     */
    public static getTokenHistoryRange(
        tokenAddress: string,
        requestBody: {
            /**
             * Unix timestamp (seconds) for range start
             */
            time_from: number;
            /**
             * Unix timestamp (seconds) for range end
             */
            time_to: number;
            /**
             * Which metrics to return (price, mcap, liquidity)
             */
            metrics?: Array<'price' | 'mcap' | 'liquidity'>;
            /**
             * Behavior when requested range falls outside token lifespan
             */
            mode?: 'clamp' | 'error';
        },
    ): CancelablePromise<{
        token?: string;
        requested_range?: {
            from?: number;
            to?: number;
        };
        available_range?: {
            from?: number;
            to?: number;
        };
        effective_range?: {
            from?: number;
            to?: number;
        } | null;
        clamped?: boolean;
        warning?: string;
        price?: {
            lowest?: {
                price?: number;
                time?: number;
            } | null;
            highest?: {
                price?: number;
                time?: number;
            } | null;
        };
        mcap?: Record<string, any>;
        liquidity?: Record<string, any>;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/tokens/{tokenAddress}/history/range',
            path: {
                'tokenAddress': tokenAddress,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Invalid parameters or body`,
                404: `No data available for token`,
                422: `Requested range falls completely outside token lifespan (mode=error)`,
                500: `Internal server error`,
            },
        });
    }
    /**
     * Get Token Audit
     * Returns audit data for a given token address, including developer and top holder distributions (tokens + percent), as well as bundler, insider, sniper, and LP burn percentages.
     * @param tokenAddress The token's address (e.g., a Solana mint address)
     * @returns any Token audit data returned successfully
     * @throws ApiError
     */
    public static getTokenAudit(
        tokenAddress: string,
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
         * Developer wallet address — sourced exclusively from the token record (never from pair-level dev wallets). Returned only if present on the token.
         */
        dev_wallet?: string | null;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/tokens/{tokenAddress}/audit',
            path: {
                'tokenAddress': tokenAddress,
            },
        });
    }
    /**
     * Get Token Audit (Multiple)
     * Returns audit data for multiple tokens in a single batch call. Accepts up to 10 token addresses via a comma-separated `addresses` query parameter. Each result includes token-level developer and top holder distributions, along with bundler, insider, sniper, and LP burn percentages.
     *
     * **Cost:** 10 credits per request.
     * @param addresses Comma-separated list of up to 10 token mint addresses
     * @returns TokenAuditBatchResponse Batch token audit data returned successfully
     * @throws ApiError
     */
    public static getTokenAuditMultiple(
        addresses: string,
    ): CancelablePromise<TokenAuditBatchResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/tokens/audit',
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
