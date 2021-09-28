let cash=0;
let beerPrice = 2; // Base income per beer
let gameAge = 0; // Age of game, in seconds
let interval = 15; // Updates per second
let numberBartenders=0;

// Businesses [name, base cost, beers per second]
const business = [
    ["Bartenders", 10, 1],
    ["Mixologists", 4000, 2],
    ["Pubs", 10000, 10],
    ["Night Clubs", 100000, 30]
];

let businessAmount = [];

function update() {
    cashText.innerHTML = cash.toFixed(2).toLocaleString();
    // numberBartendersText.innerHTML = numberBartenders;

    // cash += (numberBartenders * beerprice) / interval;

    for(i = 0; i < business.length; i++) {
        // cash += (businessAmount[i] * business[i][3] * beerPrice) / interval;
    }

}

function statusUpdate() {
    gameAge++;

    gameAgeText.innerHTML = gameAge;
}

function buyBeer()  {
    cash += beerPrice;
}

// function hireBartender() {
//     if(cash >= 10) {
//         numberBartenders += 1;
//         cash -= 10;
//     }
// }

function setBusiness() {
    for(i = 0 ; i < business.length; i++) {
        businessAmount.push(0);

        let div = document.createElement('div');
        div.id = business[i][0];
        div.innerHTML = business[i][0];

        let amount = document.createElement('span');
        amount.id = "amount" + i;
        amount.innerHTML = "0";

        let button = document.createElement('button');
        button.type = "button";
        button.className = "btn btn-primary"
        button.id = i;
        button.value = 'Buy'
        button.innerHTML = 'Buy (€' + businessCost[business[i][0]] + ')'
        // button.onclick = buyBusiness;

        div.appendChild(amount);
        div.appendChild(button);
        mainGame.appendChild(div);
    }
}

function buyBusiness() {
    console.log("BUY " + this.id)

    if (cash >= businessCost(this.id)) {

    }
}

function businessCost(id) {
    return businessAmount[id] * business[id][1] * 1.15;
}

//
setBusiness();
// for(i = 0 ; i < business.length; i++) {
//     document.getElementById(i).onclick();
// }

setInterval(update, 1000/interval);
setInterval(statusUpdate, 1000);