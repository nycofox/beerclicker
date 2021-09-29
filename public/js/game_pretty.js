let cash=0;
let cashTotal=0;
let beerSoldAmount = 0; // Number of beers sold
let beerBasePrice = 2; // Base income per beer
let beerCurrentPrice = 2;
let gameAge = 0; // Age of game, in seconds
let interval = 15; // Updates per second
let increasePerLevel = 0.15;
let businessAmount = [];

let version = "0.1";

/*
 0  id
 1  Name
 2  Base price
 3  Increase per level
 4  Base beers per second
 5  Tooltip
 */

let business = [
    ["Bartenders", 100, 1.1, 1, "Bartenders will sell beers for you"],
    ["Mixologists", 5000, 1.15, 2, ""],
    ["Beer truck", 8000, 1.15, 4, "Beer trucks will hunt for vic...customers in the neighborhood"],
    ["Pubs", 10000, 1.15, 10, ""],
    ["Night Clubs", 100000, 1.15, 30, ""]
];

function businessCost(id) {
    return Number(business[id][1]);
    if(!businessAmount[id]) {
        return business[id][1];
    }
    return businessAmount[id] * business[id][1] * 1.15;
}

function buyBeer(amount = 1)  {
    cash += beerCurrentPrice;
    cashTotal += beerCurrentPrice;
    beerSoldAmount += amount;
}

function setBusiness() {

    updateBeerCost()

    for(i = 0 ; i < business.length; i++) {
        businessAmount.push(0);

        let div = document.createElement('div');
        div.className = "mb-2";
        div.id = business[i][0];
        div.title = business[i][4];
        div.innerHTML = business[i][0];

        let amount = document.createElement('span');
        amount.id = "amount" + i;
        amount.innerHTML = "0";

        let button = document.createElement('button');
        button.type = "button";
        button.className = "btn btn-primary"
        button.id = i;
        button.value = 'Buy'
        button.innerHTML = 'Buy (€' + businessCost(i) + ')'
        // button.onclick = buyBusiness;

        let description = document.createElement('span')
        description.className = "small"
        description.innerHTML = business[i][4];

        div.appendChild(amount);
        div.appendChild(button);
        div.appendChild(description);
        mainBusiness.appendChild(div);
    }
}

function updateBeerCost()
{
    sellBeerText.innerHTML = "Sell a beer (€" + beerCurrentPrice + ")"
}

function updateStatus() {
    gameAge++;

    gameAgeText.innerHTML = gameAge;

    updateBeerCost();
}

/**
 * Tick runs once p
 */
function updateTick() {
    cashText.innerHTML = cash.toFixed(2).toLocaleString();
    cashTotalText.innerHTML = cashTotal.toFixed(2).toLocaleString();
    beerSoldAmountText.innerHTML = beerSoldAmount;

    for(i = 0; i < business.length; i++) {
        increase = (businessAmount[i] * business[i][2] * beerCurrentPrice) / interval;
        cash += increase;
        cashTotal += increase;
    }
}

function startUp() {
    gameVersionText.innerHTML = version;
    setBusiness();
}

startUp();
// for(i = 0 ; i < business.length; i++) {
//     document.getElementById(i).onclick();
// }

setInterval(updateTick, 1000/interval);
setInterval(updateStatus, 1000);
