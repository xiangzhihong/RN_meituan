/**
 * https://github.com/facebook/react-native
 * @flow 空视图页面
 */

import React, { Component } from 'react';
import { StyleSheet,View, Image, Text,TouchableOpacity,Dimensions} from 'react-native';

const { width } = Dimensions.get('window');

export default class EmptyView extends Component {

    render() {
        return (
            <View style={styles.container}>
                <Image style={styles.orderImage} source={require('../images/order_empty_default.png')}/>
                <Text style={styles.text}>您还没有相关订单</Text>
                <TouchableOpacity style={styles.styleSubmit} >
                    <Text style={styles.submit}>
                        随便逛逛
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        width:width,
        justifyContent: 'center',
        alignItems: 'center',

    },
    orderImage: {
        width:width/4,
        height:width/4
    },
    text: {
        fontSize:14,
        marginTop:10,
        color:'#999999'
    },
    styleSubmit: {
        marginTop: 15,
        width:120,
        height: 38,
        borderRadius: 5,
        backgroundColor: '#06C1AE',
        alignItems: 'center',
        justifyContent:'center',
    },
    submit: {
        color: '#ffffff',
        fontSize:18,
    },
});

