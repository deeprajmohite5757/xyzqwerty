function getMiddle(s) {
  const length = s.length;
  const middle = Math.floor(length / 2);
  if (length % 2) {
    return s[middle];
  } else {
    return s[middle - 1] + s[middle];
  }
}
