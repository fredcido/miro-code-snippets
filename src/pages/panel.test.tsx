import { rest } from "msw";
import userEvent from "@testing-library/user-event";
import {
  render,
  within,
  waitForElementToBeRemoved,
  waitFor,
} from "@testing-library/react";
import Panel from "./panel";
import {
  MiroProvider,
  codeSnippets,
  createMiroData,
  server,
  api,
  mockMiro,
} from "../../tests";

describe("Page: <Panel />", () => {
  let confirmSpy: jest.SpyInstance;
  beforeAll(() => {
    confirmSpy = jest.spyOn(window, "confirm");
    confirmSpy.mockImplementation(jest.fn(() => true));
  });
  afterAll(() => confirmSpy.mockRestore());

  it("renders skeleton", () => {
    const { getAllByRole } = render(
      <MiroProvider context={createMiroData()}>
        <Panel />
      </MiroProvider>
    );

    expect(getAllByRole("status").length).toBeGreaterThan(0);
  });

  it("renders support and send feedback links", async () => {
    const { queryAllByRole, getByRole } = render(
      <MiroProvider context={createMiroData()}>
        <Panel />
      </MiroProvider>
    );

    await waitForElementToBeRemoved(queryAllByRole("status"));

    expect(getByRole("link", { name: /learn more/i })).toHaveAttribute(
      "href",
      "https://github.com/fredcido/miro-code-snippets/issues"
    );

    expect(getByRole("link", { name: /send feedback/i })).toHaveAttribute(
      "href",
      "https://forms.gle/7vre8fvUKDfc5x3A7"
    );
  });

  it("renders snippets", async () => {
    const { queryAllByRole, findAllByRole } = render(
      <MiroProvider context={createMiroData()}>
        <Panel />
      </MiroProvider>
    );

    await waitForElementToBeRemoved(queryAllByRole("status"));

    expect.assertions(codeSnippets.length);

    const headers = await findAllByRole("heading", { level: 2 });
    headers.forEach((header, idx) => {
      expect(header).toHaveTextContent(codeSnippets.at(idx)!.name);
    });
  });

  it("renders empty", async () => {
    server.use(
      rest.get(api("/code-snippets/mine"), (req, res, ctx) => {
        return res(ctx.json([]));
      })
    );

    const { queryAllByRole, findByRole } = render(
      <MiroProvider context={createMiroData()}>
        <Panel />
      </MiroProvider>
    );

    await waitForElementToBeRemoved(queryAllByRole("status"));

    expect(await findByRole("alert")).toHaveTextContent(
      /no code snippets available/i
    );
  });

  it("filters snippets", async () => {
    const { queryAllByRole, findAllByRole, getByPlaceholderText } = render(
      <MiroProvider context={createMiroData()}>
        <Panel />
      </MiroProvider>
    );

    await waitForElementToBeRemoved(queryAllByRole("status"));
    await findAllByRole("heading");

    await userEvent.type(getByPlaceholderText(/search/i), "second");

    await waitFor(async () => {
      const titles = await findAllByRole("heading");
      expect(titles).toHaveLength(1);
      expect(titles[0]).toHaveTextContent("My second script");
    });
  });

  it("renders error when loading", async () => {
    server.use(
      rest.get(api("/code-snippets/mine"), (req, res, ctx) => {
        return res(
          ctx.status(500),
          ctx.json({
            messge: "just an error",
          })
        );
      })
    );

    const { queryAllByRole, findByRole } = render(
      <MiroProvider context={createMiroData()}>
        <Panel />
      </MiroProvider>
    );

    await waitForElementToBeRemoved(queryAllByRole("status"));

    expect(await findByRole("alert")).toHaveTextContent(
      /error fetching code snippets/i
    );
  });

  it("adds snippets", async () => {
    const { miro } = mockMiro();

    const { queryAllByRole, getByRole } = render(
      <MiroProvider context={createMiroData({ miro })}>
        <Panel />
      </MiroProvider>
    );

    await waitForElementToBeRemoved(queryAllByRole("status"));
    await userEvent.click(getByRole("button", { name: /add snippet/i }));

    expect(miro.board.ui.openModal).toHaveBeenCalledWith(
      expect.objectContaining({
        url: `/code-editor`,
        width: 800,
      })
    );
  });

  it("handle error when adding snippet", async () => {
    const { miro } = mockMiro();

    const { queryAllByRole, getByRole, findByRole } = render(
      <MiroProvider context={createMiroData({ miro })}>
        <Panel />
      </MiroProvider>
    );

    const errorOpen = jest.spyOn(miro.board.ui, "openModal");
    errorOpen.mockImplementation(() => Promise.reject());

    await waitForElementToBeRemoved(queryAllByRole("status"));
    await userEvent.click(getByRole("button", { name: /add snippet/i }));

    expect(await findByRole("alert")).toHaveTextContent(
      /error adding code snippet/i
    );
  });

  it("edits snippets", async () => {
    const { miro } = mockMiro();

    const { queryAllByRole, getByRole } = render(
      <MiroProvider context={createMiroData({ miro })}>
        <Panel />
      </MiroProvider>
    );

    await waitForElementToBeRemoved(queryAllByRole("status"));
    await userEvent.click(getByRole("button", { name: /add snippet/i }));

    expect(miro.board.ui.openModal).toHaveBeenCalledWith(
      expect.objectContaining({
        url: `/code-editor`,
        width: 800,
      })
    );
  });

  it("handle error when adding snippet", async () => {
    const { miro } = mockMiro();

    const { queryAllByRole, findAllByRole, debug, getByRole } = render(
      <MiroProvider context={createMiroData({ miro })}>
        <Panel />
      </MiroProvider>
    );

    const [, second] = codeSnippets;

    await waitForElementToBeRemoved(queryAllByRole("status"));

    const [, header] = await findAllByRole("heading", {
      level: 2,
    });
    expect(header).toHaveTextContent(second!.name);
    await userEvent.type(within(header!).getByLabelText("Actions"), "{enter}");
    const removeButton = getByRole("menuitem", {
      name: /remove/i,
    });

    await userEvent.click(removeButton);

    await waitFor(() => {
      expect(miro.board.ui.openModal).toHaveBeenCalledWith(
        expect.objectContaining({
          url: `/code-editor/?id=${second?.id}`,
          width: 800,
        })
      );
    });
  });
});
