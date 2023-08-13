import { api } from "..";
import type { UserInfo } from "../models";

const ENDPOINT = "/miro";

export const miroService = {
  getUserInfo: async (jwt: string): Promise<UserInfo> => {
    api.setJWT(jwt);
    return api.get(`${ENDPOINT}/user-info`);
  },
};
