export function logMethod(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;

  console.log(`Target: `, target);
  console.log(`PropertyKey:`, propertyKey);
  console.log(`Descriptor: `, descriptor);

  descriptor.value = function (...args: any[]) {
    console.log(`Calling method ${propertyKey} with arguments:`, args);

    const result = originalMethod.apply(null, args);

    console.log(`Method ${propertyKey} returned:`, result);

    return result;
  };
}