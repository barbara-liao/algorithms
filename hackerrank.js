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
  let output = 0;
  for (let i = 0; i < ar.length; i++) {
    output += ar[i];
  }
  return output;
}

function diagonalDifference(arr) {
  let primDiag = null;
  let seconDiag = null;
  let n = arr.length;

  for (let i = 0; i < arr.length; i++) {
    primDiag += arr[i][i];
    seconDiag += arr[i][(n - 1) - i]
  }
  return Math.abs(primDiag - seconDiag);
}

function plusMinus(arr) {
  let posVal = 0;
  let negVal = 0;
  let zeroVal = 0;
  let length = arr.length;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      zeroVal++;
    } else if (arr[i] > 0) {
      posVal++;
    } else if (arr[i] < 0) {
      negVal++;
    }
  }
  const posProport = posVal / length;
  const negProport = negVal / length;
  const zeroProport = zeroVal / length;

  console.log(posProport.toFixed(6));
  console.log(negProport.toFixed(6));
  console.log(zeroProport.toFixed(6));
}

function staircase(n) {
  for (let i = 1; i <= n; i++) {
    console.log("#".repeat(i).padStart(n));
  }
}

function miniMaxSum(arr) {
  const sortedArr = arr.sort((a, b) => { return a - b })
  const length = arr.length;
  let min = null;
  let max = null;
  for (let i = 0; i < length - 1; i++) {
    min += sortedArr[i];
  }
  for (let j = length - 1; j > length - 5; j--) {
    max += sortedArr[j];
  }
  console.log(min, max);
}

function birthdayCakeCandles(candles) {
  let output = 1;
  let lrgNum = candles[0];

  for (let i = 1; i < candles.length; i++) {
    if (candles[i] > lrgNum) {
      lrgNum = candles[i];
      output = 1;
    } else if (candles[i] === lrgNum) {
      output++;
    }
  }
  return output;
}

function timeConversion(s) {
  const meridiem = s.slice(-2);
  const militaryTime = s.slice(0, 8);
  let arr = militaryTime.split(':');

  if (meridiem === 'AM' && Number(arr[0]) === 12) {
    arr[0] = '00';
    return arr.join(':');
  } else if (meridiem === 'AM' || (meridiem === 'PM' && Number(arr[0]) === 12)) {
    return militaryTime;
  } else if (meridiem === 'PM' && arr[0] !== 12) {
    const newHour = Number(arr[0]) + 12
    arr[0] = newHour;
    return arr.join(':');
  }
}

function cipher(k, s) {
  const xor = (x, y) => x === y ? '0' : '1';
  const ans = new Array(s.length - k + 1);
  ans[0] = s[0];
  for (let i = 1; i < ans.length; i++) {
    ans[i] = i < k ? xor(s[i], s[i - 1]) :
      xor(xor(s[i], s[i - 1]), ans[i - k]);
  }
  return ans.join('');
}
