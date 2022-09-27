import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Counter from "./Interaction";

/*
    Pointer Interactions
    Pointer APIs

    pointer({keys: '[MouseLeft]'})
    pointer({keys: '[MouseLeft][MouseRight]'})
    pointer('[MouseLeft][MouseRight]')
    pointer('[MouseLeft>]')
    pointer('[/MouseLeft]')
*/

/*
    Keyboard Interactions
    Utility API
    - type()
    - clear()
    - selectOptions()
    - deselectOptions()
    - upload()
    
    convenience API
    - tab()

    Clipboard APIs
    copy()
    cut()
    paste()

    Keyboard API
    keyboard('foo') // translates to: f, o, o
    keyboard('{Shift>}A{/Shift}') // translates to: Shift(down), A, Shift(up)
*/

describe.skip("Counter", () => {
  it("renders correctly", () => {
    render(<Counter />);
    const countElement = screen.getByRole("heading", { level: 1 });
    expect(countElement).toBeInTheDocument();

    const incrementButton = screen.getByRole("button", { name: "Increment" });
    expect(incrementButton).toBeInTheDocument();
  });

  it("renders a count of 0", () => {
    render(<Counter />);
    const countElement = screen.getByRole("heading", { level: 1 });
    expect(countElement).toHaveTextContent("0");
  });

  it("renders a count of 1 after clicking the increment button", async () => {
    userEvent.setup();
    render(<Counter />);
    const countElement = screen.getByRole("heading", { level: 1 });
    const count = Number(countElement.textContent);
    const incrementButton = screen.getByRole("button", { name: "Increment" });

    await userEvent.click(incrementButton);
    expect(countElement).toHaveTextContent((count + 1).toString());
  });

  it("renders a count of N after clicking the increment button twice", async () => {
    userEvent.setup();
    render(<Counter />);
    const countElement = screen.getByRole("heading", { level: 1 });
    let count = Number(countElement.textContent);
    const incrementButton = screen.getByRole("button", { name: "Increment" });

    await userEvent.click(incrementButton).then(() => (count += 1));
    await userEvent.click(incrementButton).then(() => (count += 1));
    await userEvent.click(incrementButton).then(() => (count += 1));
    expect(countElement).toHaveTextContent(count.toString());
  });

  it("renders a count of 10 after clicking the set button", async () => {
    userEvent.setup();
    render(<Counter />);
    const amountInput = screen.getByRole("spinbutton");
    await userEvent.type(amountInput, "10");
    expect(amountInput).toHaveValue(10);

    const setButton = screen.getByRole("button", { name: "Set" });
    await userEvent.click(setButton);
    const countElement = screen.getByRole("heading", { level: 1 });
    expect(countElement).toHaveTextContent("10");
  });

  it("elements are focused in the right order", async () => {
    userEvent.setup();
    render(<Counter />);
    const incrementButton = screen.getByRole("button", { name: "Increment" });
    const amountInput = screen.getByRole("spinbutton");
    const setButton = screen.getByRole("button", { name: "Set" });

    await userEvent.tab();
    expect(incrementButton).toHaveFocus();
    await userEvent.tab();
    expect(amountInput).toHaveFocus();
    await userEvent.tab();
    expect(setButton).toHaveFocus();
  });
});
