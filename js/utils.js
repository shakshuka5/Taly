'use strict'

function isPrimeNumber(number) {
    if (number < 1) throw new Error("number can not be negative or zero");
    if (number === 1) return false;

    var limit = number >> 1;
    for (var i = 2; i <= limit; i++)
    {
        if (number % i === 0) return false;
    }

    return true;
}


function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
