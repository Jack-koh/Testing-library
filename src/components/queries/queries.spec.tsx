import React from "react";
import { render, screen } from "@testing-library/react";
import Application from "./Queries";

/*
  RTL Queries
  {get || query || find}{All}By

  Manual Queries
  const { container } = render(<Component/>)
  const foo = container.querySelector('[data-foo]="bar"')
*/

/*
  Priority Order for Queries
  1. getByRole
  2. getByLabelText
  3. getByPlaceholderText
  4. getByText
  5. getByDisplayValue
  6. getByAltText
  7. getByTitle
  8. getByTestId

  1. getAllByRole
  2. getAllByLabelText
  3. getAllByPlaceholderText
  4. getAllByText
  5. getAllByDisplayValue
  6. getAllByAltText
  7. getAllByTitle
  8. getAllByTestId
*/

/*
  TextMatch - string
  <div>Hello World</div>
  screen.getByText('Hello World') -> full string match
  screen.getByText('Hello World', { exact: false }) -> substring match
  screen.getByText('hello world', { exact: false }) -> ignore case
*/

/*
  TextMatch - regex
  <div>Hello World</div>
  screen.getByText(/World/) -> substring match
  screen.getByText(/world/i) -> substring match, ignore case
  screen.getByText(/^hello world$/i) -> full string match, ignore case
*/

/*
  TextMatch - custom function
  (content?: string, element?: Element | null) => boolean
  <div>Hello World</div>
  screen.getByText((content) => content.startWith('Hello'))
*/

describe.skip("Application", () => {
  test("renders correctoly", () => {
    render(<Application />);

    const pageHeading = screen.getByRole("heading", {
      // name: "Job application form",
      level: 1,
    });
    expect(pageHeading).toBeInTheDocument();

    const sectionHeading = screen.getByRole("heading", {
      // name: "Section 1",
      level: 2,
    });
    expect(sectionHeading).toBeInTheDocument();

    // getByText
    const paragraphElement = screen.getByText("All fields are mandatory");
    expect(paragraphElement).toBeInTheDocument();

    // getByTitle
    const closeElement = screen.getByTitle("close");
    expect(closeElement).toBeInTheDocument();

    // getByAltText
    const imageElement = screen.getByAltText("a person with a loptop");
    expect(imageElement).toBeInTheDocument();

    // getByAltText
    const customElement = screen.getByTestId("custom-element");
    expect(customElement).toBeInTheDocument();

    // getByRole
    const nameElement = screen.getByRole("textbox", { name: "Name" });
    expect(nameElement).toBeInTheDocument();

    // getByLabelText
    const nameElement2 = screen.getByLabelText("Name", { selector: "input" });
    expect(nameElement2).toBeInTheDocument();

    // getByPlaceholderText
    const nameElement3 = screen.getByPlaceholderText("Fullname");
    expect(nameElement3).toBeInTheDocument();

    // getByPlaceholderText
    const nameElement4 = screen.getByDisplayValue("Vishwas");
    expect(nameElement4).toBeInTheDocument();

    // getByRole
    const bioElement = screen.getByRole("textbox", { name: "Bio" });
    expect(bioElement).toBeInTheDocument();

    // getByRole
    const jobLocationElement = screen.getByRole("combobox");
    expect(jobLocationElement).toBeInTheDocument();

    // getByRole
    const termsElement = screen.getByRole("checkbox");
    expect(termsElement).toBeInTheDocument();

    // getByLabelText
    const termsElement2 = screen.getByLabelText(
      "I agree to the terms and conditions"
    );
    expect(termsElement2).toBeInTheDocument();

    // getByRole
    const submitButtonElement = screen.getByRole("button");
    expect(submitButtonElement).toBeInTheDocument();
  });
});
