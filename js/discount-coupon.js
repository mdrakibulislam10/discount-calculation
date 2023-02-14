document.getElementById("second-apply-btn").addEventListener("click", function () {
    // get product price
    const productPrice = getProductPrice("second-product-price");

    // get input field value
    const couponCode = getInputValue("input-field");

    // discount calculation
    const discountSavings = productPrice * 30 / 100;
    const discount = productPrice - discountSavings;

    if (couponCode === "DISC30") {
        setProductPrice("second-new-price", discount);
        return;
    }
    // else {
    setProductPrice("second-new-price", productPrice);
    // }
});