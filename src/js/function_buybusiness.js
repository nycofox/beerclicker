function buyBusiness() {
    console.log("BUY " + this.id)

    if (cash >= businessCost(this.id)) {
        cash -= businessCost(this.id);
        businessAmount[this.id]++;

        document.getElementById("amount" + this.id).innerHTML = businessAmount[this.id];

        document.getElementById("cost" + this.id).innerHTML = "$" + businessCost(this.id);
    }
}
