import React from "react";
import { render, screen, logRoles } from "@testing-library/react";
import AllQueries from "./AllQueries";

describe.skip("All Queries", () => {
  const skills = ["HTML", "CSS", "JavaScript"];

  it("renders correctly", () => {
    render(<AllQueries skills={skills} />);

    const listElement = screen.getByRole("list");
    expect(listElement).toBeInTheDocument();
  });

  it("renders a list of skills", () => {
    render(<AllQueries skills={skills} />);

    const listElements = screen.getAllByRole("listitem");
    expect(listElements).toHaveLength(skills.length);
  });

  it("renders Login button", () => {
    render(<AllQueries skills={skills} />);

    const loginButton = screen.getByRole("button", { name: "Login" });
    expect(loginButton).toBeInTheDocument();
  });

  /*
    queryByRole
    document 에 렌더링 되어있지 않은 Element를 query
    모든 query에 get대신 적용가능
*/
  it("Start Learning button is not rendered", () => {
    render(<AllQueries skills={skills} />);

    const startLearningButton = screen.queryByRole("button", {
      name: "Start learning",
    });
    expect(startLearningButton).not.toBeInTheDocument();
  });

  // findByRole
  it("Start Learning button is eventually displayed", async () => {
    const view = render(<AllQueries skills={skills} />);
    logRoles(view.container); // 사용되는 컴포넌트 내부의 role 과 내임을 출력해준다.
    // screen.debug();
    const startLearningButton = await screen.findByRole(
      "button",
      { name: "Start learning" },
      { timeout: 2000 }
    );
    // screen.debug();
    expect(startLearningButton).toBeInTheDocument();
  });
});
