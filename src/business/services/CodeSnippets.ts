import { api, type Api } from "../api";
import type { CodeSnippet, CreateCodeSnippet } from "../models";

export class CodeSnippetsService<
  Entity extends CodeSnippet,
  CreateEntity extends CreateCodeSnippet
> {
  private api: Api<Entity>;
  private endpoint = "/code-snippets";

  constructor(api: Api<Entity>) {
    this.api = api;
  }

  async create(snippet: CreateEntity): Promise<Entity> {
    return this.api.post<CreateEntity, Entity>(this.endpoint, snippet);
  }

  async update(snippet: Partial<Entity>): Promise<Entity> {
    return this.api.patch(`${this.endpoint}/${snippet.id}`, snippet);
  }

  async remove(snippet: Entity): Promise<void> {
    await this.api.delete(`${this.endpoint}/${snippet.id}`);
  }

  async use(snippet: Entity): Promise<Entity> {
    return this.api.post(`${this.endpoint}/uses/${snippet.id}`, snippet);
  }

  async getById(id: string): Promise<Entity> {
    return this.api.get(`${this.endpoint}/${id}`);
  }

  async listAll(): Promise<Entity[]> {
    return this.api.get(this.endpoint);
  }

  async listMine(): Promise<Entity[]> {
    return this.api.get(`${this.endpoint}/mine`);
  }

  async listPublic(): Promise<Entity[]> {
    return this.api.get(`${this.endpoint}/public`);
  }

  async listUsed(): Promise<Entity[]> {
    return this.api.get(`${this.endpoint}/user`);
  }

  async listActions(): Promise<Entity[]> {
    return this.api.get(`${this.endpoint}/actions`);
  }
}

export const codeSnippetsService = new CodeSnippetsService(api);
