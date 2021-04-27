function partitionOn(pred, array) {
  var items = [];
  var index = 0,
    element;
  while (index < array.length) {
    element = array[index];
    if (pred(element)) {
      items.push(element);
      array.splice(index, 1);
    } else {
      index++;
    }
  }
  var len = array.length;
  items.forEach((element) => {
    array.push(element);
  });
  console.log(array);
  return len;
}
