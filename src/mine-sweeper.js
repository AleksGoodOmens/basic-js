const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
	return matrix.reduce((acc, curL, indx, mat) => {
		const mineField = curL.map((line, i) => {
			if (line) {
				return 1;
			} else {
				let counter = 0;

				// top line mines
				if (indx > 0) {
					if (i > 0) {
						if (mat[indx - 1][i - 1]) counter++;
					}
					if (mat[indx - 1][i]) counter++;
					if (i < curL.length - 1) {
						if (mat[indx - 1][i + 1]) counter++;
					}
				}
				// middle line mines
				if (i > 0) {
					if (mat[indx][i - 1]) counter++;
				}
				if (i < curL.length - 1) {
					if (mat[indx][i + 1]) counter++;
				}

				// bottom line mines
				if (indx < mat.length - 1) {
					if (i > 0) {
						if (mat[indx + 1][i - 1]) counter++;
					}
					if (mat[indx + 1][i]) counter++;

					if (i < curL.length - 1) {
						if (mat[indx + 1][i + 1]) counter++;
					}
				}

				return counter;
			}
		});
		acc.push(mineField);
		return acc;
	}, []);
}

module.exports = {
	minesweeper,
};
