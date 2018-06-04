import Big from "big.js";

import operate from "./operate";
import isNumber from "./isNumber";

export default function calculate(obj, buttonName) {
  if (buttonName === "AC") {
    return {
      total: null,
      next: null,
      operation: null,
    };
  }

  if (isNumber(buttonName)) {
    if (buttonName === "0" && obj.next === "0") {
      return {};
    }
    if (obj.operation) {
      if (obj.next) {
        return { next: obj.next + buttonName };
      }
      return { next: buttonName };
    }
    if (obj.next) {
      return {
        next: obj.next + buttonName,
        total: null,
      };
    }
    return {
      next: buttonName,
      total: null,
    };
  }

  if (buttonName === "%") {
    if (obj.operation && obj.next) {
      const result = operate(obj.total, obj.next, obj.operation);
      return {
        total: Big(result)
          .div(Big("100"))
          .toString(),
        next: null,
        operation: null,
      };
    }
    if (obj.next) {
      return {
        next: Big(obj.next)
          .div(Big("100"))
          .toString(),
      };
    }
    return {};
  }

  if (buttonName === ".") {
    if (obj.next) {
      if (obj.next.includes(".")) {
        return {};
      }
      return { next: obj.next + "." };
    }
    return { next: "0." };
  }

  if (buttonName === "=") {
    if (obj.next && obj.operation) {
      return {
        total: operate(obj.total, obj.next, obj.operation),
        next: null,
        operation: null,
      };
    } else {
      return {};
    }
  }

  if (buttonName === "sqrt") {
    if (obj.next) {
      return {
        total: operate(null, obj.next, 'sqrt'),
        next: null,
        operation: null,
      };
    } if (obj.total && !obj.next) {
      return {
        total: operate(null, obj.total, 'sqrt'),
        next: null,
        operation: null,
      };
    } else {
      return {};
    }
  }

  if (buttonName === "sin") {
    if (obj.next) {
      return {
        total: operate(null, obj.next, 'sin'),
        next: null,
        operation: null,
      };
    } if (obj.total && !obj.next) {
      return {
        total: operate(null, obj.total, 'sin'),
        next: null,
        operation: null,
      };
    } else {
      return {};
    }
  }
  if (buttonName === "cos") {
    if (obj.next) {
      return {
        total: operate(null, obj.next, 'cos'),
        next: null,
        operation: null,
      };
    } if (obj.total && !obj.next) {
      return {
        total: operate(null, obj.total, 'cos'),
        next: null,
        operation: null,
      };
    } else {
      return {};
    }
  }

  if (buttonName === "tan") {
    if (obj.next) {
      return {
        total: operate(null, obj.next, 'tan'),
        next: null,
        operation: null,
      };
    } if (obj.total && !obj.next) {
      return {
        total: operate(null, obj.total, 'tan'),
        next: null,
        operation: null,
      };
    } else {
      // '=' with no operation, nothing to do
      return {};
    }
  }

  if (buttonName === "cot") {
    if (obj.next) {
      return {
        total: operate(null, obj.next, 'cot'),
        next: null,
        operation: null,
      };
    }
    if (obj.total && !obj.next) {
      return {
        total: operate(null, obj.total, 'cot'),
        next: null,
        operation: null,
      };
    } else {
      return {};
    }
  }

  if (buttonName === "ln") {
    if (obj.next) {
      return {
        total: operate(null, obj.next, 'ln'),
        next: null,
        operation: null,
      };
    } if (obj.total && !obj.next) {
      return {
        total: operate(null, obj.total, 'ln'),
        next: null,
        operation: null,
      };
    } else {
      // '=' with no operation, nothing to do
      return {};
    }
  }

  if (buttonName === "log") {
    if (obj.next) {
      return {
        total: operate(null, obj.next, 'log'),
        next: null,
        operation: null,
      };
    } if (obj.total && !obj.next) {
      return {
        total: operate(null, obj.total, 'log'),
        next: null,
        operation: null,
      };
    } else {
      return {};
    }
  }

  if (buttonName === "x!") {
    if (obj.next) {
      return {
        total: operate(null, obj.next, 'x!'),
        next: null,
        operation: null,
      };
    } if (obj.total && !obj.next) {
      return {
        total: operate(null, obj.total, 'x!'),
        next: null,
        operation: null,
      };
    } else {
      return {};
    }
  }

  if (buttonName === "+/-") {
    if (obj.next) {
      return { next: (-1 * parseFloat(obj.next)).toString() };
    }
    if (obj.total) {
      return { total: (-1 * parseFloat(obj.total)).toString() };
    }
    return {};
  }
  if (obj.operation) {
    return {
      total: operate(obj.total, obj.next, obj.operation),
      next: null,
      operation: buttonName,
    };
  }

  if (!obj.next) {
    return { operation: buttonName };
  }

  return {
    total: obj.next,
    next: null,
    operation: buttonName,
  };
}
