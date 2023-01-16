//  sum, substraction(sub), mult, division(div)
// node calc.js sum 5 6 2
// node calc.js mult 5 6 2

// console.log(process.argv);
const [, , operation, ...data] = process.argv;
console.log(operation);

const numbers = data.map((item) => Number(item));
console.log(numbers);

const getResult = (op, arr) => {
  let result = null;
  switch (op) {
    case "sum":
      result = arr.reduce((acc, elem) => acc + elem);
      break;
    case "sub":
      result = arr.reduce((acc, elem) => acc - elem);
      break;
    case "mult":
      result = arr.reduce((acc, elem) => acc * elem);
      break;
    case "div":
      result = arr.reduce((acc, elem) => acc / elem);
      break;

    default:
      result = "Unknown type of operation";
      break;
  }
  return result;
};
console.log(getResult(operation, numbers));
