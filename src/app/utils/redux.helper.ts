export function deepCopy<T>(object: T): T {
  return Object.assign({}, object)
}

export interface Action<T> {
  type: string | symbol;
  payload: T;
}
