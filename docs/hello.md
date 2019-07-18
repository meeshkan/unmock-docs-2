# Hello World

This guide walks you through through mocking a simple service. Our service will be called `api.unmock.io` and it will return a single value from its endpoint: `hello`, which is a string.

## Install unmock, jest, and axios

First, let's create a project called `hello-unmock`.

```
$ mkdir hello-unmock && cd hello-unmock
$ yarn init -y
$ yarn add -D unmock-node jest axios
$ yarn jest --init
```

## Create the `__unmock__` directory

At the toplevel of your project, run the following command.

```
$ mkdir __unmock__
```

This creates the `__unmock__` directory in which you'll place all of your service specifications. Then, run the following command.

```
$ mkdir __unmock__/hello
$ touch __unmock__/hello/index.yaml
```

## Filling out `index.yaml`

In `index.yaml` file you just created, copy and paste the following [`loas3`](https://www.github.com/unmock/loas3) specification.

```yaml
servers:
  - url: https://api.unmock.io
paths:
  /:
    hello: foo
```

unmock uses OpenAPI specification under the hood, but allows a lazy notation while writing specifications. In the above example, we automatically infer that `foo` is an example of a string.

## Creating our first test

Unmock works with all major test runners (mocha, jest, etc). Assuming you have jest installed, create a test called `hello.test.js`.

```js
// hello.test.js
var unmock = require("unmock-node");
var axios = require("axios");

unmock.on();

test("hello endpoint returns correct JSON", async () => {
  var res = await axios.get("https://api.unmock.io");
  expect(Object.keys(res.data).length).toEqual(1);
  expect(res.data.hello).toBeDefined();
  expect(typeof res.data.hello === "string").toBeTruthy();
});
```

And watch your tests pass with flying colors!

```
$ yarn jest hello.test.js
```

This simple example contains everything we need to be up and running with Unmock - a service specification and a call to `unmock.on()` in our test.

The next sections will focus on defining the service specifications and overriding their default behavior with tweaks on a per-test basis.
