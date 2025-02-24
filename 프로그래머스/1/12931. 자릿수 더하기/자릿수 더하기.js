function solution(n) {
    var answer = 0;
    var string_n = String(n);
    
    for (var i = 0; i < string_n.length; i++) {
        answer += Number(string_n[i]);
    }
    return answer;
}