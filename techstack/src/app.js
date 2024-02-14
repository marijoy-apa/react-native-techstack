import React from "react";
import { View } from 'react-native';
import { Provider } from 'react-redux';
// import {  } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import reducers from "./reducers";
import { Header } from "./components/common";
import LibraryList from "./components/LibraryList";

const App = () => {
    return (
        <Provider store={configureStore({ reducer: reducers })}>
            <View style={{flex: 1}}>
                <Header headerText="TechStack" />
                <LibraryList />

            </View>
        </Provider>

    )
}

export default App;