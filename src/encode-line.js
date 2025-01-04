const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
	const test = str.split('');
	let res = '';
	let counter = 1;

	test.forEach((char, index) => {
		if (char === test[index + 1]) {
			counter++;
		} else {
			res += `${counter === 1 ? '' : counter}${char}`;
			counter = 1;
		}
	});
	return res;
}

module.exports = {
	encodeLine,
};
