/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow 模仿登录界面
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    Dimensions,
    StyleSheet,
    TouchableOpacity,
    Text,
    TextInput,
    View
} from 'react-native';
import TimerButton from '../component/TimerButton'
import Toast, {DURATION} from '../component/ToastUtil'
import MainScreen from '../main/MainScreen'

const {width, height} = Dimensions.get('window')

export default class MobileLoginView extends Component {

    login() {
        this.props.navigator.push({
            component: MainScreen,
        })
    }

    requestSMSCode(shouldStart){
        Toast.show('验证码已发送')
    }

    render() {
        return (
            <View style={styles.container}>
                <Toast ref="toast"/>

                <TextInput
                    style={styles.styleUserName}
                    placeholder='请输入手机号'
                    underlineColorAndroid={'transparent'}
                    numberOfLines={1}
                    autoFocus={true}
                />
                <View style={styles.styleLine}/>

                <View style={styles.stylePassContainer}>
                <TextInput
                    style={styles.stylePassWord}
                    placeholder='请输入验证码'
                    numberOfLines={1}
                    underlineColorAndroid={'transparent'}
                    secureTextEntry={true}/>
                    <View style={styles.styleCodeView}>
                        <TimerButton
                                     style={{width: width*0.2,marginRight: 10}}
                                     timerCount={60}
                                     textStyle={{color: '#06C1AE'}}
                                     />
                    </View>
                </View>
                <TouchableOpacity style={styles.styleSubmit} onPress={this.login.bind(this)}>
                    <Text style={styles.submit}>
                        登录
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e8e8e8',
    },
    styleUserName: {
        backgroundColor: '#ffffff',
        marginTop: 10,
        height: 40,
        width: width,
        textAlign: 'left',
        paddingLeft: 10,
    },
    styleLine: {
        backgroundColor: '#f4f4f4',
        height: 1,
        width: width,
    },
    stylePassContainer: {
        backgroundColor: '#ffffff',
        height: 40,
        width: width,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    stylePassWord: {
        backgroundColor: '#ffffff',
        height: 40,
        width: width*0.75,
        textAlign: 'left',
        paddingLeft: 10,
    },
    styleText: {
        fontSize: 14,
        marginTop: 10,
        color: '#06C1AE',
        textAlign: 'right',
    },
    styleCode: {
        fontSize: 12,
        color: '#06C1AE',
        textAlign: 'center',
    },
    styleCodeView: {
        height: 28,
        width: width*0.22,
        borderColor: '#06C1AE',
        borderWidth: 1,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
     styleSubmit: {
        marginTop: 15,
        marginLeft: 10,
        marginRight: 10,
        backgroundColor: '#06C1AE',
        height: 38,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    submit: {
        color: '#ffffff',
        fontSize:18
    },
});

