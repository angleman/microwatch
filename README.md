# microwatch

Stopwatch with microseconds (1/1000th of millisecond) resolution 

## Install

```sh
npm install microwatch
```

## Usage

```js
// microsecond microwatch
stopwatch = new require('microwatch')() // start() automatically called
stopwatch.start() // start watch at 0
duration  = stopwatch.now() // 1

// floating point microwatch in seconds
stopwatch = new require('microwatch')(true) // start() automatically called
stopwatch.start() // start watch at 0
duration  = stopwatch.now() // 0.000001
```

## License

### MIT
