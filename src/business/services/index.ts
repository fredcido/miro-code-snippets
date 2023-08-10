export const BASE_API = "/api";

const buildEndpoint = (url: string): string => `${BASE_API}/${url}`;

const Payload = async <Response, Data = unknown>(
  url: string,
  config?: RequestInit & { data?: Data }
): Promise<Response> => {
  const { data, ...rest } = config ?? {};

  const internalConfig = {
    ...rest,
    headers: {
      "Content-Type": "application/json",
    },
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
  get: async <LocalResponse>(url: string): Promise<LocalResponse> =>
    Payload<LocalResponse>(url),
  post: async <Payload, LocalResponse = Response>(
    url: string,
    data: Payload
  ): Promise<LocalResponse> =>
    Payload<LocalResponse>(url, { method: "POST", data }),
  patch: async <Payload extends BodyInit, LocalResponse = Response>(
    url: string,
    data: Payload
  ): Promise<LocalResponse> =>
    Payload<LocalResponse>(url, { method: "PATCH", data }),
  put: async <Payload extends BodyInit, LocalResponse = Response>(
    url: string,
    data: Payload
  ): Promise<LocalResponse> =>
    Payload<LocalResponse>(url, { method: "PUT", data }),
  delete: async <LocalResponse>(url: string): Promise<LocalResponse> =>
    Payload<LocalResponse>(url, { method: "DELETE" }),
};
