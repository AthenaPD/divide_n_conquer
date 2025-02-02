// const findFloor = require("./find-floor")

describe("#findFloor", function(){
  it("returns the floor or -1", function(){
    expect(findFloor([1, 2, 8, 10, 10, 12, 19], 5)).toBe(2) // 2
    expect(findFloor([1, 2, 8, 10, 10, 12, 19], 20)).toBe(19) // 19
    expect(findFloor([1, 2, 8, 10, 10, 12, 19], 0)).toBe(-1) // -1
    expect(findFloor([20], 12)).toBe(-1) // -1
    expect(findFloor([9], 18)).toBe(9) // 9
    expect(findFloor([1, 2, 8, 10, 10, 12, 19], 10)).toBe(10) // 10
    expect(findFloor([1, 2, 8, 10, 10, 12, 19, 20], 10)).toBe(10) // 10
    expect(findFloor([1, 2, 8, 10, 10, 12, 19, 20, 25, 63], 21)).toBe(20) // 10
  })
})