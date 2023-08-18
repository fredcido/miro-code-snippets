export const BASE_API = "/api";

const buildEndpoint = (url: string): string => `${BASE_API}${url}`;

let jwt: string;
const headers = new Headers([["Content-Type", "application/json"]]);

const request = async <Response, Data = unknown>(
  url: string,
  config?: RequestInit & { data?: Data }
): Promise<Response> => {
  const { data, ...rest } = config ?? {};

  if (jwt) {
    headers.set("Authorization", `Bearer ${jwt}`);
  }

  const internalConfig: RequestInit = {
    ...rest,
    headers,
    body: data ? JSON.stringify(data) : undefined,
  };

  const response = await fetch(buildEndpoint(url), internalConfig);
  const responseData = (await response.json()) as Response;

  if (!response.ok) {
    throw new Error("Payload failed");
  }

  return responseData;
};

export class Api<Entity extends object> {
  setJWT(j: string) {
    jwt = j;
  }

  addHeader(key: string, value: string) {
    headers.set(key, value);
  }

  async get<Response extends Entity | Entity[]>(
    url: string,
    config?: RequestInit
  ): Promise<Response> {
    return request<Response>(url, config);
  }

  async post<Payload, Response extends Entity>(
    url: string,
    data: Payload,
    config?: RequestInit
  ): Promise<Response> {
    return request<Response>(url, { method: "POST", data, ...config });
  }

  async patch<Payload extends Partial<Entity>, Response extends Entity>(
    url: string,
    data: Payload,
    config?: RequestInit
  ): Promise<Response> {
    return request<Response>(url, { method: "PATCH", data, ...config });
  }

  async put<Payload, Response extends Entity>(
    url: string,
    data: Payload,
    config?: RequestInit
  ): Promise<Response> {
    return request<Response>(url, { method: "PUT", data, ...config });
  }

  async delete<Response extends Entity>(
    url: string,
    config?: RequestInit
  ): Promise<void> {
    await request<Response>(url, { method: "DELETE", ...config });
  }
}

export const api = new Api();