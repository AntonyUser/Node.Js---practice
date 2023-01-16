const CalculatorOOP = require("./CalculatorOOP");
const { operation, numbers } = require("./getData");
const calc = CalculatorOOP.init(operation, numbers);
console.log(calc);
