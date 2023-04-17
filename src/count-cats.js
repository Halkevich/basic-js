const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {

  let a = 0;
  let result = [].concat(...matrix);
  for (let i = 0; i < result.length; i++) {
    if (result[i] == '^^') {
      a++;
    }

  }
  return a
}

module.exports = {
  countCats
};
