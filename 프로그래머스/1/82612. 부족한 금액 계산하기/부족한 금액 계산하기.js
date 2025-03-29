function solution(price, money, count) {
    
    let totalFee = 0;
    
    for (let i = 1; i <= count; i++) {
        totalFee += price * i;
    }

    return money < totalFee ? totalFee - money : 0;
}