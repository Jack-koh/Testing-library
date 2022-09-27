import { render, screen } from "@testing-library/react";
import Http from "./Http";

describe("Users", () => {
  it("renders correctly", () => {
    render(<Http />);
    const textElement = screen.getByText("Users");
    expect(textElement).toBeInTheDocument();
  });

  it("renders a list of users", async () => {
    render(<Http />);
    const users = await screen.findAllByRole("listitem");
    expect(users).toHaveLength(3);
  });
});
