/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow 登录
 */

import React, {Component} from 'react';
import ScrollableTabView, {DefaultTabBar} from 'react-native-scrollable-tab-view';
import {
    StyleSheet,
    Dimensions
} from 'react-native';
import PasswordLoginView from '../mine/PasswordLoginView';
import MobileLoginView from '../mine/MobileLoginView';

const {width, height} = Dimensions.get('window');

export default class LoginPage extends Component {
    render() {
        return (
            <ScrollableTabView
                style={styles.container}
                renderTabBar={() => <DefaultTabBar />}
                tabBarUnderlineStyle={styles.lineStyle}
                tabBarActiveTextColor='#06C1AE'>

                <PasswordLoginView style={styles.textStyle} tabLabel='账号密码登录' {...this.props}/>
                <MobileLoginView style={styles.textStyle} tabLabel='手机验证登录' {...this.props}/>

            </ScrollableTabView>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20
    },
    lineStyle: {
        width: width / 2,
        height: 2,
        backgroundColor: '#06C1AE',
    },
    textStyle: {
        flex: 1,
        fontSize: 20,
        marginTop: 20,
        textAlign: 'center',
    },

});

