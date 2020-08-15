import React from "react";
import { View } from "react-native";
import { create, act } from "react-test-renderer";
import { isEqual } from "lodash";
import withHOC from "../Demos/withHOC";

const DammyComp = (props) => <View></View>;
describe("Test HOC", () => {
  it("Test state data", () => {
    const HOCclass = withHOC(DammyComp);
    const wrapper = create(<HOCclass />);
    const instance = wrapper.getInstance();
    expect(isEqual(instance.state.data, [1, 2, 3])).toBeTruthy();
  });

  it("Test function inside HOC", () => {
    const HOCclass = withHOC(DammyComp);
    const wrapper = create(<HOCclass />);
    const instance = wrapper.getInstance();
    instance.addNewElement();
    expect(instance.state.data).toEqual([1, 2, 3, 4]);
  });
});
