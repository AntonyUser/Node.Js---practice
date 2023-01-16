const [, , operation, ...data] = process.argv;
const numbers = data.map((item) => Number(item));

module.exports = {
  operation,
  numbers,
};
