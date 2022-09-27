let budget = 10;
let display = document.getElementById("display");
let displayBudget = document.getElementById("display-budget");

function buySomething() {
    budget--;
    displayBudget.innerHTML = budget;
    if(budget == 9 ){
        display.innerHTML = "Stai spendendo il tuo budget";
    } else if(budget == 5 ){
        display.innerHTML = "Sei a metà del budget";
    } else if (budget == 3) {
        display.innerHTML = "Stai per finire il budget";
    } else if (budget == 0) {
        display.innerHTML = "Hai finito il budget";
    } else if (budget < 0) {
        display.innerHTML = "Sei in debito";
    }
}