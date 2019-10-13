import { Octokit } from "@octokit/core";

import { helloWorld } from "../src";

const TestOctokit = Octokit.plugin(helloWorld);

describe("Smoke test", () => {
  it("{ helloWorld } export is a function", () => {
    expect(helloWorld).toBeInstanceOf(Function);
  });

  it("helloWorld.VERSION exists", () => {
    expect(helloWorld.VERSION).toEqual("0.0.0-development");
  });

  it("octokit.helloWorld()", () => {
    jest.spyOn(console, "log").mockImplementation();
    const octokit = new TestOctokit();
    expect(octokit.helloWorld).not.toThrow();
  });
});
