function findFloor(arr, val) {

    if (val < arr[0]) return -1;

    let leftIdx = 0;
    let rightIdx = arr.length - 1;

    while (leftIdx < rightIdx) {
        let middleIdx = Math.ceil((leftIdx + rightIdx) / 2);
        let middleVal = arr[middleIdx];

        if (middleVal > val) {
            rightIdx = middleIdx - 1;
        }else if (middleVal == val) {
            return middleVal
        }else {
            leftIdx = middleIdx;
        }
    }

    return arr[leftIdx]
}

// module.exports = findFloor