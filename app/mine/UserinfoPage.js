/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * 个人信息
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    TouchableOpacity,
    Dimensions,
    Image,
    View
} from 'react-native';

import NavigationBar from '../component/NavigationBar'
import ViewUtils from '../util/ViewUtils'
import ItemCell from "../component/ItemCell";
import AddressPage from "../mine/AddressPage";
import SpacingView from "../component/SpacingView";
import Separator from "../component/Separator";
import { Text16, Text14, Paragraph } from '../component/Text'
import px2dp from "../util/Utils";

const {width} = Dimensions.get('window');

export default class UserinfoPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            canGoBack: false,
        }
    }

    onBackPress(e) {
        this.props.navigator.pop();
    }

    address() {
        this.props.navigator.push({
            component: AddressPage,
        })
    }

    renderView() {
        return (
            <View style={{flex:1,backgroundColor:'#f3f3f3'}}>

                <View style={[styles.avertStyle]}>
                    <Text14>头像</Text14>
                    <View style={{ flex: 1, backgroundColor: 'blue' }} />
                    <Image source={require('../images/ic_avatar_default.png')} style={{width: px2dp(46), height: px2dp(46), borderRadius: px2dp(23)}}/>
                    <Image style={styles.arrow} source={require('../images/icon_arrow.png')} />
                </View>
                <Separator/>
                <ItemCell title='昵称' subtitle='shat'/>
                <Separator/>
                <ItemCell title='生日'/>
                <Separator/>
                <TouchableOpacity onPress={this.address.bind(this)}>
                <ItemCell title='收货地址' subtitle='添加/修改'/>
                </TouchableOpacity>
                </View>
        )
    }

    render() {
        return (
            <View style={styles.flexStyle}>
                <NavigationBar
                    navigator={this.props.navigator}
                    style={{backgroundColor:'#ffffff'}}
                    popEnabled={false}
                    leftButton={ViewUtils.getLeftBlackButton(() => this.onBackPress())}
                    title='个人信息'
                    titleColor='#000000'
                />
                <SpacingView/>
                {this.renderView()}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    flexStyle: {
        flex: 1,
        width: width,
        flexDirection: 'column',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    avertStyle: {
        paddingTop: 5,
        paddingBottom:5,
        backgroundColor: '#ffffff',
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 15,
        paddingRight: 10,
    },
    arrow: {
        width: 14,
        height: 14,
        marginLeft: 5,
    }

});

