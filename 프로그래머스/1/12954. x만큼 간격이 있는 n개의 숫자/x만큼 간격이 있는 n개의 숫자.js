function solution(x, n) {
    var answer = [];
    var increase = x;
    for (var i = 0; i < n; i++) {
        answer.push(increase);
        increase += x;
    }
    return answer;
}