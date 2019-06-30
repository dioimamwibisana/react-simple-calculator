const utils = {
	capitalizeString(string)
	{
		return string.replace(/\b\w/g, l => l.toUpperCase());
	},
	sum(x, y){
		console.log(x, y, 'utils', typeof x, typeof y)
		let result = x+y;
		console.log(result, 'result util')
		return result

	}
};

module.exports = utils;