// src/test/setup.js
import "@testing-library/jest-dom/vitest";
import { cleanup } from "@testing-library/react";
import { afterEach } from "vitest";

// react-window uses ResizeObserver to measure the scrollable container
class ResizeObserverMock {
  observe() {}
  unobserve() {}
  disconnect() {}
}
globalThis.ResizeObserver = ResizeObserverMock;

// jsdom doesn't implement layout, so clientHeight/clientWidth are always 0.
// react-window needs a non-zero height to decide how many rows to render.
Object.defineProperty(HTMLElement.prototype, "clientHeight", {
  configurable: true,
  value: 500,
});
Object.defineProperty(HTMLElement.prototype, "clientWidth", {
  configurable: true,
  value: 800,
});

// Some versions also check offsetHeight/offsetWidth
Object.defineProperty(HTMLElement.prototype, "offsetHeight", {
  configurable: true,
  value: 500,
});
Object.defineProperty(HTMLElement.prototype, "offsetWidth", {
  configurable: true,
  value: 800,
});

// --- RTL cleanup (unmounts components between tests) ---
afterEach(() => {
  cleanup();
});