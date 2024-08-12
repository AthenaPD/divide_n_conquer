function findRotationCount(arr) {
    let leftIdx = 0;
    let rightIdx = arr.length - 1;
    let idx = 0;

    while (leftIdx <= rightIdx) {
        let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
        let middleVal = arr[middleIdx];

        if (middleVal >= arr[0]) {
            leftIdx = middleIdx + 1;
        } else {
            idx = middleIdx;
            rightIdx = middleIdx - 1;
        }
    }

    return idx;
}

// module.exports = findRotationCount