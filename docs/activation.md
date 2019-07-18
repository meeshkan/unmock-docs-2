# Activating Unmock

Turning Unmock on is quite easy - `unmock.on()`, `unmock.init()` and `unmock.initialize()` (for the extremely verbose) all accomplish the same thing.
Turning Unmock off is similarly easy - `unmock.off()`.

::: tip INFO
Once turned on, Unmock prevents your code from communicating with the internet, including `localhost`. This ensures your code is not exposing any test data (or, more crucially, real world data) to any external services.
:::