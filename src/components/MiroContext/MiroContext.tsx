"use client";

import React, { useContext, useEffect, useState } from "react";
import type { BoardInfo } from "@mirohq/websdk-types";
import { miroService } from "~/business/services/Miro";
import type { UserInfo } from "~/business/models";
import { api } from "~/business";
import Skeleton from "../Skeleton/Skeleton";

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
  const boardInfo = await miro.board.getInfo();
  api.addHeader("X-BOARD-ID", boardInfo.id);
  const userInfo = await fetchUserInfo();

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
  const [state, setState] = useState<ContextStatus>("idle");
  const [context, setContext] = useState<MiroContextData | undefined>();

  useEffect(() => {
    fetchContext()
      .then((context) => {
        setContext(context);

        api.addHeader("X-BOARD-ID", context.boardInfo.id);
        api.setJWT(context.userInfo.jwt);

        setState("done");
      })
      .catch((err) => {
        console.error(err);
        setState("error");
      });
  }, []);

  if (state === "error") {
    return <h1>Something went wrong fetching Miro context</h1>;
  }

  if (state === "done") {
    return (
      <MiroContext.Provider value={context}>{children}</MiroContext.Provider>
    );
  }

  return fallback ?? <Skeleton />;
}
