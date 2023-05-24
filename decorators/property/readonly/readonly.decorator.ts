export function readonly(target: any, propertyKey: string) {
  let value = target[propertyKey];

  const getter = function () {
    return value;
  };

  const setter = function () {
    console.log(`Cannot assign a new value to read-only property '${propertyKey}'`);
  };

  Object.defineProperty(target, propertyKey, {
    get: getter,
    set: setter,
    enumerable: true,
    configurable: true,
  });
}
