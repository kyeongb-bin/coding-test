function solution(s) {
    var countP = 0;
    var countY = 0;
    var upper = s.toUpperCase();
    
    for (var i = 0; i < upper.length; i++) {
        if (upper[i] === 'P') {
            countP++;
        } else if (upper[i] === 'Y') {
            countY++;
        }
    }
    
    return (countP === countY) ? true : false;
}