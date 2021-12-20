function simpleArraySum(ar) {
  let sum = 0;
  for (let i = 0; i < ar.length; i++) {
    sum += ar[i];
  }
  return sum;
}

function compareTriplets(a, b) {
  const output = [0, 0];
  for (let i = 0; i < a.length; i++) {
    if (a[i] > b[i]) {
      output[0] += 1;
    } else if (a[i] < b[i]) {
      output[1] += 1;
    }
  }
  return output;
}

function aVeryBigSum(ar) {
  let output = 0
  for (let i = 0; i < ar.length; i++) {
    output += ar[i];
  }
  return output;
}
