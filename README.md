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

const client = new NeglectClient({
  apiKey: process.env.NEGLECT_API_KEY!,
});

const data = await client.tokens.price(
  "So11111111111111111111111111111111111111112"
);

console.log(data);
```

## Available Methods

### tokens.price(address: string)

Fetch the latest price, market cap, and liquidity.

```ts
const price = await client.tokens.price(address);
```

Response example:

```json
{
  "price": 0.0025,
  "mcap": 125000,
  "liquidity": 34000
}
```

## Documentation

https://docs.neglect.trade/products/data-services

## License

MIT
