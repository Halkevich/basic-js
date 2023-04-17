const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  let arr = n.split('-')
  console.log(arr)
  if (arr.length === 6) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].length > 2) {
        return false
      } else {
        for (let j = 0; j < arr[i].length; j++) {

          let srt = arr[i][j].replace(/[abcdf]/gi, 6)


          let num = Number(srt)

          if (!isNaN(num)) {
            return true
          } else {
            return false
          }
        }

      }
    }
  } else {
    return false
  }

}
module.exports = {
  isMAC48Address
};
