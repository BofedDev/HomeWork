'use strict';


let price = prompt("Enter your price");
let discount = prompt("Enter your discount");

let priceTypeNumber = (+price);
let discountTypeNumber = (+discount);
    if(!isNaN(priceTypeNumber) && !isNaN(discountTypeNumber) &&
        priceTypeNumber > 0 && discountTypeNumber >= 0 && discountTypeNumber < 70
){
        alert(`The price was ${priceTypeNumber}$, taking into account the discount, the price became: ${(priceTypeNumber - ((priceTypeNumber * discountTypeNumber) / 100))}$`);
    }
    else{
        alert('input error')
    }




