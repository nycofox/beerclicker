let cash=0;
let beerprice = 1; // Base income per beer
let gameAge = 0; // Age of game, in seconds
let interval = 15; // Updates per second
let numberBartenders=0;
// const business = ["Bartender", "Mixologist", "Pub", "Night Club"];

function update() {
    cashText.innerHTML = cash.toFixed(2);
    numberBartendersText.innerHTML = numberBartenders;

    cash += (numberBartenders * beerprice) / interval;


}

function statusUpdate() {
    gameAge++;

    gameAgeText.innerHTML = gameAge;
}

function buyBeer()
{
    cash += beerprice;
}

function hireBartender()
{
    if(cash >= 10) {
        numberBartenders += 1;
        cash -= 10;
    }
}

setInterval(update, 1000/interval);
setInterval(statusUpdate, 1000);