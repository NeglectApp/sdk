/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class McpServerService {
    /**
     * MCP Server
     * Provides the Model Context Protocol (MCP) server for agentic, LLM-driven workflows. Enables conversational access to token and wallet data via intent-based mappings.
     * @throws ApiError
     */
    public static mcpServer(): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/mcp',
        });
    }
}
