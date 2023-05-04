const dies = document.querySelector(".dies");
const amountDisplay = document.querySelector(".amount-display");
const resultsDisplay = document.querySelector(".results-display");
const btnRoll = document.querySelector(".roll");
const btnClear = document.querySelector(".clear");

const diceAmount = { 4: 0, 6: 0, 8: 0, 10: 0, 12: 0, 20: 0, 100: 0 };
const diceReady = [];

const amountsList = () => {
  return Object.entries(diceAmount)
    .filter(([_, qty]) => qty > 0)
    .map(([dice, qty]) => `${qty}d${dice}`)
    .join(" + ");
};

dies.addEventListener("click", (event) => {
  if (event.target.closest(".btn")) {
    const diceType = event.target.dataset.dice;
    diceAmount[diceType]++;
    diceReady.push(diceType);

    amountDisplay.innerHTML = "";
    amountDisplay.innerHTML = `${amountsList()}`;
    console.log(diceReady);
  }
});

btnRoll.addEventListener("click", () => {
  const result = diceReady.reduce((sum, cur) => {
    return (sum += Math.floor(Math.random() * cur) + 1);
  }, 0);

  resultsDisplay.innerHTML = "";
  resultsDisplay.innerHTML = `${result}`;
});

btnClear.addEventListener("click", (event) => {
  diceReady.length = 0;

  for (let dice in diceAmount) {
    diceAmount[dice] = 0;
  }

  amountDisplay.innerHTML = "";
  resultsDisplay.innerHTML = "Select Your Dice";
});
