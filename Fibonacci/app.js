function fibArray(n, array = [0, 1]) {
  if (array.length >= n) return array.slice(0, n);
  else {
    return fibArray(n, [
      ...array,
      array[array.length - 1] + array[array.length - 2],
    ]);
  }
}

console.log(fibArray(8));
