//Phone-case Part:
document.getElementById("case-count").addEventListener("click", function () {
    productHandler('case', true);
})
document.getElementById("caseCountLess").addEventListener("click", function () {
    productHandler('case', false);
})

// Phone Part
document.getElementById("phoneCount").addEventListener("click", function () {
    productHandler('phone', true);
})
document.getElementById("phoneCountLess").addEventListener("click", function () {
    productHandler('phone', false);
})

// Share function Part
function productHandler(product, isIncrease) {
    const productInput = document.getElementById(product + 'Input');
    const productInputNumber = parseInt(productInput.value);
    // const newCaseNumber = caseInputNumber - 1;
    let newProductNumber = productInputNumber;
    if (isIncrease == true) {
        newProductNumber = productInputNumber + 1;
    }
    else if (isIncrease == false && newProductNumber > 0) {
        newProductNumber = productInputNumber - 1;
    }
    productInput.value = newProductNumber;
    let totalProductPrice = 0;
    if (product == 'phone') {
        totalProductPrice = 1219 * newProductNumber;
    }
    else if (product == 'case') {
        totalProductPrice = 59 * newProductNumber;
    }
    document.getElementById(product + 'Price').innerText = totalProductPrice;

    calculateTotalPrice();

}
// Calculate Total price
function calculateTotalPrice() {
    const phonePriceNumber = getPriceCalculate('phone');
    const casePriceNumber = getPriceCalculate('case');
    const calculateTotalPrice = phonePriceNumber + casePriceNumber;
    document.getElementById('subTotal').innerText = '$' + calculateTotalPrice;

    const tax = Math.round(calculateTotalPrice * 0.1);
    document.getElementById('taxCount').innerText = '$' + tax;

    const grandTotal = tax + calculateTotalPrice;
    document.getElementById('grandTotal').innerText = '$' + grandTotal;
}

// Calculate Total price Function--
function getPriceCalculate(product) {
    const productPrice = document.getElementById(product + 'Price');
    const productPriceNumber = parseInt(productPrice.innerText);
    return productPriceNumber;
}


// Different Function Part----

// phoneHandler Part
/*
function phoneHandler(isCrease){
    const phoneInput = document.getElementById("phoneInput");
    const phoneInputNumber = parseInt(phoneInput.value);
    let totalPhoneCount = phoneInputNumber;
    if(isCrease == true){
        totalPhoneCount = phoneInputNumber + 1;
    }
    else if(isCrease == false && totalPhoneCount > 0 ){
        totalPhoneCount = phoneInputNumber - 1
    }
    phoneInput.value = totalPhoneCount;
    const phonePrice = document.getElementById("phonePrice");
    const totalPhonePrice = totalPhoneCount * 1219;
    phonePrice.innerText = "$" + totalPhonePrice;
}
*/

// caseHandler Part
/*
function caseHandler(isIncrease){
    const caseInput = document.getElementById("caseInput");
    const caseInputNumber = parseInt(caseInput.value);
    // const newCaseNumber = caseInputNumber - 1;
    let newCaseNumber = caseInputNumber;
    if(isIncrease == true){
        newCaseNumber = caseInputNumber + 1;
    }
   else if(isIncrease == false && newCaseNumber > 0){
        newCaseNumber = caseInputNumber - 1;
    }
    caseInput.value = newCaseNumber;
    const casePrice = document.getElementById("case-price");
    const totalCasePrice =  59 * newCaseNumber;
    casePrice.innerText = "$" + totalCasePrice;
}
*/