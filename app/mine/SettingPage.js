/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, {Component} from 'react';
import {
    Text,
    StyleSheet,
    Dimensions,
    TouchableOpacity,
    View
} from 'react-native';
import NavigationBar from '../component/NavigationBar'
import ViewUtils from '../util/ViewUtils'
import ItemCell from "../component/ItemCell";
import LoginPage from "../mine/LoginPage";
import UserinfoPage from "../mine/UserinfoPage";
import SpacingView from "../component/SpacingView";
import Separator from "../component/Separator";

const {width} = Dimensions.get('window');

export default class SettingPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            canGoBack: false,
        }
    }

    onBackPress(e) {
        this.props.navigator.pop();
    }

    userInfo() {
        this.props.navigator.push({
            component: UserinfoPage,
        })
    }

    logOut() {
        this.props.navigator.push({
            component: LoginPage,
        })
    }

    renderView() {
        return (
            <View style={{flex:1,backgroundColor:'#f3f3f3'}}>
                <TouchableOpacity onPress={this.userInfo.bind(this)}>
                <ItemCell title='个人信息' />
                </TouchableOpacity>
                <Separator/>
                <ItemCell title='账号与安全' subtitle='换手机改密码'/>
                <SpacingView/>
                <ItemCell title='通用' />
                <SpacingView/>
                <TouchableOpacity style={styles.styleSubmit} onPress={this.logOut.bind(this)}>
                    <Text >退出账号 </Text>
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
                    title='设置'
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
    styleSubmit: {
        marginLeft: 15,
        marginRight: 15,
        backgroundColor: '#ffffff',
        height: 40,
        borderRadius: 5,
        borderColor:'#e9e9e9',
        justifyContent: 'center',
        alignItems: 'center',

    },
    buyButton: {
        backgroundColor: '#ffffff',
        width: 94,
        height: 36,
        borderRadius: 3,
    },

});

