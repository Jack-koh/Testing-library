import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Mocking from "./Mocking";
import { server } from "../../mocks/server";

describe.skip("Mocking", () => {
  // Establish API mocking before all tests.
  beforeAll(() => server.listen());
  // Reset any request handlers that we may add during the tests,
  // so they don't affect other tests.
  afterEach(() => server.resetHandlers());
  // Clean up after the tests are finished.
  afterAll(() => server.close());

  it("render correctly", () => {
    render(<Mocking count={0} />);
    const textElement = screen.getByRole("heading", { level: 1 });
    expect(textElement).toBeInTheDocument();
  });

  it("handlers are called", async () => {
    userEvent.setup();
    const incrementHandler = jest.fn();
    const decrementHandler = jest.fn();
    render(
      <Mocking
        count={0}
        handleIncrement={incrementHandler}
        handleDecrement={decrementHandler}
      />
    );

    const incrementButton = screen.getByRole("button", { name: "Increment" });
    const decrementButton = screen.getByRole("button", { name: "Decrement" });
    await userEvent.click(incrementButton);
    await userEvent.click(decrementButton);

    expect(incrementHandler).toHaveBeenCalledTimes(1);
    expect(decrementHandler).toHaveBeenCalledTimes(1);
  });
});
