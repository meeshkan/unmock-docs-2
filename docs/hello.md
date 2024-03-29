# Hello World

This guide walks you through through mocking a simple service. Our service will be called `hello`, and it describes a request made to `api.unmock.io`. The root endpoint returns a single value: `hello` - which is a string.

## Install unmock, jest, and axios

First, let's create a project called `hello-unmock`.

```bash
$ mkdir hello-unmock && cd hello-unmock
$ yarn init -y
$ yarn add -D unmock-node jest axios
$ yarn jest --init
```

## Create the `__unmock__` directory

At the toplevel of your project, run the following command.

```bash
$ mkdir __unmock__
```

This creates the `__unmock__` directory in which you'll place all of your service specifications. Then, run the following command.

```bash
$ mkdir __unmock__/hello
$ touch __unmock__/hello/index.yaml
```

These create the service folder (called `hello` - we'll use this later on when we set a state for the service), and its service specification file.

## Filling out `index.yaml`

In `index.yaml` file you just created, copy and paste the following [`loas3`](https://www.github.com/unmock/loas3) specification.

unmock uses OpenAPI specification under the hood, but allows a lazy notation via `loas3`. In the example below, we automatically infer that `foo` is an example of a string.

```yaml
servers:
  - url: https://api.unmock.io
paths:
  /:
    hello: foo
```

## Creating our first test

Unmock works with all major test runners (mocha, jest, etc). Assuming you have jest installed, create a test called `hello.test.js`.

```js
// hello.test.js
var unmock = require("unmock-node");
var axios = require("axios");

beforeAll(() => {
  unmock.on();
});

test("hello endpoint returns correct JSON", async () => {
  var res = await axios.get("https://api.unmock.io");
  expect(Object.keys(res.data).length).toEqual(1);
  expect(res.data.hello).toBeDefined();
  expect(typeof res.data.hello === "string").toBeTruthy();
});
```

And watch your tests pass with flying colors!

```bash
$ yarn jest hello.test.js
```

This simple example contains everything we need to be up and running with Unmock - a service specification and a call to `unmock.on()` in our test.

## Returning a specific value

With unmock, you no longer have to worry about mocking the response and/or overriding your code's default behaviour. However, we often want to check against our code against specific values. This is where the state management for `unmock` kicks in. To complete our introduction, add the following to `hello.test.js`:

```js
// ...
// previous code
// ...

test("setting a value for endpoint", async () => {
  unmock.states().hello({ hello: "world" });
  var res = await axios.get("https://api.unmock.io");
  expect(res.data).toEqual({ hello: "world" });
});
```

The next sections will focus on defining the service specifications and overriding their default behavior with tweaks on a per-test basis.
