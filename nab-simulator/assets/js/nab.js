//game veriables
let cashCount = 0;
let trashCount = 0;
let trashPerClick = 1;

const trashCountDisplay = document.getElementById('trashCount');
const cashCountDisplay = document.getElementById('cashCount');
const trashBtn = document.getElementById('trashBtn');
const sellBtn = document.getElementById('sellBtn');
const upgradeBtn = document.getElementById('upgradeBtn');


//menu consts
const mainMenu = document.getElementById('mainMenu');
const stats = document.getElementById('stats')
const gameMenu = document.getElementById('gameMenu');
const upgradeMenu = document.getElementById('upgradeMenu');

//menu nav buttons
const startBtn = document.getElementById('startBtn');
const returnToMainBtn = document.getElementById('returnToMainBtn')
const returnToGameBtn = document.getElementById('returnToGameBtn')

//upgrade veriables
const ownedUpgradeDisplay = document.getElementById('trashCount');
const availableUpgradeDisplay = document.getElementById('cashCount');

//main menu logic
startBtn.addEventListener('click', function () {
    mainMenu.style.display = "none"
    stats.style.display = "block"
    gameMenu.style.display = "block"
});


//game logic
function updateTextField(targetDisplay, targetText) {
    targetDisplay.textContent = targetText;
}

trashBtn.addEventListener('click', function () {
    trashCount += trashPerClick;
    updateTextField(trashCountDisplay, trashCount);
});

sellBtn.addEventListener('click', function () {
    cashCount += trashCount;
    trashCount = 0;
    updateTextField(cashCountDisplay, cashCount);
    updateTextField(trashCountDisplay, trashCount);
});


//upgrade menu logic
upgradeBtn.addEventListener('click', function () {
    gameMenu.style.display = "none";
    upgradeMenu.style.display = "block";

});

//upgrade system
const trashPerClickOwnedDisplay = document.getElementById('trashPerClickOwned');
const autoTrashFisherOwnedDisplay = document.getElementById('autoTrashFisherOwned');

const autoFisherCostDisplay = document.getElementById('autoFisherCost')
const perClickCostDisplay = document.getElementById('perClickCost')

const buyTrashPerClickBtn = document.getElementById('buyTrashPerClickBtn');
const buyAutoTrashFisherBtn = document.getElementById('buyAutoTrashFisherBtn');

// Trash Per Click
let perClickCost = 10;
buyTrashPerClickBtn.addEventListener('click', function() {
    if (cashCount >= perClickCost) {
        cashCount -= perClickCost;
        trashPerClick += 1;
        perClickCost = Math.floor(perClickCost*1.25);
        updateTextField(cashCountDisplay, cashCount);
        console.log(perClickCost);
        updateTextField(perClickCostDisplay, perClickCost);
        trashPerClickOwnedDisplay.textContent = trashPerClick - 1;
    } else {
        alert("Not enough cash for Treasure Per Click!");
    }
});

// Auto Trash Fisher Upgrade
let autoFisherOwned = 0;
let autoFisherCost = 50;
let autoTrashInterval = null;

buyAutoTrashFisherBtn.addEventListener('click', function() {
    if (cashCount >= autoFisherCost) {
        cashCount -= autoFisherCost;
        autoFisherOwned += 1;
        autoFisherCost = Math.floor(autoFisherCost*(1+(autoFisherOwned/10)))
        updateTextField(cashCountDisplay, cashCount);
        console.log(autoFisherCost);
        updateTextField(autoFisherCostDisplay, autoFisherCost);
        autoTrashFisherOwnedDisplay.textContent = autoFisherOwned;

        if (!autoTrashInterval) {
            autoTrashInterval = setInterval(function() {
                trashCount += autoFisherOwned;
                updateTextField(trashCountDisplay, trashCount);
            }, 1000);
        }
    } else {
        alert("Not enough cash for Auto Treasure Fisher!");
    }
});


//return to game 
returnToGameBtn.addEventListener('click', function () {
    mainMenu.style.display = "none";
    gameMenu.style.display = "block";
    upgradeMenu.style.display = "none";
});


//return to main menu
returnToMainBtn.addEventListener('click', function () {
    mainMenu.style.display = "block";
    stats.style.display = 'none'
    gameMenu.style.display = "none";
    upgradeMenu.style.display = "none"
});