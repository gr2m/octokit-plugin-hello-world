import { VERSION } from "./version";

type Octokit = any;
type HelloWorldPluginOptions = {
  greeting?: string;
  [key: string]: any;
};

/**
 * `helloWorld` is a demo Octokit plugin to show it works :)
 * It adds a new `octokit.helloWorld()` method which logs "Hello, World" by default.
 * The greeting can be configured by passing a `greeting` option to the Octokit constructor.
 *
 * Example
 *
 * ```js
 * const octokit = new Octokit({ greeting: "Hi" })
 * octokit.helloWorld()
 * // logs "Hi, world!"
 * ```
 *
 * @param octokit Octokit instance
 * @param options Options passed to Octokit constructor
 */
export function helloWorld(
  octokit: Octokit,
  { greeting = "Hello" }: HelloWorldPluginOptions
) {
  octokit.helloWorld = () => console.log(`${greeting}, world!`);
}
helloWorld.VERSION = VERSION;
