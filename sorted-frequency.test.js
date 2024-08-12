// const sortedFrequency = require("./sorted-frequency")

describe("#sortedFrequency", function(){
  it("returns the frequency", function(){
    expect(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 2)).toBe(4)
    expect(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 3)).toBe(1)
    expect(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 1)).toBe(2)
    expect(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 4)).toBe(-1)
    expect(sortedFrequency([1, 1, 2, 2, 2, 2, 3, 5], 4)).toBe(-1)
    expect(sortedFrequency([0, 1, 1, 2, 2, 2, 2, 3, 5], 0)).toBe(1)
  })
})

describe("#findFirstIdx", function(){
  it("returns the first index where the value specified appears in an array", function(){
    expect(findFirst([1, 1, 2, 2, 2, 2, 3], 2)).toBe(2)
    expect(findFirst([1, 1, 2, 2, 2, 2, 3], 3)).toBe(6)
    expect(findFirst([1, 1, 2, 2, 2, 2, 3], 1)).toBe(0)
    expect(findFirst([1, 1, 2, 2, 2, 2, 3], 4)).toBe(-1)
  })
})

describe("#findLastIdx", function(){
  it("returns the last index where the value specified appears in an array", function(){
    expect(findLast([1, 1, 2, 2, 2, 2, 3], 2)).toBe(5)
    expect(findLast([1, 1, 2, 2, 2, 2, 3], 3)).toBe(6)
    expect(findLast([1, 1, 2, 2, 2, 2, 3], 1)).toBe(1)
    expect(findLast([1, 1, 2, 2, 2, 2, 3], 4)).toBe(-1)
  })
})
