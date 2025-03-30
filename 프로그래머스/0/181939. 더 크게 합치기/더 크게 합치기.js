function solution(a, b) {
    
    let ab = (a.toString() + b.toString()) * 1;
    let ba = (b.toString() + a.toString()) * 1;
    
    return ab < ba ? ba : ab;
}