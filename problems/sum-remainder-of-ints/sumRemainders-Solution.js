function sumRemainders (x, y) {
  if (typeof x !== 'number' || typeof y !== 'number') {
    return "Must pass numbers are arguments";
  }
  var sum = 0;
  if (x > y) {
    var factor = Math.floor(x/y),
          remainder = x - (y * factor);
    sum = subRoutine(y - 1);
    sum *= factor;
    if (remainder > 0) {
      sum += subRoutine(remainder);
    }
  } else if (x < y) {
    sum = subRoutine(x);
  } else if (x === y) {
    sum = subRoutine(y - 1);
  }
  return sum;
}

function subRoutine (end) {
  return (end * (end + 1) ) / 2;
}
