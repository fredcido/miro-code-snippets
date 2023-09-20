import * as ResizeObserverModule from "resize-observer-polyfill";

import "@testing-library/jest-dom";
import { server } from "./tests/server";

beforeAll(() => {
  globalThis.ResizeObserver = ResizeObserverModule.default;
  server.listen();
});
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
