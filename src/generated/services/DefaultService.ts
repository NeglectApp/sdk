/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class DefaultService {
    /**
     * MCP Config Discovery
     * Exposes MCP discovery schema for Smithery and other MCP clients.
     * @returns any MCP config JSON
     * @throws ApiError
     */
    public static getMcpConfig(): CancelablePromise<Record<string, any>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/.well-known/mcp-config',
        });
    }
    /**
     * Get API Health
     * Returns 200 OK if the API service is healthy and responding.
     * @returns any API is healthy
     * @throws ApiError
     */
    public static getApiHealth(): CancelablePromise<{
        status?: string;
        timestamp?: string;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/health',
        });
    }
}
