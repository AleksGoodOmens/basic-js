const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', {
 * repeatTimes: 3,
 * separator: '**',
 * addition: 'PLUS',
 * additionRepeatTimes: 3,
 * additionSeparator: '00'
 * })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
	let res = '';

	const { repeatTimes = 1, separator, addition, additionRepeatTimes, additionSeparator } = options;

	for (let i = 0; i < repeatTimes; i++) {
		res += `${String(str)}${
			addition !== undefined ? addText(String(addition), additionSeparator, additionRepeatTimes) : ''
		}${i === repeatTimes - 1 ? '' : separator || '+'}`;
	}
	return res;

	function addText(text, sep, times = 1) {
		let res = '';
		for (let i = 0; i < times; i++) {
			if (i === times - 1) res += text;
			else res += `${text}${sep || '|'}`;
		}
		return res;
	}
}

module.exports = {
	repeater,
};
