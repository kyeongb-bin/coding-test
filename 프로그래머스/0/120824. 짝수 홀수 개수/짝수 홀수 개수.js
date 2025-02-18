function solution(num_list) {
    var answer = [];
    var oddCount = 0;
    var evenCount = 0;
    for (var i = 0; i < num_list.length; i++) {
        if ((num_list[i] % 2) === 0) {
            evenCount++;
        } else {
            oddCount++;
        }
    }
    answer.push(evenCount);
    answer.push(oddCount);
    return answer;
}