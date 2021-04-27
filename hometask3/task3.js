function exception(msg) {
  this.message = msg;
  this.name = "TypeError";
}
function addElement(array, n, v) {
  if (n !== 0) {
    array.push(v);
    addElement(array, n - 1, v);
  }
  return array;
}

function prefill(n, v) {
  if (typeof n === "boolean") throw new exception(`${n} is invalid`);
  if (n == 0) return [];
  if (!Number.isInteger(n) || n < 0) {
    console.log("n in inside throw " + n);
    throw new exception(`${n} is invalid`);
  } else {
    var array = [];
    return addElement(array, n, v);
  }
}
