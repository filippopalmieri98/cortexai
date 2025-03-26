"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.chatWithModel = chatWithModel;
function chatWithModel(_a) {
    return __awaiter(this, arguments, void 0, function* ({ model, messages, temperature = 0.7, max_tokens = 300, top_p = 0.95, top_k, repetition_penalty, apiUrl = "https://338b0cf3-5fc9-4584-8146-2a75cfaf3e9e-00-1qrp5tlx75ms1.spock.replit.dev/v1/chat/completions" }) {
        const body = {
            model,
            messages,
            temperature,
            max_tokens,
            top_p
        };
        if (top_k !== undefined || repetition_penalty !== undefined) {
            body.extra_body = {};
            if (top_k !== undefined)
                body.extra_body.top_k = top_k;
            if (repetition_penalty !== undefined)
                body.extra_body.repetition_penalty = repetition_penalty;
        }
        const response = yield fetch(apiUrl, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body),
        });
        if (!response.ok) {
            const errorText = yield response.text();
            throw new Error(`LLM API error: ${response.status} – ${errorText}`);
        }
        const data = yield response.json();
        return data.choices[0].message.content;
    });
}
