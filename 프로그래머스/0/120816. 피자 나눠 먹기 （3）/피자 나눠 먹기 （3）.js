function solution(slice, n) {
    var min = 0;
    var count = 0;
    
    while (min < n) {
        min += slice;
        count++;
    }
    
    return count;
}