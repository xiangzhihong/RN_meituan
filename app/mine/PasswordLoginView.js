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
    Text,
    Image,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native';
import Toast, {DURATION} from '../component/ToastUtil'

const {width, height} = Dimensions.get('window')

export default class PasswordLoginView extends Component {

    constructor(props) {
        super(props);
        this.state = {name: '',pass:''};
    }

    submit(){
        alert("您输入的用户名为："+this.state.name);
    }


    render() {
        return (
            <View style={styles.container}>

                <Toast ref="toast"/>

                <View style={styles.styleContainer}>
                    <Image style={styles.icon}
                           source={require('../images/ic_mobile.png')}/>
                    <TextInput
                        style={styles.styleUserName}
                        placeholder='请输入用户名'
                        underlineColorAndroid={'transparent'}
                        numberOfLines={1}
                        keyboardType={'numeric'}
                        autoFocus={true}
                        onChangeText={(name) => this.setState({name})}/>
                </View>
                <View style={styles.styleLine}/>

                <View style={styles.stylePassContainer}>
                    <Image style={styles.icon}
                           source={require('../images/ic_message.png')}/>
                <TextInput
                    style={styles.stylePassWord}
                    placeholder='请输入密码'
                    numberOfLines={1}
                    underlineColorAndroid={'transparent'}
                    secureTextEntry={true}
                    onChangeText={(pass) => this.setState({pass})}
                />
                </View>

                <Text style={styles.styleText} onPress={()=>{
                    this.refs.toast.show('你点击了忘记密码!',3000);
                }}>
                    忘记密码？
                </Text>

                <TouchableOpacity onPress={()=>this.submit()}>
                <View style={styles.styleSubmit}>
                    <Text style={styles.submit}>
                        登录
                    </Text>
                </View>
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
    styleContainer: {
        backgroundColor: '#ffffff',
        height: 40,
        marginTop:30,
        width: width,
        paddingLeft: 20,
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
    stylePassContainer: {
        backgroundColor: '#ffffff',
        height: 40,
        width: width,
        paddingLeft: 20,
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
    icon: {
        width: 20,
        height: 20,
        alignItems: 'center',
        alignSelf: 'center',
    },
    styleUserName: {
        backgroundColor: '#ffffff',
        height: 40,
        width: width,
        textAlign: 'left',
        paddingLeft:10,
    },
    styleLine: {
        backgroundColor: '#f4f4f4',
        height: 1,
        width: width,
    },
    stylePassWord: {
        backgroundColor: '#ffffff',
        height: 40,
        width: width,
        textAlign: 'left',
        paddingLeft:10
    },
    styleText: {
        fontSize: 16,
        marginTop: 10,
        color: '#06C1AE',
        textAlign: 'right',
    },
    styleSubmit: {
        marginTop: 20,
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

