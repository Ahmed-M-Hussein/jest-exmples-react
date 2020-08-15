import React from "react";
import { create, act } from "react-test-renderer";
import DemoComponent from "../Demos/DemoComponent";

describe("Test Class Component", () => {
  it("renders name Ahmed correctly", () => {
    const tree = create(<DemoComponent name="Ahmed" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders name Guest correctly", () => {
    const tree = create(<DemoComponent />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("test function handlePressBtn inside DemoComponent", () => {
    const wrapper = create(<DemoComponent />);
    const instance = wrapper.getInstance();
    instance.handlePressBtn();
    expect(instance.state.counter).toBe(1);
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it("test function handlePressBtn 2 times inside DemoComponent", () => {
    const wrapper = create(<DemoComponent />);
    const instance = wrapper.getInstance();

    instance.handlePressBtn();
    instance.handlePressBtn();
    expect(instance.state.counter).toBe(2);
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it("test  inside DemoComponent", () => {
    let wrapper;
    act(() => {
      wrapper = create(<DemoComponent />);
    });

    expect(wrapper).toMatchSnapshot();

    act(() => {
      wrapper.update(<DemoComponent name="Ahmed" />);
    });

    expect(wrapper).toMatchSnapshot();

    act(() => {
      wrapper.update(<DemoComponent name="Mohamed" />);
    });

    expect(wrapper).toMatchSnapshot();
  });
});
