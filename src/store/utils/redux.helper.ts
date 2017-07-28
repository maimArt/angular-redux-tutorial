
export interface Action<T> {
  type: string | symbol;
  payload?: T;
  error?: any;
}

export function deepFreeze<T>(object:T):T {
  Object.freeze(object);
  if (object === undefined) {
    return object;
  }

  Object.getOwnPropertyNames(object).forEach(function (prop) {
    if (!Object.isFrozen(object[prop])) {
      deepFreeze(object[prop]);
    }
  });

  return object;
};
