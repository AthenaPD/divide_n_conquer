function findRotatedIndex(arr, val) {
    if (val == arr[0]) {
        return 0;
    } else {
        let jumpedIdx = findSmallestIdx(arr);
        if (val < arr[0]) {
            const smallerArray = arr.slice(jumpedIdx);
            const idx = findIdx(smallerArray, val);
            return idx == -1 ? idx : jumpedIdx + idx;
        } else {
            const largerArray = arr.slice(0, jumpedIdx);
            return findIdx(largerArray, val);
        }
    }
}

function findSmallestIdx(arr) {
    // Find the index of the smallest value in the array
    let leftIdx = 0;
    let rightIdx = arr.length - 1;
    let idx = -1;

    while (leftIdx < rightIdx) {
        let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
        let middleVal = arr[middleIdx];

        if (middleVal >= arr[0]) {
            leftIdx = middleIdx + 1;
        } else {
            idx = middleIdx;
            rightIdx = middleIdx;
        }
    }

    return idx;
}

function findIdx(arr, val) {
    let leftIdx = 0;
    let rightIdx = arr.length - 1;

    while (leftIdx <= rightIdx) {
        let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
        let middleVal = arr[middleIdx];

        if (middleVal == val) {
            return middleIdx;
        } else if (middleVal > val) {
            rightIdx = middleIdx - 1;
        } else {
            leftIdx = middleIdx + 1;
        }
    }

    return -1;
}
// module.exports = findRotatedIndex