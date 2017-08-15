/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow 订单
 */

import React, { Component } from 'react';
import { Text, StyleSheet, Image,Dimensions, TouchableOpacity } from 'react-native';
const { width } = Dimensions.get('window');

export default class OrderMenuItem extends Component {
    render() {
        return (
            <TouchableOpacity style={styles.container}
                onPress={this.props.onPress}>
                <Image source={this.props.icon} resizeMode='contain' style={styles.icon} />
                <Text style={styles.text}>
                    {this.props.title}
                </Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        width: width / 4,
        height: width / 5,
    },
    text: {
        fontSize: 14,
        color: '#222222',
    },
    icon: {
        width: 30,
        height: 30,
        margin: 5,
    }
});

