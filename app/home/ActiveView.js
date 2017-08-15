/**
 * https://github.com/facebook/react-native
 * @flow 运营活动
 */

import React, { Component } from 'react';
import { View, Dimensions, StyleSheet } from 'react-native';
import ActiveItem from './ActiveItem'

const { width,height } = Dimensions.get('window');

export default class ActiveView extends Component {

    render() {
        let { infos } = this.props;

        let gridItems = [];
        for (let i = 0; i < infos.length; i++) {
            let gridItem = (
                <ActiveItem info={infos[i]} key={i} onPress={() => this.props.onGridSelected(i)}/>
            )
            gridItems.push(gridItem)
        }

        return (
            <View style={styles.container}>
                {gridItems}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        width:width,
        flexDirection: 'row',
        flexWrap: 'wrap',
        borderTopWidth: 1,
        borderLeftWidth: 1,
        borderColor: '#e9e9e9'
    },
});

