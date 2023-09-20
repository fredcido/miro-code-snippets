import "whatwg-fetch";

export class Request {
  private headers = new Headers([
    ["Content-Type", "application/json"],
    ["Accepts", "application/json"],
  ]);
  private BASE_API: string;
  private jwt?: string;

  constructor(baseUrl: string) {
    this.BASE_API = baseUrl;
  }

  buildEndpoint(url: string): string {
    return `${this.BASE_API}${url}`;
  }

  setJWT(jwt: string): void {
    this.jwt = jwt;
  }

  addHeader(key: string, value: string) {
    this.headers.set(key, value);
  }

  async execute<Response, Data = unknown>(
    url: string,
    config?: RequestInit & { data?: Data }
  ): Promise<Response> {
    const { data, ...rest } = config ?? {};

    if (this.jwt) {
      this.headers.set("Authorization", `Bearer ${this.jwt}`);
    }

    const internalConfig: RequestInit = {
      ...rest,
      headers: this.headers,
      body: data ? JSON.stringify(data) : undefined,
    };

    const response = await fetch(this.buildEndpoint(url), internalConfig);
    const responseData = (await response.json()) as Response;

    if (!response.ok) {
      throw new Error("Payload failed");
    }

    return responseData;
  }
}

export class Api<Entity extends object> {
  private request: Request;

  constructor(baseUrl = "/api") {
    this.request = new Request(baseUrl);
  }

  setJWT(j: string) {
    this.request.setJWT(j);
  }

  addHeader(key: string, value: string) {
    this.request.addHeader(key, value);
  }

  async get<Response extends Entity | Entity[]>(
    url: string,
    config?: RequestInit
  ): Promise<Response> {
    return this.request.execute<Response>(url, config);
  }

  async post<Payload, Response extends Entity>(
    url: string,
    data: Payload,
    config?: RequestInit
  ): Promise<Response> {
    return this.request.execute<Response>(url, {
      method: "POST",
      data,
      ...config,
    });
  }

  async patch<Payload extends Partial<Entity>, Response extends Entity>(
    url: string,
    data: Payload,
    config?: RequestInit
  ): Promise<Response> {
    return this.request.execute<Response>(url, {
      method: "PATCH",
      data,
      ...config,
    });
  }

  async put<Payload, Response extends Entity>(
    url: string,
    data: Payload,
    config?: RequestInit
  ): Promise<Response> {
    return this.request.execute<Response>(url, {
      method: "PUT",
      data,
      ...config,
    });
  }

  async delete<Response extends Entity>(
    url: string,
    config?: RequestInit
  ): Promise<void> {
    await this.request.execute<Response>(url, { method: "DELETE", ...config });
  }
}

export const api = new Api();
