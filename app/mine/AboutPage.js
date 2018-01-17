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
    Image,
    View
} from 'react-native';
import NavigationBar from '../component/NavigationBar'
import WebViewPage from '../component/WebViewPage'
import ViewUtils from '../util/ViewUtils'
import Separator from "../component/Separator";

const { width } = Dimensions.get('window');

export default class AboutPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            canGoBack: false,
        }
    }

    onBackPress(e) {
        this.props.navigator.pop();
    }

    auth() {
        this.props.navigator.push({
            component: WebViewPage,
            args: {
                url: 'https://www.xiangzhihong.com',
                title: 'xzh个人博客',
            }
        })
    }

    render() {
        return (
            <View style={styles.flexStyle}>
                <NavigationBar
                    navigator={this.props.navigator}
                    style={{backgroundColor:'#ffffff'}}
                    popEnabled={false}
                    leftButton={ViewUtils.getLeftGreenButton(()=>this.onBackPress())}
                    title='关于美团'
                    titleColor='#000000'
                />
                <Separator/>
                <View style={styles.container} >
                    <Image style={styles.image} source={require('../images/meituan_logo.png')}/>
                    <Text style={styles.text}>
                       版本号 V1.0
                    </Text>
                    <Text style={styles.text}>
                       作者：code_xzh
                    </Text>
                    <TouchableOpacity  onpress={this.auth.bind(this)}>
                        <Text style={styles.text}>
                            http://www.xiangzhihong.com
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    flexStyle: {
        flex: 1,
        width:width,
        flexDirection: 'column',
    },
    container: {
        flex: 1,
        alignItems: 'center',
    },
    image: {
        width:80,
        height:80,
        marginTop:50
    },
    text: {
        fontSize: 14,
        alignItems: 'center',
        margin: 10,
    },

});

