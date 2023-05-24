import { logMethod } from "./logger.decorator";

class Calculator {
  @logMethod
  add(a: number, b: number): number {
    return a + b;
  }
}

const calculator = new Calculator();
const result = calculator.add(5, 7);

console.log("Result:", result);
