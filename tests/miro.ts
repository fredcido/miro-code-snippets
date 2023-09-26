/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { createMock } from "@golevelup/ts-jest";
import { merge } from "lodash";
import type {
  Miro,
  BoardViewport,
  Board,
  BoardUI,
  Notifications,
} from "@mirohq/websdk-types";
import { type MiroContextData } from "~/components/MiroContext";

export function mockMiro() {
  const mockViewport = createMock<BoardViewport>();
  const mockUI = createMock<BoardUI>({
    openModal: jest.fn(() => Promise.resolve()),
    openPanel: jest.fn(() => Promise.resolve()),
    closeModal: jest.fn(() => Promise.resolve()),
    closePanel: jest.fn(() => Promise.resolve()),
  });
  const mockNotifications = createMock<Notifications>({
    showInfo: jest.fn(() => Promise.resolve()),
    show: jest.fn(() => Promise.resolve()),
  });

  const mockBoard = createMock<Board>({
    viewport: mockViewport,
    ui: mockUI,
    notifications: mockNotifications,
  });

  const miro = createMock<Miro>({
    board: mockBoard,
    clientVersion: "test",
  });

  return { miro, mockViewport, mockUI, mockNotifications, mockBoard };
}

export const createMiroData = (
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
      miro: mockMiro(),
    },
    opts
  );