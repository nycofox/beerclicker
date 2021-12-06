let cash=0;
let clicks=0;
let cashTotal=0;
let beerSoldAmount = 0; // Number of beers sold
let beerBasePrice = 2; // Base income per beer
let beerCurrentPrice = 2;
let gameAge = 0; // Age of game, in seconds
let interval = 15; // Updates per second
let businessAmount = [];

let version = "0.0.2";

/*
 0  id
 1  Name
 2  Base price
 3  Increase per level
 4  Base beers per second
 5  Tooltip
 6  Buy/Hire
 */

let business = [
    [10, "Auto-brewer", 100, 1.1, 0.2, "Some sort of thingamajig that brews beer for you", "Buy"],
    [20, "Bartenders", 100, 1.1, 0.5, "Bartenders will sell beers for you", "Hire"],
    [30, "Mixologists", 5000, 1.15, 1, "", "Hire"],
    [40, "Beer truck", 8000, 1.15, 4, "Beer trucks will hunt for vic...customers in the neighborhood", "Buy"],
    [50, "Pubs", 10000, 1.15, 10, "", "Buy"],
    [60, "Night Clubs", 100000, 1.15, 30, "", "Buy"]
];

function businessCost(id) {
    // return 100 * business[id][0];
    // return business[id][2] * (businessAmount[id] + 1);
    return 1;
}

function buyBeer(amount = 1)  {
    cash += beerCurrentPrice;
    cashTotal += beerCurrentPrice;
    beerSoldAmount += amount;
    clicks++;
}

/**
 * Purchases a new business
 * Checks for available money first
 */
function buyBusiness(id) {
    console.log("BUY " + id)

    if (cash >= businessCost(id)) {
        cash -= businessCost(id);
        businessAmount[id]++;

        document.getElementById("amount" + id).innerHTML = businessAmount[id];

        document.getElementById("cost" + id).innerHTML = businessCost(id);

        document.getElementById("button" + id).innerHTML = business[i][6] + ' 1 (€' + businessCost(business[i][0]) + ')';

    }
}

function setBusiness() {

    updateBeerCost()

    for(i = 0 ; i < business.length; i++) {
        businessAmount.push(0);

        let row = document.createElement("tr")

        let name = document.createElement("th");
        name.scope = "row"
        name.id = business[i][0];
        name.title = business[i][5];
        name.innerHTML = business[i][1];

        let amount = document.createElement("td");
        amount.id = "amount" + business[i][0];
        amount.innerHTML = "0";

        let action = document.createElement("td");

        let button = document.createElement("button");
        button.type = "button";
        button.className = "btn btn-primary btn-sm";
        button.id = "buybutton" + business[i][0];
        button.value = 'Buy';
        button.onclick = buyBusiness(business[i]);
        button.innerHTML = business[i][6] + ' 1 (€' + business[i][2] + ')';
        // button.innerHTML = business[i][6] + ' 1 (€' + businessCost(business[i][0]) + ')';

        let beerspersecond = document.createElement("td");

        row.appendChild(name);
        row.appendChild(amount);
        row.appendChild(action);
        row.appendChild(beerspersecond);
        action.appendChild(button);
        businessTable.appendChild(row);
    }
}

function updateBeerCost()
{
    price = beerCurrentPrice;

    sellBeerText.innerHTML = "Sell a beer (€" + price + ")"
    beerPriceText.innerHTML = price;
}

function updateStatus() {
    gameAge++;

    gameAgeText.innerHTML = gameAge;

    updateBeerCost();
}

/**
 * Tick runs x times per second, set by variable "interval"
 */
function updateTick() {
    cashText.innerHTML = cash.toFixed(2).toLocaleString();
    cashTotalText.innerHTML = cashTotal.toFixed(2).toLocaleString();
    beerSoldAmountText.innerHTML = beerSoldAmount;

    for (i = 0; i < business.length; i++) {
        increase = (businessAmount[i] * business[i][4] * beerCurrentPrice) / interval;
        cash += increase;
        cashTotal += increase;

        // setBusiness();
        // updateBusinessCosts(business[i])

    }
}

function updateBusinessCosts(id) {

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
