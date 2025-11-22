/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class WalletDataService {
    /**
     * Get Tokens by Deployer
     * Returns a list of tokens where the specified wallet address is the developer (devWallet).
     * @param walletAddress The wallet address of the deployer (devWallet)
     * @param limit Maximum number of tokens to return (default: 10, min: 1, max: 100)
     * @returns any List of tokens deployed by the wallet
     * @throws ApiError
     */
    public static getTokensByDeployer(
        walletAddress: string,
        limit: number = 10,
    ): CancelablePromise<{
        data: {
            walletAddress: string;
            tokens: Array<{
                tokenAddress: string;
                tokenName?: string | null;
                tokenSymbol: string;
                createdAt: string;
            }>;
        };
        meta: {
            count: number;
            limit: number;
        };
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/wallets/{walletAddress}/deployed',
            path: {
                'walletAddress': walletAddress,
            },
            query: {
                'limit': limit,
            },
            errors: {
                400: `Missing or invalid wallet address`,
                500: `Unexpected server error`,
            },
        });
    }
    /**
     * Get Wallet Holdings
     * Retrieve the token holdings of a given wallet address, including balances and percentage ownership per token.
     * @param walletAddress The wallet address to fetch holdings for
     * @param limit Maximum number of tokens to return (default 10, max 100)
     * @returns any Wallet holdings data
     * @throws ApiError
     */
    public static getWalletHoldings(
        walletAddress: string,
        limit: number = 10,
    ): CancelablePromise<{
        data: {
            walletAddress: string;
            tokens: Array<{
                tokenAddress: string;
                tokenImage?: string | null;
                tokenSymbol?: string;
                tokenName?: string | null;
                tokenSupply: number;
                percentage: number;
            }>;
        };
        meta: {
            count: number;
            limit: number;
        };
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/wallets/{walletAddress}/holdings',
            path: {
                'walletAddress': walletAddress,
            },
            query: {
                'limit': limit,
            },
            errors: {
                400: `Missing or invalid wallet address`,
                500: `Internal server error`,
            },
        });
    }
    /**
     * Wallet PnL by Token
     * Calculate realized and unrealized profit and loss (PnL) for a wallet on a specific token.
     * @param walletAddress The wallet address to calculate PnL for
     * @param tokenAddress The token contract address
     * @returns any PnL calculation for wallet and token
     * @throws ApiError
     */
    public static getWalletTokenPnl(
        walletAddress: string,
        tokenAddress: string,
    ): CancelablePromise<{
        realized?: number;
        unrealized?: number;
        total?: number;
        total_sold?: number;
        total_invested?: number;
        average_buy_amount?: number;
        current_value?: number;
        cost_basis?: number;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/wallets/{walletAddress}/pnl/{tokenAddress}',
            path: {
                'walletAddress': walletAddress,
                'tokenAddress': tokenAddress,
            },
            errors: {
                400: `Missing wallet or token address`,
                500: `Internal server error`,
            },
        });
    }
}
