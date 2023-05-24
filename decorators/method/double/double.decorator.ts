export function double(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  const method: Function = descriptor.value;

  console.log(`Target: `, target);
  console.log(`PropertyKey:`, propertyKey);
  console.log(`Descriptor: `, descriptor);

  descriptor.value = function (...args) {
    console.log('Received args: ', args);

    const result = method.apply(null, args);

    return result * 2;
  };
}