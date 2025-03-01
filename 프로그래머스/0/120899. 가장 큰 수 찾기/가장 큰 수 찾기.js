function solution(array) {
    var answer = [];
    var max = Math.max(...array);
    var index = array.indexOf(max);
    answer.push(max);
    answer.push(index);
    return answer;
}