# ms-extended

An extension of the [ms](https://github.com/vercel/ms) package that adds support for seconds, minutes, and hours conversions.

## Installation

```bash
npm install ms-extended
```

## Usage

```typescript
import { sec, min, hr } from 'ms-extended'

// Convert to seconds
sec('1m')      // 60
sec('2h')      // 7200
sec('1 day')   // 86400

// Convert to minutes
min('1h')      // 60
min('2 days')  // 2880
min('30s')     // 0.5

// Convert to hours
hr('1 day')    // 24
hr('30m')      // 0.5
hr('2h')       // 2
```

## Features

- Built on top of the popular `ms` package
- TypeScript support with strict types
- Converts time strings to seconds, minutes, or hours
- Supports all time formats from the `ms` package
- Zero dependencies (besides `ms`)

## TypeScript Support

This package includes TypeScript definitions and uses Template Literal Types for type safety:

```typescript
import { sec, StringValue } from 'ms-extended'

function example(value: StringValue) {
  return sec(value)
}

// Valid
example('1h')        // Works
example('2.5 days')  // Works

// Invalid
example('invalid')   // TypeScript error
```

## License

MIT

## Contributing

1. Fork this repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request