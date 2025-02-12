function solution(angle) {
    var answer = 0;
    
    if (angle > 0 && angle < 90) {
        answer = 1;
    } else if (angle === 90) {
        answer = 2;
    } else if (angle > 90 && angle < 180) {
        answer = 3;
    } else if (angle === 180) {
        answer = 4;
    } else {
        console.log('존재하지 않는 각도');
    }

    return answer;
}