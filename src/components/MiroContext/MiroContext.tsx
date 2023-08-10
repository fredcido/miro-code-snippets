"use client";

import React, { useContext, useEffect, useState } from "react";
import type { BoardInfo } from "@mirohq/websdk-types";
import { miroService } from "~/business/services/Miro";
import type { UserInfo } from "~/business/models";
import { api } from "~/business/services";

type Props = {
  children: React.ReactNode;
  fallback?: React.ReactNode;
};

type ContextStatus = "idle" | "loading" | "error" | "done";

type MiroContextData = {
  boardInfo: BoardInfo;
  userInfo: UserInfo;
};

const fetchUserInfo = async () => {
  const jwt = await miro.board.getIdToken();
  const userInfo = await miroService.getUserInfo(jwt);

  return {
    ...userInfo,
    jwt,
  };
};

const fetchContext = async () => {
  const [boardInfo, userInfo] = await Promise.all([
    miro.board.getInfo(),
    fetchUserInfo(),
  ]);

  return {
    boardInfo,
    userInfo,
  };
};

export const MiroContext = React.createContext<MiroContextData | undefined>(
  undefined
);

export const useMiroContext = () => {
  return useContext(MiroContext);
};

export function MiroContextWrapper({ children, fallback }: Props) {
  const [isServer, setIsServer] = useState(true);
  const [state, setState] = useState<ContextStatus>("idle");
  const [context, setContext] = useState<MiroContextData | undefined>();

  useEffect(() => {
    setIsServer(false);

    fetchContext()
      .then((context) => {
        setContext(context);
        api.setUserInfo(context.userInfo);
        setState("done");
      })
      .catch((err) => {
        console.error(err);
        setState("error");
      });
  }, [isServer]);

  if (isServer) {
    return children;
  }

  if (state === "error") {
    return <h1>Something went wrong fetching Miro context</h1>;
  }

  if (state === "done") {
    return (
      <MiroContext.Provider value={context}>{children}</MiroContext.Provider>
    );
  }

  return (
    fallback ?? <div suppressHydrationWarning>Fetching Miro context....</div>
  );
}
