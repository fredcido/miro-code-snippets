import { render } from "@testing-library/react";
import { Alert, type AlertVariant } from "./Alert";

describe("<Alert />", () => {
  test.each([
    { variant: "idle", content: "Hey Idle!" },
    { variant: "info", content: "From info!" },
    { variant: "danger", content: "Careful, danger!" },
    { variant: "success", content: "That worked" },
    { variant: "warning", content: "Watch out!" },
  ])("shoul render $variant with $content", ({ variant, content }) => {
    const { getByRole, container } = render(
      <Alert variant={variant as AlertVariant}>{content}</Alert>
    );
    expect(getByRole("alert")).toHaveTextContent(content);
    expect(container).toMatchSnapshot();
  });
});
