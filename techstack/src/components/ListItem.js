import React, { Component } from "react";
import { CardSection } from "./common";
import { Text, TouchableWithoutFeedback, View } from "react-native";
import * as actions from '../actions'
import { connect } from 'react-redux'


class ListItem extends Component {

    renderDescription() {
        return (<View>
            <Text>Hello World</Text>
            <Text>{this.props.library.id}</Text>
            <Text>{this.props.selectedlibraryId}</Text>
        </View>)
        // if (this.props.library.id === this.props.selectLibraryId) {
        //     return (<Text>
        //         {this.props.library.description}
        //     </Text>)
        // }
    }

    render() {
        const { id, title } = this.props.library;

        console.log(this.props)
        return (
            <TouchableWithoutFeedback onPress={() => {
                console.log("touchable opacith id",id)
                this.props.selectLibrary(id)
            }}>
                <View>
                    <CardSection>
                        <Text
                            style={styles.titleStyle}

                        >{title}</Text>
                    </CardSection>
                    {this.renderDescription()}

                </View>
            </TouchableWithoutFeedback>
        )
    }
}

const styles = {
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15,
    }
}
const mapStateToProps = (state, ownProps) => {
    // console.log(state)
    // console.log('map to state', state.selectedlibraryId)
    // return { selectedlibraryId: state.selectedlibraryId}
    const expanded = state.selectedlibraryId === ownProps.library.id
    return {expanded}

}

export default connect(mapStateToProps, actions)(ListItem);