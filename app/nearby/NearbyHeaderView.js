/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { View, Dimensions, StyleSheet, TouchableOpacity } from 'react-native';
import {Paragraph } from '../component/Text'

const { width } = Dimensions.get('window');

export default class NearbyHeaderView extends Component {

    static defaultProps = {
        onSelected: () => { }
    }
    render() {
        let items = []
        for (let i = 0; i < this.props.titles.length; i++) {
            let item = (
                <TouchableOpacity style={[{ backgroundColor: this.props.selectedIndex == i ? '#FE566D' : 'white' }, styles.item]} key={i} onPress={() => this.props.onSelected(i)}>
                    <Paragraph style={{ color: this.props.selectedIndex == i ? 'white' : '#555555' }}>{this.props.titles[i]}</Paragraph>
                </TouchableOpacity>
            )
            items.push(item)
        }

        return (
            <View style={styles.container}>
                {items}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    item: {
        width: width / 4 - 10,
        marginLeft: 8,
        marginTop: 5,
        marginBottom: 5,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
        borderWidth: 1,
        borderColor: '#e9e9e9',
    },
});

