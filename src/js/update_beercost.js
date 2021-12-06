function updateBeerCost()
{
    price = beerCurrentPrice;

    sellBeerText.innerHTML = "Sell a beer (€" + price + ")"
    beerPriceText.innerHTML = price;
}
