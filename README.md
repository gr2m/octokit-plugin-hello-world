# octokit-plugin-hello-world

> Simple Octokit.js plugin for demo purposes

[![@latest](https://img.shields.io/npm/v/octokit-plugin-hello-world.svg)](https://www.npmjs.com/package/octokit-plugin-hello-world)
[![Build Status](https://github.com/gr2m/octokit-plugin-hello-world/workflows/Test/badge.svg)](https://github.com/gr2m/octokit-plugin-hello-world/actions?workflow=Test)
[![Greenkeeper](https://badges.greenkeeper.io/gr2m/octokit-plugin-hello-world.svg)](https://greenkeeper.io/)

## Usage

<table>
<tbody valign=top align=left>
<tr><th>
Browsers
</th><td width=100%>

Load `octokit-plugin-hello-world` and [`@octokit/core`](https://github.com/octokit/core.js) (Or others such as [`@octokit/rest`](https://github.com/octokit/rest.js)) directly from [cdn.pika.dev](https://cdn.pika.dev)

```html
<script type="module">
  import { Octokit } from "https://cdn.pika.dev/@octokit/core";
  import { helloWorld } from "https://cdn.pika.dev/octokit-plugin-hello-world";
</script>
```

</td></tr>
<tr><th>
Node
</th><td>

Install with <code>npm install octokit-plugin-hello-world</code>

```js
const { Octokit } = require("@octokit/core");
const { helloWorld } = require("octokit-plugin-hello-world");
```

</td></tr>
</tbody>
</table>

```js
const MyOctokit = Octokit.plugin(helloWorld);

const octokit = new MyOctokit();
octokit.helloWorld();
// logs "Hello, world!
```

See [`@octoki/core`](https://github.com/octokit/core.js) for available APIs to create more advanced plugins.

## License

[MIT](LICENSE)
