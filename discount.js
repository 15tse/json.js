function calculateDiscountedPrice(originalPrice, discount) {
    if (isNaN(originalPrice) || originalPrice <= 0 || isNaN(discount) || discount <= 0) {
        return null;
    }
    let discountedPrice = originalPrice - (originalPrice * discount / 100);
    return discountedPrice;
}




function callBackFunction(discountedPrice) {
    return discountedPrice;
}
 const calculateDiscountedPriceVar= (originalPrice, discount, callBackFunction) => {
    if (isNaN(originalPrice) || originalPrice <= 0 || isNaN(discount) || discount <= 0) {
        return null;
    }
    let discountedPrice = originalPrice - (originalPrice * discount / 100);
    return callBackFunction(discountedPrice);
}

console.log(`Discounted Price: ${calculateDiscountedPrice(150, 25)}`);

console.log(`Discounted Price: ${calculateDiscountedPriceVar(150, 25, callBackFunction)}`);