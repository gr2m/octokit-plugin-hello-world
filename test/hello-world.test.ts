import { Octokit } from "@octokit/core";

import { helloWorld } from "../src";

const TestOctokit = Octokit.plugin(helloWorld);

afterEach(() => {
  jest.clearAllMocks();
});

describe("octokit.helloWorld()", () => {
  it("logs 'Hello, world!' by default", () => {
    jest.spyOn(console, "log").mockImplementation();

    const octokit = new TestOctokit();
    octokit.helloWorld();
    expect(console.log).toHaveBeenLastCalledWith("Hello, world!");
  });

  it("Greeting can be configured with `new Octokit({ greeting })`", () => {
    jest.spyOn(console, "log").mockImplementation();

    const octokit = new TestOctokit({ greeting: "Hi" });
    octokit.helloWorld();
    expect(console.log).toHaveBeenLastCalledWith("Hi, world!");
  });
});
