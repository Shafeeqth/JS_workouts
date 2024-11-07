function reverseArray(arr) {
    const tempArr = [...arr]
    for(let i = 0,j = tempArr.length-1; i < j ; i++, j --) {
        [tempArr[i], tempArr[j]] = [tempArr[j], tempArr[i]];
    }
    return tempArr;
}

const ar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];
console.log(ar)
console.log(reverseArray(ar));
