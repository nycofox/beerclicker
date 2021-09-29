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
