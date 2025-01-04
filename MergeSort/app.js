class mergeSort {
  constructor(arr) {
    this.arr = arr;
  }
  sort(left, right) {
    let mid = this.arr.length / 2;
    left = this.arr.slice(0, mid);
    right = this.arr.slice(0);
    return { left, right };
  }
  merge;
}
let array = new sort([3, 23, 4, 54, 2, 41, 9]);
let newArray = array.sort();
console.log(newArray.left);
