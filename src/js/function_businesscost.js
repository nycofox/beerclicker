function businessCost(id) {
    return Number(business[id][1]);
    if(!businessAmount[id]) {
        return business[id][1];
    }
    return businessAmount[id] * business[id][1] * 1.15;
}
