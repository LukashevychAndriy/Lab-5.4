function sum0(N) {
  let sum = 0;

  for (let i = N; i <= 22; i++) {
    sum += (Math.sqrt(Math.pow(i, 2) + Math.pow(N, 2))) / i;
  }

  return sum;
}

function sum1(N, i) {
  if (i > 22) {
    return 0;
  } else {
    return (Math.sqrt(Math.pow(i, 2) + Math.pow(N, 2))) / i + sum1(N, ++i);
  }
}

function sum2(N, i) {
  if (i < N) {
    return 0;
  } else {
    return (Math.sqrt(Math.pow(i, 2) + Math.pow(N, 2))) / i + sum2(N, --i);
  }
}

function sum3(N, i, t) {
  t = (Math.sqrt(Math.pow(i, 2) + Math.pow(N, 2))) / i + t;

  if (i >= 22) {
    return t;
  } else {
    return sum3(N, ++i, t);
  }
}

function sum4(N, i, t) {
  t = (Math.sqrt(Math.pow(i, 2) + Math.pow(N, 2))) / i + t;

  if (N >= i) {
    return t;
  } else {
    return sum4(N, --i, t);
  }
}

module.exports = {sum0, sum1, sum2, sum3, sum4};
