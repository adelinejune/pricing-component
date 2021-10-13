// UI vars
const price = document.querySelector(".amount");
const view = document.querySelector(".view-number");
const range = document.querySelector(".range");
const checkbox = document.querySelector(".bill-switch")
let pageView = ["10K", "50K", "100K", "500K", "1M"];
let prices = ["8", "12", "16", "24", "36"]

window.addEventListener("DOMContentLoaded", function(){
    let value = range.value;
    view.textContent = pageView[value - 1];
    check();
})

range.addEventListener("input", function(e){
    // pageview
    let value = e.target.value;
    view.textContent = pageView[value - 1];

    // price
    check();
})

checkbox.addEventListener("change", function(){
    check();
})

function check(){
    let value = range.value;
    if(checkbox.checked){
        let monthlyPrice = Number(prices[value - 1]);
        price.textContent = yearly(monthlyPrice);
    }else {
        price.textContent = prices[value - 1];
    }
}
function yearly(monthly){
    return monthly * 12 * 0.75 / 12;
}
