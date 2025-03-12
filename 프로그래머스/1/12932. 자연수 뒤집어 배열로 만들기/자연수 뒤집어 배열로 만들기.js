function solution(n) {
    let answer = [];
    let str = (n).toString();
    
    for (let i = str.length; i > 0; i--) {
        answer.push(Number(str[i - 1]));
    }
    return answer;
}