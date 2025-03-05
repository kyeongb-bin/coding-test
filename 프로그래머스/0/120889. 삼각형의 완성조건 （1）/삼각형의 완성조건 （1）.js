function solution(sides) {
    let answer = 0;
    let sum = 0;
    let max = Math.max(...sides);
    
    for (let i = 0; i < sides.length; i++) {
        sum += sides[i];
    }
    
    if (sum - max <= max) {
        answer = 2;
    } else {
        answer = 1;
    }
    
    return answer;
}