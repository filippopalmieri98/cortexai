export interface ChatMessage {
  role: "user" | "assistant" | "system";
  content: string;
}

export interface ChatRequest {
  model: string;
  messages: ChatMessage[];
  temperature?: number;
  max_tokens?: number;
  top_p?: number;
  top_k?: number;
  repetition_penalty?: number;
  apiUrl?: string;
}

const chatWithModel = async ({
  model,
  messages,
  temperature = 0.7,
  max_tokens = 300,
  top_p = 0.95,
  top_k,
  repetition_penalty,
  apiUrl = "https://338b0cf3-5fc9-4584-8146-2a75cfaf3e9e-00-1qrp5tlx75ms1.spock.replit.dev/v1/chat/completions"
}: ChatRequest): Promise<string> => {
  const body: any = {
    model,
    messages,
    temperature,
    max_tokens,
    top_p
  };

  if (top_k !== undefined || repetition_penalty !== undefined) {
    body.extra_body = {};
    if (top_k !== undefined) body.extra_body.top_k = top_k;
    if (repetition_penalty !== undefined) body.extra_body.repetition_penalty = repetition_penalty;
  }

  const response = await fetch(apiUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`LLM API error: ${response.status} – ${errorText}`);
  }

  const data = await response.json();
  return data.choices[0].message.content;
<<<<<<< HEAD
}
=======
};

export default chatWithModel;
>>>>>>> 5d8b856 (Initial commit)
