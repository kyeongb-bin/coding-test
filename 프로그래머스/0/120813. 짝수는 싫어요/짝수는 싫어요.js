function solution(n) {
    var answer = [];
    for (var i = 0; i <= n; i++) {
        if (i % 2) {
            answer.push(i);
        }
    }
    return answer;
}