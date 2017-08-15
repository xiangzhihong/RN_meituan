/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow 团购详情
 */

import React, { Component } from 'react';
import { View, Dimensions, StyleSheet, Image } from 'react-native';

import SpacingView from '../component/SpacingView'
import { Text16, Text14, Paragraph, HeadingBig } from '../component/Text'
import Separator from '../component/Separator'
import Button from '../component/RNButton'

const { width } = Dimensions.get('window');


export default class GroupDetailPage extends Component {

    render() {
        return (
            <View style={styles.container}>
                {this.renderHeader()}
            </View>
        )
    }

    renderHeader() {
        let imageUrl='https://p1.meituan.net/deal/57591d559e62ca048f750bdeb1942d5754374.jpg';
        return (
            <View>
                <View>
                    <Image style={styles.banner} source={{ uri: imageUrl}} />

                    <View style={styles.topContainer}>
                        <Text16 style={{ color: '#06C1AE' }}>￥</Text16>
                        <HeadingBig style={{ marginBottom: -8 }}>38.5</HeadingBig>
                        <Paragraph style={{ marginLeft: 10 }}>门市价：￥{(38.5 * 1.1).toFixed(0)}</Paragraph>
                        <View style={{ flex: 1 }} />
                        <Button title='立即抢购' style={{ color: 'white', fontSize: 18 }} containerStyle={styles.buyButton}
                        />
                    </View>
                </View>
                <Separator />
                <View>
                    <View style={styles.tagContainer}>
                        <Image style={{ width: 20, height: 20 }} source={require('../images/icon_deal_anytime_refund.png')} />
                        <Paragraph style={{ color: '#89B24F' }}>  随时退</Paragraph>
                        <View style={{ flex: 1 }} />
                        <Paragraph>已售{1234}</Paragraph>
                    </View>
                </View>
                <SpacingView />
                <View style={styles.tipHeader}>
                    <Text14>看了本团购的用户还看了</Text14>
                </View>
            </View>
        )
    }


}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    banner: {
        width: width,
        height: width * 0.5
    },
    topContainer: {
        padding: 10,
        flexDirection: 'row',
        alignItems: 'flex-end',
    },
    buyButton: {
        backgroundColor: '#fc9e28',
        width: 94,
        height: 36,
        borderRadius: 7,
    },
    tagContainer: {
        flexDirection: 'row',
        padding: 10,
        alignItems: 'center'
    },
    tipHeader: {
        height: 35,
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#e9e9e9',
        paddingVertical: 8,
        paddingLeft: 20,
        backgroundColor: 'white'
    }
});

