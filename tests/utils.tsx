import { MiroContext, type MiroContextData } from "~/components/MiroContext";

export type MiroProvider = {
  children: React.ReactNode;
  context: MiroContextData;
};
export const MiroProvider = ({ children, context }: MiroProvider) => (
  <MiroContext.Provider value={context}>{children}</MiroContext.Provider>
);
