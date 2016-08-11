//a variable to prompt the user for a money value
var moneyPrompt = prompt("Enter in a money amount (i.e. 0.00)");

//start of the  function
function coinCounter(moneyPrompt) {
//oh hi, variable
  var coinPurse = {};
//oh hi, coins
  coinPurse.quarters = 0;
  coinPurse.dimes = 0;
  coinPurse.nickels = 0;
  coinPurse.pennies = 0;
//quarter
  coinPurse.quarters = Math.floor(moneyPrompt / 25);
  moneyPrompt = moneyPrompt - (25 * coinPurse.quarters);
//dimes
  coinPurse.dimes = Math.floor(moneyPrompt / 10);
  moneyPrompt = moneyPrompt - (10 * coinPurse.dimes);
//nickels
  coinPurse.nickels = Math.floor(moneyPrompt / 5);
  moneyPrompt = moneyPrompt - (5 *coinPurse.nickels);
//pennies
  coinPurse.pennies = moneyPrompt - (5 * coinPurse.pennies);
  moneyPrompt = moneyPrompt - (1 * coinPurse.pennies)
  
  return coinPurse;
}

//Converts the moneyInput into a whole number
moneyPrompt = moneyPrompt * 100;

//put the stuff in the console
var coins = coinCounter(moneyPrompt)
console.log(coins);