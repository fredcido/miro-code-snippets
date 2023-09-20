import userEvent from "@testing-library/user-event";
import { render, waitFor } from "@testing-library/react";
import { IconSelector } from "./IconSelector";
import { supported } from "./icons";

describe("<IconSelector />", () => {
  it("filters and dispatches select", async () => {
    const onSelect = jest.fn();
    const { getByLabelText, getByText, getAllByRole, getByPlaceholderText } =
      render(<IconSelector onSelect={onSelect} />);

    await userEvent.type(getByLabelText("plug"), "{enter}");
    await userEvent.type(getByPlaceholderText("Search icon"), "align-");

    // Items starting with "align"
    await waitFor(() => {
      const items = getAllByRole("menuitem");
      expect(items).toHaveLength(6);
    });

    const iconSelect = "align-top";
    // Click on item
    await userEvent.click(getByText(iconSelect));

    expect(onSelect).toHaveBeenCalledWith(iconSelect);
  });

  it("clear filters", async () => {
    const onSelect = jest.fn();
    const { getByLabelText, getAllByRole, getByPlaceholderText } = render(
      <IconSelector onSelect={onSelect} />
    );

    await userEvent.type(getByLabelText("plug"), "{enter}");
    await userEvent.type(getByPlaceholderText("Search icon"), "align-");

    // Items starting with "align"
    await waitFor(() => {
      const items = getAllByRole("menuitem");
      expect(items).toHaveLength(6);
    });

    await userEvent.clear(getByPlaceholderText("Search icon"));
    // Items starting with "align"
    await waitFor(() => {
      const items = getAllByRole("menuitem");
      expect(items).toHaveLength(supported.length);
    });
  });

  it("given default icon and supported", async () => {
    const onSelect = jest.fn();
    const { getByLabelText, getByText, getAllByRole, getByPlaceholderText } =
      render(
        <IconSelector
          onSelect={onSelect}
          icon="trophy"
          list={["align-bottom", "arrow-arc-left", "trophy"]}
        />
      );

    await userEvent.type(getByLabelText("trophy"), "{enter}");
    // Given items only 3
    await waitFor(() => {
      const items = getAllByRole("menuitem");
      expect(items).toHaveLength(3);
    });

    await userEvent.type(getByPlaceholderText("Search icon"), "arrow");

    // Items starting with "arrow"
    await waitFor(() => {
      const items = getAllByRole("menuitem");
      expect(items).toHaveLength(1);
    });

    const iconSelect = "arrow-arc-left";
    // Click on item
    await userEvent.click(getByText(iconSelect));

    expect(onSelect).toHaveBeenCalledWith(iconSelect);
  });
});
