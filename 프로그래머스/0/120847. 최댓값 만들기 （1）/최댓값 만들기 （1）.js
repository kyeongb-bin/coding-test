function solution(numbers) {
    let sort = numbers.sort(
        function (a, b) { 
            return b - a
        }
    );
    return sort[0] * sort[1];
}