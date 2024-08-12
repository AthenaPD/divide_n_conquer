function sortedFrequency(arr, val) {

    if (val < arr[0] || val > arr[-1]) return -1

    let firstIdx = findFirst(arr, val);
    if (firstIdx == -1) return -1;
    let lastIdx = findLast(arr, val);

    return lastIdx - firstIdx + 1
}

function findFirst(arr, val) {
    let leftIdx = 0;
    let rightIdx = arr.length - 1;
    let firstIdx = -1;

    while (leftIdx <= rightIdx) {
        middleIdx = Math.ceil((leftIdx + rightIdx) / 2);
        middleVal = arr[middleIdx];

        if (middleVal == val) {
            firstIdx = middleIdx;
            rightIdx = middleIdx - 1;
        } else if (middleVal > val) {
            rightIdx = middleIdx - 1;
        } else {
            leftIdx = middleIdx + 1;
        }
    }

    return firstIdx;
}

function findLast(arr, val) {
    let leftIdx = 0;
    let rightIdx = arr.length - 1;
    let lastIdx = -1;

    while (leftIdx <= rightIdx) {
        middleIdx = Math.floor((leftIdx + rightIdx) / 2);
        middleVal = arr[middleIdx];

        if (middleVal == val) {
            lastIdx = middleIdx;
            leftIdx = middleIdx + 1;
        } else if (middleVal > val) {
            rightIdx = middleIdx - 1;
        } else {
            leftIdx = middleIdx + 1;
        }
    }

    return lastIdx;
}

// module.exports = sortedFrequency