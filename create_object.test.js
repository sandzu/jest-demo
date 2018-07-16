import createObj from "./create_object";

describe("createObj", () =>{
  it("['a','b'], [1,2] => {a:1, b:2}", ()=>{
    expect(createObj(['a','b'], [1,2])).toEqual({'a':1, 'b':2});
  });
});

// note: toBe checks memory address, we use toequal to check equality
