import { api } from "../api";
import type { CodeSnippet, CreateCodeSnippet } from "../models";

const ENDPOINT = "/code-snippets";

export const codeSnippetsService = {
  create: async <Payload extends CreateCodeSnippet, Output extends CodeSnippet>(
    snippet: Payload
  ): Promise<Output> => api.post<Payload, Output>(ENDPOINT, snippet),
  update: async <Output extends CodeSnippet, Payload extends CodeSnippet>(
    snippet: Payload
  ): Promise<Output> =>
    api.patch<Payload, Output>(`${ENDPOINT}/${snippet.id}`, snippet),
  remove: async <Payload extends CodeSnippet>(
    snippet: Payload
  ): Promise<void> => api.delete(`${ENDPOINT}/${snippet.id}`),
  getById: async (id: string): Promise<CodeSnippet> =>
    api.get(`${ENDPOINT}/${id}`),
  getAll: async (): Promise<CodeSnippet[]> => api.get(ENDPOINT),
  getMine: async (): Promise<CodeSnippet[]> => api.get(`${ENDPOINT}/mine`),
  getActions: async (): Promise<CodeSnippet[]> =>
    api.get(`${ENDPOINT}/actions`),
};
