var romanNumeralHash = {
  "I" : 1,
  "V" : 5,
  "X" : 10,
  "L" : 50,
  "C" : 100,
  "D" : 500,
  "M" : 1000
};

function romanNumeralTranslator(romanNumeral) {
  if (typeof romanNumeral !== "string") {
    return null;
  }
  var sum = 0;
  var numericalArray = romanNumeral.split('').map(function (char) {
    return romanNumeralHash[char] ? romanNumeralHash[char] : -1;
  });
  
  if (numericalArray.includes(-1)) {
    return null;
  }
  
  for (var i = 0; i < numericalArray.length;) {
    if (!!numericalArray[i +1] && numericalArray[i] < numericalArray[i +1]) {
      sum += (numericalArray[i +1] - numericalArray[i]);
      i += 2;
    } else {
      sum += numericalArray[i];
      i++;
    }
  }
  
  return sum;
}

