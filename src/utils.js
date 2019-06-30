const utils = {
	capitalizeString(string)
	{
		return string.replace(/\b\w/g, l => l.toUpperCase());
	},
	//Sum
	sum(x, y){
		return x+y;
	},
	//Multiply
	multiply(x, y){
		return x*y;
	},
	//Find n primes
	get_n_primes(n) {
		const arr = [];
		let i = 2

		while (arr.length < n) {
			if (utils.is_prime(i)) {
				arr.push(i)
			}
			i++
		}
		return arr;
	},
	// Check is prime
	is_prime(n) {

		if ( n < 2 ) {
			return false
		}

		for ( let i = 2; i <= Math.sqrt(n); i++ ) {
			if ( n % i === 0 ) {
				return false;
			}
		}
		return true
	},
	// Fibonacci
	fibonacci_series(n)
	{
		if (n === 0)
			return [0];
		if (n === 1)
			return [0];
		let arr = utils.fibonacci_series(n - 1)
		arr.push(arr[arr.length - 1] + arr[arr.length - 2] || 1);
		return arr;
	}
};

module.exports = utils;