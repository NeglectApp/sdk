# Neglect SDK (TypeScript)

Official TypeScript SDK for Neglect Data Services — fast, reliable Solana market data.

## Install

Temporary development package:

```bash
npm install @neglectapp/sdk
```

Final package (once cooldown expires):

```bash
npm install neglect
```

## Authentication

Create an API key at:

https://neglect.trade/developers

Store it in your `.env` file:

```
NEGLECT_API_KEY=your_key_here
```

## Quick Start

```ts
import "dotenv/config";
import { NeglectClient } from "@neglectapp/sdk";

// Recommended usage:
const neglect = new NeglectClient({
  apiKey: process.env.NEGLECT_API_KEY!,
});

const price = await neglect.tokens.price(
  "So11111111111111111111111111111111111111112"
);

console.log(price);
```

## Documentation

Full API reference and endpoint documentation:

https://docs.neglect.trade/products/data-services

## License

MIT
