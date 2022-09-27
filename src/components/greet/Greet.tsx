import React from "react";
import { GreetProps } from "./greet.types";

export const Greet = (props: GreetProps) => {
  return <div>Hello {props.name ? props.name : "Guest"}</div>;
  // return <div>Hello {props.name ?? "Guest"}</div>;
};
