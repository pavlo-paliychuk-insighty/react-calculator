import Big from "big.js";
import math from 'mathjs';

export default function operate(numberOne, numberTwo, operation) {
  const one = Big(numberOne || "0");
  const two = Big(numberTwo || "0");
  if (operation === "+") {
    return one.plus(two).toString();
  }
  if (operation === "-") {
    return one.minus(two).toString();
  }
  if (operation === "x") {
    return one.times(two).toString();
  }
  if (operation === "÷") {
    return one.div(two).toString();
  }
  if (operation === "sqrt") {
    if (two < 0) {
      alert(`Number is negative!!`);
      return null;
    }
    return two.sqrt().toString();
  }
  if (operation === "sin") {
    return Math.sin(two).toString();
  }
  if (operation === "cos") {
    return Math.cos(two).toString();
  }
  if (operation === "tan") {
    return Math.tan(two).toString();
  }
  if (operation === "cot") {
    if (Math.tan(two) === 0) {
      alert('Tan is 0');
      return null
    }
    return (1 / Math.tan(two)).toString();
  }
  if (operation === "ln") {
    return math.log(numberTwo).toString();
  }
  if (operation === "log") {
    return math.log(numberTwo, 10).toString();
  }
  if (operation === '^') {
    return (math.pow(numberOne, numberTwo)).toString();
  }
  if (operation === 'sqrtOfPower') {
    if (numberOne % 2 === 0 && numberOne < 0)  {
      alert('Negative value');
      return null;
    }
    return (math.nthRoot(numberOne, numberTwo)).toString();
  }
  if (operation === "x!") {
    return math.factorial(numberTwo).toString()
  }
  throw Error(`Unknown operation '${operation}'`);
}
