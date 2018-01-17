/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Image,
    Dimensions,
    ActivityIndicator,
    StatusBar
} from 'react-native';

import MainScreen from '../main/MainScreen';

let {width, height} = Dimensions.get("window");

export default class SplashView extends Component {

    constructor(props) {
        super(props);
        this.state = {
            animating: true,//默认显示加载动画
        };
    }

    // 倒计时3秒后进入首页
    componentDidMount() {
        setTimeout(() => {
            this.props.navigator.replace({
                component: MainScreen,
            });
        }, 3000);
    }

    render() {
        return (
            <View style={styles.container}>
                <StatusBar hidden={true}/>
                <Image style={styles.splash} source={require('../images/splash.png')} resizeMode={'cover'}/>
                <ActivityIndicator
                    animating={this.state.animating}
                    style={[styles.centering, {height: 70}]}
                    size="small" />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    splash: {
        width: width,
        height: height,
    },
    centering: {
        flex: 1,
        marginTop:-height,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 8,
    },

});