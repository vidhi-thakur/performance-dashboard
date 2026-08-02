import { beforeEach, describe, expect, it, vi } from "vitest";
import { debounce } from "./debounce";

describe("debounce", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  it("does not call the function immediately", () => {
    const fn = vi.fn();
    debounce(fn, 1000)();
    expect(fn).not.toHaveBeenCalled();
  });

  it("invokes function after delay", () => {
    const fn = vi.fn();
    debounce(fn, 1000)();
    vi.advanceTimersByTime(1000);
    expect(fn).toHaveBeenCalled();
  });

  it("uses default delay of 3000ms", () => {
    const fn = vi.fn();
    debounce(fn)();

    // not called before the default time
    vi.advanceTimersByTime(2999);
    expect(fn).not.toHaveBeenCalled();

    // called at 3000ms
    vi.advanceTimersByTime(1);
    expect(fn).toHaveBeenCalled();
  });

  it("cancels previous call on rapid re-invocation", () => {
    const fn = vi.fn();
    const debounced = debounce(fn, 1000);
    debounced("ankit");
    debounced("vidhi");
    debounced("arman");

    vi.advanceTimersByTime(1000);
    expect(fn).toHaveBeenCalledTimes(1);
    expect(fn).toHaveBeenCalledWith("arman");
  });
});
