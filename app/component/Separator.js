/**
 * @flow 分割线
 */

import React, { Component } from 'react';
import { View, Dimensions, StyleSheet } from 'react-native';

const { width } = Dimensions.get('window');

export default class Separator extends Component {
    render() {
        return (
            <View style={[styles.line, this.props.style]} />
        );
    }
}

const styles = StyleSheet.create({
    line: {
        width:width,
        height: 1,
        backgroundColor: '#e9e9e9',
    },
});

