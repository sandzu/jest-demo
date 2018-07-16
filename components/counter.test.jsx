import React from 'react';
import { shallow } from "enzyme";
import Counter from "./counter";
import Foo from  './foo';
import renderer from 'react-test-renderer';
// ^for snapshot testing

describe("Counter", ()=>{
  it("starts with a count of 0", () => {
    let container = shallow(<Counter/>);
    let counterCount = container.state().count;
    expect(counterCount).toBe(0);
  });

  it("state.count increments on button click", () => {
    let container = shallow(<Counter/>);
    container.find("button").simulate("click");
    let counterCount = container.state().count;
    expect(counterCount).toBe(1);
  });

  it("renders 'count' foos", () =>{
    let container = shallow(<Counter/>);
    expect(container.find("Foo").length).toBe(0);
    container.find("button").simulate("click");

    expect(container.find("Foo").length).toBe(1);
    // find() identifies components by name, not text content
  });

  it('matches the initial snaptshot', ()=>{
    const component =  renderer.create(<Counter/>);
    expect(component.toJSON()).toMatchSnapshot();
    component.getInstance().addOne();
    component.getInstance().addOne();
    expect(component.toJSON()).toMatchSnapshot();

  });
});

// still need to configure enzyme with the right container
// see configure.enzyme.js and jest.config.js, both need to be in the root
