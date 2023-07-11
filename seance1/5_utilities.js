module.exports = function(numbersToSum) {
  let sum = 0,
    i = 0,
    l = numbersToSum.length;
    while (i < l) {
        sum += numbersToSum[i++]
    }
    return sum
}
