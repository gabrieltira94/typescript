import { double } from "./double.decorator";

class Calculator {
  @double
  add(a: number, b: number): number {
    return a + b;
  }
}

const calculator = new Calculator();
const result = calculator.add(5, 7);

console.log("Result of doubling 5 + 7:", result);