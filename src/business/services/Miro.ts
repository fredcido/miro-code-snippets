import { api } from ".";
import type { UserInfo } from "../models";

const ENDPOINT = "/miro";

export const miroService = {
  getUserInfo: async (jwt: string): Promise<UserInfo> =>
    api.post(`${ENDPOINT}/user-info`, { jwt }),
};
