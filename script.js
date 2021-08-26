const sellingPrice = document.querySelector('#selling-input');
const quantity = document.querySelector('#quantity-input');
const purchasePrice = document.querySelector('#purchase-input');
const button = document.querySelector("#button");
const output = document.querySelector('#output')

output.style.display = 'none';


button.addEventListener('click',function (){
    output.style.display = 'block'
    let prc = purchasePrice.value;
    let qty = quantity.value;
    let slg = sellingPrice.value;
    calculateProfitOrLoss(prc,qty,slg);
});   

function calculateProfitOrLoss(prc,qty,slg){
    
 let totalPurchaseAmount = prc*qty;
 let totalSellingAmount = slg*qty;
 
 if(totalPurchaseAmount<totalSellingAmount){
     let profittedAmount = totalSellingAmount-totalPurchaseAmount;
     let percentage = ((slg-prc)*100)/prc;
     output.innerText = `You gained ${percentage}%. Your total profit is ₹${profittedAmount}`}
  if(totalPurchaseAmount>totalSellingAmount){
    let lossAmount = totalPurchaseAmount-totalSellingAmount;
    let percentage = ((prc-slg)*100/prc);
    console.log(lossAmount);
    output.innerText = `You lost ${percentage}%. Your total loss is ₹${lossAmount} `
 }
 if(totalSellingAmount===totalPurchaseAmount){
    output.innerText = `You gained and lost 0% because the stock price remained same.`
    output.backgroundImage = url('1992.webp')
 }
 
}