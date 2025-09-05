/// <reference types="react" />
/// <reference types="react-dom" />

declare global {
  // Browser globals that ESLint doesn't recognize
  const HTMLInputElement: typeof globalThis.HTMLInputElement;
  const HTMLTextAreaElement: typeof globalThis.HTMLTextAreaElement;
  const HTMLSelectElement: typeof globalThis.HTMLSelectElement;
  const HTMLFormElement: typeof globalThis.HTMLFormElement;
  const HTMLSpanElement: typeof globalThis.HTMLSpanElement;
  const Blob: typeof globalThis.Blob;
}

export {};
