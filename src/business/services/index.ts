import { type UserInfo } from "../models";

export const BASE_API = "/api";

const buildEndpoint = (url: string): string => `${BASE_API}${url}`;

let userInfo: UserInfo;

const Payload = async <Response, Data = unknown>(
  url: string,
  config?: RequestInit & { data?: Data }
): Promise<Response> => {
  const { data, ...rest } = config ?? {};

  const internalConfig: RequestInit = {
    ...rest,
    headers: {
      "Content-Type": "application/json",
    },
    body: data ? JSON.stringify(data) : undefined,
  };

  if (userInfo?.jwt) {
    internalConfig.headers = {
      ...internalConfig.headers,
      Authorization: `Bearer ${userInfo.jwt}`,
    };
  }

  const response = await fetch(buildEndpoint(url), internalConfig);
  const responseData = (await response.json()) as Response;

  if (!response.ok) {
    throw new Error("Payload failed");
  }

  return responseData;
};

export const api = {
  setUserInfo: (user: UserInfo) => {
    userInfo = user;
  },
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
