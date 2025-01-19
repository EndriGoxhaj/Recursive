function merge(a, b, c = [], j = 0, i = 0) {
  if (i == a.length && j == b.length) {
    return c;
  }
  if (i == a.length) {
    c.push(...b.slice(j));
    return c;
  }
  if (j == b.length) {
    c.push(...a.slice(i));
    return c;
  }
  if (a[i] <= b[j]) {
    c.push(a[i++]);
    return merge(a, b, c, j, i);
  } else {
    c.push(b[j++]);
    return merge(a, b, c, j, i);
  }
}

function mergeSort(array) {
  if (array.length <= 1) {
    return array;
  } else {
    const m = Math.floor(array.length / 2);
    const left = mergeSort(array.slice(0, m));
    const right = mergeSort(array.slice(m));
    return merge(left, right);
  }
}

let array = [8, 3, 44, 12, 43, 22, 98];
let arrayb = [32, 5, 3, 4, 76, 987, 42, 1344, 53, 3];
console.log(mergeSort(array));
