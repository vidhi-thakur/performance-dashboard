import { describe, expect, it } from "vitest";
import { generateOrders } from "./fakeDataGenerator";

describe("fakeDataGenerator", () => {
  it("returns empty array if count is zero", () => {
    const result = generateOrders(0);
    expect(result.length).toBe(0);
  });

  it("returns empty array if count is negative", () => {
    const result = generateOrders(-2);
    expect(result.length).toBe(0);
  });

  it("returns default count if argument is not passed", () => {
    const result = generateOrders();
    expect(result.length).toBe(5000);
  });

  it("returns custom count if argument is passed", () => {
    const result = generateOrders(10);
    expect(result.length).toBe(10);
  });
});
