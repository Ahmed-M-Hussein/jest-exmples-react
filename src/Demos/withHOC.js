import React, {Component} from 'react';
import { View } from 'react-native';





function withHOC(WrapperComponent) {

    return class componentName extends Component {

        state = {
            data :[1, 2, 3]
        }

        addNewElement = () => {
            const { data } = this.state
            this.setState({ data: [...data, data.length + 1] })
        }

        render() {
            return (
               <WrapperComponent data={this.state.data}/>
            )
        }
    }
}
export default withHOC






