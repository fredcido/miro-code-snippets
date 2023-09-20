/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { createMock } from "@golevelup/ts-jest";
import type {
  Miro,
  BoardViewport,
  Board,
  BoardUI,
  Notifications,
} from "@mirohq/websdk-types";

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
