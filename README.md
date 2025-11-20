# Neglect SDK (TypeScript)

Official TypeScript SDK for Neglect — fast Solana market data APIs for developers, analysts, and trading tools.

## Install

```bash
npm install neglect
```

or with yarn:

```bash
yarn add neglect
```

## Authentication

Create your API key at:

https://neglect.trade/developers

Store it in your environment:

```ini
NEGLECT_API_KEY=your_key_here
```

## Quick Start

```ts
import { NeglectClient } from "neglect";

const neglect = new NeglectClient({
  apiKey: process.env.NEGLECT_API_KEY!,
});

const data = await neglect.tokens.price(
  "So11111111111111111111111111111111111111112"
);

console.log(data);
```

## Available Methods

The SDK mirrors the Neglect API. Full endpoint reference:

https://docs.neglect.trade/products/data-services

### Example

```ts
const price = await neglect.tokens.price(address);
```

## License

MIT
