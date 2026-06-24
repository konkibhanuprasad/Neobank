// Project-wide typings to avoid Timer type mismatch between Node and DOM
export {};

declare global {
  // Some environments (Node @types) define Timeout/NodeJS.Timeout; in browser timers are numbers.
  // Treat `Timeout` as `number` to avoid cross-env incompatibilities in setInterval/clearInterval typing.
  type Timeout = number;

  interface Window {
    setInterval(handler: (...args: any[]) => void, timeout?: number): number;
    clearInterval(handle?: number): void;
  }
}
