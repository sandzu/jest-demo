// import sum  from "./sum";
const sum = require('./sum');

describe(sum, ()=>{
  it("adds 1 and 3 to get 3", () => {
    expect(sum(1,3)).toBe(4);
  });
});


test("Truthiness", ()=>{
  expect(false).toBeFalsy();
  expect(true).toBeTruthy();
});
