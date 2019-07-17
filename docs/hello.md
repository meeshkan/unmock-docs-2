# Hello World

This guide walks you through through mocking a simple service.  Our service will be called `api.unmock.io` and it will return a single value from its endpoint: `{ hello: "world" }`.

## Install unmock, jest, and axios

First, let's create a project called `hello-unmock`.

```
$ mkdir hello-unmock && cd hello-unmock
$ yarn init -y
$ yarn add -D unmock-node jest axios
```

## Create the `__unmock__` directory

At the toplevel of your project, run the following command.

```
$ mkdir __unmock__ 
```

This creates the `__unmock__` directory in which you'll place all of your service specifications.  Then, run the following command.

```
$ mkdir __unmock__/hello
$ touch __unmock__/hello/index.yml
```

## Filling out `index.yml`

In `index.yml` file you just created, copy and paste the following [`loas3`](https://www.github.com/unmock/loas3) specification.

```yaml
servers:
    - url: api.unmock.io
paths:
    '/':
        hello:
            world
```

## Creating our first test

Unmock works with all major test runners (mocha, jest, etc).  Assuming you have jest installed, create a test called `hello.test.js`.

```js
// hello.test.js
var unmock = require('unmock-node')
var axios = require('axios)

beforeAll(() => {
    unmock.on()
})

test('hello endpoint returns correct JSON', (done) => {
    axios.get('https://api.unmock.io').then((res) => {
        expect(res.data).toEqual({ hello: 'world' })
        done()
    })
})
```

And watch your tests pass with flying colors!

```
$ yarn jest hello.test.js
```

This simple example contains everything we need to be up and running with Unmock - a service specification and a call to `unmock.on()` in our test.

The next sections will focus on defining the service specifications and overriding their default behavior with tweaks on a per-test basis.