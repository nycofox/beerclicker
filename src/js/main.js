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
