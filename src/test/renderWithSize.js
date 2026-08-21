// src/test/renderWithSize.js
import { render } from "@testing-library/react";

export function renderWithSize(ui, { height = 500, width = 800 } = {}) {
  const originalHeight = Object.getOwnPropertyDescriptor(HTMLElement.prototype, "clientHeight");
  const originalWidth = Object.getOwnPropertyDescriptor(HTMLElement.prototype, "clientWidth");

  Object.defineProperty(HTMLElement.prototype, "clientHeight", { configurable: true, value: height });
  Object.defineProperty(HTMLElement.prototype, "clientWidth", { configurable: true, value: width });

  const result = render(ui);

  return {
    ...result,
    cleanup: () => {
      if (originalHeight) Object.defineProperty(HTMLElement.prototype, "clientHeight", originalHeight);
      if (originalWidth) Object.defineProperty(HTMLElement.prototype, "clientWidth", originalWidth);
    },
  };
}