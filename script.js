var mealCost = Number(prompt("Cost of meal (ex. 24.99)"));
var tip = Number(prompt("Tip percentage (ex. 0.15 for 15%)"));
var tipAmount = mealCost * tip;
var total = mealCost + tipAmount;
var numOfPeople = Number(
  prompt("How many people shared the cost? (minimum = 1)")
);
console.log(
  `Your meal cost is $${mealCost}, and with the tip, it comes to $${total.toFixed(
    2
  )}. Your share is $${(mealCost / numOfPeople).toFixed(2)}.`
);
