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
	return matrix.map((row, rowIndex) =>
		row.map((cell, colIndex) => {
			if (cell) return 1;

			let counter = 0;

			for (let dx = -1; dx <= 1; dx++) {
				for (let dy = -1; dy <= 1; dy++) {
					if (dx === 0 && dy === 0) continue;

					const newRow = rowIndex + dx;
					const newCol = colIndex + dy;

					if (newRow >= 0 && newRow < matrix.length && newCol >= 0 && newCol < row.length && matrix[newRow][newCol]) {
						counter++;
					}
				}
			}

			return counter;
		})
	);
}

module.exports = {
	minesweeper,
};
