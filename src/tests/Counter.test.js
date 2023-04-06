// import necessary react testing library helpers here
// import the Counter component here
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Counter from "../components/Counter";

let counter;
let incrementCount;
let decrementCount;

beforeEach(() => {
  // Render the Counter component here
  // eslint-disable-next-line testing-library/no-render-in-setup
  render(<Counter></Counter>);
  counter = screen.getByTestId("count");
  incrementCount = screen.getByRole("button", { name: "+" });
  decrementCount = screen.getByRole("button", { name: "-" });
});

test("renders counter message", () => {
  // Complete the unit test below based on the objective in the line above
  const counterMessage = screen.getByText("Counter");
  expect(counterMessage).toBeInTheDocument();
});

test("should render initial count with value of 0", () => {
  // Complete the unit test below based on the objective in the line above
  expect(counter).toHaveTextContent("0");
});

test("clicking + increments the count", () => {
  // Complete the unit test below based on the objective in the line above
  userEvent.click(incrementCount);
  expect(counter).toHaveTextContent("1");
});

test("clicking - decrements the count", () => {
  // Complete the unit test below based on the objective in the line above
  userEvent.click(decrementCount);
  expect(counter).toHaveTextContent("-1");
});
