document.getElementById("first-apply-btn").addEventListener("click", function () {
    // get product price
    const productPrice = getProductPrice("first-product-price");

    // discount calculation
    const discountSavings = productPrice * 30 / 100;
    const discount = productPrice - discountSavings;

    // set product new price
    setProductPrice("first-new-price", discount);
});