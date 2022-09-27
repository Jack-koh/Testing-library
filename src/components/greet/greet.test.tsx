import React from "react";
import { render, screen } from "@testing-library/react";
import { Greet } from "./Greet";

// 다른 테스트를 건너뛰고 하나만 테스트하고싶을경우: (descript | test | it).only()
// 테스트를 건너뛰고싶은 경우: (descript | test | it).skip()

describe.skip("Greet", () => {
  it("renders correctly", () => {
    render(<Greet />);
    const textElement = screen.getByText(/hello/i);
    expect(textElement).toBeInTheDocument();
  });
});

// describe("Nested", () => {
//   it("renders with a name", () => {
//     render(<Greet name="Jack" />);
//     const textElement = screen.getByText(/Jack/i);
//     expect(textElement).toBeInTheDocument();
//   });
// });
