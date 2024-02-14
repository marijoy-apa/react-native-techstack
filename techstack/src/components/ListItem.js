import React, { Component } from "react";
import { CardSection } from "./common";
import { Text, 
    TouchableWithoutFeedback,
     View, 
     LayoutAnimation,
    } from "react-native";
import * as actions from '../actions'
import { connect } from 'react-redux'

class ListItem extends Component {
    componentWillUpdate(){
        LayoutAnimation.easeInEaseOut()
    }
    renderDescription() {
        const { library, expanded } = this.props;
        if (expanded) {
            return (<CardSection>
                <Text style={{flex: 1}}>{library.description}</Text>
            </CardSection>)
        }
        return null;
    }

    render() {
        const { id, title } = this.props.library;
        console.log(this.props)
        return (
            <TouchableWithoutFeedback onPress={() => {
                console.log("touchable opacith id", id)
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
    const expanded = state.selectedLibraryId === ownProps.library.id;
    return { expanded };

}

export default connect(mapStateToProps, actions)(ListItem);