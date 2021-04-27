function expression(number, operation) {
  if (operation === undefined) {
    return number;
  }
  return operation(number);
}

function zero(operation) {
  return expression(0, operation);
}
function one(operation) {
  return expression(1, operation);
}
function two(operation) {
  return expression(2, operation);
}
function three(operation) {
  return expression(3, operation);
}
function four(operation) {
  return expression(4, operation);
}
function five(operation) {
  return expression(5, operation);
}
function six(operation) {
  return expression(6, operation);
}
function seven(operation) {
  return expression(7, operation);
}
function eight(operation) {
  return expression(8, operation);
}
function nine(operation) {
  return expression(9, operation);
}

function plus(num1) {
  return function (num2) {
    return num2 + num1;
  };
}
function minus(num1) {
  return function (num2) {
    return num2 - num1;
  };
}
function times(num1) {
  return function (num2) {
    return num2 * num1;
  };
}
function dividedBy(num1) {
  return function (num2) {
    return Math.floor(num2 / num1);
  };
}