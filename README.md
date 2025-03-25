# cortexAI

An SDK to interact with your own OpenAI-compatible API supporting Claude 3.5 Sonnet, LLaMA, DeepSeek, and more.

## Installation

```bash
npm install cortexai
```

## Usage

```ts
import { chatWithModel } from "cortexai";

const response = await chatWithModel({
  model: "claude-3.5-sonnet",
  messages: [{ role: "user", content: "Who are you?" }],
  temperature: 0.7,
});
console.log(response);
```

## Parameters

Supports standard OpenAI parameters:
- `temperature`, `max_tokens`, `top_p`
- Also supports: `top_k`, `repetition_penalty` (via extra_body)

## License

MIT