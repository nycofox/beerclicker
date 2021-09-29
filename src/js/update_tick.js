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
