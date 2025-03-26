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
declare const chatWithModel: ({ model, messages, temperature, max_tokens, top_p, top_k, repetition_penalty, apiUrl }: ChatRequest) => Promise<string>;
export default chatWithModel;
