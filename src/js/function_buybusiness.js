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
