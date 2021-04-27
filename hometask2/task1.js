function countWords(str) {
  str = str + " ";
  var count = 0,
    flag;
  for (let index = 0; index <= str.length; index++) {
    const element = str.charAt(index);
    if (element !== " " && element !== "﻿") {
      flag = 1;
    } else if (flag === 1) {
      count++;
      flag = 0;
    }
  }
  return count;
}
