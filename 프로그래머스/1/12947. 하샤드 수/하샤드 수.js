function solution(x) {
    var answer = true;
    let s = String(x);
    let sum = 0;
    
    for (let i = 0; i < s.length; i++) {
        sum += s[i] * 1;
    }
    return x % sum === 0 ? true : false;
}