function solution(arr) {
    
    let copyArr = arr;
    let minIndex = copyArr.indexOf(Math.min(...arr));
    
    copyArr.splice(minIndex, 1);
    
    return copyArr.length === 0 ? [-1] : copyArr;;
}