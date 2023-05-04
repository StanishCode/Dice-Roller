const dies = document.querySelectorAll(".btn");
const diceMenuBtn = document.querySelector(".dice-menu-btn");
const menuIcons = document.querySelectorAll(".dice-menu-btn svg");
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

dies.forEach((dice) =>
  dice.addEventListener("click", (event) => {
    if (event.target.closest(".btn")) {
      const diceType = event.target.closest(".btn").dataset.dice;
      diceAmount[diceType]++;
      diceReady.push(diceType);

      amountDisplay.innerHTML = "";
      amountDisplay.innerHTML = `${amountsList()}`;
    }
  })
);

diceMenuBtn.addEventListener("click", (event) => {
  if (event.target.closest(".dice-menu-btn")) {
    menuIcons.forEach((icon) => icon.classList.toggle("hidden"));

    if (!menuIcons[0].classList.contains("hidden")) {
      for (let i = 1; i <= dies.length; i++) {
        dies[i - 1].style.transform = `translateY(-${125 * i}%)`;
      }
    } else {
      for (let i = 1; i <= dies.length; i++) {
        dies[i - 1].style.transform = `translateY(0%)`;
      }
    }
  }
});

btnRoll.addEventListener("click", () => {
  if (diceReady.length === 0) {
    return;
  }
  const result = diceReady.reduce((sum, cur) => {
    return (sum += Math.floor(Math.random() * cur) + 1);
  }, 0);

  resultsDisplay.innerHTML = "";
  resultsDisplay.innerHTML = `${result}`;
});
