import { plugin } from "../src";

describe("Smoke test", () => {
  it("is a function", () => {
    expect(plugin).toBeInstanceOf(Function);
  });
});
