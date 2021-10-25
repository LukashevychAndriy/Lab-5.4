const N = +prompt('Введіть значення параметру N'); // Запрошуємо ввід вхідного параметру N

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

console.log(sum0(N));

console.log(sum1(N, N));

console.log(sum2(N, 22));

console.log(sum3(N, N, 0));

console.log(sum4(N, 22, 0));
