// const findRotatedIndex = require("./find-rotated-index")

describe("#findRotatedIndex", function(){
  it("returns the correct index", function(){
    expect(findRotatedIndex([3, 4, 1, 2], 4)).toBe(1)
    expect(findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 8)).toBe(2)
    expect(findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 3)).toBe(6)
    expect(findRotatedIndex([37, 44, 66, 102, 10, 22], 14)).toBe(-1)
    expect(findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 12)).toBe(-1)
  })
})

describe("#findSmallestdIndex", function(){
  it("returns the index of the smallest value", function(){
    expect(findSmallestIdx([3, 4, 1, 2])).toBe(2)    
    expect(findSmallestIdx([9, 0, 6])).toBe(1)
    expect(findSmallestIdx([6, 7, 8, 9, 1, 2, 3, 4])).toBe(4)
    expect(findSmallestIdx([6, 7, 8, 1, 2, 3, 4])).toBe(3)
    expect(findSmallestIdx([6, 1, 2, 3, 4])).toBe(1)
    expect(findSmallestIdx([37, 44, 66, 102, 10, 22])).toBe(4)
    expect(findSmallestIdx([6, 9, 1, 2, 3, 4, 5], 12)).toBe(2)
  })
})