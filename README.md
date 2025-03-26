# cortexAI

An SDK to interact with your own OpenAI-compatible API supporting OpenAI GPT 4o, Claude 3.5 Sonnet, LLaMA Models, DeepSeek r1, and more.

## Installation

```bash
npm install cortexai
```

## Usage

```ts
import chatWithModel from "cortexai";

const response = await chatWithModel({
  model: "gpt-4o",
  messages: [{ role: "user", content: "Tell me a joke about robots." }],
  temperature: 0.7,
});
console.log(response);
```

## Supported Models

- `deepseek-v3`
- `deepseek-r1`
- `llama-3.3-70b`
- `llama-3.2-3b`
- `claude-3.5-sonnet`
- `gpt-4o`

## Parameters

Supports standard OpenAI parameters:
- `temperature`, `max_tokens`, `top_p`
- Also supports: `top_k`, `repetition_penalty` (via `extra_body`)

## License

Open source
