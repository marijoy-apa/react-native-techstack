import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { connect } from 'react-redux'
import ListItem from './ListItem';

class LibraryList extends Component {


    renderItem({item}) {
        return <ListItem library={item} />
    //    return <Text>{item.title}</Text>
    }

    render() {
        console.log(this.props.libraries[2].title)

        return (
            // <Text>Hello</Text> 
            <FlatList
                data={this.props.libraries}
                keyExtractor={(library) => library.id}
                // renderItem={({item}) => {
                //     return <Text>{item.title}</Text>
                // }}
                renderItem={this.renderItem}


            />
        )
    }
}

const mapStateToProps = state => {
    // console.log(state)
    return { libraries: state.libraries }
}

export default connect(mapStateToProps)(LibraryList);