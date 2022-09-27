import { screen } from "@testing-library/react";
import { render } from "../../test-utils";
import AppProviders from "../../providers/app-providers";
import MuiMode from "./mui-mode";

describe.skip("MuiMode", () => {
  it("render text correctly", () => {
    render(<MuiMode />);

    const headingElement = screen.getByRole("heading");
    expect(headingElement).toHaveTextContent("dark mode");
  });
});
