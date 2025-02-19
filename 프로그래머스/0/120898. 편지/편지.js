function solution(message) {
    var minLengthCount = 0;
    for (var i = 0; i < message.length; i++) {
        minLengthCount++;
    }
    return minLengthCount * 2;
}