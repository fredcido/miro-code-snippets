import { render } from "@testing-library/react";
import { CodePreview } from "./CodePreview";
import { type CodeSnippet } from "~/business";

describe("<CodePreview />", () => {
  const codeSnippet: CodeSnippet = {
    id: "",
    name: "Test code snippet",
    code: 'console.log("Hey")',
    owner: "OTHER",
    status: "PUBLISHED",
    visibility: "PUBLIC",
    createdAt: "",
    updatedAt: "",
    icon: "user",
    shareConfig: [],
  };

  it("should render with no options", () => {
    const {} = render(<CodePreview codeSnippet={codeSnippet} />);
  });
});
