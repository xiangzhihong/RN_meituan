/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * 二维码扫描
 */

import React, {Component} from 'react';
import {
    Text,
    StyleSheet,
    Dimensions,
    Image,
    View
} from 'react-native';
import NavigationBar from '../component/NavigationBar'
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

    render() {
        return (
            <View style={styles.flexStyle}>
                <NavigationBar
                    navigator={this.props.navigator}
                    style={{backgroundColor:'#ffffff'}}
                    popEnabled={false}
                    leftButton={ViewUtils.getLeftGreenButton(()=>this.onBackPress())}
                    title='扫一扫'
                    titleColor='#000000'
                />
                <Separator/>
                <View style={styles.container}>

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
        fontSize: 16,
        alignItems: 'center',
        margin: 10,
    },

});

