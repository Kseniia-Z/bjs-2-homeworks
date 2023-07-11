"use strict"

function solveEquation(a, b, c) {
	let arr = [];
	let x;
	let y;
	let d = b ** 2 - 4 * a * c;

	if (d < 0) {
	} else if (d === 0) {
		x = -b / (2 * a);
		arr.push(x);
	} else if (d > 0) {
		x = (-b + Math.sqrt(d)) / (2 * a);
		y = (-b - Math.sqrt(d)) / (2 * a);
		arr.push(x, y)
	}
	return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let monthPercent = percent / 100 / 12;
  let amountLoan = amount - contribution;
  let monthPayment = amountLoan * (monthPercent + (monthPercent / (((1 + monthPercent) ** countMonths) - 1)));
  let total = monthPayment * countMonths;

  return parseFloat(total.toFixed(2));
}