import { merge } from "lodash";
import { MiroContext, type MiroContextData } from "~/components/MiroContext";

export const buildMiroData = (
  opts: Partial<MiroContextData> = {}
): MiroContextData =>
  merge(
    {
      boardInfo: {
        id: "testBoardInfo",
        createdAt: "2023-01-01T10:10",
        updatedAt: "2023-01-01T14:45",
      },
      userInfo: {
        jwt: "testJWT",
        team: "testTeamId",
        user: "testUserId",
      },
    },
    opts
  );

export type MiroProvider = {
  children: React.ReactNode;
  context: MiroContextData;
};
export const MiroProvider = ({ children, context }: MiroProvider) => (
  <MiroContext.Provider value={context}>{children}</MiroContext.Provider>
);
