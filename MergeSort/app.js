function merge(a, b, c = [], j = 0, i = 0, k = 0) {
  if (i == a.length && j == b.length) {
    console.log(c);
    return c;
  }
  if (a[i] <= b[j]) {
    c[k++] = a[i++];
  } else c[k++] = b[j++];
  if (i == a.length && j != b.length) {
    c.push(...b.slice(++j));
    j = b.length;
    return merge(a, b, c, j, i, k);
  } else {
    c.push(...a.slice(i));
    i = a.length;
    return merge(a, b, c, j, i, k);
  }
}
let array = merge([2, 12, 33, 45, 65], [12, 22, 43, 65, 70]);
console.log(array);
