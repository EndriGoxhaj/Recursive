function merge(a, b, c = [], j = 0, i = 0) {
  if (i == a.length && j == b.length) {
    console.log(c);
    return c;
  }
  if (i == a.length) {
    c.push(...b.slice(++j));
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
let array = merge([2, 12, 33, 45, 65], [12, 22, 43, 65, 70]);
console.log(array);
