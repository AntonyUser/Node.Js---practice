class CalculatorOOP {
  static getResult = (op, arr) => {
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
  static init = (op, arr) => {
    console.log(this);
    return this.getResult(op, arr);
  };
}

module.exports = CalculatorOOP;
