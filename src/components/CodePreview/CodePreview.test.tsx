import userEvent from "@testing-library/user-event";
import { render, waitFor } from "@testing-library/react";
import { CodePreview } from "./CodePreview";
import { type CodeSnippet } from "~/business";
import { cloneDeep } from "lodash";
import { MiroProvider, buildMiroData } from "../../../tests/utils";

describe("<CodePreview />", () => {
  const codeSnippet: CodeSnippet = {
    id: "test-code-id",
    name: "Test code snippet",
    code: 'console.log("Hey")',
    owner: "OTHER",
    status: "PUBLISHED",
    visibility: "PROTECTED",
    createdAt: "2023-01-01T10:10",
    updatedAt: "2023-01-01T14:45",
    icon: "user",
    shareConfig: [],
  };

  it("renders with no options", async () => {
    const { getByRole, queryByLabelText } = render(
      <MiroProvider context={buildMiroData()}>
        <CodePreview codeSnippet={codeSnippet} />
      </MiroProvider>
    );

    expect(getByRole("heading", { level: 2 })).toHaveTextContent(
      codeSnippet.name
    );

    await waitFor(() => {
      expect(queryByLabelText("Actions")).not.toBeInTheDocument();
    });
  });

  it("renders draft tag", () => {
    const snippet = cloneDeep(codeSnippet);
    snippet.status = "DRAFT";

    const { getByText } = render(
      <MiroProvider context={buildMiroData()}>
        <CodePreview codeSnippet={snippet} />
      </MiroProvider>
    );

    expect(getByText(/draft/i)).toBeInTheDocument();
  });

  it("renders widget types tag", () => {
    const snippet = cloneDeep(codeSnippet);
    snippet.predicate = {
      $or: [{ type: "sticky_note" }, { type: "shape" }, { type: "image" }],
    };

    const { getByText } = render(
      <MiroProvider context={buildMiroData()}>
        <CodePreview codeSnippet={snippet} />
      </MiroProvider>
    );

    expect(getByText(/sticky note/i)).toBeInTheDocument();
    expect(getByText(/shape/i)).toBeInTheDocument();
    expect(getByText(/image/i)).toBeInTheDocument();
  });

  it("renders with execute action", async () => {
    const snippet = cloneDeep(codeSnippet);

    const onExecute = jest.fn();
    const { getByLabelText, getByText, getAllByRole } = render(
      <MiroProvider context={buildMiroData()}>
        <CodePreview codeSnippet={snippet} onExecute={onExecute} />
      </MiroProvider>
    );

    // Open app sub dropdown
    await userEvent.type(getByLabelText("Actions"), "{enter}");
    const items = getAllByRole("menuitem");
    // Click on item
    await userEvent.click(getByText("Execute"));

    expect(onExecute).toHaveBeenCalled();
    expect(items).toHaveLength(1);
  });

  it("renders with remove action", async () => {
    const snippet = cloneDeep(codeSnippet);
    // We ensure user is the owner to remove item
    snippet.owner = "USER";

    const onRemove = jest.fn();
    const { getByLabelText, getByText, getAllByRole } = render(
      <MiroProvider context={buildMiroData()}>
        <CodePreview codeSnippet={snippet} onRemove={onRemove} />
      </MiroProvider>
    );

    // Open app sub dropdown
    await userEvent.type(getByLabelText("Actions"), "{enter}");
    const items = getAllByRole("menuitem");
    // Click on item
    await userEvent.click(getByText("Remove"));

    expect(onRemove).toHaveBeenCalled();
    expect(items).toHaveLength(1);
  });

  it("renders with edit action", async () => {
    const snippet = cloneDeep(codeSnippet);
    // We ensure user is the owner to edit item
    snippet.owner = "USER";

    const onEdit = jest.fn();
    const { getByLabelText, getByText, getAllByRole } = render(
      <MiroProvider context={buildMiroData()}>
        <CodePreview codeSnippet={snippet} onEdit={onEdit} />
      </MiroProvider>
    );

    // Open app sub dropdown
    await userEvent.type(getByLabelText("Actions"), "{enter}");
    const items = getAllByRole("menuitem");
    // Click on item
    await userEvent.click(getByText("Edit"));

    expect(onEdit).toHaveBeenCalled();
    expect(items).toHaveLength(1);
  });

  it("renders with view action", async () => {
    const snippet = cloneDeep(codeSnippet);
    // We ensure user is the other to view item
    snippet.owner = "OTHER";
    // Only public scripts can be seen
    snippet.visibility = "PUBLIC";

    const onView = jest.fn();
    const { getByLabelText, getByText, getAllByRole } = render(
      <MiroProvider context={buildMiroData()}>
        <CodePreview codeSnippet={snippet} onView={onView} />
      </MiroProvider>
    );

    // Open app sub dropdown
    await userEvent.type(getByLabelText("Actions"), "{enter}");
    const items = getAllByRole("menuitem");
    // Click on item
    await userEvent.click(getByText("View"));

    expect(onView).toHaveBeenCalled();
    expect(items).toHaveLength(1);
  });

  it("renders with use action", async () => {
    const miroData = buildMiroData();
    const snippet = cloneDeep(codeSnippet);

    // We ensure user is the other to use item
    snippet.owner = "OTHER";
    // Only public scripts can be used
    snippet.visibility = "PUBLIC";
    snippet.shareConfig = [
      {
        sourceType: "USER",
        identifier: miroData.userInfo.user,
      },
    ];

    const onUse = jest.fn();
    const {
      getByLabelText,
      getByText,
      getAllByRole,
      queryByLabelText,
      rerender,
    } = render(
      <MiroProvider context={miroData}>
        <CodePreview codeSnippet={snippet} onUse={onUse} />
      </MiroProvider>
    );

    // initially users with already shared snippets shouldn't see the use button
    await waitFor(() => {
      expect(queryByLabelText("Actions")).not.toBeInTheDocument();
    });

    // Shared with a different user
    snippet.shareConfig = [
      {
        sourceType: "USER",
        identifier: "anotherUser",
      },
    ];

    rerender(
      <MiroProvider context={miroData}>
        <CodePreview codeSnippet={snippet} onUse={onUse} />
      </MiroProvider>
    );

    // Open app sub dropdown
    await userEvent.type(getByLabelText("Actions"), "{enter}");
    const items = getAllByRole("menuitem");
    // Click on item
    await userEvent.click(getByText("Use"));

    expect(onUse).toHaveBeenCalled();
    expect(items).toHaveLength(1);
  });
});
