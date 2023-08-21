import { api, type Api } from "../api";
import type { CodeSnippet, CreateCodeSnippet } from "../models";

const ENDPOINT = "/code-snippets";

export class CodeSnippetsService<
  Entity extends CodeSnippet,
  CreateEntity extends CreateCodeSnippet
> {
  private api: Api<Entity>;

  constructor(api: Api<Entity>) {
    this.api = api;
  }

  async create(snippet: CreateEntity): Promise<Entity> {
    return this.api.post<CreateEntity, Entity>(ENDPOINT, snippet);
  }

  async update(snippet: Partial<Entity>): Promise<Entity> {
    return this.api.patch(`${ENDPOINT}/${snippet.id}`, snippet);
  }

  async remove(snippet: Entity): Promise<void> {
    await this.api.delete(`${ENDPOINT}/${snippet.id}`);
  }

  async use(snippet: Entity): Promise<Entity> {
    return this.api.post(`${ENDPOINT}/uses/${snippet.id}`, snippet);
  }

  async getById(id: string): Promise<Entity> {
    return this.api.get(`${ENDPOINT}/${id}`);
  }

  async listAll(): Promise<Entity[]> {
    return this.api.get(ENDPOINT);
  }

  async listMine(): Promise<Entity[]> {
    return this.api.get(`${ENDPOINT}/mine`);
  }

  async listPublic(): Promise<Entity[]> {
    return this.api.get(`${ENDPOINT}/public`);
  }

  async listUsed(): Promise<Entity[]> {
    return this.api.get(`${ENDPOINT}/user`);
  }

  async listActions(): Promise<Entity[]> {
    return this.api.get(`${ENDPOINT}/actions`);
  }
}

export const codeSnippetsService = new CodeSnippetsService(api);
