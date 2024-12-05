import { render, screen } from "@testing-library/react";

import App from "../App";

test("se i libri nell'array sono uaguali alle card create", () => {
  render(<App />);
  const array = screen.getAllByTestId("card");
  expect(array).toHaveLength(150);
});
