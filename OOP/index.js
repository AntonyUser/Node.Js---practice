const CalculatorOOP = require("./CalculatorOOP");
const { operation, numbers } = require("./getData");
const calc = new CalculatorOOP(operation, numbers);
console.log(calc.init());
