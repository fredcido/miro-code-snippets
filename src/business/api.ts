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

export const api = {
  setJWT: (j: string) => {
    jwt = j;
  },
  addHeader: (key: string, value: string) => {
    headers.set(key, value);
  },
  get: async <LocalResponse>(
    url: string,
    config?: RequestInit
  ): Promise<LocalResponse> => request<LocalResponse>(url, config),
  post: async <Payload, LocalResponse = Response>(
    url: string,
    data: Payload,
    config?: RequestInit
  ): Promise<LocalResponse> =>
    request<LocalResponse>(url, { method: "POST", data, ...config }),
  patch: async <Payload, LocalResponse = Response>(
    url: string,
    data: Payload,
    config?: RequestInit
  ): Promise<LocalResponse> =>
    request<LocalResponse>(url, { method: "PATCH", data, ...config }),
  put: async <Payload, LocalResponse = Response>(
    url: string,
    data: Payload,
    config?: RequestInit
  ): Promise<LocalResponse> =>
    request<LocalResponse>(url, { method: "PUT", data, ...config }),
  delete: async <LocalResponse>(
    url: string,
    config?: RequestInit
  ): Promise<LocalResponse> =>
    request<LocalResponse>(url, { method: "DELETE", ...config }),
};
