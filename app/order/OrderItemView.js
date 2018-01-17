/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    Dimensions,
    View
} from 'react-native';
import EmptyView from "../component/EmptyView";

const { width } = Dimensions.get('window');

export default class OrderItemView extends Component {

    constructor(props) {
        super(props);
        this.state = {
            canGoBack: false,
        }
    }

    render() {
        return (
            <View style={styles.flexStyle}>
             <EmptyView/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    flexStyle: {
        flex: 1,
        width:width,
    },
});

