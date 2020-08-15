import React from "react";
import { create, act } from "react-test-renderer";
import { Button, Text } from "react-native";
import DemoFunctionalComponent from "../Demos/DemoFunctionalComponent";

describe("Test Class Component", () => {
  it("renders name Ahmed correctly", () => {
    const tree = create(<DemoFunctionalComponent name="Ahmed" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("test  inside DemoComponent", () => {
    let wrapper;
    act(() => {
      wrapper = create(<DemoFunctionalComponent />);
    });

    // expect(wrapper).toMatchSnapshot();

    act(() => {
      wrapper.update(<DemoFunctionalComponent name="Ahmed" />);
    });

    // expect(wrapper).toMatchSnapshot();

    act(() => {
      wrapper.update(<DemoFunctionalComponent name="Mohamed" />);
    });

    expect(wrapper).toMatchSnapshot();
  });
  it("call onPress correctly", () => {
    let wrapper;
    act(() => {
      wrapper = create(<DemoFunctionalComponent name="Ahmed" />);
    });
    const instance = wrapper.root;
    const button = instance.findByType(Button);
    const texts = instance.findAllByType(Text);
    act(() => button.props.onPress());
    act(() => button.props.onPress());
    expect(texts[1].props.children[1]).toBe(2);
  });

  it("unmount correctly", () => {
    const onUnmount = jest.fn();
    let wrapper;
    act(() => {
      wrapper = create(
        <DemoFunctionalComponent name="Ahmed" onUnmount={onUnmount} />
      );
    });

    act(() => {
      wrapper.unmount();
    });
    expect(onUnmount).toHaveBeenCalled();
  });
});
