const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
	return Math.max(
		...n
			.toString()
			.split('')
			.map((_, i, arr) => Number(arr.filter((_, j) => j !== i).join('')))
	);
}

module.exports = {
	deleteDigit,
};
