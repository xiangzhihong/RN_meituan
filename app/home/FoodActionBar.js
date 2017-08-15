/**
 * https://github.com/facebook/react-native
 * @flow 首页的标题栏
 */

import React, {Component} from 'react';
import {Platform, View, Dimensions, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import px2dp from '../util/Utils'

const isIOS = Platform.OS == "ios"
const {width, height} = Dimensions.get('window')
const headH = px2dp(isIOS ? 64 : 44)

export default  class FoodActionBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showPop: false,
        }
    }

    onBackPress(e) {
        this.props.navigator.pop();
    }

    renderHeader() {
        return (
            <View style={styles.headerStyle}>
                <TouchableOpacity style={styles.action} onPress={this.onBackPress.bind(this)}>
                    <Image style={styles.scanIcon}
                        source={require('../images/ic_back_green.png')}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.searchBar}>
                    <Image source={require('../images/ic_search.png')} style={styles.iconStyle}/>
                    <Text style={{fontSize: 13, color: "#666", marginLeft: 5}}>输入商家名、品类和商圈</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.action} onPress={() => { this.setState({ showPop: !this.state.showPop }) }}>
                    <Image style={styles.scanIcon}
                           source={require('../images/icon_address.png')}/>
                </TouchableOpacity>
            </View>
        )
    }

    render() {
        return (
            <View>
                {this.renderHeader()}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    headerStyle: {
        backgroundColor: "#ffffff",
        height: headH,
        paddingTop: px2dp(isIOS ? 20 : 0),
        flexDirection: 'row',
        alignItems: 'center',
    },
    searchBar: {
        flex:1,
        height: 30,
        borderRadius: 19,
        backgroundColor:'#e9e9e9',
        marginLeft: 10,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        alignSelf: 'center',
        paddingLeft: 10,
    },
    text: {
        fontSize: 16,
        color: '#ffffff',
        justifyContent: 'center',
    },
    iconStyle: {
        width: 22,
        height: 22,
    },
    action: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft:10,
        marginRight:10
    },
    scanIcon: {
        width: 28,
        height: 28,
        alignItems: 'center',
    },
    scanText: {
        fontSize: 14,
        color: '#ffffff',
        justifyContent: 'center',
        alignItems: 'center',
    },
});

