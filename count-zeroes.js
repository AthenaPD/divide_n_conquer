function countZeroes(arr) {
  let leftIdx = 0;
  let rightIdx = arr.length - 1;

  while (leftIdx < rightIdx) {
    let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
    let middleVal = arr[middleIdx];
    let nextVal = arr[middleIdx + 1]

    if (middleVal == 1 && nextVal == 1) {
        leftIdx = middleIdx + 1;
    }else if (middleVal == 1 && nextVal == 0) {
        return arr.length - middleIdx - 1;
    }else {
        // middleVal == 0
        rightIdx = middleIdx;
    }
  }

//   leftIdx == rightIdx
  if (arr[leftIdx] == 0) {
    return arr.length
  }else {
    // ie. arr[leftIdx] == 1
    return 0
  }
}

// module.exports = countZeroes