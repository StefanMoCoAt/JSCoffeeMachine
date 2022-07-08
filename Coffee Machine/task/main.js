const input = require('sync-input');

let einSpaenner = {
    water: 80,
    milk: 0,
    bean: 15,
    price: 4,
    cupSmall: 1,
    cupBig: 0
}
let zweiSpaenner = {
    water: 160,
    milk: 0,
    bean: 30,
    price: 8,
    cupSmall: 0,
    cupBig: 1
}
let kleinerBrauner = {
    water: 80,
    milk: 15,
    bean: 15,
    price: 4,
    cupSmall: 1,
    cupBig: 0
}
let grosserBrauner = {
    water: 160,
    milk: 30,
    bean: 30,
    price: 8,
    cupSmall: 0,
    cupBig: 1
}
let melange = {
    water: 160,
    milk: 30,
    bean: 15,
    price: 6,
    cupSmall: 0,
    cupBig: 1
}

let waterLevel = 300;
let milkLevel = 200;
let beanLevel = 50;
let cupSmallLevel = 5;
let cupBigLevel = 3;
let cashBalance = 110;

function checkLevel(coffe) {
    let level = [];
    if (coffe.water > waterLevel) {
        level.push("water")
    }
    if (coffe.milk > milkLevel) {
        level.push("milk");
    }
    if (coffe.bean > beanLevel) {
        level.push("beans");
    }
    if (cupSmallLevel < 1) {
        level.push("small cups");
    }
    if (cupBigLevel < 1) {
        level.push("big cups");
    }
    if (level.length === 0) {
        level = true;
    }
    if (level === true) {
        waterLevel -= coffe.water;
        milkLevel -= coffe.milk;
        beanLevel -= coffe.bean;
        cupSmallLevel -= coffe.cupSmall;
        cupBigLevel -= coffe.cupBig;
        cashBalance += coffe.price;
        return `I have enough resources, making you a coffee!\n`;
    } else {
        if (level.length > 1) {
            let temp = "";
            for (let i = 1; i < level.length; i++) {
                temp += " " + level[i];
            }
            return "Sorry, not enough " + level[0] + temp + "!\n";
        } else {
            return "Sorry, not enough " + level[0] + "!\n";
        }
    }
}

function buy() {
    let select = input("\nWhat do you want to buy?\n" +
        "1 - Einspaenner,       2 - Zweispaenner,\n" +
        "3 - kleiner Brauner,   4 - großer Brauner,\n" +
        "5 - Melange,           back - to main menu:\n");
    switch (select) {
        case "1":
            console.log(checkLevel(einSpaenner));
            break;
        case "2":
            console.log(checkLevel(zweiSpaenner));
            break;
        case "3":
            console.log(checkLevel(kleinerBrauner));
            break;
        case "4":
            console.log(checkLevel(grosserBrauner));
            break;
        case "5":
            console.log(checkLevel(melange));
            break;
        case "back":
            action();
            break;
        default:
    }
}

function fill() {
    waterLevel += Number(input("\nWrite how many ml of water you want to add:\n"));
    milkLevel += Number(input("Write how many ml of milk you want to add:\n"));
    beanLevel += Number(input("Write how many grams of coffee beans you want to add:\n"));
    cupBigLevel += Number(input("Write how many big coffee cups you want to add:\n"));
    cupSmallLevel += Number(input("Write how many small coffee cups you want to add:\n"));
}

function take() {
    console.log(`I give you $${cashBalance}`);
    cashBalance = 0;
}

function remaining() {
    console.log(`\nThe coffee machine has:
${waterLevel} ml of water
${milkLevel} ml of milk
${beanLevel} g of coffee beans
${cupSmallLevel} pieces of small cups
${cupBigLevel} pieces of big cups
$${cashBalance} of money\n`)
}

let exit = false;
do {
    let menue = input("Write action (buy, fill, take, remaining, exit):\n").toLowerCase().trim();
    switch (menue) {
        case "buy":
            buy();
            break;
        case "fill":
            fill();
            break;
        case "take":
            take();
            break;
        case "remaining":
            remaining();
            break;
        case "exit":
            exit = true;
            break;
        default:
            console.log("unknow try again");
            break;
    }
} while (!exit);