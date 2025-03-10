const { expect, assert } = require('chai');
const { testOptional } = require('../extensions/index.js');
const { repeater } = require('../src/extended-repeater.js');

it.optional = testOptional;

Object.freeze(expect);
Object.freeze(assert);

describe('Extended repeater', () => {
	// Presence requirement

	describe('variable presence', () => {
		it.optional('function repeater exists', () => {
			expect(repeater).to.exist;
		});
	});

	//Specific requirements

	describe('base & functional requirements', () => {
		it.optional('repeats string properly', () => {
			assert.equal(repeater('la', { repeatTimes: 3 }), 'la+la+la');
			assert.equal(repeater('single', { repeatTimes: 1 }), 'single');
			assert.equal(repeater('12345', { repeatTimes: 5 }), '12345+12345+12345+12345+12345');
		});

		it.optional('supports custom separator', () => {
			assert.equal(repeater('la', { repeatTimes: 3, separator: 's' }), 'laslasla');
			assert.equal(repeater('point', { repeatTimes: 3, separator: '&&&' }), 'point&&&point&&&point');
			assert.equal(
				repeater('12345', { repeatTimes: 5, separator: '3 words separator' }),
				'123453 words separator123453 words separator123453 words separator123453 words separator12345'
			);
		});

		it.optional('supports basic addition', () => {
			assert.equal(
				repeater('la', { repeatTimes: 3, separator: 's', addition: '+', additionRepeatTimes: 1 }),
				'la+sla+sla+'
			);
			assert.equal(
				repeater('LALA', { repeatTimes: 3, separator: 's', addition: '++', additionRepeatTimes: 1 }),
				'LALA++sLALA++sLALA++'
			);
		});

		it.optional('supports missing repeat counters', () => {
			assert.equal(
				repeater('TESTstr', { separator: 'ds', addition: 'ADD!', additionSeparator: ')))000' }),
				'TESTstrADD!'
			);
		});

		it.optional('some pack of tests', () => {
			assert.equal(
				repeater('9UXKEEt8Aq', {
					repeatTimes: 4,
					separator: '1L467Kdqx2',
					addition: 'IMqCarClDg',
					additionRepeatTimes: 8,
					additionSeparator: 'U7L9D0f8pb',
				}),
				'9UXKEEt8AqIMqCarClDgU7L9D0f8pbIMqCarClDgU7L9D0f8pbIMqCarClDgU7L9D0f8pbIMqCarClDgU7L9D0f8pbIMqCarClDgU7L9D0f8pbIMqCarClDgU7L9D0f8pbIMqCarClDgU7L9D0f8pbIMqCarClDg1L467Kdqx29UXKEEt8AqIMqCarClDgU7L9D0f8pbIMqCarClDgU7L9D0f8pbIMqCarClDgU7L9D0f8pbIMqCarClDgU7L9D0f8pbIMqCarClDgU7L9D0f8pbIMqCarClDgU7L9D0f8pbIMqCarClDgU7L9D0f8pbIMqCarClDg1L467Kdqx29UXKEEt8AqIMqCarClDgU7L9D0f8pbIMqCarClDgU7L9D0f8pbIMqCarClDgU7L9D0f8pbIMqCarClDgU7L9D0f8pbIMqCarClDgU7L9D0f8pbIMqCarClDgU7L9D0f8pbIMqCarClDgU7L9D0f8pbIMqCarClDg1L467Kdqx29UXKEEt8AqIMqCarClDgU7L9D0f8pbIMqCarClDgU7L9D0f8pbIMqCarClDgU7L9D0f8pbIMqCarClDgU7L9D0f8pbIMqCarClDgU7L9D0f8pbIMqCarClDgU7L9D0f8pbIMqCarClDgU7L9D0f8pbIMqCarClDg'
			);
			assert.equal(
				repeater('5tz2rIiyuQ', {
					repeatTimes: 6,
					separator: 'HWG1Oh8oRJ',
					addition: 'u2xi8NVMLf',
					additionRepeatTimes: 4,
					additionSeparator: 'JxbPFzu8A9',
				}),
				'5tz2rIiyuQu2xi8NVMLfJxbPFzu8A9u2xi8NVMLfJxbPFzu8A9u2xi8NVMLfJxbPFzu8A9u2xi8NVMLfHWG1Oh8oRJ5tz2rIiyuQu2xi8NVMLfJxbPFzu8A9u2xi8NVMLfJxbPFzu8A9u2xi8NVMLfJxbPFzu8A9u2xi8NVMLfHWG1Oh8oRJ5tz2rIiyuQu2xi8NVMLfJxbPFzu8A9u2xi8NVMLfJxbPFzu8A9u2xi8NVMLfJxbPFzu8A9u2xi8NVMLfHWG1Oh8oRJ5tz2rIiyuQu2xi8NVMLfJxbPFzu8A9u2xi8NVMLfJxbPFzu8A9u2xi8NVMLfJxbPFzu8A9u2xi8NVMLfHWG1Oh8oRJ5tz2rIiyuQu2xi8NVMLfJxbPFzu8A9u2xi8NVMLfJxbPFzu8A9u2xi8NVMLfJxbPFzu8A9u2xi8NVMLfHWG1Oh8oRJ5tz2rIiyuQu2xi8NVMLfJxbPFzu8A9u2xi8NVMLfJxbPFzu8A9u2xi8NVMLfJxbPFzu8A9u2xi8NVMLf'
			);
			assert.equal(
				repeater('UEtWfLO7OQ', {
					repeatTimes: 5,
					separator: '6Ex9QcGUW8',
					addition: 'T0bGgKkt57',
					additionRepeatTimes: 1,
					additionSeparator: 'BzP84Ofzxt',
				}),
				'UEtWfLO7OQT0bGgKkt576Ex9QcGUW8UEtWfLO7OQT0bGgKkt576Ex9QcGUW8UEtWfLO7OQT0bGgKkt576Ex9QcGUW8UEtWfLO7OQT0bGgKkt576Ex9QcGUW8UEtWfLO7OQT0bGgKkt57'
			);
			assert.equal(
				repeater('Gtb0Opufwx', {
					repeatTimes: 6,
					separator: 'wVDpcl3Qig',
					addition: 'HpF80x0xag',
					additionRepeatTimes: 6,
					additionSeparator: 'icBEXbYWiA',
				}),
				'Gtb0OpufwxHpF80x0xagicBEXbYWiAHpF80x0xagicBEXbYWiAHpF80x0xagicBEXbYWiAHpF80x0xagicBEXbYWiAHpF80x0xagicBEXbYWiAHpF80x0xagwVDpcl3QigGtb0OpufwxHpF80x0xagicBEXbYWiAHpF80x0xagicBEXbYWiAHpF80x0xagicBEXbYWiAHpF80x0xagicBEXbYWiAHpF80x0xagicBEXbYWiAHpF80x0xagwVDpcl3QigGtb0OpufwxHpF80x0xagicBEXbYWiAHpF80x0xagicBEXbYWiAHpF80x0xagicBEXbYWiAHpF80x0xagicBEXbYWiAHpF80x0xagicBEXbYWiAHpF80x0xagwVDpcl3QigGtb0OpufwxHpF80x0xagicBEXbYWiAHpF80x0xagicBEXbYWiAHpF80x0xagicBEXbYWiAHpF80x0xagicBEXbYWiAHpF80x0xagicBEXbYWiAHpF80x0xagwVDpcl3QigGtb0OpufwxHpF80x0xagicBEXbYWiAHpF80x0xagicBEXbYWiAHpF80x0xagicBEXbYWiAHpF80x0xagicBEXbYWiAHpF80x0xagicBEXbYWiAHpF80x0xagwVDpcl3QigGtb0OpufwxHpF80x0xagicBEXbYWiAHpF80x0xagicBEXbYWiAHpF80x0xagicBEXbYWiAHpF80x0xagicBEXbYWiAHpF80x0xagicBEXbYWiAHpF80x0xag'
			);
			assert.equal(
				repeater('q62Q1BUHzT', {
					repeatTimes: 1,
					separator: 'kntiUBYlD8',
					addition: 'NJlyh2T5Ff',
					additionRepeatTimes: 5,
					additionSeparator: 'F8qlqGevyf',
				}),
				'q62Q1BUHzTNJlyh2T5FfF8qlqGevyfNJlyh2T5FfF8qlqGevyfNJlyh2T5FfF8qlqGevyfNJlyh2T5FfF8qlqGevyfNJlyh2T5Ff'
			);
			assert.equal(
				repeater('i7v9VAiIYf', {
					repeatTimes: 1,
					separator: 'EJVVKb7ADk',
					addition: 'FeBa2b7RLL',
					additionRepeatTimes: 2,
					additionSeparator: 'TEn9kEcy0M',
				}),
				'i7v9VAiIYfFeBa2b7RLLTEn9kEcy0MFeBa2b7RLL'
			);
			assert.equal(
				repeater('XVfN6pi4bE', {
					repeatTimes: 4,
					separator: 'iIggl5LkMt',
					addition: 'iouxUvIUgp',
					additionRepeatTimes: 4,
					additionSeparator: 'UygiI9wtKf',
				}),
				'XVfN6pi4bEiouxUvIUgpUygiI9wtKfiouxUvIUgpUygiI9wtKfiouxUvIUgpUygiI9wtKfiouxUvIUgpiIggl5LkMtXVfN6pi4bEiouxUvIUgpUygiI9wtKfiouxUvIUgpUygiI9wtKfiouxUvIUgpUygiI9wtKfiouxUvIUgpiIggl5LkMtXVfN6pi4bEiouxUvIUgpUygiI9wtKfiouxUvIUgpUygiI9wtKfiouxUvIUgpUygiI9wtKfiouxUvIUgpiIggl5LkMtXVfN6pi4bEiouxUvIUgpUygiI9wtKfiouxUvIUgpUygiI9wtKfiouxUvIUgpUygiI9wtKfiouxUvIUgp'
			);
			assert.equal(
				repeater('CC6rhkWIo7', {
					repeatTimes: 3,
					separator: 'HULlqLL6ta',
					addition: 'apEpEjG7Ob',
					additionRepeatTimes: 7,
					additionSeparator: 'ydEVgO8vMw',
				}),
				'CC6rhkWIo7apEpEjG7ObydEVgO8vMwapEpEjG7ObydEVgO8vMwapEpEjG7ObydEVgO8vMwapEpEjG7ObydEVgO8vMwapEpEjG7ObydEVgO8vMwapEpEjG7ObydEVgO8vMwapEpEjG7ObHULlqLL6taCC6rhkWIo7apEpEjG7ObydEVgO8vMwapEpEjG7ObydEVgO8vMwapEpEjG7ObydEVgO8vMwapEpEjG7ObydEVgO8vMwapEpEjG7ObydEVgO8vMwapEpEjG7ObydEVgO8vMwapEpEjG7ObHULlqLL6taCC6rhkWIo7apEpEjG7ObydEVgO8vMwapEpEjG7ObydEVgO8vMwapEpEjG7ObydEVgO8vMwapEpEjG7ObydEVgO8vMwapEpEjG7ObydEVgO8vMwapEpEjG7ObydEVgO8vMwapEpEjG7Ob'
			);
			assert.equal(
				repeater('zbUu6xctmw', {
					repeatTimes: 4,
					separator: 'Xe21jlUytm',
					addition: '2Lvm7W81ui',
					additionRepeatTimes: 7,
					additionSeparator: 'tS6oP9NfQT',
				}),
				'zbUu6xctmw2Lvm7W81uitS6oP9NfQT2Lvm7W81uitS6oP9NfQT2Lvm7W81uitS6oP9NfQT2Lvm7W81uitS6oP9NfQT2Lvm7W81uitS6oP9NfQT2Lvm7W81uitS6oP9NfQT2Lvm7W81uiXe21jlUytmzbUu6xctmw2Lvm7W81uitS6oP9NfQT2Lvm7W81uitS6oP9NfQT2Lvm7W81uitS6oP9NfQT2Lvm7W81uitS6oP9NfQT2Lvm7W81uitS6oP9NfQT2Lvm7W81uitS6oP9NfQT2Lvm7W81uiXe21jlUytmzbUu6xctmw2Lvm7W81uitS6oP9NfQT2Lvm7W81uitS6oP9NfQT2Lvm7W81uitS6oP9NfQT2Lvm7W81uitS6oP9NfQT2Lvm7W81uitS6oP9NfQT2Lvm7W81uitS6oP9NfQT2Lvm7W81uiXe21jlUytmzbUu6xctmw2Lvm7W81uitS6oP9NfQT2Lvm7W81uitS6oP9NfQT2Lvm7W81uitS6oP9NfQT2Lvm7W81uitS6oP9NfQT2Lvm7W81uitS6oP9NfQT2Lvm7W81uitS6oP9NfQT2Lvm7W81ui'
			);
			assert.equal(
				repeater('EJ9EkMAgW3', {
					repeatTimes: 8,
					separator: 'By8b9CA3qh',
					addition: 'Sb2IO40TG9',
					additionRepeatTimes: 4,
					additionSeparator: 'LxF5BzNUPT',
				}),
				'EJ9EkMAgW3Sb2IO40TG9LxF5BzNUPTSb2IO40TG9LxF5BzNUPTSb2IO40TG9LxF5BzNUPTSb2IO40TG9By8b9CA3qhEJ9EkMAgW3Sb2IO40TG9LxF5BzNUPTSb2IO40TG9LxF5BzNUPTSb2IO40TG9LxF5BzNUPTSb2IO40TG9By8b9CA3qhEJ9EkMAgW3Sb2IO40TG9LxF5BzNUPTSb2IO40TG9LxF5BzNUPTSb2IO40TG9LxF5BzNUPTSb2IO40TG9By8b9CA3qhEJ9EkMAgW3Sb2IO40TG9LxF5BzNUPTSb2IO40TG9LxF5BzNUPTSb2IO40TG9LxF5BzNUPTSb2IO40TG9By8b9CA3qhEJ9EkMAgW3Sb2IO40TG9LxF5BzNUPTSb2IO40TG9LxF5BzNUPTSb2IO40TG9LxF5BzNUPTSb2IO40TG9By8b9CA3qhEJ9EkMAgW3Sb2IO40TG9LxF5BzNUPTSb2IO40TG9LxF5BzNUPTSb2IO40TG9LxF5BzNUPTSb2IO40TG9By8b9CA3qhEJ9EkMAgW3Sb2IO40TG9LxF5BzNUPTSb2IO40TG9LxF5BzNUPTSb2IO40TG9LxF5BzNUPTSb2IO40TG9By8b9CA3qhEJ9EkMAgW3Sb2IO40TG9LxF5BzNUPTSb2IO40TG9LxF5BzNUPTSb2IO40TG9LxF5BzNUPTSb2IO40TG9'
			);
			assert.equal(
				repeater('aTMDEquXVN', {
					repeatTimes: 5,
					separator: 'TVSj0MuHtc',
					addition: 'HLxggOx35h',
					additionRepeatTimes: 1,
					additionSeparator: 'po9hwobRyE',
				}),
				'aTMDEquXVNHLxggOx35hTVSj0MuHtcaTMDEquXVNHLxggOx35hTVSj0MuHtcaTMDEquXVNHLxggOx35hTVSj0MuHtcaTMDEquXVNHLxggOx35hTVSj0MuHtcaTMDEquXVNHLxggOx35h'
			);
			assert.equal(
				repeater('DG5QvlpB8F', {
					repeatTimes: 5,
					separator: '82poldewRm',
					addition: 'u9YEn0eE05',
					additionRepeatTimes: 2,
					additionSeparator: 'WWbJ7oh26t',
				}),
				'DG5QvlpB8Fu9YEn0eE05WWbJ7oh26tu9YEn0eE0582poldewRmDG5QvlpB8Fu9YEn0eE05WWbJ7oh26tu9YEn0eE0582poldewRmDG5QvlpB8Fu9YEn0eE05WWbJ7oh26tu9YEn0eE0582poldewRmDG5QvlpB8Fu9YEn0eE05WWbJ7oh26tu9YEn0eE0582poldewRmDG5QvlpB8Fu9YEn0eE05WWbJ7oh26tu9YEn0eE05'
			);
			assert.equal(
				repeater('mpS601S24Z', {
					repeatTimes: 5,
					separator: 'wcVNGrPXvb',
					addition: 'xaScPZxS51',
					additionRepeatTimes: 7,
					additionSeparator: 'Uvcz6m70xA',
				}),
				'mpS601S24ZxaScPZxS51Uvcz6m70xAxaScPZxS51Uvcz6m70xAxaScPZxS51Uvcz6m70xAxaScPZxS51Uvcz6m70xAxaScPZxS51Uvcz6m70xAxaScPZxS51Uvcz6m70xAxaScPZxS51wcVNGrPXvbmpS601S24ZxaScPZxS51Uvcz6m70xAxaScPZxS51Uvcz6m70xAxaScPZxS51Uvcz6m70xAxaScPZxS51Uvcz6m70xAxaScPZxS51Uvcz6m70xAxaScPZxS51Uvcz6m70xAxaScPZxS51wcVNGrPXvbmpS601S24ZxaScPZxS51Uvcz6m70xAxaScPZxS51Uvcz6m70xAxaScPZxS51Uvcz6m70xAxaScPZxS51Uvcz6m70xAxaScPZxS51Uvcz6m70xAxaScPZxS51Uvcz6m70xAxaScPZxS51wcVNGrPXvbmpS601S24ZxaScPZxS51Uvcz6m70xAxaScPZxS51Uvcz6m70xAxaScPZxS51Uvcz6m70xAxaScPZxS51Uvcz6m70xAxaScPZxS51Uvcz6m70xAxaScPZxS51Uvcz6m70xAxaScPZxS51wcVNGrPXvbmpS601S24ZxaScPZxS51Uvcz6m70xAxaScPZxS51Uvcz6m70xAxaScPZxS51Uvcz6m70xAxaScPZxS51Uvcz6m70xAxaScPZxS51Uvcz6m70xAxaScPZxS51Uvcz6m70xAxaScPZxS51'
			);
			assert.equal(
				repeater('cMtmNS4eRd', {
					repeatTimes: 8,
					separator: 'nRVHiBH3d4',
					addition: 'urX4CePQbE',
					additionRepeatTimes: 4,
					additionSeparator: 'jI2clMYQ8M',
				}),
				'cMtmNS4eRdurX4CePQbEjI2clMYQ8MurX4CePQbEjI2clMYQ8MurX4CePQbEjI2clMYQ8MurX4CePQbEnRVHiBH3d4cMtmNS4eRdurX4CePQbEjI2clMYQ8MurX4CePQbEjI2clMYQ8MurX4CePQbEjI2clMYQ8MurX4CePQbEnRVHiBH3d4cMtmNS4eRdurX4CePQbEjI2clMYQ8MurX4CePQbEjI2clMYQ8MurX4CePQbEjI2clMYQ8MurX4CePQbEnRVHiBH3d4cMtmNS4eRdurX4CePQbEjI2clMYQ8MurX4CePQbEjI2clMYQ8MurX4CePQbEjI2clMYQ8MurX4CePQbEnRVHiBH3d4cMtmNS4eRdurX4CePQbEjI2clMYQ8MurX4CePQbEjI2clMYQ8MurX4CePQbEjI2clMYQ8MurX4CePQbEnRVHiBH3d4cMtmNS4eRdurX4CePQbEjI2clMYQ8MurX4CePQbEjI2clMYQ8MurX4CePQbEjI2clMYQ8MurX4CePQbEnRVHiBH3d4cMtmNS4eRdurX4CePQbEjI2clMYQ8MurX4CePQbEjI2clMYQ8MurX4CePQbEjI2clMYQ8MurX4CePQbEnRVHiBH3d4cMtmNS4eRdurX4CePQbEjI2clMYQ8MurX4CePQbEjI2clMYQ8MurX4CePQbEjI2clMYQ8MurX4CePQbE'
			);
			assert.equal(
				repeater('oyNcOKLjEl', {
					repeatTimes: 6,
					separator: 'PEDcIUCcvh',
					addition: 'mixYxIQzUW',
					additionRepeatTimes: 7,
					additionSeparator: 'QNIPhHJpXa',
				}),
				'oyNcOKLjElmixYxIQzUWQNIPhHJpXamixYxIQzUWQNIPhHJpXamixYxIQzUWQNIPhHJpXamixYxIQzUWQNIPhHJpXamixYxIQzUWQNIPhHJpXamixYxIQzUWQNIPhHJpXamixYxIQzUWPEDcIUCcvhoyNcOKLjElmixYxIQzUWQNIPhHJpXamixYxIQzUWQNIPhHJpXamixYxIQzUWQNIPhHJpXamixYxIQzUWQNIPhHJpXamixYxIQzUWQNIPhHJpXamixYxIQzUWQNIPhHJpXamixYxIQzUWPEDcIUCcvhoyNcOKLjElmixYxIQzUWQNIPhHJpXamixYxIQzUWQNIPhHJpXamixYxIQzUWQNIPhHJpXamixYxIQzUWQNIPhHJpXamixYxIQzUWQNIPhHJpXamixYxIQzUWQNIPhHJpXamixYxIQzUWPEDcIUCcvhoyNcOKLjElmixYxIQzUWQNIPhHJpXamixYxIQzUWQNIPhHJpXamixYxIQzUWQNIPhHJpXamixYxIQzUWQNIPhHJpXamixYxIQzUWQNIPhHJpXamixYxIQzUWQNIPhHJpXamixYxIQzUWPEDcIUCcvhoyNcOKLjElmixYxIQzUWQNIPhHJpXamixYxIQzUWQNIPhHJpXamixYxIQzUWQNIPhHJpXamixYxIQzUWQNIPhHJpXamixYxIQzUWQNIPhHJpXamixYxIQzUWQNIPhHJpXamixYxIQzUWPEDcIUCcvhoyNcOKLjElmixYxIQzUWQNIPhHJpXamixYxIQzUWQNIPhHJpXamixYxIQzUWQNIPhHJpXamixYxIQzUWQNIPhHJpXamixYxIQzUWQNIPhHJpXamixYxIQzUWQNIPhHJpXamixYxIQzUW'
			);
			assert.equal(
				repeater('YgWT3YQyRv', {
					repeatTimes: 9,
					separator: 'Oz6WFpUQmg',
					addition: 'vGy6LNt02R',
					additionRepeatTimes: 7,
					additionSeparator: '6LJqiAH2DL',
				}),
				'YgWT3YQyRvvGy6LNt02R6LJqiAH2DLvGy6LNt02R6LJqiAH2DLvGy6LNt02R6LJqiAH2DLvGy6LNt02R6LJqiAH2DLvGy6LNt02R6LJqiAH2DLvGy6LNt02R6LJqiAH2DLvGy6LNt02ROz6WFpUQmgYgWT3YQyRvvGy6LNt02R6LJqiAH2DLvGy6LNt02R6LJqiAH2DLvGy6LNt02R6LJqiAH2DLvGy6LNt02R6LJqiAH2DLvGy6LNt02R6LJqiAH2DLvGy6LNt02R6LJqiAH2DLvGy6LNt02ROz6WFpUQmgYgWT3YQyRvvGy6LNt02R6LJqiAH2DLvGy6LNt02R6LJqiAH2DLvGy6LNt02R6LJqiAH2DLvGy6LNt02R6LJqiAH2DLvGy6LNt02R6LJqiAH2DLvGy6LNt02R6LJqiAH2DLvGy6LNt02ROz6WFpUQmgYgWT3YQyRvvGy6LNt02R6LJqiAH2DLvGy6LNt02R6LJqiAH2DLvGy6LNt02R6LJqiAH2DLvGy6LNt02R6LJqiAH2DLvGy6LNt02R6LJqiAH2DLvGy6LNt02R6LJqiAH2DLvGy6LNt02ROz6WFpUQmgYgWT3YQyRvvGy6LNt02R6LJqiAH2DLvGy6LNt02R6LJqiAH2DLvGy6LNt02R6LJqiAH2DLvGy6LNt02R6LJqiAH2DLvGy6LNt02R6LJqiAH2DLvGy6LNt02R6LJqiAH2DLvGy6LNt02ROz6WFpUQmgYgWT3YQyRvvGy6LNt02R6LJqiAH2DLvGy6LNt02R6LJqiAH2DLvGy6LNt02R6LJqiAH2DLvGy6LNt02R6LJqiAH2DLvGy6LNt02R6LJqiAH2DLvGy6LNt02R6LJqiAH2DLvGy6LNt02ROz6WFpUQmgYgWT3YQyRvvGy6LNt02R6LJqiAH2DLvGy6LNt02R6LJqiAH2DLvGy6LNt02R6LJqiAH2DLvGy6LNt02R6LJqiAH2DLvGy6LNt02R6LJqiAH2DLvGy6LNt02R6LJqiAH2DLvGy6LNt02ROz6WFpUQmgYgWT3YQyRvvGy6LNt02R6LJqiAH2DLvGy6LNt02R6LJqiAH2DLvGy6LNt02R6LJqiAH2DLvGy6LNt02R6LJqiAH2DLvGy6LNt02R6LJqiAH2DLvGy6LNt02R6LJqiAH2DLvGy6LNt02ROz6WFpUQmgYgWT3YQyRvvGy6LNt02R6LJqiAH2DLvGy6LNt02R6LJqiAH2DLvGy6LNt02R6LJqiAH2DLvGy6LNt02R6LJqiAH2DLvGy6LNt02R6LJqiAH2DLvGy6LNt02R6LJqiAH2DLvGy6LNt02R'
			);
			assert.equal(
				repeater('NaAqwpY45l', {
					repeatTimes: 7,
					separator: 'lEKaDrdwia',
					addition: 'N9Hf79qxol',
					additionRepeatTimes: 8,
					additionSeparator: 'DRIQ45EDOz',
				}),
				'NaAqwpY45lN9Hf79qxolDRIQ45EDOzN9Hf79qxolDRIQ45EDOzN9Hf79qxolDRIQ45EDOzN9Hf79qxolDRIQ45EDOzN9Hf79qxolDRIQ45EDOzN9Hf79qxolDRIQ45EDOzN9Hf79qxolDRIQ45EDOzN9Hf79qxollEKaDrdwiaNaAqwpY45lN9Hf79qxolDRIQ45EDOzN9Hf79qxolDRIQ45EDOzN9Hf79qxolDRIQ45EDOzN9Hf79qxolDRIQ45EDOzN9Hf79qxolDRIQ45EDOzN9Hf79qxolDRIQ45EDOzN9Hf79qxolDRIQ45EDOzN9Hf79qxollEKaDrdwiaNaAqwpY45lN9Hf79qxolDRIQ45EDOzN9Hf79qxolDRIQ45EDOzN9Hf79qxolDRIQ45EDOzN9Hf79qxolDRIQ45EDOzN9Hf79qxolDRIQ45EDOzN9Hf79qxolDRIQ45EDOzN9Hf79qxolDRIQ45EDOzN9Hf79qxollEKaDrdwiaNaAqwpY45lN9Hf79qxolDRIQ45EDOzN9Hf79qxolDRIQ45EDOzN9Hf79qxolDRIQ45EDOzN9Hf79qxolDRIQ45EDOzN9Hf79qxolDRIQ45EDOzN9Hf79qxolDRIQ45EDOzN9Hf79qxolDRIQ45EDOzN9Hf79qxollEKaDrdwiaNaAqwpY45lN9Hf79qxolDRIQ45EDOzN9Hf79qxolDRIQ45EDOzN9Hf79qxolDRIQ45EDOzN9Hf79qxolDRIQ45EDOzN9Hf79qxolDRIQ45EDOzN9Hf79qxolDRIQ45EDOzN9Hf79qxolDRIQ45EDOzN9Hf79qxollEKaDrdwiaNaAqwpY45lN9Hf79qxolDRIQ45EDOzN9Hf79qxolDRIQ45EDOzN9Hf79qxolDRIQ45EDOzN9Hf79qxolDRIQ45EDOzN9Hf79qxolDRIQ45EDOzN9Hf79qxolDRIQ45EDOzN9Hf79qxolDRIQ45EDOzN9Hf79qxollEKaDrdwiaNaAqwpY45lN9Hf79qxolDRIQ45EDOzN9Hf79qxolDRIQ45EDOzN9Hf79qxolDRIQ45EDOzN9Hf79qxolDRIQ45EDOzN9Hf79qxolDRIQ45EDOzN9Hf79qxolDRIQ45EDOzN9Hf79qxolDRIQ45EDOzN9Hf79qxol'
			);
			assert.equal(
				repeater('HIyqaoi7JW', {
					repeatTimes: 5,
					separator: 'EAjpH6yz4E',
					addition: 'UiMb2Bbwol',
					additionRepeatTimes: 6,
					additionSeparator: '40uV9f3GIO',
				}),
				'HIyqaoi7JWUiMb2Bbwol40uV9f3GIOUiMb2Bbwol40uV9f3GIOUiMb2Bbwol40uV9f3GIOUiMb2Bbwol40uV9f3GIOUiMb2Bbwol40uV9f3GIOUiMb2BbwolEAjpH6yz4EHIyqaoi7JWUiMb2Bbwol40uV9f3GIOUiMb2Bbwol40uV9f3GIOUiMb2Bbwol40uV9f3GIOUiMb2Bbwol40uV9f3GIOUiMb2Bbwol40uV9f3GIOUiMb2BbwolEAjpH6yz4EHIyqaoi7JWUiMb2Bbwol40uV9f3GIOUiMb2Bbwol40uV9f3GIOUiMb2Bbwol40uV9f3GIOUiMb2Bbwol40uV9f3GIOUiMb2Bbwol40uV9f3GIOUiMb2BbwolEAjpH6yz4EHIyqaoi7JWUiMb2Bbwol40uV9f3GIOUiMb2Bbwol40uV9f3GIOUiMb2Bbwol40uV9f3GIOUiMb2Bbwol40uV9f3GIOUiMb2Bbwol40uV9f3GIOUiMb2BbwolEAjpH6yz4EHIyqaoi7JWUiMb2Bbwol40uV9f3GIOUiMb2Bbwol40uV9f3GIOUiMb2Bbwol40uV9f3GIOUiMb2Bbwol40uV9f3GIOUiMb2Bbwol40uV9f3GIOUiMb2Bbwol'
			);
			assert.equal(
				repeater('iFOZfku0Mq', {
					repeatTimes: 8,
					separator: 'IaUELLO2IW',
					addition: 'ypo1GvvMqn',
					additionRepeatTimes: 9,
					additionSeparator: 'EhKYdgUTdn',
				}),
				'iFOZfku0Mqypo1GvvMqnEhKYdgUTdnypo1GvvMqnEhKYdgUTdnypo1GvvMqnEhKYdgUTdnypo1GvvMqnEhKYdgUTdnypo1GvvMqnEhKYdgUTdnypo1GvvMqnEhKYdgUTdnypo1GvvMqnEhKYdgUTdnypo1GvvMqnEhKYdgUTdnypo1GvvMqnIaUELLO2IWiFOZfku0Mqypo1GvvMqnEhKYdgUTdnypo1GvvMqnEhKYdgUTdnypo1GvvMqnEhKYdgUTdnypo1GvvMqnEhKYdgUTdnypo1GvvMqnEhKYdgUTdnypo1GvvMqnEhKYdgUTdnypo1GvvMqnEhKYdgUTdnypo1GvvMqnEhKYdgUTdnypo1GvvMqnIaUELLO2IWiFOZfku0Mqypo1GvvMqnEhKYdgUTdnypo1GvvMqnEhKYdgUTdnypo1GvvMqnEhKYdgUTdnypo1GvvMqnEhKYdgUTdnypo1GvvMqnEhKYdgUTdnypo1GvvMqnEhKYdgUTdnypo1GvvMqnEhKYdgUTdnypo1GvvMqnEhKYdgUTdnypo1GvvMqnIaUELLO2IWiFOZfku0Mqypo1GvvMqnEhKYdgUTdnypo1GvvMqnEhKYdgUTdnypo1GvvMqnEhKYdgUTdnypo1GvvMqnEhKYdgUTdnypo1GvvMqnEhKYdgUTdnypo1GvvMqnEhKYdgUTdnypo1GvvMqnEhKYdgUTdnypo1GvvMqnEhKYdgUTdnypo1GvvMqnIaUELLO2IWiFOZfku0Mqypo1GvvMqnEhKYdgUTdnypo1GvvMqnEhKYdgUTdnypo1GvvMqnEhKYdgUTdnypo1GvvMqnEhKYdgUTdnypo1GvvMqnEhKYdgUTdnypo1GvvMqnEhKYdgUTdnypo1GvvMqnEhKYdgUTdnypo1GvvMqnEhKYdgUTdnypo1GvvMqnIaUELLO2IWiFOZfku0Mqypo1GvvMqnEhKYdgUTdnypo1GvvMqnEhKYdgUTdnypo1GvvMqnEhKYdgUTdnypo1GvvMqnEhKYdgUTdnypo1GvvMqnEhKYdgUTdnypo1GvvMqnEhKYdgUTdnypo1GvvMqnEhKYdgUTdnypo1GvvMqnEhKYdgUTdnypo1GvvMqnIaUELLO2IWiFOZfku0Mqypo1GvvMqnEhKYdgUTdnypo1GvvMqnEhKYdgUTdnypo1GvvMqnEhKYdgUTdnypo1GvvMqnEhKYdgUTdnypo1GvvMqnEhKYdgUTdnypo1GvvMqnEhKYdgUTdnypo1GvvMqnEhKYdgUTdnypo1GvvMqnEhKYdgUTdnypo1GvvMqnIaUELLO2IWiFOZfku0Mqypo1GvvMqnEhKYdgUTdnypo1GvvMqnEhKYdgUTdnypo1GvvMqnEhKYdgUTdnypo1GvvMqnEhKYdgUTdnypo1GvvMqnEhKYdgUTdnypo1GvvMqnEhKYdgUTdnypo1GvvMqnEhKYdgUTdnypo1GvvMqnEhKYdgUTdnypo1GvvMqn'
			);
			assert.equal(
				repeater('nNIACubPBf', {
					repeatTimes: 2,
					separator: '4z7XU1DGhr',
					addition: 'teFdkm2L4G',
					additionRepeatTimes: 8,
					additionSeparator: '6iCXJ9YUgq',
				}),
				'nNIACubPBfteFdkm2L4G6iCXJ9YUgqteFdkm2L4G6iCXJ9YUgqteFdkm2L4G6iCXJ9YUgqteFdkm2L4G6iCXJ9YUgqteFdkm2L4G6iCXJ9YUgqteFdkm2L4G6iCXJ9YUgqteFdkm2L4G6iCXJ9YUgqteFdkm2L4G4z7XU1DGhrnNIACubPBfteFdkm2L4G6iCXJ9YUgqteFdkm2L4G6iCXJ9YUgqteFdkm2L4G6iCXJ9YUgqteFdkm2L4G6iCXJ9YUgqteFdkm2L4G6iCXJ9YUgqteFdkm2L4G6iCXJ9YUgqteFdkm2L4G6iCXJ9YUgqteFdkm2L4G'
			);
			assert.equal(
				repeater('VBZEiOClOK', {
					repeatTimes: 1,
					separator: 'ZQ7mRJqkOm',
					addition: '2KDPwZlxad',
					additionRepeatTimes: 8,
					additionSeparator: '0whPwRtAYN',
				}),
				'VBZEiOClOK2KDPwZlxad0whPwRtAYN2KDPwZlxad0whPwRtAYN2KDPwZlxad0whPwRtAYN2KDPwZlxad0whPwRtAYN2KDPwZlxad0whPwRtAYN2KDPwZlxad0whPwRtAYN2KDPwZlxad0whPwRtAYN2KDPwZlxad'
			);
			assert.equal(
				repeater('yZGuymgbqx', {
					repeatTimes: 3,
					separator: 'GKB2bWMeHR',
					addition: 'r6lfTx7hzR',
					additionRepeatTimes: 8,
					additionSeparator: 'd8IuwyVR70',
				}),
				'yZGuymgbqxr6lfTx7hzRd8IuwyVR70r6lfTx7hzRd8IuwyVR70r6lfTx7hzRd8IuwyVR70r6lfTx7hzRd8IuwyVR70r6lfTx7hzRd8IuwyVR70r6lfTx7hzRd8IuwyVR70r6lfTx7hzRd8IuwyVR70r6lfTx7hzRGKB2bWMeHRyZGuymgbqxr6lfTx7hzRd8IuwyVR70r6lfTx7hzRd8IuwyVR70r6lfTx7hzRd8IuwyVR70r6lfTx7hzRd8IuwyVR70r6lfTx7hzRd8IuwyVR70r6lfTx7hzRd8IuwyVR70r6lfTx7hzRd8IuwyVR70r6lfTx7hzRGKB2bWMeHRyZGuymgbqxr6lfTx7hzRd8IuwyVR70r6lfTx7hzRd8IuwyVR70r6lfTx7hzRd8IuwyVR70r6lfTx7hzRd8IuwyVR70r6lfTx7hzRd8IuwyVR70r6lfTx7hzRd8IuwyVR70r6lfTx7hzRd8IuwyVR70r6lfTx7hzR'
			);
			assert.equal(
				repeater('rbbCEhgaS2', {
					repeatTimes: 3,
					separator: '4J3bGcc8Z9',
					addition: 'PJCtnI6Dmu',
					additionRepeatTimes: 4,
					additionSeparator: '5zZYpYujEU',
				}),
				'rbbCEhgaS2PJCtnI6Dmu5zZYpYujEUPJCtnI6Dmu5zZYpYujEUPJCtnI6Dmu5zZYpYujEUPJCtnI6Dmu4J3bGcc8Z9rbbCEhgaS2PJCtnI6Dmu5zZYpYujEUPJCtnI6Dmu5zZYpYujEUPJCtnI6Dmu5zZYpYujEUPJCtnI6Dmu4J3bGcc8Z9rbbCEhgaS2PJCtnI6Dmu5zZYpYujEUPJCtnI6Dmu5zZYpYujEUPJCtnI6Dmu5zZYpYujEUPJCtnI6Dmu'
			);
			assert.equal(
				repeater('1t3t1QcRT9', {
					repeatTimes: 6,
					separator: '4bnzhQPEzb',
					addition: 'Zv4cIKDG5F',
					additionRepeatTimes: 3,
					additionSeparator: '8HJ6G7WYZT',
				}),
				'1t3t1QcRT9Zv4cIKDG5F8HJ6G7WYZTZv4cIKDG5F8HJ6G7WYZTZv4cIKDG5F4bnzhQPEzb1t3t1QcRT9Zv4cIKDG5F8HJ6G7WYZTZv4cIKDG5F8HJ6G7WYZTZv4cIKDG5F4bnzhQPEzb1t3t1QcRT9Zv4cIKDG5F8HJ6G7WYZTZv4cIKDG5F8HJ6G7WYZTZv4cIKDG5F4bnzhQPEzb1t3t1QcRT9Zv4cIKDG5F8HJ6G7WYZTZv4cIKDG5F8HJ6G7WYZTZv4cIKDG5F4bnzhQPEzb1t3t1QcRT9Zv4cIKDG5F8HJ6G7WYZTZv4cIKDG5F8HJ6G7WYZTZv4cIKDG5F4bnzhQPEzb1t3t1QcRT9Zv4cIKDG5F8HJ6G7WYZTZv4cIKDG5F8HJ6G7WYZTZv4cIKDG5F'
			);
			assert.equal(
				repeater('gTUmL1Opj3', {
					repeatTimes: 9,
					separator: 'lcI7nrEQga',
					addition: '6iwU7UAqky',
					additionRepeatTimes: 3,
					additionSeparator: 'bH2vhfEpjg',
				}),
				'gTUmL1Opj36iwU7UAqkybH2vhfEpjg6iwU7UAqkybH2vhfEpjg6iwU7UAqkylcI7nrEQgagTUmL1Opj36iwU7UAqkybH2vhfEpjg6iwU7UAqkybH2vhfEpjg6iwU7UAqkylcI7nrEQgagTUmL1Opj36iwU7UAqkybH2vhfEpjg6iwU7UAqkybH2vhfEpjg6iwU7UAqkylcI7nrEQgagTUmL1Opj36iwU7UAqkybH2vhfEpjg6iwU7UAqkybH2vhfEpjg6iwU7UAqkylcI7nrEQgagTUmL1Opj36iwU7UAqkybH2vhfEpjg6iwU7UAqkybH2vhfEpjg6iwU7UAqkylcI7nrEQgagTUmL1Opj36iwU7UAqkybH2vhfEpjg6iwU7UAqkybH2vhfEpjg6iwU7UAqkylcI7nrEQgagTUmL1Opj36iwU7UAqkybH2vhfEpjg6iwU7UAqkybH2vhfEpjg6iwU7UAqkylcI7nrEQgagTUmL1Opj36iwU7UAqkybH2vhfEpjg6iwU7UAqkybH2vhfEpjg6iwU7UAqkylcI7nrEQgagTUmL1Opj36iwU7UAqkybH2vhfEpjg6iwU7UAqkybH2vhfEpjg6iwU7UAqky'
			);
			assert.equal(
				repeater('Ya00Vu2mRg', {
					repeatTimes: 1,
					separator: 'GRUHWQeRn6',
					addition: 'X56j7x4Ik5',
					additionRepeatTimes: 3,
					additionSeparator: 'XA4h0qN40S',
				}),
				'Ya00Vu2mRgX56j7x4Ik5XA4h0qN40SX56j7x4Ik5XA4h0qN40SX56j7x4Ik5'
			);
			assert.equal(
				repeater('4DTRa9XXev', {
					repeatTimes: 5,
					separator: 'STp7TucXa1',
					addition: '5wEah78dcY',
					additionRepeatTimes: 5,
					additionSeparator: 'qZZE7BE5Ax',
				}),
				'4DTRa9XXev5wEah78dcYqZZE7BE5Ax5wEah78dcYqZZE7BE5Ax5wEah78dcYqZZE7BE5Ax5wEah78dcYqZZE7BE5Ax5wEah78dcYSTp7TucXa14DTRa9XXev5wEah78dcYqZZE7BE5Ax5wEah78dcYqZZE7BE5Ax5wEah78dcYqZZE7BE5Ax5wEah78dcYqZZE7BE5Ax5wEah78dcYSTp7TucXa14DTRa9XXev5wEah78dcYqZZE7BE5Ax5wEah78dcYqZZE7BE5Ax5wEah78dcYqZZE7BE5Ax5wEah78dcYqZZE7BE5Ax5wEah78dcYSTp7TucXa14DTRa9XXev5wEah78dcYqZZE7BE5Ax5wEah78dcYqZZE7BE5Ax5wEah78dcYqZZE7BE5Ax5wEah78dcYqZZE7BE5Ax5wEah78dcYSTp7TucXa14DTRa9XXev5wEah78dcYqZZE7BE5Ax5wEah78dcYqZZE7BE5Ax5wEah78dcYqZZE7BE5Ax5wEah78dcYqZZE7BE5Ax5wEah78dcY'
			);
			assert.equal(
				repeater('K9oHQ6OGUl', {
					repeatTimes: 3,
					separator: 'VQ55zzYGBn',
					addition: 'quAzU9q88E',
					additionRepeatTimes: 4,
					additionSeparator: 'j0rP8Oqcfa',
				}),
				'K9oHQ6OGUlquAzU9q88Ej0rP8OqcfaquAzU9q88Ej0rP8OqcfaquAzU9q88Ej0rP8OqcfaquAzU9q88EVQ55zzYGBnK9oHQ6OGUlquAzU9q88Ej0rP8OqcfaquAzU9q88Ej0rP8OqcfaquAzU9q88Ej0rP8OqcfaquAzU9q88EVQ55zzYGBnK9oHQ6OGUlquAzU9q88Ej0rP8OqcfaquAzU9q88Ej0rP8OqcfaquAzU9q88Ej0rP8OqcfaquAzU9q88E'
			);
			assert.equal(
				repeater('wSaugJuKRU', {
					repeatTimes: 8,
					separator: 'NTGKcVwfoM',
					addition: 'DLk71Ep7XR',
					additionRepeatTimes: 3,
					additionSeparator: 'LkSD2TEXoj',
				}),
				'wSaugJuKRUDLk71Ep7XRLkSD2TEXojDLk71Ep7XRLkSD2TEXojDLk71Ep7XRNTGKcVwfoMwSaugJuKRUDLk71Ep7XRLkSD2TEXojDLk71Ep7XRLkSD2TEXojDLk71Ep7XRNTGKcVwfoMwSaugJuKRUDLk71Ep7XRLkSD2TEXojDLk71Ep7XRLkSD2TEXojDLk71Ep7XRNTGKcVwfoMwSaugJuKRUDLk71Ep7XRLkSD2TEXojDLk71Ep7XRLkSD2TEXojDLk71Ep7XRNTGKcVwfoMwSaugJuKRUDLk71Ep7XRLkSD2TEXojDLk71Ep7XRLkSD2TEXojDLk71Ep7XRNTGKcVwfoMwSaugJuKRUDLk71Ep7XRLkSD2TEXojDLk71Ep7XRLkSD2TEXojDLk71Ep7XRNTGKcVwfoMwSaugJuKRUDLk71Ep7XRLkSD2TEXojDLk71Ep7XRLkSD2TEXojDLk71Ep7XRNTGKcVwfoMwSaugJuKRUDLk71Ep7XRLkSD2TEXojDLk71Ep7XRLkSD2TEXojDLk71Ep7XR'
			);
			assert.equal(
				repeater('02oJAWhJT3', {
					repeatTimes: 3,
					separator: 'KB5nX7HI76',
					addition: 'E0nchjw7II',
					additionRepeatTimes: 8,
					additionSeparator: 'Wd2QozcGou',
				}),
				'02oJAWhJT3E0nchjw7IIWd2QozcGouE0nchjw7IIWd2QozcGouE0nchjw7IIWd2QozcGouE0nchjw7IIWd2QozcGouE0nchjw7IIWd2QozcGouE0nchjw7IIWd2QozcGouE0nchjw7IIWd2QozcGouE0nchjw7IIKB5nX7HI7602oJAWhJT3E0nchjw7IIWd2QozcGouE0nchjw7IIWd2QozcGouE0nchjw7IIWd2QozcGouE0nchjw7IIWd2QozcGouE0nchjw7IIWd2QozcGouE0nchjw7IIWd2QozcGouE0nchjw7IIWd2QozcGouE0nchjw7IIKB5nX7HI7602oJAWhJT3E0nchjw7IIWd2QozcGouE0nchjw7IIWd2QozcGouE0nchjw7IIWd2QozcGouE0nchjw7IIWd2QozcGouE0nchjw7IIWd2QozcGouE0nchjw7IIWd2QozcGouE0nchjw7IIWd2QozcGouE0nchjw7II'
			);
			assert.equal(
				repeater('E5TamVTpSU', {
					repeatTimes: 7,
					separator: 'QLNWlHBdVo',
					addition: 'g8I5CfgKOW',
					additionRepeatTimes: 9,
					additionSeparator: 'iLbH9ZKwSc',
				}),
				'E5TamVTpSUg8I5CfgKOWiLbH9ZKwScg8I5CfgKOWiLbH9ZKwScg8I5CfgKOWiLbH9ZKwScg8I5CfgKOWiLbH9ZKwScg8I5CfgKOWiLbH9ZKwScg8I5CfgKOWiLbH9ZKwScg8I5CfgKOWiLbH9ZKwScg8I5CfgKOWiLbH9ZKwScg8I5CfgKOWQLNWlHBdVoE5TamVTpSUg8I5CfgKOWiLbH9ZKwScg8I5CfgKOWiLbH9ZKwScg8I5CfgKOWiLbH9ZKwScg8I5CfgKOWiLbH9ZKwScg8I5CfgKOWiLbH9ZKwScg8I5CfgKOWiLbH9ZKwScg8I5CfgKOWiLbH9ZKwScg8I5CfgKOWiLbH9ZKwScg8I5CfgKOWQLNWlHBdVoE5TamVTpSUg8I5CfgKOWiLbH9ZKwScg8I5CfgKOWiLbH9ZKwScg8I5CfgKOWiLbH9ZKwScg8I5CfgKOWiLbH9ZKwScg8I5CfgKOWiLbH9ZKwScg8I5CfgKOWiLbH9ZKwScg8I5CfgKOWiLbH9ZKwScg8I5CfgKOWiLbH9ZKwScg8I5CfgKOWQLNWlHBdVoE5TamVTpSUg8I5CfgKOWiLbH9ZKwScg8I5CfgKOWiLbH9ZKwScg8I5CfgKOWiLbH9ZKwScg8I5CfgKOWiLbH9ZKwScg8I5CfgKOWiLbH9ZKwScg8I5CfgKOWiLbH9ZKwScg8I5CfgKOWiLbH9ZKwScg8I5CfgKOWiLbH9ZKwScg8I5CfgKOWQLNWlHBdVoE5TamVTpSUg8I5CfgKOWiLbH9ZKwScg8I5CfgKOWiLbH9ZKwScg8I5CfgKOWiLbH9ZKwScg8I5CfgKOWiLbH9ZKwScg8I5CfgKOWiLbH9ZKwScg8I5CfgKOWiLbH9ZKwScg8I5CfgKOWiLbH9ZKwScg8I5CfgKOWiLbH9ZKwScg8I5CfgKOWQLNWlHBdVoE5TamVTpSUg8I5CfgKOWiLbH9ZKwScg8I5CfgKOWiLbH9ZKwScg8I5CfgKOWiLbH9ZKwScg8I5CfgKOWiLbH9ZKwScg8I5CfgKOWiLbH9ZKwScg8I5CfgKOWiLbH9ZKwScg8I5CfgKOWiLbH9ZKwScg8I5CfgKOWiLbH9ZKwScg8I5CfgKOWQLNWlHBdVoE5TamVTpSUg8I5CfgKOWiLbH9ZKwScg8I5CfgKOWiLbH9ZKwScg8I5CfgKOWiLbH9ZKwScg8I5CfgKOWiLbH9ZKwScg8I5CfgKOWiLbH9ZKwScg8I5CfgKOWiLbH9ZKwScg8I5CfgKOWiLbH9ZKwScg8I5CfgKOWiLbH9ZKwScg8I5CfgKOW'
			);
			assert.equal(
				repeater('XPSJy2TKlU', {
					repeatTimes: 6,
					separator: 'fZ3VSglEbn',
					addition: 'NuJq0WjhJV',
					additionRepeatTimes: 8,
					additionSeparator: '1ePJa9keRX',
				}),
				'XPSJy2TKlUNuJq0WjhJV1ePJa9keRXNuJq0WjhJV1ePJa9keRXNuJq0WjhJV1ePJa9keRXNuJq0WjhJV1ePJa9keRXNuJq0WjhJV1ePJa9keRXNuJq0WjhJV1ePJa9keRXNuJq0WjhJV1ePJa9keRXNuJq0WjhJVfZ3VSglEbnXPSJy2TKlUNuJq0WjhJV1ePJa9keRXNuJq0WjhJV1ePJa9keRXNuJq0WjhJV1ePJa9keRXNuJq0WjhJV1ePJa9keRXNuJq0WjhJV1ePJa9keRXNuJq0WjhJV1ePJa9keRXNuJq0WjhJV1ePJa9keRXNuJq0WjhJVfZ3VSglEbnXPSJy2TKlUNuJq0WjhJV1ePJa9keRXNuJq0WjhJV1ePJa9keRXNuJq0WjhJV1ePJa9keRXNuJq0WjhJV1ePJa9keRXNuJq0WjhJV1ePJa9keRXNuJq0WjhJV1ePJa9keRXNuJq0WjhJV1ePJa9keRXNuJq0WjhJVfZ3VSglEbnXPSJy2TKlUNuJq0WjhJV1ePJa9keRXNuJq0WjhJV1ePJa9keRXNuJq0WjhJV1ePJa9keRXNuJq0WjhJV1ePJa9keRXNuJq0WjhJV1ePJa9keRXNuJq0WjhJV1ePJa9keRXNuJq0WjhJV1ePJa9keRXNuJq0WjhJVfZ3VSglEbnXPSJy2TKlUNuJq0WjhJV1ePJa9keRXNuJq0WjhJV1ePJa9keRXNuJq0WjhJV1ePJa9keRXNuJq0WjhJV1ePJa9keRXNuJq0WjhJV1ePJa9keRXNuJq0WjhJV1ePJa9keRXNuJq0WjhJV1ePJa9keRXNuJq0WjhJVfZ3VSglEbnXPSJy2TKlUNuJq0WjhJV1ePJa9keRXNuJq0WjhJV1ePJa9keRXNuJq0WjhJV1ePJa9keRXNuJq0WjhJV1ePJa9keRXNuJq0WjhJV1ePJa9keRXNuJq0WjhJV1ePJa9keRXNuJq0WjhJV1ePJa9keRXNuJq0WjhJV'
			);
			assert.equal(
				repeater('JOx6IRiAbP', {
					repeatTimes: 7,
					separator: 'AQl63GI0RT',
					addition: 'WHTejbVjEq',
					additionRepeatTimes: 6,
					additionSeparator: 'I77P01rryA',
				}),
				'JOx6IRiAbPWHTejbVjEqI77P01rryAWHTejbVjEqI77P01rryAWHTejbVjEqI77P01rryAWHTejbVjEqI77P01rryAWHTejbVjEqI77P01rryAWHTejbVjEqAQl63GI0RTJOx6IRiAbPWHTejbVjEqI77P01rryAWHTejbVjEqI77P01rryAWHTejbVjEqI77P01rryAWHTejbVjEqI77P01rryAWHTejbVjEqI77P01rryAWHTejbVjEqAQl63GI0RTJOx6IRiAbPWHTejbVjEqI77P01rryAWHTejbVjEqI77P01rryAWHTejbVjEqI77P01rryAWHTejbVjEqI77P01rryAWHTejbVjEqI77P01rryAWHTejbVjEqAQl63GI0RTJOx6IRiAbPWHTejbVjEqI77P01rryAWHTejbVjEqI77P01rryAWHTejbVjEqI77P01rryAWHTejbVjEqI77P01rryAWHTejbVjEqI77P01rryAWHTejbVjEqAQl63GI0RTJOx6IRiAbPWHTejbVjEqI77P01rryAWHTejbVjEqI77P01rryAWHTejbVjEqI77P01rryAWHTejbVjEqI77P01rryAWHTejbVjEqI77P01rryAWHTejbVjEqAQl63GI0RTJOx6IRiAbPWHTejbVjEqI77P01rryAWHTejbVjEqI77P01rryAWHTejbVjEqI77P01rryAWHTejbVjEqI77P01rryAWHTejbVjEqI77P01rryAWHTejbVjEqAQl63GI0RTJOx6IRiAbPWHTejbVjEqI77P01rryAWHTejbVjEqI77P01rryAWHTejbVjEqI77P01rryAWHTejbVjEqI77P01rryAWHTejbVjEqI77P01rryAWHTejbVjEq'
			);
			assert.equal(
				repeater('MmHUn9u4Ch', {
					repeatTimes: 9,
					separator: 'o0DafVm17m',
					addition: '6PErRWwboY',
					additionRepeatTimes: 8,
					additionSeparator: 'CtwQUZmp4D',
				}),
				'MmHUn9u4Ch6PErRWwboYCtwQUZmp4D6PErRWwboYCtwQUZmp4D6PErRWwboYCtwQUZmp4D6PErRWwboYCtwQUZmp4D6PErRWwboYCtwQUZmp4D6PErRWwboYCtwQUZmp4D6PErRWwboYCtwQUZmp4D6PErRWwboYo0DafVm17mMmHUn9u4Ch6PErRWwboYCtwQUZmp4D6PErRWwboYCtwQUZmp4D6PErRWwboYCtwQUZmp4D6PErRWwboYCtwQUZmp4D6PErRWwboYCtwQUZmp4D6PErRWwboYCtwQUZmp4D6PErRWwboYCtwQUZmp4D6PErRWwboYo0DafVm17mMmHUn9u4Ch6PErRWwboYCtwQUZmp4D6PErRWwboYCtwQUZmp4D6PErRWwboYCtwQUZmp4D6PErRWwboYCtwQUZmp4D6PErRWwboYCtwQUZmp4D6PErRWwboYCtwQUZmp4D6PErRWwboYCtwQUZmp4D6PErRWwboYo0DafVm17mMmHUn9u4Ch6PErRWwboYCtwQUZmp4D6PErRWwboYCtwQUZmp4D6PErRWwboYCtwQUZmp4D6PErRWwboYCtwQUZmp4D6PErRWwboYCtwQUZmp4D6PErRWwboYCtwQUZmp4D6PErRWwboYCtwQUZmp4D6PErRWwboYo0DafVm17mMmHUn9u4Ch6PErRWwboYCtwQUZmp4D6PErRWwboYCtwQUZmp4D6PErRWwboYCtwQUZmp4D6PErRWwboYCtwQUZmp4D6PErRWwboYCtwQUZmp4D6PErRWwboYCtwQUZmp4D6PErRWwboYCtwQUZmp4D6PErRWwboYo0DafVm17mMmHUn9u4Ch6PErRWwboYCtwQUZmp4D6PErRWwboYCtwQUZmp4D6PErRWwboYCtwQUZmp4D6PErRWwboYCtwQUZmp4D6PErRWwboYCtwQUZmp4D6PErRWwboYCtwQUZmp4D6PErRWwboYCtwQUZmp4D6PErRWwboYo0DafVm17mMmHUn9u4Ch6PErRWwboYCtwQUZmp4D6PErRWwboYCtwQUZmp4D6PErRWwboYCtwQUZmp4D6PErRWwboYCtwQUZmp4D6PErRWwboYCtwQUZmp4D6PErRWwboYCtwQUZmp4D6PErRWwboYCtwQUZmp4D6PErRWwboYo0DafVm17mMmHUn9u4Ch6PErRWwboYCtwQUZmp4D6PErRWwboYCtwQUZmp4D6PErRWwboYCtwQUZmp4D6PErRWwboYCtwQUZmp4D6PErRWwboYCtwQUZmp4D6PErRWwboYCtwQUZmp4D6PErRWwboYCtwQUZmp4D6PErRWwboYo0DafVm17mMmHUn9u4Ch6PErRWwboYCtwQUZmp4D6PErRWwboYCtwQUZmp4D6PErRWwboYCtwQUZmp4D6PErRWwboYCtwQUZmp4D6PErRWwboYCtwQUZmp4D6PErRWwboYCtwQUZmp4D6PErRWwboYCtwQUZmp4D6PErRWwboY'
			);
			assert.equal(
				repeater('CVM7XVLPkw', {
					repeatTimes: 8,
					separator: 'Ri54RVNvDY',
					addition: 'vk4P7uPwuc',
					additionRepeatTimes: 6,
					additionSeparator: 'CGkM6agEfh',
				}),
				'CVM7XVLPkwvk4P7uPwucCGkM6agEfhvk4P7uPwucCGkM6agEfhvk4P7uPwucCGkM6agEfhvk4P7uPwucCGkM6agEfhvk4P7uPwucCGkM6agEfhvk4P7uPwucRi54RVNvDYCVM7XVLPkwvk4P7uPwucCGkM6agEfhvk4P7uPwucCGkM6agEfhvk4P7uPwucCGkM6agEfhvk4P7uPwucCGkM6agEfhvk4P7uPwucCGkM6agEfhvk4P7uPwucRi54RVNvDYCVM7XVLPkwvk4P7uPwucCGkM6agEfhvk4P7uPwucCGkM6agEfhvk4P7uPwucCGkM6agEfhvk4P7uPwucCGkM6agEfhvk4P7uPwucCGkM6agEfhvk4P7uPwucRi54RVNvDYCVM7XVLPkwvk4P7uPwucCGkM6agEfhvk4P7uPwucCGkM6agEfhvk4P7uPwucCGkM6agEfhvk4P7uPwucCGkM6agEfhvk4P7uPwucCGkM6agEfhvk4P7uPwucRi54RVNvDYCVM7XVLPkwvk4P7uPwucCGkM6agEfhvk4P7uPwucCGkM6agEfhvk4P7uPwucCGkM6agEfhvk4P7uPwucCGkM6agEfhvk4P7uPwucCGkM6agEfhvk4P7uPwucRi54RVNvDYCVM7XVLPkwvk4P7uPwucCGkM6agEfhvk4P7uPwucCGkM6agEfhvk4P7uPwucCGkM6agEfhvk4P7uPwucCGkM6agEfhvk4P7uPwucCGkM6agEfhvk4P7uPwucRi54RVNvDYCVM7XVLPkwvk4P7uPwucCGkM6agEfhvk4P7uPwucCGkM6agEfhvk4P7uPwucCGkM6agEfhvk4P7uPwucCGkM6agEfhvk4P7uPwucCGkM6agEfhvk4P7uPwucRi54RVNvDYCVM7XVLPkwvk4P7uPwucCGkM6agEfhvk4P7uPwucCGkM6agEfhvk4P7uPwucCGkM6agEfhvk4P7uPwucCGkM6agEfhvk4P7uPwucCGkM6agEfhvk4P7uPwuc'
			);
			assert.equal(
				repeater('zyUhkcYK4B', {
					repeatTimes: 7,
					separator: 'Ui70RMLtcv',
					addition: 'jtCxKVqbPT',
					additionRepeatTimes: 3,
					additionSeparator: 'NCwT178jLz',
				}),
				'zyUhkcYK4BjtCxKVqbPTNCwT178jLzjtCxKVqbPTNCwT178jLzjtCxKVqbPTUi70RMLtcvzyUhkcYK4BjtCxKVqbPTNCwT178jLzjtCxKVqbPTNCwT178jLzjtCxKVqbPTUi70RMLtcvzyUhkcYK4BjtCxKVqbPTNCwT178jLzjtCxKVqbPTNCwT178jLzjtCxKVqbPTUi70RMLtcvzyUhkcYK4BjtCxKVqbPTNCwT178jLzjtCxKVqbPTNCwT178jLzjtCxKVqbPTUi70RMLtcvzyUhkcYK4BjtCxKVqbPTNCwT178jLzjtCxKVqbPTNCwT178jLzjtCxKVqbPTUi70RMLtcvzyUhkcYK4BjtCxKVqbPTNCwT178jLzjtCxKVqbPTNCwT178jLzjtCxKVqbPTUi70RMLtcvzyUhkcYK4BjtCxKVqbPTNCwT178jLzjtCxKVqbPTNCwT178jLzjtCxKVqbPT'
			);
			assert.equal(
				repeater('56Cm2aNwKM', {
					repeatTimes: 6,
					separator: 'qOX8dE6pSE',
					addition: 'Q4Iuvg73uH',
					additionRepeatTimes: 1,
					additionSeparator: 'dJkCWg3fc0',
				}),
				'56Cm2aNwKMQ4Iuvg73uHqOX8dE6pSE56Cm2aNwKMQ4Iuvg73uHqOX8dE6pSE56Cm2aNwKMQ4Iuvg73uHqOX8dE6pSE56Cm2aNwKMQ4Iuvg73uHqOX8dE6pSE56Cm2aNwKMQ4Iuvg73uHqOX8dE6pSE56Cm2aNwKMQ4Iuvg73uH'
			);
			assert.equal(
				repeater('a1pJSYYTEZ', {
					repeatTimes: 7,
					separator: 'VMvP8PUFDJ',
					addition: 'g82V0jQC1P',
					additionRepeatTimes: 5,
					additionSeparator: 'ExZ1V8uMmh',
				}),
				'a1pJSYYTEZg82V0jQC1PExZ1V8uMmhg82V0jQC1PExZ1V8uMmhg82V0jQC1PExZ1V8uMmhg82V0jQC1PExZ1V8uMmhg82V0jQC1PVMvP8PUFDJa1pJSYYTEZg82V0jQC1PExZ1V8uMmhg82V0jQC1PExZ1V8uMmhg82V0jQC1PExZ1V8uMmhg82V0jQC1PExZ1V8uMmhg82V0jQC1PVMvP8PUFDJa1pJSYYTEZg82V0jQC1PExZ1V8uMmhg82V0jQC1PExZ1V8uMmhg82V0jQC1PExZ1V8uMmhg82V0jQC1PExZ1V8uMmhg82V0jQC1PVMvP8PUFDJa1pJSYYTEZg82V0jQC1PExZ1V8uMmhg82V0jQC1PExZ1V8uMmhg82V0jQC1PExZ1V8uMmhg82V0jQC1PExZ1V8uMmhg82V0jQC1PVMvP8PUFDJa1pJSYYTEZg82V0jQC1PExZ1V8uMmhg82V0jQC1PExZ1V8uMmhg82V0jQC1PExZ1V8uMmhg82V0jQC1PExZ1V8uMmhg82V0jQC1PVMvP8PUFDJa1pJSYYTEZg82V0jQC1PExZ1V8uMmhg82V0jQC1PExZ1V8uMmhg82V0jQC1PExZ1V8uMmhg82V0jQC1PExZ1V8uMmhg82V0jQC1PVMvP8PUFDJa1pJSYYTEZg82V0jQC1PExZ1V8uMmhg82V0jQC1PExZ1V8uMmhg82V0jQC1PExZ1V8uMmhg82V0jQC1PExZ1V8uMmhg82V0jQC1P'
			);
			assert.equal(
				repeater('QFRLdjm1gz', {
					repeatTimes: 6,
					separator: '6cb5zpcHJO',
					addition: 'SLG7Ii4YAu',
					additionRepeatTimes: 2,
					additionSeparator: 'N53zKJz6o9',
				}),
				'QFRLdjm1gzSLG7Ii4YAuN53zKJz6o9SLG7Ii4YAu6cb5zpcHJOQFRLdjm1gzSLG7Ii4YAuN53zKJz6o9SLG7Ii4YAu6cb5zpcHJOQFRLdjm1gzSLG7Ii4YAuN53zKJz6o9SLG7Ii4YAu6cb5zpcHJOQFRLdjm1gzSLG7Ii4YAuN53zKJz6o9SLG7Ii4YAu6cb5zpcHJOQFRLdjm1gzSLG7Ii4YAuN53zKJz6o9SLG7Ii4YAu6cb5zpcHJOQFRLdjm1gzSLG7Ii4YAuN53zKJz6o9SLG7Ii4YAu'
			);
			assert.equal(
				repeater('cYYN4fkzKf', {
					repeatTimes: 9,
					separator: 'GK6pmVQd6h',
					addition: 'wwFyGbVlpN',
					additionRepeatTimes: 8,
					additionSeparator: 'WcE0RznvPv',
				}),
				'cYYN4fkzKfwwFyGbVlpNWcE0RznvPvwwFyGbVlpNWcE0RznvPvwwFyGbVlpNWcE0RznvPvwwFyGbVlpNWcE0RznvPvwwFyGbVlpNWcE0RznvPvwwFyGbVlpNWcE0RznvPvwwFyGbVlpNWcE0RznvPvwwFyGbVlpNGK6pmVQd6hcYYN4fkzKfwwFyGbVlpNWcE0RznvPvwwFyGbVlpNWcE0RznvPvwwFyGbVlpNWcE0RznvPvwwFyGbVlpNWcE0RznvPvwwFyGbVlpNWcE0RznvPvwwFyGbVlpNWcE0RznvPvwwFyGbVlpNWcE0RznvPvwwFyGbVlpNGK6pmVQd6hcYYN4fkzKfwwFyGbVlpNWcE0RznvPvwwFyGbVlpNWcE0RznvPvwwFyGbVlpNWcE0RznvPvwwFyGbVlpNWcE0RznvPvwwFyGbVlpNWcE0RznvPvwwFyGbVlpNWcE0RznvPvwwFyGbVlpNWcE0RznvPvwwFyGbVlpNGK6pmVQd6hcYYN4fkzKfwwFyGbVlpNWcE0RznvPvwwFyGbVlpNWcE0RznvPvwwFyGbVlpNWcE0RznvPvwwFyGbVlpNWcE0RznvPvwwFyGbVlpNWcE0RznvPvwwFyGbVlpNWcE0RznvPvwwFyGbVlpNWcE0RznvPvwwFyGbVlpNGK6pmVQd6hcYYN4fkzKfwwFyGbVlpNWcE0RznvPvwwFyGbVlpNWcE0RznvPvwwFyGbVlpNWcE0RznvPvwwFyGbVlpNWcE0RznvPvwwFyGbVlpNWcE0RznvPvwwFyGbVlpNWcE0RznvPvwwFyGbVlpNWcE0RznvPvwwFyGbVlpNGK6pmVQd6hcYYN4fkzKfwwFyGbVlpNWcE0RznvPvwwFyGbVlpNWcE0RznvPvwwFyGbVlpNWcE0RznvPvwwFyGbVlpNWcE0RznvPvwwFyGbVlpNWcE0RznvPvwwFyGbVlpNWcE0RznvPvwwFyGbVlpNWcE0RznvPvwwFyGbVlpNGK6pmVQd6hcYYN4fkzKfwwFyGbVlpNWcE0RznvPvwwFyGbVlpNWcE0RznvPvwwFyGbVlpNWcE0RznvPvwwFyGbVlpNWcE0RznvPvwwFyGbVlpNWcE0RznvPvwwFyGbVlpNWcE0RznvPvwwFyGbVlpNWcE0RznvPvwwFyGbVlpNGK6pmVQd6hcYYN4fkzKfwwFyGbVlpNWcE0RznvPvwwFyGbVlpNWcE0RznvPvwwFyGbVlpNWcE0RznvPvwwFyGbVlpNWcE0RznvPvwwFyGbVlpNWcE0RznvPvwwFyGbVlpNWcE0RznvPvwwFyGbVlpNWcE0RznvPvwwFyGbVlpNGK6pmVQd6hcYYN4fkzKfwwFyGbVlpNWcE0RznvPvwwFyGbVlpNWcE0RznvPvwwFyGbVlpNWcE0RznvPvwwFyGbVlpNWcE0RznvPvwwFyGbVlpNWcE0RznvPvwwFyGbVlpNWcE0RznvPvwwFyGbVlpNWcE0RznvPvwwFyGbVlpN'
			);
			assert.equal(
				repeater('RDFwMoytgm', {
					repeatTimes: 5,
					separator: 'j7a1VECgbe',
					addition: 'RiDDnQzCum',
					additionRepeatTimes: 1,
					additionSeparator: 'ay41tTLjVi',
				}),
				'RDFwMoytgmRiDDnQzCumj7a1VECgbeRDFwMoytgmRiDDnQzCumj7a1VECgbeRDFwMoytgmRiDDnQzCumj7a1VECgbeRDFwMoytgmRiDDnQzCumj7a1VECgbeRDFwMoytgmRiDDnQzCum'
			);
			assert.equal(
				repeater('5E2rVc6ZyA', {
					repeatTimes: 1,
					separator: 'Z6MWf4KXiJ',
					addition: 'gWUy3cHcZ8',
					additionRepeatTimes: 5,
					additionSeparator: 'IVKB6LJ4WB',
				}),
				'5E2rVc6ZyAgWUy3cHcZ8IVKB6LJ4WBgWUy3cHcZ8IVKB6LJ4WBgWUy3cHcZ8IVKB6LJ4WBgWUy3cHcZ8IVKB6LJ4WBgWUy3cHcZ8'
			);
			assert.equal(
				repeater('PoaauN88XI', {
					repeatTimes: 6,
					separator: '4xPzoLqCOX',
					addition: '3a2NIezUbW',
					additionRepeatTimes: 3,
					additionSeparator: 'jHRqJuUAwk',
				}),
				'PoaauN88XI3a2NIezUbWjHRqJuUAwk3a2NIezUbWjHRqJuUAwk3a2NIezUbW4xPzoLqCOXPoaauN88XI3a2NIezUbWjHRqJuUAwk3a2NIezUbWjHRqJuUAwk3a2NIezUbW4xPzoLqCOXPoaauN88XI3a2NIezUbWjHRqJuUAwk3a2NIezUbWjHRqJuUAwk3a2NIezUbW4xPzoLqCOXPoaauN88XI3a2NIezUbWjHRqJuUAwk3a2NIezUbWjHRqJuUAwk3a2NIezUbW4xPzoLqCOXPoaauN88XI3a2NIezUbWjHRqJuUAwk3a2NIezUbWjHRqJuUAwk3a2NIezUbW4xPzoLqCOXPoaauN88XI3a2NIezUbWjHRqJuUAwk3a2NIezUbWjHRqJuUAwk3a2NIezUbW'
			);
			assert.equal(
				repeater('SpFYCfoMya', {
					repeatTimes: 8,
					separator: '93MhcLhDLA',
					addition: 'oBAZQqfmIQ',
					additionRepeatTimes: 9,
					additionSeparator: 'UC6tPZHk6i',
				}),
				'SpFYCfoMyaoBAZQqfmIQUC6tPZHk6ioBAZQqfmIQUC6tPZHk6ioBAZQqfmIQUC6tPZHk6ioBAZQqfmIQUC6tPZHk6ioBAZQqfmIQUC6tPZHk6ioBAZQqfmIQUC6tPZHk6ioBAZQqfmIQUC6tPZHk6ioBAZQqfmIQUC6tPZHk6ioBAZQqfmIQ93MhcLhDLASpFYCfoMyaoBAZQqfmIQUC6tPZHk6ioBAZQqfmIQUC6tPZHk6ioBAZQqfmIQUC6tPZHk6ioBAZQqfmIQUC6tPZHk6ioBAZQqfmIQUC6tPZHk6ioBAZQqfmIQUC6tPZHk6ioBAZQqfmIQUC6tPZHk6ioBAZQqfmIQUC6tPZHk6ioBAZQqfmIQ93MhcLhDLASpFYCfoMyaoBAZQqfmIQUC6tPZHk6ioBAZQqfmIQUC6tPZHk6ioBAZQqfmIQUC6tPZHk6ioBAZQqfmIQUC6tPZHk6ioBAZQqfmIQUC6tPZHk6ioBAZQqfmIQUC6tPZHk6ioBAZQqfmIQUC6tPZHk6ioBAZQqfmIQUC6tPZHk6ioBAZQqfmIQ93MhcLhDLASpFYCfoMyaoBAZQqfmIQUC6tPZHk6ioBAZQqfmIQUC6tPZHk6ioBAZQqfmIQUC6tPZHk6ioBAZQqfmIQUC6tPZHk6ioBAZQqfmIQUC6tPZHk6ioBAZQqfmIQUC6tPZHk6ioBAZQqfmIQUC6tPZHk6ioBAZQqfmIQUC6tPZHk6ioBAZQqfmIQ93MhcLhDLASpFYCfoMyaoBAZQqfmIQUC6tPZHk6ioBAZQqfmIQUC6tPZHk6ioBAZQqfmIQUC6tPZHk6ioBAZQqfmIQUC6tPZHk6ioBAZQqfmIQUC6tPZHk6ioBAZQqfmIQUC6tPZHk6ioBAZQqfmIQUC6tPZHk6ioBAZQqfmIQUC6tPZHk6ioBAZQqfmIQ93MhcLhDLASpFYCfoMyaoBAZQqfmIQUC6tPZHk6ioBAZQqfmIQUC6tPZHk6ioBAZQqfmIQUC6tPZHk6ioBAZQqfmIQUC6tPZHk6ioBAZQqfmIQUC6tPZHk6ioBAZQqfmIQUC6tPZHk6ioBAZQqfmIQUC6tPZHk6ioBAZQqfmIQUC6tPZHk6ioBAZQqfmIQ93MhcLhDLASpFYCfoMyaoBAZQqfmIQUC6tPZHk6ioBAZQqfmIQUC6tPZHk6ioBAZQqfmIQUC6tPZHk6ioBAZQqfmIQUC6tPZHk6ioBAZQqfmIQUC6tPZHk6ioBAZQqfmIQUC6tPZHk6ioBAZQqfmIQUC6tPZHk6ioBAZQqfmIQUC6tPZHk6ioBAZQqfmIQ93MhcLhDLASpFYCfoMyaoBAZQqfmIQUC6tPZHk6ioBAZQqfmIQUC6tPZHk6ioBAZQqfmIQUC6tPZHk6ioBAZQqfmIQUC6tPZHk6ioBAZQqfmIQUC6tPZHk6ioBAZQqfmIQUC6tPZHk6ioBAZQqfmIQUC6tPZHk6ioBAZQqfmIQUC6tPZHk6ioBAZQqfmIQ'
			);
			assert.equal(
				repeater('x6nbyi17ox', {
					repeatTimes: 3,
					separator: 'iXPTEB30Wc',
					addition: 'w9aAAJkkdf',
					additionRepeatTimes: 6,
					additionSeparator: 'tHxrdWZfiA',
				}),
				'x6nbyi17oxw9aAAJkkdftHxrdWZfiAw9aAAJkkdftHxrdWZfiAw9aAAJkkdftHxrdWZfiAw9aAAJkkdftHxrdWZfiAw9aAAJkkdftHxrdWZfiAw9aAAJkkdfiXPTEB30Wcx6nbyi17oxw9aAAJkkdftHxrdWZfiAw9aAAJkkdftHxrdWZfiAw9aAAJkkdftHxrdWZfiAw9aAAJkkdftHxrdWZfiAw9aAAJkkdftHxrdWZfiAw9aAAJkkdfiXPTEB30Wcx6nbyi17oxw9aAAJkkdftHxrdWZfiAw9aAAJkkdftHxrdWZfiAw9aAAJkkdftHxrdWZfiAw9aAAJkkdftHxrdWZfiAw9aAAJkkdftHxrdWZfiAw9aAAJkkdf'
			);
			assert.equal(
				repeater('dh3CAW73av', {
					repeatTimes: 8,
					separator: '5mlAAy9E06',
					addition: 'Q8pcr5UnoC',
					additionRepeatTimes: 5,
					additionSeparator: 'HwhAiZi8Mi',
				}),
				'dh3CAW73avQ8pcr5UnoCHwhAiZi8MiQ8pcr5UnoCHwhAiZi8MiQ8pcr5UnoCHwhAiZi8MiQ8pcr5UnoCHwhAiZi8MiQ8pcr5UnoC5mlAAy9E06dh3CAW73avQ8pcr5UnoCHwhAiZi8MiQ8pcr5UnoCHwhAiZi8MiQ8pcr5UnoCHwhAiZi8MiQ8pcr5UnoCHwhAiZi8MiQ8pcr5UnoC5mlAAy9E06dh3CAW73avQ8pcr5UnoCHwhAiZi8MiQ8pcr5UnoCHwhAiZi8MiQ8pcr5UnoCHwhAiZi8MiQ8pcr5UnoCHwhAiZi8MiQ8pcr5UnoC5mlAAy9E06dh3CAW73avQ8pcr5UnoCHwhAiZi8MiQ8pcr5UnoCHwhAiZi8MiQ8pcr5UnoCHwhAiZi8MiQ8pcr5UnoCHwhAiZi8MiQ8pcr5UnoC5mlAAy9E06dh3CAW73avQ8pcr5UnoCHwhAiZi8MiQ8pcr5UnoCHwhAiZi8MiQ8pcr5UnoCHwhAiZi8MiQ8pcr5UnoCHwhAiZi8MiQ8pcr5UnoC5mlAAy9E06dh3CAW73avQ8pcr5UnoCHwhAiZi8MiQ8pcr5UnoCHwhAiZi8MiQ8pcr5UnoCHwhAiZi8MiQ8pcr5UnoCHwhAiZi8MiQ8pcr5UnoC5mlAAy9E06dh3CAW73avQ8pcr5UnoCHwhAiZi8MiQ8pcr5UnoCHwhAiZi8MiQ8pcr5UnoCHwhAiZi8MiQ8pcr5UnoCHwhAiZi8MiQ8pcr5UnoC5mlAAy9E06dh3CAW73avQ8pcr5UnoCHwhAiZi8MiQ8pcr5UnoCHwhAiZi8MiQ8pcr5UnoCHwhAiZi8MiQ8pcr5UnoCHwhAiZi8MiQ8pcr5UnoC'
			);
			assert.equal(
				repeater('f2WI8v7GbS', {
					repeatTimes: 6,
					separator: 'l5VOFCcIeO',
					addition: '7kxoCRMKqv',
					additionRepeatTimes: 9,
					additionSeparator: 'XgaOFVgptV',
				}),
				'f2WI8v7GbS7kxoCRMKqvXgaOFVgptV7kxoCRMKqvXgaOFVgptV7kxoCRMKqvXgaOFVgptV7kxoCRMKqvXgaOFVgptV7kxoCRMKqvXgaOFVgptV7kxoCRMKqvXgaOFVgptV7kxoCRMKqvXgaOFVgptV7kxoCRMKqvXgaOFVgptV7kxoCRMKqvl5VOFCcIeOf2WI8v7GbS7kxoCRMKqvXgaOFVgptV7kxoCRMKqvXgaOFVgptV7kxoCRMKqvXgaOFVgptV7kxoCRMKqvXgaOFVgptV7kxoCRMKqvXgaOFVgptV7kxoCRMKqvXgaOFVgptV7kxoCRMKqvXgaOFVgptV7kxoCRMKqvXgaOFVgptV7kxoCRMKqvl5VOFCcIeOf2WI8v7GbS7kxoCRMKqvXgaOFVgptV7kxoCRMKqvXgaOFVgptV7kxoCRMKqvXgaOFVgptV7kxoCRMKqvXgaOFVgptV7kxoCRMKqvXgaOFVgptV7kxoCRMKqvXgaOFVgptV7kxoCRMKqvXgaOFVgptV7kxoCRMKqvXgaOFVgptV7kxoCRMKqvl5VOFCcIeOf2WI8v7GbS7kxoCRMKqvXgaOFVgptV7kxoCRMKqvXgaOFVgptV7kxoCRMKqvXgaOFVgptV7kxoCRMKqvXgaOFVgptV7kxoCRMKqvXgaOFVgptV7kxoCRMKqvXgaOFVgptV7kxoCRMKqvXgaOFVgptV7kxoCRMKqvXgaOFVgptV7kxoCRMKqvl5VOFCcIeOf2WI8v7GbS7kxoCRMKqvXgaOFVgptV7kxoCRMKqvXgaOFVgptV7kxoCRMKqvXgaOFVgptV7kxoCRMKqvXgaOFVgptV7kxoCRMKqvXgaOFVgptV7kxoCRMKqvXgaOFVgptV7kxoCRMKqvXgaOFVgptV7kxoCRMKqvXgaOFVgptV7kxoCRMKqvl5VOFCcIeOf2WI8v7GbS7kxoCRMKqvXgaOFVgptV7kxoCRMKqvXgaOFVgptV7kxoCRMKqvXgaOFVgptV7kxoCRMKqvXgaOFVgptV7kxoCRMKqvXgaOFVgptV7kxoCRMKqvXgaOFVgptV7kxoCRMKqvXgaOFVgptV7kxoCRMKqvXgaOFVgptV7kxoCRMKqv'
			);
			assert.equal(
				repeater('ZrB1pbjK7L', {
					repeatTimes: 6,
					separator: 'HhRybVYURf',
					addition: 'mur4z7RVNu',
					additionRepeatTimes: 4,
					additionSeparator: 'zu2u6nONft',
				}),
				'ZrB1pbjK7Lmur4z7RVNuzu2u6nONftmur4z7RVNuzu2u6nONftmur4z7RVNuzu2u6nONftmur4z7RVNuHhRybVYURfZrB1pbjK7Lmur4z7RVNuzu2u6nONftmur4z7RVNuzu2u6nONftmur4z7RVNuzu2u6nONftmur4z7RVNuHhRybVYURfZrB1pbjK7Lmur4z7RVNuzu2u6nONftmur4z7RVNuzu2u6nONftmur4z7RVNuzu2u6nONftmur4z7RVNuHhRybVYURfZrB1pbjK7Lmur4z7RVNuzu2u6nONftmur4z7RVNuzu2u6nONftmur4z7RVNuzu2u6nONftmur4z7RVNuHhRybVYURfZrB1pbjK7Lmur4z7RVNuzu2u6nONftmur4z7RVNuzu2u6nONftmur4z7RVNuzu2u6nONftmur4z7RVNuHhRybVYURfZrB1pbjK7Lmur4z7RVNuzu2u6nONftmur4z7RVNuzu2u6nONftmur4z7RVNuzu2u6nONftmur4z7RVNu'
			);
			assert.equal(
				repeater('5mIU5TEPCu', {
					repeatTimes: 5,
					separator: '0Gxy4Rd1g5',
					addition: '5YQC3gTqSL',
					additionRepeatTimes: 3,
					additionSeparator: 'K3xiw5jTK9',
				}),
				'5mIU5TEPCu5YQC3gTqSLK3xiw5jTK95YQC3gTqSLK3xiw5jTK95YQC3gTqSL0Gxy4Rd1g55mIU5TEPCu5YQC3gTqSLK3xiw5jTK95YQC3gTqSLK3xiw5jTK95YQC3gTqSL0Gxy4Rd1g55mIU5TEPCu5YQC3gTqSLK3xiw5jTK95YQC3gTqSLK3xiw5jTK95YQC3gTqSL0Gxy4Rd1g55mIU5TEPCu5YQC3gTqSLK3xiw5jTK95YQC3gTqSLK3xiw5jTK95YQC3gTqSL0Gxy4Rd1g55mIU5TEPCu5YQC3gTqSLK3xiw5jTK95YQC3gTqSLK3xiw5jTK95YQC3gTqSL'
			);
			assert.equal(
				repeater('nhpw4dpOSC', {
					repeatTimes: 8,
					separator: 'gJoR0NnZdK',
					addition: 'UZvefnXiV2',
					additionRepeatTimes: 7,
					additionSeparator: 'iAafFI1j4H',
				}),
				'nhpw4dpOSCUZvefnXiV2iAafFI1j4HUZvefnXiV2iAafFI1j4HUZvefnXiV2iAafFI1j4HUZvefnXiV2iAafFI1j4HUZvefnXiV2iAafFI1j4HUZvefnXiV2iAafFI1j4HUZvefnXiV2gJoR0NnZdKnhpw4dpOSCUZvefnXiV2iAafFI1j4HUZvefnXiV2iAafFI1j4HUZvefnXiV2iAafFI1j4HUZvefnXiV2iAafFI1j4HUZvefnXiV2iAafFI1j4HUZvefnXiV2iAafFI1j4HUZvefnXiV2gJoR0NnZdKnhpw4dpOSCUZvefnXiV2iAafFI1j4HUZvefnXiV2iAafFI1j4HUZvefnXiV2iAafFI1j4HUZvefnXiV2iAafFI1j4HUZvefnXiV2iAafFI1j4HUZvefnXiV2iAafFI1j4HUZvefnXiV2gJoR0NnZdKnhpw4dpOSCUZvefnXiV2iAafFI1j4HUZvefnXiV2iAafFI1j4HUZvefnXiV2iAafFI1j4HUZvefnXiV2iAafFI1j4HUZvefnXiV2iAafFI1j4HUZvefnXiV2iAafFI1j4HUZvefnXiV2gJoR0NnZdKnhpw4dpOSCUZvefnXiV2iAafFI1j4HUZvefnXiV2iAafFI1j4HUZvefnXiV2iAafFI1j4HUZvefnXiV2iAafFI1j4HUZvefnXiV2iAafFI1j4HUZvefnXiV2iAafFI1j4HUZvefnXiV2gJoR0NnZdKnhpw4dpOSCUZvefnXiV2iAafFI1j4HUZvefnXiV2iAafFI1j4HUZvefnXiV2iAafFI1j4HUZvefnXiV2iAafFI1j4HUZvefnXiV2iAafFI1j4HUZvefnXiV2iAafFI1j4HUZvefnXiV2gJoR0NnZdKnhpw4dpOSCUZvefnXiV2iAafFI1j4HUZvefnXiV2iAafFI1j4HUZvefnXiV2iAafFI1j4HUZvefnXiV2iAafFI1j4HUZvefnXiV2iAafFI1j4HUZvefnXiV2iAafFI1j4HUZvefnXiV2gJoR0NnZdKnhpw4dpOSCUZvefnXiV2iAafFI1j4HUZvefnXiV2iAafFI1j4HUZvefnXiV2iAafFI1j4HUZvefnXiV2iAafFI1j4HUZvefnXiV2iAafFI1j4HUZvefnXiV2iAafFI1j4HUZvefnXiV2'
			);
			assert.equal(
				repeater('wNTRZHfZNt', {
					repeatTimes: 1,
					separator: 'gOxDnpRAw4',
					addition: 'QBzAtYuFBQ',
					additionRepeatTimes: 5,
					additionSeparator: 'DVgBfvht1V',
				}),
				'wNTRZHfZNtQBzAtYuFBQDVgBfvht1VQBzAtYuFBQDVgBfvht1VQBzAtYuFBQDVgBfvht1VQBzAtYuFBQDVgBfvht1VQBzAtYuFBQ'
			);
			assert.equal(
				repeater('86z1PVmRHv', {
					repeatTimes: 2,
					separator: 'OnU6Lajwxc',
					addition: 'Wbv4zBY3t2',
					additionRepeatTimes: 1,
					additionSeparator: 'IMJSm9wq2N',
				}),
				'86z1PVmRHvWbv4zBY3t2OnU6Lajwxc86z1PVmRHvWbv4zBY3t2'
			);
			assert.equal(
				repeater('CRbLkuE4Nn', {
					repeatTimes: 1,
					separator: '8IxNHSh0RZ',
					addition: 'LhYmgA0q6h',
					additionRepeatTimes: 3,
					additionSeparator: '9iW67H4K1F',
				}),
				'CRbLkuE4NnLhYmgA0q6h9iW67H4K1FLhYmgA0q6h9iW67H4K1FLhYmgA0q6h'
			);
			assert.equal(
				repeater('BWUx56GHup', {
					repeatTimes: 4,
					separator: 'jk53GdnIXk',
					addition: 'DrfA9EEfzi',
					additionRepeatTimes: 1,
					additionSeparator: 'FrKeTYov0i',
				}),
				'BWUx56GHupDrfA9EEfzijk53GdnIXkBWUx56GHupDrfA9EEfzijk53GdnIXkBWUx56GHupDrfA9EEfzijk53GdnIXkBWUx56GHupDrfA9EEfzi'
			);
			assert.equal(
				repeater('ftdbrDAkOt', {
					repeatTimes: 8,
					separator: 'R0icHRlDIq',
					addition: 'fvqSIKT9jj',
					additionRepeatTimes: 5,
					additionSeparator: 'L20ZyRjUuG',
				}),
				'ftdbrDAkOtfvqSIKT9jjL20ZyRjUuGfvqSIKT9jjL20ZyRjUuGfvqSIKT9jjL20ZyRjUuGfvqSIKT9jjL20ZyRjUuGfvqSIKT9jjR0icHRlDIqftdbrDAkOtfvqSIKT9jjL20ZyRjUuGfvqSIKT9jjL20ZyRjUuGfvqSIKT9jjL20ZyRjUuGfvqSIKT9jjL20ZyRjUuGfvqSIKT9jjR0icHRlDIqftdbrDAkOtfvqSIKT9jjL20ZyRjUuGfvqSIKT9jjL20ZyRjUuGfvqSIKT9jjL20ZyRjUuGfvqSIKT9jjL20ZyRjUuGfvqSIKT9jjR0icHRlDIqftdbrDAkOtfvqSIKT9jjL20ZyRjUuGfvqSIKT9jjL20ZyRjUuGfvqSIKT9jjL20ZyRjUuGfvqSIKT9jjL20ZyRjUuGfvqSIKT9jjR0icHRlDIqftdbrDAkOtfvqSIKT9jjL20ZyRjUuGfvqSIKT9jjL20ZyRjUuGfvqSIKT9jjL20ZyRjUuGfvqSIKT9jjL20ZyRjUuGfvqSIKT9jjR0icHRlDIqftdbrDAkOtfvqSIKT9jjL20ZyRjUuGfvqSIKT9jjL20ZyRjUuGfvqSIKT9jjL20ZyRjUuGfvqSIKT9jjL20ZyRjUuGfvqSIKT9jjR0icHRlDIqftdbrDAkOtfvqSIKT9jjL20ZyRjUuGfvqSIKT9jjL20ZyRjUuGfvqSIKT9jjL20ZyRjUuGfvqSIKT9jjL20ZyRjUuGfvqSIKT9jjR0icHRlDIqftdbrDAkOtfvqSIKT9jjL20ZyRjUuGfvqSIKT9jjL20ZyRjUuGfvqSIKT9jjL20ZyRjUuGfvqSIKT9jjL20ZyRjUuGfvqSIKT9jj'
			);
			assert.equal(
				repeater('oJhrgWY7dc', {
					repeatTimes: 9,
					separator: 'clGScw77Zk',
					addition: '2dkuYQYxQA',
					additionRepeatTimes: 6,
					additionSeparator: 'XckAL0fy6M',
				}),
				'oJhrgWY7dc2dkuYQYxQAXckAL0fy6M2dkuYQYxQAXckAL0fy6M2dkuYQYxQAXckAL0fy6M2dkuYQYxQAXckAL0fy6M2dkuYQYxQAXckAL0fy6M2dkuYQYxQAclGScw77ZkoJhrgWY7dc2dkuYQYxQAXckAL0fy6M2dkuYQYxQAXckAL0fy6M2dkuYQYxQAXckAL0fy6M2dkuYQYxQAXckAL0fy6M2dkuYQYxQAXckAL0fy6M2dkuYQYxQAclGScw77ZkoJhrgWY7dc2dkuYQYxQAXckAL0fy6M2dkuYQYxQAXckAL0fy6M2dkuYQYxQAXckAL0fy6M2dkuYQYxQAXckAL0fy6M2dkuYQYxQAXckAL0fy6M2dkuYQYxQAclGScw77ZkoJhrgWY7dc2dkuYQYxQAXckAL0fy6M2dkuYQYxQAXckAL0fy6M2dkuYQYxQAXckAL0fy6M2dkuYQYxQAXckAL0fy6M2dkuYQYxQAXckAL0fy6M2dkuYQYxQAclGScw77ZkoJhrgWY7dc2dkuYQYxQAXckAL0fy6M2dkuYQYxQAXckAL0fy6M2dkuYQYxQAXckAL0fy6M2dkuYQYxQAXckAL0fy6M2dkuYQYxQAXckAL0fy6M2dkuYQYxQAclGScw77ZkoJhrgWY7dc2dkuYQYxQAXckAL0fy6M2dkuYQYxQAXckAL0fy6M2dkuYQYxQAXckAL0fy6M2dkuYQYxQAXckAL0fy6M2dkuYQYxQAXckAL0fy6M2dkuYQYxQAclGScw77ZkoJhrgWY7dc2dkuYQYxQAXckAL0fy6M2dkuYQYxQAXckAL0fy6M2dkuYQYxQAXckAL0fy6M2dkuYQYxQAXckAL0fy6M2dkuYQYxQAXckAL0fy6M2dkuYQYxQAclGScw77ZkoJhrgWY7dc2dkuYQYxQAXckAL0fy6M2dkuYQYxQAXckAL0fy6M2dkuYQYxQAXckAL0fy6M2dkuYQYxQAXckAL0fy6M2dkuYQYxQAXckAL0fy6M2dkuYQYxQAclGScw77ZkoJhrgWY7dc2dkuYQYxQAXckAL0fy6M2dkuYQYxQAXckAL0fy6M2dkuYQYxQAXckAL0fy6M2dkuYQYxQAXckAL0fy6M2dkuYQYxQAXckAL0fy6M2dkuYQYxQA'
			);
			assert.equal(
				repeater('qCHcRLyjeN', {
					repeatTimes: 4,
					separator: 'yRU5agdiVg',
					addition: 'nmooxHKQzu',
					additionRepeatTimes: 2,
					additionSeparator: 'UQ1LNoGb9a',
				}),
				'qCHcRLyjeNnmooxHKQzuUQ1LNoGb9anmooxHKQzuyRU5agdiVgqCHcRLyjeNnmooxHKQzuUQ1LNoGb9anmooxHKQzuyRU5agdiVgqCHcRLyjeNnmooxHKQzuUQ1LNoGb9anmooxHKQzuyRU5agdiVgqCHcRLyjeNnmooxHKQzuUQ1LNoGb9anmooxHKQzu'
			);
			assert.equal(
				repeater('gVOnCGmSFH', {
					repeatTimes: 3,
					separator: '3kzj0GQ9A4',
					addition: 'P1OYtbhZpv',
					additionRepeatTimes: 7,
					additionSeparator: 'Ob3k6tHqQN',
				}),
				'gVOnCGmSFHP1OYtbhZpvOb3k6tHqQNP1OYtbhZpvOb3k6tHqQNP1OYtbhZpvOb3k6tHqQNP1OYtbhZpvOb3k6tHqQNP1OYtbhZpvOb3k6tHqQNP1OYtbhZpvOb3k6tHqQNP1OYtbhZpv3kzj0GQ9A4gVOnCGmSFHP1OYtbhZpvOb3k6tHqQNP1OYtbhZpvOb3k6tHqQNP1OYtbhZpvOb3k6tHqQNP1OYtbhZpvOb3k6tHqQNP1OYtbhZpvOb3k6tHqQNP1OYtbhZpvOb3k6tHqQNP1OYtbhZpv3kzj0GQ9A4gVOnCGmSFHP1OYtbhZpvOb3k6tHqQNP1OYtbhZpvOb3k6tHqQNP1OYtbhZpvOb3k6tHqQNP1OYtbhZpvOb3k6tHqQNP1OYtbhZpvOb3k6tHqQNP1OYtbhZpvOb3k6tHqQNP1OYtbhZpv'
			);
			assert.equal(
				repeater('GEeAWdV3Da', {
					repeatTimes: 3,
					separator: 'fjNWFaYB2r',
					addition: 'liSzEmjTkM',
					additionRepeatTimes: 4,
					additionSeparator: 'UFX1eUihBw',
				}),
				'GEeAWdV3DaliSzEmjTkMUFX1eUihBwliSzEmjTkMUFX1eUihBwliSzEmjTkMUFX1eUihBwliSzEmjTkMfjNWFaYB2rGEeAWdV3DaliSzEmjTkMUFX1eUihBwliSzEmjTkMUFX1eUihBwliSzEmjTkMUFX1eUihBwliSzEmjTkMfjNWFaYB2rGEeAWdV3DaliSzEmjTkMUFX1eUihBwliSzEmjTkMUFX1eUihBwliSzEmjTkMUFX1eUihBwliSzEmjTkM'
			);
			assert.equal(
				repeater('fwhTy4rDjC', {
					repeatTimes: 9,
					separator: '1ao1je8EmF',
					addition: 'ZozMC7XSjX',
					additionRepeatTimes: 8,
					additionSeparator: 'ofLqcwvMOW',
				}),
				'fwhTy4rDjCZozMC7XSjXofLqcwvMOWZozMC7XSjXofLqcwvMOWZozMC7XSjXofLqcwvMOWZozMC7XSjXofLqcwvMOWZozMC7XSjXofLqcwvMOWZozMC7XSjXofLqcwvMOWZozMC7XSjXofLqcwvMOWZozMC7XSjX1ao1je8EmFfwhTy4rDjCZozMC7XSjXofLqcwvMOWZozMC7XSjXofLqcwvMOWZozMC7XSjXofLqcwvMOWZozMC7XSjXofLqcwvMOWZozMC7XSjXofLqcwvMOWZozMC7XSjXofLqcwvMOWZozMC7XSjXofLqcwvMOWZozMC7XSjX1ao1je8EmFfwhTy4rDjCZozMC7XSjXofLqcwvMOWZozMC7XSjXofLqcwvMOWZozMC7XSjXofLqcwvMOWZozMC7XSjXofLqcwvMOWZozMC7XSjXofLqcwvMOWZozMC7XSjXofLqcwvMOWZozMC7XSjXofLqcwvMOWZozMC7XSjX1ao1je8EmFfwhTy4rDjCZozMC7XSjXofLqcwvMOWZozMC7XSjXofLqcwvMOWZozMC7XSjXofLqcwvMOWZozMC7XSjXofLqcwvMOWZozMC7XSjXofLqcwvMOWZozMC7XSjXofLqcwvMOWZozMC7XSjXofLqcwvMOWZozMC7XSjX1ao1je8EmFfwhTy4rDjCZozMC7XSjXofLqcwvMOWZozMC7XSjXofLqcwvMOWZozMC7XSjXofLqcwvMOWZozMC7XSjXofLqcwvMOWZozMC7XSjXofLqcwvMOWZozMC7XSjXofLqcwvMOWZozMC7XSjXofLqcwvMOWZozMC7XSjX1ao1je8EmFfwhTy4rDjCZozMC7XSjXofLqcwvMOWZozMC7XSjXofLqcwvMOWZozMC7XSjXofLqcwvMOWZozMC7XSjXofLqcwvMOWZozMC7XSjXofLqcwvMOWZozMC7XSjXofLqcwvMOWZozMC7XSjXofLqcwvMOWZozMC7XSjX1ao1je8EmFfwhTy4rDjCZozMC7XSjXofLqcwvMOWZozMC7XSjXofLqcwvMOWZozMC7XSjXofLqcwvMOWZozMC7XSjXofLqcwvMOWZozMC7XSjXofLqcwvMOWZozMC7XSjXofLqcwvMOWZozMC7XSjXofLqcwvMOWZozMC7XSjX1ao1je8EmFfwhTy4rDjCZozMC7XSjXofLqcwvMOWZozMC7XSjXofLqcwvMOWZozMC7XSjXofLqcwvMOWZozMC7XSjXofLqcwvMOWZozMC7XSjXofLqcwvMOWZozMC7XSjXofLqcwvMOWZozMC7XSjXofLqcwvMOWZozMC7XSjX1ao1je8EmFfwhTy4rDjCZozMC7XSjXofLqcwvMOWZozMC7XSjXofLqcwvMOWZozMC7XSjXofLqcwvMOWZozMC7XSjXofLqcwvMOWZozMC7XSjXofLqcwvMOWZozMC7XSjXofLqcwvMOWZozMC7XSjXofLqcwvMOWZozMC7XSjX'
			);
			assert.equal(
				repeater('nmfna6TBaB', {
					repeatTimes: 8,
					separator: '9mIGTrgKmw',
					addition: 'lEdEJKTafn',
					additionRepeatTimes: 6,
					additionSeparator: '2ll23JqShi',
				}),
				'nmfna6TBaBlEdEJKTafn2ll23JqShilEdEJKTafn2ll23JqShilEdEJKTafn2ll23JqShilEdEJKTafn2ll23JqShilEdEJKTafn2ll23JqShilEdEJKTafn9mIGTrgKmwnmfna6TBaBlEdEJKTafn2ll23JqShilEdEJKTafn2ll23JqShilEdEJKTafn2ll23JqShilEdEJKTafn2ll23JqShilEdEJKTafn2ll23JqShilEdEJKTafn9mIGTrgKmwnmfna6TBaBlEdEJKTafn2ll23JqShilEdEJKTafn2ll23JqShilEdEJKTafn2ll23JqShilEdEJKTafn2ll23JqShilEdEJKTafn2ll23JqShilEdEJKTafn9mIGTrgKmwnmfna6TBaBlEdEJKTafn2ll23JqShilEdEJKTafn2ll23JqShilEdEJKTafn2ll23JqShilEdEJKTafn2ll23JqShilEdEJKTafn2ll23JqShilEdEJKTafn9mIGTrgKmwnmfna6TBaBlEdEJKTafn2ll23JqShilEdEJKTafn2ll23JqShilEdEJKTafn2ll23JqShilEdEJKTafn2ll23JqShilEdEJKTafn2ll23JqShilEdEJKTafn9mIGTrgKmwnmfna6TBaBlEdEJKTafn2ll23JqShilEdEJKTafn2ll23JqShilEdEJKTafn2ll23JqShilEdEJKTafn2ll23JqShilEdEJKTafn2ll23JqShilEdEJKTafn9mIGTrgKmwnmfna6TBaBlEdEJKTafn2ll23JqShilEdEJKTafn2ll23JqShilEdEJKTafn2ll23JqShilEdEJKTafn2ll23JqShilEdEJKTafn2ll23JqShilEdEJKTafn9mIGTrgKmwnmfna6TBaBlEdEJKTafn2ll23JqShilEdEJKTafn2ll23JqShilEdEJKTafn2ll23JqShilEdEJKTafn2ll23JqShilEdEJKTafn2ll23JqShilEdEJKTafn'
			);
			assert.equal(
				repeater('4fWrymAB1E', {
					repeatTimes: 6,
					separator: 'Acb3FE4CLl',
					addition: 'iHJ3c6ouJo',
					additionRepeatTimes: 2,
					additionSeparator: 'TzdZqfnLQy',
				}),
				'4fWrymAB1EiHJ3c6ouJoTzdZqfnLQyiHJ3c6ouJoAcb3FE4CLl4fWrymAB1EiHJ3c6ouJoTzdZqfnLQyiHJ3c6ouJoAcb3FE4CLl4fWrymAB1EiHJ3c6ouJoTzdZqfnLQyiHJ3c6ouJoAcb3FE4CLl4fWrymAB1EiHJ3c6ouJoTzdZqfnLQyiHJ3c6ouJoAcb3FE4CLl4fWrymAB1EiHJ3c6ouJoTzdZqfnLQyiHJ3c6ouJoAcb3FE4CLl4fWrymAB1EiHJ3c6ouJoTzdZqfnLQyiHJ3c6ouJo'
			);
			assert.equal(
				repeater('0OFVunoCU3', {
					repeatTimes: 1,
					separator: 'E7C4NfAgP8',
					addition: 'AKkiU1IuaH',
					additionRepeatTimes: 5,
					additionSeparator: 'jdFX96lcfr',
				}),
				'0OFVunoCU3AKkiU1IuaHjdFX96lcfrAKkiU1IuaHjdFX96lcfrAKkiU1IuaHjdFX96lcfrAKkiU1IuaHjdFX96lcfrAKkiU1IuaH'
			);
			assert.equal(
				repeater('jpY55BIhRy', {
					repeatTimes: 3,
					separator: 'Swr5ZfRjGt',
					addition: 'dKALuHYYjP',
					additionRepeatTimes: 8,
					additionSeparator: 'Jf58VoIHR5',
				}),
				'jpY55BIhRydKALuHYYjPJf58VoIHR5dKALuHYYjPJf58VoIHR5dKALuHYYjPJf58VoIHR5dKALuHYYjPJf58VoIHR5dKALuHYYjPJf58VoIHR5dKALuHYYjPJf58VoIHR5dKALuHYYjPJf58VoIHR5dKALuHYYjPSwr5ZfRjGtjpY55BIhRydKALuHYYjPJf58VoIHR5dKALuHYYjPJf58VoIHR5dKALuHYYjPJf58VoIHR5dKALuHYYjPJf58VoIHR5dKALuHYYjPJf58VoIHR5dKALuHYYjPJf58VoIHR5dKALuHYYjPJf58VoIHR5dKALuHYYjPSwr5ZfRjGtjpY55BIhRydKALuHYYjPJf58VoIHR5dKALuHYYjPJf58VoIHR5dKALuHYYjPJf58VoIHR5dKALuHYYjPJf58VoIHR5dKALuHYYjPJf58VoIHR5dKALuHYYjPJf58VoIHR5dKALuHYYjPJf58VoIHR5dKALuHYYjP'
			);
			assert.equal(
				repeater('rvGMUTozC8', {
					repeatTimes: 2,
					separator: 'mF1lVvW5ad',
					addition: 'FDnX2JFSjo',
					additionRepeatTimes: 6,
					additionSeparator: 'yXwtZiLcyX',
				}),
				'rvGMUTozC8FDnX2JFSjoyXwtZiLcyXFDnX2JFSjoyXwtZiLcyXFDnX2JFSjoyXwtZiLcyXFDnX2JFSjoyXwtZiLcyXFDnX2JFSjoyXwtZiLcyXFDnX2JFSjomF1lVvW5adrvGMUTozC8FDnX2JFSjoyXwtZiLcyXFDnX2JFSjoyXwtZiLcyXFDnX2JFSjoyXwtZiLcyXFDnX2JFSjoyXwtZiLcyXFDnX2JFSjoyXwtZiLcyXFDnX2JFSjo'
			);
			assert.equal(
				repeater('9d2nqXCiTf', {
					repeatTimes: 5,
					separator: 'tMyy6BlcJ3',
					addition: '1XSNKMohgP',
					additionRepeatTimes: 3,
					additionSeparator: 'lyor3ALx4E',
				}),
				'9d2nqXCiTf1XSNKMohgPlyor3ALx4E1XSNKMohgPlyor3ALx4E1XSNKMohgPtMyy6BlcJ39d2nqXCiTf1XSNKMohgPlyor3ALx4E1XSNKMohgPlyor3ALx4E1XSNKMohgPtMyy6BlcJ39d2nqXCiTf1XSNKMohgPlyor3ALx4E1XSNKMohgPlyor3ALx4E1XSNKMohgPtMyy6BlcJ39d2nqXCiTf1XSNKMohgPlyor3ALx4E1XSNKMohgPlyor3ALx4E1XSNKMohgPtMyy6BlcJ39d2nqXCiTf1XSNKMohgPlyor3ALx4E1XSNKMohgPlyor3ALx4E1XSNKMohgP'
			);
			assert.equal(
				repeater('vLFuacGSc9', {
					repeatTimes: 3,
					separator: 'NbIj6JfBGm',
					addition: 'dpCX3IbTtG',
					additionRepeatTimes: 2,
					additionSeparator: 'oxlBavBuSn',
				}),
				'vLFuacGSc9dpCX3IbTtGoxlBavBuSndpCX3IbTtGNbIj6JfBGmvLFuacGSc9dpCX3IbTtGoxlBavBuSndpCX3IbTtGNbIj6JfBGmvLFuacGSc9dpCX3IbTtGoxlBavBuSndpCX3IbTtG'
			);
			assert.equal(
				repeater('SFvnmS9x1C', {
					repeatTimes: 8,
					separator: '7ahA4lWrQc',
					addition: 'Y044MuJaCq',
					additionRepeatTimes: 2,
					additionSeparator: 'WIOWXfHwhy',
				}),
				'SFvnmS9x1CY044MuJaCqWIOWXfHwhyY044MuJaCq7ahA4lWrQcSFvnmS9x1CY044MuJaCqWIOWXfHwhyY044MuJaCq7ahA4lWrQcSFvnmS9x1CY044MuJaCqWIOWXfHwhyY044MuJaCq7ahA4lWrQcSFvnmS9x1CY044MuJaCqWIOWXfHwhyY044MuJaCq7ahA4lWrQcSFvnmS9x1CY044MuJaCqWIOWXfHwhyY044MuJaCq7ahA4lWrQcSFvnmS9x1CY044MuJaCqWIOWXfHwhyY044MuJaCq7ahA4lWrQcSFvnmS9x1CY044MuJaCqWIOWXfHwhyY044MuJaCq7ahA4lWrQcSFvnmS9x1CY044MuJaCqWIOWXfHwhyY044MuJaCq'
			);
			assert.equal(
				repeater('SoxpZC2GCi', {
					repeatTimes: 2,
					separator: 'bcmlTcUxtq',
					addition: 'SGjqbJ8tjw',
					additionRepeatTimes: 3,
					additionSeparator: 'QiZdV9Xvp6',
				}),
				'SoxpZC2GCiSGjqbJ8tjwQiZdV9Xvp6SGjqbJ8tjwQiZdV9Xvp6SGjqbJ8tjwbcmlTcUxtqSoxpZC2GCiSGjqbJ8tjwQiZdV9Xvp6SGjqbJ8tjwQiZdV9Xvp6SGjqbJ8tjw'
			);
			assert.equal(
				repeater('gvaEFgqGKm', {
					repeatTimes: 7,
					separator: '3tDHBfq8mN',
					addition: 'YQMwegrqpo',
					additionRepeatTimes: 5,
					additionSeparator: 'OTEcuDtxJE',
				}),
				'gvaEFgqGKmYQMwegrqpoOTEcuDtxJEYQMwegrqpoOTEcuDtxJEYQMwegrqpoOTEcuDtxJEYQMwegrqpoOTEcuDtxJEYQMwegrqpo3tDHBfq8mNgvaEFgqGKmYQMwegrqpoOTEcuDtxJEYQMwegrqpoOTEcuDtxJEYQMwegrqpoOTEcuDtxJEYQMwegrqpoOTEcuDtxJEYQMwegrqpo3tDHBfq8mNgvaEFgqGKmYQMwegrqpoOTEcuDtxJEYQMwegrqpoOTEcuDtxJEYQMwegrqpoOTEcuDtxJEYQMwegrqpoOTEcuDtxJEYQMwegrqpo3tDHBfq8mNgvaEFgqGKmYQMwegrqpoOTEcuDtxJEYQMwegrqpoOTEcuDtxJEYQMwegrqpoOTEcuDtxJEYQMwegrqpoOTEcuDtxJEYQMwegrqpo3tDHBfq8mNgvaEFgqGKmYQMwegrqpoOTEcuDtxJEYQMwegrqpoOTEcuDtxJEYQMwegrqpoOTEcuDtxJEYQMwegrqpoOTEcuDtxJEYQMwegrqpo3tDHBfq8mNgvaEFgqGKmYQMwegrqpoOTEcuDtxJEYQMwegrqpoOTEcuDtxJEYQMwegrqpoOTEcuDtxJEYQMwegrqpoOTEcuDtxJEYQMwegrqpo3tDHBfq8mNgvaEFgqGKmYQMwegrqpoOTEcuDtxJEYQMwegrqpoOTEcuDtxJEYQMwegrqpoOTEcuDtxJEYQMwegrqpoOTEcuDtxJEYQMwegrqpo'
			);
			assert.equal(
				repeater('PnVMn39AT3', {
					repeatTimes: 3,
					separator: 'dI9NiyNih1',
					addition: '5uzCB3CySj',
					additionRepeatTimes: 2,
					additionSeparator: 'LBPXXquldV',
				}),
				'PnVMn39AT35uzCB3CySjLBPXXquldV5uzCB3CySjdI9NiyNih1PnVMn39AT35uzCB3CySjLBPXXquldV5uzCB3CySjdI9NiyNih1PnVMn39AT35uzCB3CySjLBPXXquldV5uzCB3CySj'
			);
			assert.equal(
				repeater('orunzftSbf', {
					repeatTimes: 8,
					separator: 'SLjGHi0Oy5',
					addition: 'lrllcaGRMr',
					additionRepeatTimes: 6,
					additionSeparator: 'Br6ZWKt3Hc',
				}),
				'orunzftSbflrllcaGRMrBr6ZWKt3HclrllcaGRMrBr6ZWKt3HclrllcaGRMrBr6ZWKt3HclrllcaGRMrBr6ZWKt3HclrllcaGRMrBr6ZWKt3HclrllcaGRMrSLjGHi0Oy5orunzftSbflrllcaGRMrBr6ZWKt3HclrllcaGRMrBr6ZWKt3HclrllcaGRMrBr6ZWKt3HclrllcaGRMrBr6ZWKt3HclrllcaGRMrBr6ZWKt3HclrllcaGRMrSLjGHi0Oy5orunzftSbflrllcaGRMrBr6ZWKt3HclrllcaGRMrBr6ZWKt3HclrllcaGRMrBr6ZWKt3HclrllcaGRMrBr6ZWKt3HclrllcaGRMrBr6ZWKt3HclrllcaGRMrSLjGHi0Oy5orunzftSbflrllcaGRMrBr6ZWKt3HclrllcaGRMrBr6ZWKt3HclrllcaGRMrBr6ZWKt3HclrllcaGRMrBr6ZWKt3HclrllcaGRMrBr6ZWKt3HclrllcaGRMrSLjGHi0Oy5orunzftSbflrllcaGRMrBr6ZWKt3HclrllcaGRMrBr6ZWKt3HclrllcaGRMrBr6ZWKt3HclrllcaGRMrBr6ZWKt3HclrllcaGRMrBr6ZWKt3HclrllcaGRMrSLjGHi0Oy5orunzftSbflrllcaGRMrBr6ZWKt3HclrllcaGRMrBr6ZWKt3HclrllcaGRMrBr6ZWKt3HclrllcaGRMrBr6ZWKt3HclrllcaGRMrBr6ZWKt3HclrllcaGRMrSLjGHi0Oy5orunzftSbflrllcaGRMrBr6ZWKt3HclrllcaGRMrBr6ZWKt3HclrllcaGRMrBr6ZWKt3HclrllcaGRMrBr6ZWKt3HclrllcaGRMrBr6ZWKt3HclrllcaGRMrSLjGHi0Oy5orunzftSbflrllcaGRMrBr6ZWKt3HclrllcaGRMrBr6ZWKt3HclrllcaGRMrBr6ZWKt3HclrllcaGRMrBr6ZWKt3HclrllcaGRMrBr6ZWKt3HclrllcaGRMr'
			);
			assert.equal(
				repeater('cvOzaGF1yk', {
					repeatTimes: 3,
					separator: 'TqNeeT2LGa',
					addition: 'XU4VgceFFK',
					additionRepeatTimes: 2,
					additionSeparator: 'OTgUptFuU1',
				}),
				'cvOzaGF1ykXU4VgceFFKOTgUptFuU1XU4VgceFFKTqNeeT2LGacvOzaGF1ykXU4VgceFFKOTgUptFuU1XU4VgceFFKTqNeeT2LGacvOzaGF1ykXU4VgceFFKOTgUptFuU1XU4VgceFFK'
			);
			assert.equal(
				repeater('tp4LdhQaIL', {
					repeatTimes: 7,
					separator: 'GvM0Pf4z10',
					addition: 'iK2nU7NiTR',
					additionRepeatTimes: 7,
					additionSeparator: '0Kr1wutBry',
				}),
				'tp4LdhQaILiK2nU7NiTR0Kr1wutBryiK2nU7NiTR0Kr1wutBryiK2nU7NiTR0Kr1wutBryiK2nU7NiTR0Kr1wutBryiK2nU7NiTR0Kr1wutBryiK2nU7NiTR0Kr1wutBryiK2nU7NiTRGvM0Pf4z10tp4LdhQaILiK2nU7NiTR0Kr1wutBryiK2nU7NiTR0Kr1wutBryiK2nU7NiTR0Kr1wutBryiK2nU7NiTR0Kr1wutBryiK2nU7NiTR0Kr1wutBryiK2nU7NiTR0Kr1wutBryiK2nU7NiTRGvM0Pf4z10tp4LdhQaILiK2nU7NiTR0Kr1wutBryiK2nU7NiTR0Kr1wutBryiK2nU7NiTR0Kr1wutBryiK2nU7NiTR0Kr1wutBryiK2nU7NiTR0Kr1wutBryiK2nU7NiTR0Kr1wutBryiK2nU7NiTRGvM0Pf4z10tp4LdhQaILiK2nU7NiTR0Kr1wutBryiK2nU7NiTR0Kr1wutBryiK2nU7NiTR0Kr1wutBryiK2nU7NiTR0Kr1wutBryiK2nU7NiTR0Kr1wutBryiK2nU7NiTR0Kr1wutBryiK2nU7NiTRGvM0Pf4z10tp4LdhQaILiK2nU7NiTR0Kr1wutBryiK2nU7NiTR0Kr1wutBryiK2nU7NiTR0Kr1wutBryiK2nU7NiTR0Kr1wutBryiK2nU7NiTR0Kr1wutBryiK2nU7NiTR0Kr1wutBryiK2nU7NiTRGvM0Pf4z10tp4LdhQaILiK2nU7NiTR0Kr1wutBryiK2nU7NiTR0Kr1wutBryiK2nU7NiTR0Kr1wutBryiK2nU7NiTR0Kr1wutBryiK2nU7NiTR0Kr1wutBryiK2nU7NiTR0Kr1wutBryiK2nU7NiTRGvM0Pf4z10tp4LdhQaILiK2nU7NiTR0Kr1wutBryiK2nU7NiTR0Kr1wutBryiK2nU7NiTR0Kr1wutBryiK2nU7NiTR0Kr1wutBryiK2nU7NiTR0Kr1wutBryiK2nU7NiTR0Kr1wutBryiK2nU7NiTR'
			);
			assert.equal(
				repeater('DOoOMWH9zO', {
					repeatTimes: 5,
					separator: 'Dk1356c7WJ',
					addition: 'XnuYw6fcb5',
					additionRepeatTimes: 3,
					additionSeparator: 'GEOYD0v7BQ',
				}),
				'DOoOMWH9zOXnuYw6fcb5GEOYD0v7BQXnuYw6fcb5GEOYD0v7BQXnuYw6fcb5Dk1356c7WJDOoOMWH9zOXnuYw6fcb5GEOYD0v7BQXnuYw6fcb5GEOYD0v7BQXnuYw6fcb5Dk1356c7WJDOoOMWH9zOXnuYw6fcb5GEOYD0v7BQXnuYw6fcb5GEOYD0v7BQXnuYw6fcb5Dk1356c7WJDOoOMWH9zOXnuYw6fcb5GEOYD0v7BQXnuYw6fcb5GEOYD0v7BQXnuYw6fcb5Dk1356c7WJDOoOMWH9zOXnuYw6fcb5GEOYD0v7BQXnuYw6fcb5GEOYD0v7BQXnuYw6fcb5'
			);
			assert.equal(
				repeater('mtXtZRvLMw', {
					repeatTimes: 4,
					separator: '9jmL30Vq0e',
					addition: 'VGmJ5gjG1k',
					additionRepeatTimes: 2,
					additionSeparator: '3BG53Wttr4',
				}),
				'mtXtZRvLMwVGmJ5gjG1k3BG53Wttr4VGmJ5gjG1k9jmL30Vq0emtXtZRvLMwVGmJ5gjG1k3BG53Wttr4VGmJ5gjG1k9jmL30Vq0emtXtZRvLMwVGmJ5gjG1k3BG53Wttr4VGmJ5gjG1k9jmL30Vq0emtXtZRvLMwVGmJ5gjG1k3BG53Wttr4VGmJ5gjG1k'
			);
			assert.equal(
				repeater('ZbU8ytdVGE', {
					repeatTimes: 9,
					separator: 'wxj0DXTShm',
					addition: '1QD8PlDpkz',
					additionRepeatTimes: 6,
					additionSeparator: 'UAAmNgrM4a',
				}),
				'ZbU8ytdVGE1QD8PlDpkzUAAmNgrM4a1QD8PlDpkzUAAmNgrM4a1QD8PlDpkzUAAmNgrM4a1QD8PlDpkzUAAmNgrM4a1QD8PlDpkzUAAmNgrM4a1QD8PlDpkzwxj0DXTShmZbU8ytdVGE1QD8PlDpkzUAAmNgrM4a1QD8PlDpkzUAAmNgrM4a1QD8PlDpkzUAAmNgrM4a1QD8PlDpkzUAAmNgrM4a1QD8PlDpkzUAAmNgrM4a1QD8PlDpkzwxj0DXTShmZbU8ytdVGE1QD8PlDpkzUAAmNgrM4a1QD8PlDpkzUAAmNgrM4a1QD8PlDpkzUAAmNgrM4a1QD8PlDpkzUAAmNgrM4a1QD8PlDpkzUAAmNgrM4a1QD8PlDpkzwxj0DXTShmZbU8ytdVGE1QD8PlDpkzUAAmNgrM4a1QD8PlDpkzUAAmNgrM4a1QD8PlDpkzUAAmNgrM4a1QD8PlDpkzUAAmNgrM4a1QD8PlDpkzUAAmNgrM4a1QD8PlDpkzwxj0DXTShmZbU8ytdVGE1QD8PlDpkzUAAmNgrM4a1QD8PlDpkzUAAmNgrM4a1QD8PlDpkzUAAmNgrM4a1QD8PlDpkzUAAmNgrM4a1QD8PlDpkzUAAmNgrM4a1QD8PlDpkzwxj0DXTShmZbU8ytdVGE1QD8PlDpkzUAAmNgrM4a1QD8PlDpkzUAAmNgrM4a1QD8PlDpkzUAAmNgrM4a1QD8PlDpkzUAAmNgrM4a1QD8PlDpkzUAAmNgrM4a1QD8PlDpkzwxj0DXTShmZbU8ytdVGE1QD8PlDpkzUAAmNgrM4a1QD8PlDpkzUAAmNgrM4a1QD8PlDpkzUAAmNgrM4a1QD8PlDpkzUAAmNgrM4a1QD8PlDpkzUAAmNgrM4a1QD8PlDpkzwxj0DXTShmZbU8ytdVGE1QD8PlDpkzUAAmNgrM4a1QD8PlDpkzUAAmNgrM4a1QD8PlDpkzUAAmNgrM4a1QD8PlDpkzUAAmNgrM4a1QD8PlDpkzUAAmNgrM4a1QD8PlDpkzwxj0DXTShmZbU8ytdVGE1QD8PlDpkzUAAmNgrM4a1QD8PlDpkzUAAmNgrM4a1QD8PlDpkzUAAmNgrM4a1QD8PlDpkzUAAmNgrM4a1QD8PlDpkzUAAmNgrM4a1QD8PlDpkz'
			);
			assert.equal(
				repeater('nZwCI4ZlzR', {
					repeatTimes: 8,
					separator: 'K9ukGhS3yz',
					addition: 'YGBFU1GfU7',
					additionRepeatTimes: 8,
					additionSeparator: 'l3Qje5DUx1',
				}),
				'nZwCI4ZlzRYGBFU1GfU7l3Qje5DUx1YGBFU1GfU7l3Qje5DUx1YGBFU1GfU7l3Qje5DUx1YGBFU1GfU7l3Qje5DUx1YGBFU1GfU7l3Qje5DUx1YGBFU1GfU7l3Qje5DUx1YGBFU1GfU7l3Qje5DUx1YGBFU1GfU7K9ukGhS3yznZwCI4ZlzRYGBFU1GfU7l3Qje5DUx1YGBFU1GfU7l3Qje5DUx1YGBFU1GfU7l3Qje5DUx1YGBFU1GfU7l3Qje5DUx1YGBFU1GfU7l3Qje5DUx1YGBFU1GfU7l3Qje5DUx1YGBFU1GfU7l3Qje5DUx1YGBFU1GfU7K9ukGhS3yznZwCI4ZlzRYGBFU1GfU7l3Qje5DUx1YGBFU1GfU7l3Qje5DUx1YGBFU1GfU7l3Qje5DUx1YGBFU1GfU7l3Qje5DUx1YGBFU1GfU7l3Qje5DUx1YGBFU1GfU7l3Qje5DUx1YGBFU1GfU7l3Qje5DUx1YGBFU1GfU7K9ukGhS3yznZwCI4ZlzRYGBFU1GfU7l3Qje5DUx1YGBFU1GfU7l3Qje5DUx1YGBFU1GfU7l3Qje5DUx1YGBFU1GfU7l3Qje5DUx1YGBFU1GfU7l3Qje5DUx1YGBFU1GfU7l3Qje5DUx1YGBFU1GfU7l3Qje5DUx1YGBFU1GfU7K9ukGhS3yznZwCI4ZlzRYGBFU1GfU7l3Qje5DUx1YGBFU1GfU7l3Qje5DUx1YGBFU1GfU7l3Qje5DUx1YGBFU1GfU7l3Qje5DUx1YGBFU1GfU7l3Qje5DUx1YGBFU1GfU7l3Qje5DUx1YGBFU1GfU7l3Qje5DUx1YGBFU1GfU7K9ukGhS3yznZwCI4ZlzRYGBFU1GfU7l3Qje5DUx1YGBFU1GfU7l3Qje5DUx1YGBFU1GfU7l3Qje5DUx1YGBFU1GfU7l3Qje5DUx1YGBFU1GfU7l3Qje5DUx1YGBFU1GfU7l3Qje5DUx1YGBFU1GfU7l3Qje5DUx1YGBFU1GfU7K9ukGhS3yznZwCI4ZlzRYGBFU1GfU7l3Qje5DUx1YGBFU1GfU7l3Qje5DUx1YGBFU1GfU7l3Qje5DUx1YGBFU1GfU7l3Qje5DUx1YGBFU1GfU7l3Qje5DUx1YGBFU1GfU7l3Qje5DUx1YGBFU1GfU7l3Qje5DUx1YGBFU1GfU7K9ukGhS3yznZwCI4ZlzRYGBFU1GfU7l3Qje5DUx1YGBFU1GfU7l3Qje5DUx1YGBFU1GfU7l3Qje5DUx1YGBFU1GfU7l3Qje5DUx1YGBFU1GfU7l3Qje5DUx1YGBFU1GfU7l3Qje5DUx1YGBFU1GfU7l3Qje5DUx1YGBFU1GfU7'
			);
			assert.equal(
				repeater('f088VFjtjf', {
					repeatTimes: 9,
					separator: 'W8PhAhvqCQ',
					addition: 'VZo0Kxq99N',
					additionRepeatTimes: 4,
					additionSeparator: 'h1k5xj5DFT',
				}),
				'f088VFjtjfVZo0Kxq99Nh1k5xj5DFTVZo0Kxq99Nh1k5xj5DFTVZo0Kxq99Nh1k5xj5DFTVZo0Kxq99NW8PhAhvqCQf088VFjtjfVZo0Kxq99Nh1k5xj5DFTVZo0Kxq99Nh1k5xj5DFTVZo0Kxq99Nh1k5xj5DFTVZo0Kxq99NW8PhAhvqCQf088VFjtjfVZo0Kxq99Nh1k5xj5DFTVZo0Kxq99Nh1k5xj5DFTVZo0Kxq99Nh1k5xj5DFTVZo0Kxq99NW8PhAhvqCQf088VFjtjfVZo0Kxq99Nh1k5xj5DFTVZo0Kxq99Nh1k5xj5DFTVZo0Kxq99Nh1k5xj5DFTVZo0Kxq99NW8PhAhvqCQf088VFjtjfVZo0Kxq99Nh1k5xj5DFTVZo0Kxq99Nh1k5xj5DFTVZo0Kxq99Nh1k5xj5DFTVZo0Kxq99NW8PhAhvqCQf088VFjtjfVZo0Kxq99Nh1k5xj5DFTVZo0Kxq99Nh1k5xj5DFTVZo0Kxq99Nh1k5xj5DFTVZo0Kxq99NW8PhAhvqCQf088VFjtjfVZo0Kxq99Nh1k5xj5DFTVZo0Kxq99Nh1k5xj5DFTVZo0Kxq99Nh1k5xj5DFTVZo0Kxq99NW8PhAhvqCQf088VFjtjfVZo0Kxq99Nh1k5xj5DFTVZo0Kxq99Nh1k5xj5DFTVZo0Kxq99Nh1k5xj5DFTVZo0Kxq99NW8PhAhvqCQf088VFjtjfVZo0Kxq99Nh1k5xj5DFTVZo0Kxq99Nh1k5xj5DFTVZo0Kxq99Nh1k5xj5DFTVZo0Kxq99N'
			);
			assert.equal(
				repeater('9Djoz4UX3K', {
					repeatTimes: 5,
					separator: 'MKUrVeyKXj',
					addition: 'VzbrNgcCck',
					additionRepeatTimes: 9,
					additionSeparator: '4ug4y5UfMj',
				}),
				'9Djoz4UX3KVzbrNgcCck4ug4y5UfMjVzbrNgcCck4ug4y5UfMjVzbrNgcCck4ug4y5UfMjVzbrNgcCck4ug4y5UfMjVzbrNgcCck4ug4y5UfMjVzbrNgcCck4ug4y5UfMjVzbrNgcCck4ug4y5UfMjVzbrNgcCck4ug4y5UfMjVzbrNgcCckMKUrVeyKXj9Djoz4UX3KVzbrNgcCck4ug4y5UfMjVzbrNgcCck4ug4y5UfMjVzbrNgcCck4ug4y5UfMjVzbrNgcCck4ug4y5UfMjVzbrNgcCck4ug4y5UfMjVzbrNgcCck4ug4y5UfMjVzbrNgcCck4ug4y5UfMjVzbrNgcCck4ug4y5UfMjVzbrNgcCckMKUrVeyKXj9Djoz4UX3KVzbrNgcCck4ug4y5UfMjVzbrNgcCck4ug4y5UfMjVzbrNgcCck4ug4y5UfMjVzbrNgcCck4ug4y5UfMjVzbrNgcCck4ug4y5UfMjVzbrNgcCck4ug4y5UfMjVzbrNgcCck4ug4y5UfMjVzbrNgcCck4ug4y5UfMjVzbrNgcCckMKUrVeyKXj9Djoz4UX3KVzbrNgcCck4ug4y5UfMjVzbrNgcCck4ug4y5UfMjVzbrNgcCck4ug4y5UfMjVzbrNgcCck4ug4y5UfMjVzbrNgcCck4ug4y5UfMjVzbrNgcCck4ug4y5UfMjVzbrNgcCck4ug4y5UfMjVzbrNgcCck4ug4y5UfMjVzbrNgcCckMKUrVeyKXj9Djoz4UX3KVzbrNgcCck4ug4y5UfMjVzbrNgcCck4ug4y5UfMjVzbrNgcCck4ug4y5UfMjVzbrNgcCck4ug4y5UfMjVzbrNgcCck4ug4y5UfMjVzbrNgcCck4ug4y5UfMjVzbrNgcCck4ug4y5UfMjVzbrNgcCck4ug4y5UfMjVzbrNgcCck'
			);
			assert.equal(
				repeater('R67OdPjUO1', {
					repeatTimes: 3,
					separator: 'M51NhBoNYm',
					addition: 'JGohLFWJtk',
					additionRepeatTimes: 8,
					additionSeparator: 'JbtGZq8H3C',
				}),
				'R67OdPjUO1JGohLFWJtkJbtGZq8H3CJGohLFWJtkJbtGZq8H3CJGohLFWJtkJbtGZq8H3CJGohLFWJtkJbtGZq8H3CJGohLFWJtkJbtGZq8H3CJGohLFWJtkJbtGZq8H3CJGohLFWJtkJbtGZq8H3CJGohLFWJtkM51NhBoNYmR67OdPjUO1JGohLFWJtkJbtGZq8H3CJGohLFWJtkJbtGZq8H3CJGohLFWJtkJbtGZq8H3CJGohLFWJtkJbtGZq8H3CJGohLFWJtkJbtGZq8H3CJGohLFWJtkJbtGZq8H3CJGohLFWJtkJbtGZq8H3CJGohLFWJtkM51NhBoNYmR67OdPjUO1JGohLFWJtkJbtGZq8H3CJGohLFWJtkJbtGZq8H3CJGohLFWJtkJbtGZq8H3CJGohLFWJtkJbtGZq8H3CJGohLFWJtkJbtGZq8H3CJGohLFWJtkJbtGZq8H3CJGohLFWJtkJbtGZq8H3CJGohLFWJtk'
			);
			assert.equal(
				repeater('IHz4nLiYSK', {
					repeatTimes: 6,
					separator: 'IIayf8fPhZ',
					addition: 'zfzMmKWN0r',
					additionRepeatTimes: 8,
					additionSeparator: 'zoLTlBYcFk',
				}),
				'IHz4nLiYSKzfzMmKWN0rzoLTlBYcFkzfzMmKWN0rzoLTlBYcFkzfzMmKWN0rzoLTlBYcFkzfzMmKWN0rzoLTlBYcFkzfzMmKWN0rzoLTlBYcFkzfzMmKWN0rzoLTlBYcFkzfzMmKWN0rzoLTlBYcFkzfzMmKWN0rIIayf8fPhZIHz4nLiYSKzfzMmKWN0rzoLTlBYcFkzfzMmKWN0rzoLTlBYcFkzfzMmKWN0rzoLTlBYcFkzfzMmKWN0rzoLTlBYcFkzfzMmKWN0rzoLTlBYcFkzfzMmKWN0rzoLTlBYcFkzfzMmKWN0rzoLTlBYcFkzfzMmKWN0rIIayf8fPhZIHz4nLiYSKzfzMmKWN0rzoLTlBYcFkzfzMmKWN0rzoLTlBYcFkzfzMmKWN0rzoLTlBYcFkzfzMmKWN0rzoLTlBYcFkzfzMmKWN0rzoLTlBYcFkzfzMmKWN0rzoLTlBYcFkzfzMmKWN0rzoLTlBYcFkzfzMmKWN0rIIayf8fPhZIHz4nLiYSKzfzMmKWN0rzoLTlBYcFkzfzMmKWN0rzoLTlBYcFkzfzMmKWN0rzoLTlBYcFkzfzMmKWN0rzoLTlBYcFkzfzMmKWN0rzoLTlBYcFkzfzMmKWN0rzoLTlBYcFkzfzMmKWN0rzoLTlBYcFkzfzMmKWN0rIIayf8fPhZIHz4nLiYSKzfzMmKWN0rzoLTlBYcFkzfzMmKWN0rzoLTlBYcFkzfzMmKWN0rzoLTlBYcFkzfzMmKWN0rzoLTlBYcFkzfzMmKWN0rzoLTlBYcFkzfzMmKWN0rzoLTlBYcFkzfzMmKWN0rzoLTlBYcFkzfzMmKWN0rIIayf8fPhZIHz4nLiYSKzfzMmKWN0rzoLTlBYcFkzfzMmKWN0rzoLTlBYcFkzfzMmKWN0rzoLTlBYcFkzfzMmKWN0rzoLTlBYcFkzfzMmKWN0rzoLTlBYcFkzfzMmKWN0rzoLTlBYcFkzfzMmKWN0rzoLTlBYcFkzfzMmKWN0r'
			);
			assert.equal(
				repeater('Hk5Y1JlNzy', {
					repeatTimes: 3,
					separator: 'VQxDLjKCkV',
					addition: 'STd7uhKQ1G',
					additionRepeatTimes: 7,
					additionSeparator: 'Ho5ltny5FO',
				}),
				'Hk5Y1JlNzySTd7uhKQ1GHo5ltny5FOSTd7uhKQ1GHo5ltny5FOSTd7uhKQ1GHo5ltny5FOSTd7uhKQ1GHo5ltny5FOSTd7uhKQ1GHo5ltny5FOSTd7uhKQ1GHo5ltny5FOSTd7uhKQ1GVQxDLjKCkVHk5Y1JlNzySTd7uhKQ1GHo5ltny5FOSTd7uhKQ1GHo5ltny5FOSTd7uhKQ1GHo5ltny5FOSTd7uhKQ1GHo5ltny5FOSTd7uhKQ1GHo5ltny5FOSTd7uhKQ1GHo5ltny5FOSTd7uhKQ1GVQxDLjKCkVHk5Y1JlNzySTd7uhKQ1GHo5ltny5FOSTd7uhKQ1GHo5ltny5FOSTd7uhKQ1GHo5ltny5FOSTd7uhKQ1GHo5ltny5FOSTd7uhKQ1GHo5ltny5FOSTd7uhKQ1GHo5ltny5FOSTd7uhKQ1G'
			);
			assert.equal(
				repeater('iq4q4lDJOx', {
					repeatTimes: 5,
					separator: 'O3cbq1vv6r',
					addition: 'NnWEZ6QxUy',
					additionRepeatTimes: 6,
					additionSeparator: '2tRg2xaGEW',
				}),
				'iq4q4lDJOxNnWEZ6QxUy2tRg2xaGEWNnWEZ6QxUy2tRg2xaGEWNnWEZ6QxUy2tRg2xaGEWNnWEZ6QxUy2tRg2xaGEWNnWEZ6QxUy2tRg2xaGEWNnWEZ6QxUyO3cbq1vv6riq4q4lDJOxNnWEZ6QxUy2tRg2xaGEWNnWEZ6QxUy2tRg2xaGEWNnWEZ6QxUy2tRg2xaGEWNnWEZ6QxUy2tRg2xaGEWNnWEZ6QxUy2tRg2xaGEWNnWEZ6QxUyO3cbq1vv6riq4q4lDJOxNnWEZ6QxUy2tRg2xaGEWNnWEZ6QxUy2tRg2xaGEWNnWEZ6QxUy2tRg2xaGEWNnWEZ6QxUy2tRg2xaGEWNnWEZ6QxUy2tRg2xaGEWNnWEZ6QxUyO3cbq1vv6riq4q4lDJOxNnWEZ6QxUy2tRg2xaGEWNnWEZ6QxUy2tRg2xaGEWNnWEZ6QxUy2tRg2xaGEWNnWEZ6QxUy2tRg2xaGEWNnWEZ6QxUy2tRg2xaGEWNnWEZ6QxUyO3cbq1vv6riq4q4lDJOxNnWEZ6QxUy2tRg2xaGEWNnWEZ6QxUy2tRg2xaGEWNnWEZ6QxUy2tRg2xaGEWNnWEZ6QxUy2tRg2xaGEWNnWEZ6QxUy2tRg2xaGEWNnWEZ6QxUy'
			);
			assert.equal(
				repeater('hMUxIRBOJH', {
					repeatTimes: 1,
					separator: '1QDIhtuFCt',
					addition: 'gF2WzDPSJi',
					additionRepeatTimes: 5,
					additionSeparator: '2r2miNeB9l',
				}),
				'hMUxIRBOJHgF2WzDPSJi2r2miNeB9lgF2WzDPSJi2r2miNeB9lgF2WzDPSJi2r2miNeB9lgF2WzDPSJi2r2miNeB9lgF2WzDPSJi'
			);
			assert.equal(
				repeater('cFTtJHXjf1', {
					repeatTimes: 1,
					separator: 'XNmdm2AqU2',
					addition: 'REzVPRer2B',
					additionRepeatTimes: 6,
					additionSeparator: 'IxPXYFpYTr',
				}),
				'cFTtJHXjf1REzVPRer2BIxPXYFpYTrREzVPRer2BIxPXYFpYTrREzVPRer2BIxPXYFpYTrREzVPRer2BIxPXYFpYTrREzVPRer2BIxPXYFpYTrREzVPRer2B'
			);
			assert.equal(
				repeater('TiKL8rTMqp', {
					repeatTimes: 8,
					separator: 'ECBW0gPkXq',
					addition: 'LufEqichp8',
					additionRepeatTimes: 2,
					additionSeparator: 'ih1DptcO83',
				}),
				'TiKL8rTMqpLufEqichp8ih1DptcO83LufEqichp8ECBW0gPkXqTiKL8rTMqpLufEqichp8ih1DptcO83LufEqichp8ECBW0gPkXqTiKL8rTMqpLufEqichp8ih1DptcO83LufEqichp8ECBW0gPkXqTiKL8rTMqpLufEqichp8ih1DptcO83LufEqichp8ECBW0gPkXqTiKL8rTMqpLufEqichp8ih1DptcO83LufEqichp8ECBW0gPkXqTiKL8rTMqpLufEqichp8ih1DptcO83LufEqichp8ECBW0gPkXqTiKL8rTMqpLufEqichp8ih1DptcO83LufEqichp8ECBW0gPkXqTiKL8rTMqpLufEqichp8ih1DptcO83LufEqichp8'
			);
			assert.equal(
				repeater('Tnc9JQAbNi', {
					repeatTimes: 3,
					separator: 'nPlAi6EPyW',
					addition: '8Ge7mUX2qR',
					additionRepeatTimes: 8,
					additionSeparator: 'n4cYBT0cQv',
				}),
				'Tnc9JQAbNi8Ge7mUX2qRn4cYBT0cQv8Ge7mUX2qRn4cYBT0cQv8Ge7mUX2qRn4cYBT0cQv8Ge7mUX2qRn4cYBT0cQv8Ge7mUX2qRn4cYBT0cQv8Ge7mUX2qRn4cYBT0cQv8Ge7mUX2qRn4cYBT0cQv8Ge7mUX2qRnPlAi6EPyWTnc9JQAbNi8Ge7mUX2qRn4cYBT0cQv8Ge7mUX2qRn4cYBT0cQv8Ge7mUX2qRn4cYBT0cQv8Ge7mUX2qRn4cYBT0cQv8Ge7mUX2qRn4cYBT0cQv8Ge7mUX2qRn4cYBT0cQv8Ge7mUX2qRn4cYBT0cQv8Ge7mUX2qRnPlAi6EPyWTnc9JQAbNi8Ge7mUX2qRn4cYBT0cQv8Ge7mUX2qRn4cYBT0cQv8Ge7mUX2qRn4cYBT0cQv8Ge7mUX2qRn4cYBT0cQv8Ge7mUX2qRn4cYBT0cQv8Ge7mUX2qRn4cYBT0cQv8Ge7mUX2qRn4cYBT0cQv8Ge7mUX2qR'
			);
			assert.equal(
				repeater('j2QY8Hwzor', {
					repeatTimes: 3,
					separator: 'nuX327Kkhi',
					addition: 'HUM5dxxF91',
					additionRepeatTimes: 9,
					additionSeparator: 'td1AHXAVWn',
				}),
				'j2QY8HwzorHUM5dxxF91td1AHXAVWnHUM5dxxF91td1AHXAVWnHUM5dxxF91td1AHXAVWnHUM5dxxF91td1AHXAVWnHUM5dxxF91td1AHXAVWnHUM5dxxF91td1AHXAVWnHUM5dxxF91td1AHXAVWnHUM5dxxF91td1AHXAVWnHUM5dxxF91nuX327Kkhij2QY8HwzorHUM5dxxF91td1AHXAVWnHUM5dxxF91td1AHXAVWnHUM5dxxF91td1AHXAVWnHUM5dxxF91td1AHXAVWnHUM5dxxF91td1AHXAVWnHUM5dxxF91td1AHXAVWnHUM5dxxF91td1AHXAVWnHUM5dxxF91td1AHXAVWnHUM5dxxF91nuX327Kkhij2QY8HwzorHUM5dxxF91td1AHXAVWnHUM5dxxF91td1AHXAVWnHUM5dxxF91td1AHXAVWnHUM5dxxF91td1AHXAVWnHUM5dxxF91td1AHXAVWnHUM5dxxF91td1AHXAVWnHUM5dxxF91td1AHXAVWnHUM5dxxF91td1AHXAVWnHUM5dxxF91'
			);
			assert.equal(
				repeater('Vqo30ilxbp', {
					repeatTimes: 9,
					separator: 'zXCzTLocWk',
					addition: '6wlEJ3bi8f',
					additionRepeatTimes: 8,
					additionSeparator: '31MGIUIpXu',
				}),
				'Vqo30ilxbp6wlEJ3bi8f31MGIUIpXu6wlEJ3bi8f31MGIUIpXu6wlEJ3bi8f31MGIUIpXu6wlEJ3bi8f31MGIUIpXu6wlEJ3bi8f31MGIUIpXu6wlEJ3bi8f31MGIUIpXu6wlEJ3bi8f31MGIUIpXu6wlEJ3bi8fzXCzTLocWkVqo30ilxbp6wlEJ3bi8f31MGIUIpXu6wlEJ3bi8f31MGIUIpXu6wlEJ3bi8f31MGIUIpXu6wlEJ3bi8f31MGIUIpXu6wlEJ3bi8f31MGIUIpXu6wlEJ3bi8f31MGIUIpXu6wlEJ3bi8f31MGIUIpXu6wlEJ3bi8fzXCzTLocWkVqo30ilxbp6wlEJ3bi8f31MGIUIpXu6wlEJ3bi8f31MGIUIpXu6wlEJ3bi8f31MGIUIpXu6wlEJ3bi8f31MGIUIpXu6wlEJ3bi8f31MGIUIpXu6wlEJ3bi8f31MGIUIpXu6wlEJ3bi8f31MGIUIpXu6wlEJ3bi8fzXCzTLocWkVqo30ilxbp6wlEJ3bi8f31MGIUIpXu6wlEJ3bi8f31MGIUIpXu6wlEJ3bi8f31MGIUIpXu6wlEJ3bi8f31MGIUIpXu6wlEJ3bi8f31MGIUIpXu6wlEJ3bi8f31MGIUIpXu6wlEJ3bi8f31MGIUIpXu6wlEJ3bi8fzXCzTLocWkVqo30ilxbp6wlEJ3bi8f31MGIUIpXu6wlEJ3bi8f31MGIUIpXu6wlEJ3bi8f31MGIUIpXu6wlEJ3bi8f31MGIUIpXu6wlEJ3bi8f31MGIUIpXu6wlEJ3bi8f31MGIUIpXu6wlEJ3bi8f31MGIUIpXu6wlEJ3bi8fzXCzTLocWkVqo30ilxbp6wlEJ3bi8f31MGIUIpXu6wlEJ3bi8f31MGIUIpXu6wlEJ3bi8f31MGIUIpXu6wlEJ3bi8f31MGIUIpXu6wlEJ3bi8f31MGIUIpXu6wlEJ3bi8f31MGIUIpXu6wlEJ3bi8f31MGIUIpXu6wlEJ3bi8fzXCzTLocWkVqo30ilxbp6wlEJ3bi8f31MGIUIpXu6wlEJ3bi8f31MGIUIpXu6wlEJ3bi8f31MGIUIpXu6wlEJ3bi8f31MGIUIpXu6wlEJ3bi8f31MGIUIpXu6wlEJ3bi8f31MGIUIpXu6wlEJ3bi8f31MGIUIpXu6wlEJ3bi8fzXCzTLocWkVqo30ilxbp6wlEJ3bi8f31MGIUIpXu6wlEJ3bi8f31MGIUIpXu6wlEJ3bi8f31MGIUIpXu6wlEJ3bi8f31MGIUIpXu6wlEJ3bi8f31MGIUIpXu6wlEJ3bi8f31MGIUIpXu6wlEJ3bi8f31MGIUIpXu6wlEJ3bi8fzXCzTLocWkVqo30ilxbp6wlEJ3bi8f31MGIUIpXu6wlEJ3bi8f31MGIUIpXu6wlEJ3bi8f31MGIUIpXu6wlEJ3bi8f31MGIUIpXu6wlEJ3bi8f31MGIUIpXu6wlEJ3bi8f31MGIUIpXu6wlEJ3bi8f31MGIUIpXu6wlEJ3bi8f'
			);
			assert.equal(
				repeater('rQHDIlno6C', {
					repeatTimes: 3,
					separator: 'ahRAby5m1g',
					addition: 'xXwrRcbM3N',
					additionRepeatTimes: 6,
					additionSeparator: 'FD3QjknyHL',
				}),
				'rQHDIlno6CxXwrRcbM3NFD3QjknyHLxXwrRcbM3NFD3QjknyHLxXwrRcbM3NFD3QjknyHLxXwrRcbM3NFD3QjknyHLxXwrRcbM3NFD3QjknyHLxXwrRcbM3NahRAby5m1grQHDIlno6CxXwrRcbM3NFD3QjknyHLxXwrRcbM3NFD3QjknyHLxXwrRcbM3NFD3QjknyHLxXwrRcbM3NFD3QjknyHLxXwrRcbM3NFD3QjknyHLxXwrRcbM3NahRAby5m1grQHDIlno6CxXwrRcbM3NFD3QjknyHLxXwrRcbM3NFD3QjknyHLxXwrRcbM3NFD3QjknyHLxXwrRcbM3NFD3QjknyHLxXwrRcbM3NFD3QjknyHLxXwrRcbM3N'
			);
			assert.equal(
				repeater('akOpxP6fP9', {
					repeatTimes: 4,
					separator: 'Hk2RF8ZKpI',
					addition: 'KY0zOB2M6H',
					additionRepeatTimes: 5,
					additionSeparator: 'Fu8hXeIq74',
				}),
				'akOpxP6fP9KY0zOB2M6HFu8hXeIq74KY0zOB2M6HFu8hXeIq74KY0zOB2M6HFu8hXeIq74KY0zOB2M6HFu8hXeIq74KY0zOB2M6HHk2RF8ZKpIakOpxP6fP9KY0zOB2M6HFu8hXeIq74KY0zOB2M6HFu8hXeIq74KY0zOB2M6HFu8hXeIq74KY0zOB2M6HFu8hXeIq74KY0zOB2M6HHk2RF8ZKpIakOpxP6fP9KY0zOB2M6HFu8hXeIq74KY0zOB2M6HFu8hXeIq74KY0zOB2M6HFu8hXeIq74KY0zOB2M6HFu8hXeIq74KY0zOB2M6HHk2RF8ZKpIakOpxP6fP9KY0zOB2M6HFu8hXeIq74KY0zOB2M6HFu8hXeIq74KY0zOB2M6HFu8hXeIq74KY0zOB2M6HFu8hXeIq74KY0zOB2M6H'
			);
			assert.equal(
				repeater('7DgxpSgr0X', {
					repeatTimes: 9,
					separator: 'T0prO2nO36',
					addition: 'Dy6nGlf3nE',
					additionRepeatTimes: 8,
					additionSeparator: 'wBrmNfb8le',
				}),
				'7DgxpSgr0XDy6nGlf3nEwBrmNfb8leDy6nGlf3nEwBrmNfb8leDy6nGlf3nEwBrmNfb8leDy6nGlf3nEwBrmNfb8leDy6nGlf3nEwBrmNfb8leDy6nGlf3nEwBrmNfb8leDy6nGlf3nEwBrmNfb8leDy6nGlf3nET0prO2nO367DgxpSgr0XDy6nGlf3nEwBrmNfb8leDy6nGlf3nEwBrmNfb8leDy6nGlf3nEwBrmNfb8leDy6nGlf3nEwBrmNfb8leDy6nGlf3nEwBrmNfb8leDy6nGlf3nEwBrmNfb8leDy6nGlf3nEwBrmNfb8leDy6nGlf3nET0prO2nO367DgxpSgr0XDy6nGlf3nEwBrmNfb8leDy6nGlf3nEwBrmNfb8leDy6nGlf3nEwBrmNfb8leDy6nGlf3nEwBrmNfb8leDy6nGlf3nEwBrmNfb8leDy6nGlf3nEwBrmNfb8leDy6nGlf3nEwBrmNfb8leDy6nGlf3nET0prO2nO367DgxpSgr0XDy6nGlf3nEwBrmNfb8leDy6nGlf3nEwBrmNfb8leDy6nGlf3nEwBrmNfb8leDy6nGlf3nEwBrmNfb8leDy6nGlf3nEwBrmNfb8leDy6nGlf3nEwBrmNfb8leDy6nGlf3nEwBrmNfb8leDy6nGlf3nET0prO2nO367DgxpSgr0XDy6nGlf3nEwBrmNfb8leDy6nGlf3nEwBrmNfb8leDy6nGlf3nEwBrmNfb8leDy6nGlf3nEwBrmNfb8leDy6nGlf3nEwBrmNfb8leDy6nGlf3nEwBrmNfb8leDy6nGlf3nEwBrmNfb8leDy6nGlf3nET0prO2nO367DgxpSgr0XDy6nGlf3nEwBrmNfb8leDy6nGlf3nEwBrmNfb8leDy6nGlf3nEwBrmNfb8leDy6nGlf3nEwBrmNfb8leDy6nGlf3nEwBrmNfb8leDy6nGlf3nEwBrmNfb8leDy6nGlf3nEwBrmNfb8leDy6nGlf3nET0prO2nO367DgxpSgr0XDy6nGlf3nEwBrmNfb8leDy6nGlf3nEwBrmNfb8leDy6nGlf3nEwBrmNfb8leDy6nGlf3nEwBrmNfb8leDy6nGlf3nEwBrmNfb8leDy6nGlf3nEwBrmNfb8leDy6nGlf3nEwBrmNfb8leDy6nGlf3nET0prO2nO367DgxpSgr0XDy6nGlf3nEwBrmNfb8leDy6nGlf3nEwBrmNfb8leDy6nGlf3nEwBrmNfb8leDy6nGlf3nEwBrmNfb8leDy6nGlf3nEwBrmNfb8leDy6nGlf3nEwBrmNfb8leDy6nGlf3nEwBrmNfb8leDy6nGlf3nET0prO2nO367DgxpSgr0XDy6nGlf3nEwBrmNfb8leDy6nGlf3nEwBrmNfb8leDy6nGlf3nEwBrmNfb8leDy6nGlf3nEwBrmNfb8leDy6nGlf3nEwBrmNfb8leDy6nGlf3nEwBrmNfb8leDy6nGlf3nEwBrmNfb8leDy6nGlf3nE'
			);
			assert.equal(
				repeater('tqTLeRfrOV', {
					repeatTimes: 1,
					separator: 'u5myZg9miv',
					addition: '1Htu7YLqK1',
					additionRepeatTimes: 8,
					additionSeparator: 'jZcgM9AVze',
				}),
				'tqTLeRfrOV1Htu7YLqK1jZcgM9AVze1Htu7YLqK1jZcgM9AVze1Htu7YLqK1jZcgM9AVze1Htu7YLqK1jZcgM9AVze1Htu7YLqK1jZcgM9AVze1Htu7YLqK1jZcgM9AVze1Htu7YLqK1jZcgM9AVze1Htu7YLqK1'
			);
			assert.equal(
				repeater('jgL4Z3PqM4', {
					repeatTimes: 2,
					separator: 'tXDhnirYdO',
					addition: '9AlCdPFG0n',
					additionRepeatTimes: 8,
					additionSeparator: 'nrIQIpfWOD',
				}),
				'jgL4Z3PqM49AlCdPFG0nnrIQIpfWOD9AlCdPFG0nnrIQIpfWOD9AlCdPFG0nnrIQIpfWOD9AlCdPFG0nnrIQIpfWOD9AlCdPFG0nnrIQIpfWOD9AlCdPFG0nnrIQIpfWOD9AlCdPFG0nnrIQIpfWOD9AlCdPFG0ntXDhnirYdOjgL4Z3PqM49AlCdPFG0nnrIQIpfWOD9AlCdPFG0nnrIQIpfWOD9AlCdPFG0nnrIQIpfWOD9AlCdPFG0nnrIQIpfWOD9AlCdPFG0nnrIQIpfWOD9AlCdPFG0nnrIQIpfWOD9AlCdPFG0nnrIQIpfWOD9AlCdPFG0n'
			);
			assert.equal(
				repeater('AHyFwD0jKV', {
					repeatTimes: 1,
					separator: '5PivZWgYn1',
					addition: 'fLEe0WhCp8',
					additionRepeatTimes: 2,
					additionSeparator: 'VycITPbpfS',
				}),
				'AHyFwD0jKVfLEe0WhCp8VycITPbpfSfLEe0WhCp8'
			);
			assert.equal(
				repeater('JfVqrg33Go', {
					repeatTimes: 4,
					separator: 'MOCGB4t2pP',
					addition: 'cVMNO0x0f3',
					additionRepeatTimes: 8,
					additionSeparator: '9XMJPMIERX',
				}),
				'JfVqrg33GocVMNO0x0f39XMJPMIERXcVMNO0x0f39XMJPMIERXcVMNO0x0f39XMJPMIERXcVMNO0x0f39XMJPMIERXcVMNO0x0f39XMJPMIERXcVMNO0x0f39XMJPMIERXcVMNO0x0f39XMJPMIERXcVMNO0x0f3MOCGB4t2pPJfVqrg33GocVMNO0x0f39XMJPMIERXcVMNO0x0f39XMJPMIERXcVMNO0x0f39XMJPMIERXcVMNO0x0f39XMJPMIERXcVMNO0x0f39XMJPMIERXcVMNO0x0f39XMJPMIERXcVMNO0x0f39XMJPMIERXcVMNO0x0f3MOCGB4t2pPJfVqrg33GocVMNO0x0f39XMJPMIERXcVMNO0x0f39XMJPMIERXcVMNO0x0f39XMJPMIERXcVMNO0x0f39XMJPMIERXcVMNO0x0f39XMJPMIERXcVMNO0x0f39XMJPMIERXcVMNO0x0f39XMJPMIERXcVMNO0x0f3MOCGB4t2pPJfVqrg33GocVMNO0x0f39XMJPMIERXcVMNO0x0f39XMJPMIERXcVMNO0x0f39XMJPMIERXcVMNO0x0f39XMJPMIERXcVMNO0x0f39XMJPMIERXcVMNO0x0f39XMJPMIERXcVMNO0x0f39XMJPMIERXcVMNO0x0f3'
			);
			assert.equal(
				repeater('CGfxZaTaC8', {
					repeatTimes: 6,
					separator: '9htDNwComu',
					addition: 'AqPHoPdHhH',
					additionRepeatTimes: 3,
					additionSeparator: 'YPr2RAAEx4',
				}),
				'CGfxZaTaC8AqPHoPdHhHYPr2RAAEx4AqPHoPdHhHYPr2RAAEx4AqPHoPdHhH9htDNwComuCGfxZaTaC8AqPHoPdHhHYPr2RAAEx4AqPHoPdHhHYPr2RAAEx4AqPHoPdHhH9htDNwComuCGfxZaTaC8AqPHoPdHhHYPr2RAAEx4AqPHoPdHhHYPr2RAAEx4AqPHoPdHhH9htDNwComuCGfxZaTaC8AqPHoPdHhHYPr2RAAEx4AqPHoPdHhHYPr2RAAEx4AqPHoPdHhH9htDNwComuCGfxZaTaC8AqPHoPdHhHYPr2RAAEx4AqPHoPdHhHYPr2RAAEx4AqPHoPdHhH9htDNwComuCGfxZaTaC8AqPHoPdHhHYPr2RAAEx4AqPHoPdHhHYPr2RAAEx4AqPHoPdHhH'
			);
			assert.equal(
				repeater('NtXzB8rjNX', {
					repeatTimes: 6,
					separator: 'QCe2UgFvRH',
					addition: 'R4DNdSC4cm',
					additionRepeatTimes: 1,
					additionSeparator: 'xdakNlYerD',
				}),
				'NtXzB8rjNXR4DNdSC4cmQCe2UgFvRHNtXzB8rjNXR4DNdSC4cmQCe2UgFvRHNtXzB8rjNXR4DNdSC4cmQCe2UgFvRHNtXzB8rjNXR4DNdSC4cmQCe2UgFvRHNtXzB8rjNXR4DNdSC4cmQCe2UgFvRHNtXzB8rjNXR4DNdSC4cm'
			);
		});
	});

	describe('extended requirements ', () => {
		it.optional('supports multi words ', () => {
			assert.equal(
				repeater('my test string', {
					repeatTimes: 5,
					separator: '?!',
					addition: 'PLUS',
					additionRepeatTimes: 4,
					additionSeparator: '))',
				}),
				'my test stringPLUS))PLUS))PLUS))PLUS?!my test stringPLUS))PLUS))PLUS))PLUS?!my test stringPLUS))PLUS))PLUS))PLUS?!my test stringPLUS))PLUS))PLUS))PLUS?!my test stringPLUS))PLUS))PLUS))PLUS'
			);
		});

		it.optional('supports different registers & whitespaces & symbols', () => {
			assert.equal(
				repeater('аГуСиК ', {
					repeatTimes: 3,
					separator: '♥♥♥  ',
					addition: ' пОкАкУнЬкАл ',
					additionRepeatTimes: 5,
					additionSeparator: '( ͡° ͜ʖ ͡°)',
				}),
				'аГуСиК  пОкАкУнЬкАл ( ͡° ͜ʖ ͡°) пОкАкУнЬкАл ( ͡° ͜ʖ ͡°) пОкАкУнЬкАл ( ͡° ͜ʖ ͡°) пОкАкУнЬкАл ( ͡° ͜ʖ ͡°) пОкАкУнЬкАл ♥♥♥  аГуСиК  пОкАкУнЬкАл ( ͡° ͜ʖ ͡°) пОкАкУнЬкАл ( ͡° ͜ʖ ͡°) пОкАкУнЬкАл ( ͡° ͜ʖ ͡°) пОкАкУнЬкАл ( ͡° ͜ʖ ͡°) пОкАкУнЬкАл ♥♥♥  аГуСиК  пОкАкУнЬкАл ( ͡° ͜ʖ ͡°) пОкАкУнЬкАл ( ͡° ͜ʖ ͡°) пОкАкУнЬкАл ( ͡° ͜ʖ ͡°) пОкАкУнЬкАл ( ͡° ͜ʖ ͡°) пОкАкУнЬкАл '
			);
		});

		it.optional('supports different str & addition', () => {
			assert.equal(
				repeater(9.234, {
					repeatTimes: 4,
					separator: '||',
					addition: { a: 5 },
					additionRepeatTimes: 3,
					additionSeparator: '&&',
				}),
				'9.234[object Object]&&[object Object]&&[object Object]||9.234[object Object]&&[object Object]&&[object Object]||9.234[object Object]&&[object Object]&&[object Object]||9.234[object Object]&&[object Object]&&[object Object]'
			);
			assert.equal(
				repeater(-222, {
					repeatTimes: 4,
					separator: '||',
					addition: new Map(),
					additionRepeatTimes: 3,
					additionSeparator: '&&',
				}),
				'-222[object Map]&&[object Map]&&[object Map]||-222[object Map]&&[object Map]&&[object Map]||-222[object Map]&&[object Map]&&[object Map]||-222[object Map]&&[object Map]&&[object Map]'
			);
			assert.equal(
				repeater(new Set(), {
					repeatTimes: 3,
					separator: '??? ',
					addition: [1, 2, 3, '4'],
					additionRepeatTimes: 2,
					additionSeparator: '!!!',
				}),
				'[object Set]1,2,3,4!!!1,2,3,4??? [object Set]1,2,3,4!!!1,2,3,4??? [object Set]1,2,3,4!!!1,2,3,4'
			);
			assert.equal(
				repeater(true, {
					repeatTimes: 3,
					separator: '??? ',
					addition: false,
					additionRepeatTimes: 2,
					additionSeparator: '!!!',
				}),
				'truefalse!!!false??? truefalse!!!false??? truefalse!!!false'
			);
			assert.equal(
				repeater(null, {
					repeatTimes: 3,
					separator: '??? ',
					addition: null,
					additionRepeatTimes: 3,
					additionSeparator: '!!!',
				}),
				'nullnull!!!null!!!null??? nullnull!!!null!!!null??? nullnull!!!null!!!null'
			);
		});

		it.optional('correctly converts str and addition options to string', () => {
			const objWithSpecificCoercion = {
				[Symbol.toPrimitive]: (hint) => (hint !== 'number' ? 'STRING_OR_DEFAULT' : 'NUMBER'),
			};

			assert.equal(
				repeater(objWithSpecificCoercion, { repeatTimes: 2, addition: objWithSpecificCoercion }),
				'STRING_OR_DEFAULTSTRING_OR_DEFAULT+STRING_OR_DEFAULTSTRING_OR_DEFAULT'
			);
		});

		it.optional('correctly works with no separator & no additionSeparator', () => {
			assert.equal(
				repeater('REPEATABLE_STRING', { repeatTimes: 2, addition: 'ADDITION', additionRepeatTimes: 3 }),
				'REPEATABLE_STRINGADDITION|ADDITION|ADDITION+REPEATABLE_STRINGADDITION|ADDITION|ADDITION'
			);
			assert.equal(
				repeater('REPEATABLE_STRING', {
					repeatTimes: 2,
					addition: 'ADDITION',
					additionSeparator: '222',
					additionRepeatTimes: 3,
				}),
				'REPEATABLE_STRINGADDITION222ADDITION222ADDITION+REPEATABLE_STRINGADDITION222ADDITION222ADDITION'
			);
			assert.equal(
				repeater('REPEATABLE_STRING', {
					repeatTimes: 2,
					separator: '222',
					addition: 'ADDITION',
					additionRepeatTimes: 3,
				}),
				'REPEATABLE_STRINGADDITION|ADDITION|ADDITION222REPEATABLE_STRINGADDITION|ADDITION|ADDITION'
			);
		});
	});
});
