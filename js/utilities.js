// get product price
function getProductPrice(elementId) {
    const productPriceField = document.getElementById(elementId);
    const productPrice = parseFloat(productPriceField.innerText);

    return productPrice;
};

// get input field value
function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const couponCode = inputField.value;

    return couponCode;
}

// set product price
function setProductPrice(elementId, newPrice) {
    document.getElementById(elementId).innerText = newPrice;
};