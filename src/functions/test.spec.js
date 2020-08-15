import React from "react";
import { create , act} from "react-test-renderer";
import DemoComponent from "../Demos/DemoComponent";
import { iteratee } from "lodash";
describe("My Testing Scope", () => {
  //   it("add 2 numbers 1, 4", () => {
  //     expect(add(1, 4)).toBe(5);
  //   });
  //   it("test add function without params", () => {
  //     expect(add()).toBe(NaN);
  //   });
  //   it("test add with negative number -2 4", () => {
  //     expect(add(-2,4)).toBe(2);
  //   });
  //   it("test add with string parms 1 4", () => {
  //     expect(add("1","4")).toBe(5);
  //   });
  //   it("test add with object parms ", () => {
  //     expect(add({},"4")).toBe(NaN);
  //   });
  //   it("test add with object parms ", () => {
  //     expect(add({},{})).toBe(NaN);
  //   });
  //   it("test add with 2 params 1 ,4  ", (done) => {
  //     function callback(result) {
  //       try {
  //         expect(result).toBe(5);
  //         done();
  //       } catch (error) {
  //         done(error);
  //       }
  //     }
  //     add(1, 4, callback);
  //   });

  //   it("test add with object parms ", () => {
  //     return add(1, 4).then((result) => {
  //       expect(result).toBe(5);
  //     });
  //   });

  //   it("test add with object parms ", async () => {

  //    const result = await add(1, 4)
  //    expect(result).toBe(5)
  //   });

  it("Test DemoComponent empty props", () => {
    const wrapper = create(<DemoComponent />);

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it("Test DemoComponent empty props", () => {
    const wrapper = create(<DemoComponent />);
    const instance = wrapper.getInstance();

    instance.handlePressBtn();
    instance.handlePressBtn();
    instance.handlePressBtn();

    expect(instance.state.counter).toBe(3);
  });


  it("Test DemoComponent empty props", () => {
    
    let wrapper 

    act(()=>{

        wrapper= create(<DemoComponent />);
    })
   

    act(()=>{

        wrapper.update(<DemoComponent name="Ahmed" />)
    })

    act(()=>{

        wrapper.update(<DemoComponent name="Mohamed" />)
    })

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

});



// function add  (x,y){

//     return x+y
// }



// z=1
// function addx  (x,y){

//     return x+y+z
// }
