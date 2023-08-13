import { api } from "../api";
import type { CodeSnippet, CreateCodeSnippet } from "../models";

const ENDPOINT = "/code-snippets";

export const codeSnippetsService = {
  create: async <
    Output extends CreateCodeSnippet,
    Payload extends Partial<Output>
  >(
    snippet: Payload
  ): Promise<Output> => api.post<Payload, Output>(ENDPOINT, snippet),
  getById: async (id: string): Promise<CodeSnippet> =>
    api.get(`${ENDPOINT}/${id}`),
  getAll: async (): Promise<CodeSnippet[]> => api.get(ENDPOINT),
  getActions: async (): Promise<CodeSnippet[]> =>
    api.get(`${ENDPOINT}/actions`),
};
