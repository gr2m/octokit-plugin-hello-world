import { helloWorld } from "../src";

describe("Smoke test", () => {
  it("{ helloWorld } export is a function", () => {
    expect(helloWorld).toBeInstanceOf(Function);
  });

  it("helloWorld()", () => {
    expect(helloWorld).not.toThrow();
  });

  it("helloWorld.VERSION exists", () => {
    expect(helloWorld.VERSION).toEqual("0.0.0-development");
  });
});
