function solution(num_str) {
    return num_str.split('').map(item => Number(item)).reduce((acc, num) => acc + num, 0);
}