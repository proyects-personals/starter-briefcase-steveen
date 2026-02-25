import "@testing-library/jest-dom";
import { setupCounter } from "./counter";

describe("setupCounter", () => {
  let button: HTMLButtonElement;

  beforeEach(() => {
    button = document.createElement("button");
    document.body.appendChild(button);
  });

  afterEach(() => {
    button.remove();
  });

  it("inicializa el contador en 0", () => {
    setupCounter(button);
    expect(button).toHaveTextContent("count is 0");
  });

  it("incrementa el contador al hacer click", () => {
    setupCounter(button);

    button.click();
    expect(button).toHaveTextContent("count is 1");

    button.click();
    expect(button).toHaveTextContent("count is 2");
  });
});
