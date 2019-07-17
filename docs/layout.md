# Service Layout

In Unmock, a service represents a third-party API or microservice with which your codebase interacts.  Things like Stripe, Facebook, or that pesky microservice you use to make sure users' avatars are up-to-date are all services.

## Directory structure

Every service in Unmock should be in a subfolder of the `__unmock__` folder in the root directory of a project. The subfolders must be alphanumeric and must not begin with a number.  Generally, for clarity, it is a good idea to name them after the service.  So, for example, if you are interacting with the GitHub API, `__unmock__/github` should contain the service definition for the github API.

```
__unmock__/
    github/
        index.yml
    slack/
        index.yml
package.json
src/
tests/
```

We'll talk about how to fetch the GitHub and other service definitions in [Fetching Services](/fetching).

## Service specification

In Unmock, services are simply documents designed according to the [OpenAPI 3.0.0 specification](https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.0.md).

Unmock is able to turn most OpenAPI specifications into viable mocks without any tinkering, but there are a few service extensions we provide to make the mocks moxier.  Unmock uses the `x-` pattern defined in the [OpenAPI specification](https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.0.md#specificationExtensions).

### `x-unmock-concat`

In an OpenAPI Schema object, `x-unmock-concat` concatenates a string.

```yaml
type: string
x-unmock-concat:
    - foo
    - bar
```