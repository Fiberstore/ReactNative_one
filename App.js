/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {Platform} from 'react-native';
import {StackNavigator} from 'react-navigation';


import Move_detial from './app/Move_detial'
import Move_list from './app/Move_list'

const App = StackNavigator({
    MoveList: {screen: Move_list},
    MoveDetial: {screen: Move_detial},
}, {
    initialRouteName: 'MoveList',
    headerMode: 'none'
});

export default App