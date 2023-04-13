const dies = document.querySelector('.dies');
const amountDisplay = document.querySelector('.amount-display')

const diceAmount = {'4': 0, '6': 0, '8': 0, '10': 0, '12': 0, '20': 0, '100': 0};
const diceReady = [];

const amountsList = () => {
    return Object.entries(diceAmount)
        .filter(([_, qty]) => qty > 0)
        .map(([dice,qty]) => `${qty}d${dice}`)
        .join(' + ');
        
}

dies.addEventListener('click', (event) => {
    if(event.target.closest('.btn')){
        const diceType = event.target.dataset.dice;
        diceAmount[diceType.toString()]++;
        diceReady.push(diceType);

        amountDisplay.innerHTML = '';
        amountDisplay.innerHTML = `${amountsList()}`
        console.log(diceReady)
    }
})