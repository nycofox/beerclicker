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
