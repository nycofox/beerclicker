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
