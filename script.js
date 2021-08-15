const sellingPrice = document.querySelector('#selling-input');
const quantity = document.querySelector('#quantity-input');
const purchasePrice = document.querySelector('#purchase-input');
const button = document.querySelector("#button");
const output = document.querySelector('#output')

button.addEventListener('click',function (){
    validQuantity();
    let prc = purchasePrice.value;
 let qty = quantity.value;
 let slg = sellingPrice.value;
(calculateProfitOrLoss(prc,qty,slg));
})


function validQuantity(){
    if(quantity.value<=0){
     output.innerText = 'The Quantity of Stock should be atleast greater than 0'
    }
}

function calculateProfitOrLoss(prc,qty,slg){
 
 let totalPurchaseAmount = prc*qty;
 let totalSellingAmount = slg*qty;
 
 if(prc<slg){
     let profittedAmount = totalSellingAmount-totalPurchaseAmount;
     let percentage = ((slg-prc)*100)/prc;
     output.innerText = `You gained ${percentage}%. Your total profit is ₹${profittedAmount}  `
 }  if(prc<slg){
    let lossAmount = totalPurchaseAmount-totalSellingAmount;
    let percentage = ((prc-slg)*100/prc);
    output.innerText = `You lost ${percentage}%. Your total loss is ₹${lossAmount} `

 }
}