function solution(n, k) {
    var foodPrice = 12000;
    var beveragePrice = 2000;
    var service = Math.floor(n / 10);
    let totalPrice = (foodPrice * n) + (beveragePrice * (k - service));
    return totalPrice;
}