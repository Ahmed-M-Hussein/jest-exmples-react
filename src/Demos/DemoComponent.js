import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'

export default class DemoComponent extends Component {

    state = {
        counter: 0,
        prevName: null
    }

    handlePressBtn = () => {
        this.setState({ counter: this.state.counter + 1 })
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.name && prevProps.name!=this.state.prevName && prevProps.name!==this.props.name ) {
            this.setState({ prevName: prevProps.name })
        }
    }
    render() {
        const { name } = this.props
        const { counter, prevName } = this.state


        return (
            <View>
                {prevName && <Text> {prevName} has logged out </Text>}
                <Text> Welcom {name || "Guest"} </Text>
                <Text> You Clicked this Btn {counter} times </Text>
                <Button onPress={this.handlePressBtn} title="Press Me"/>

            </View>
        )
    }
}