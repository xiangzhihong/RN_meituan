/**
 * WebViewPage
 * @flow WebView封装
 **/

import React, {Component} from 'react'
import {
    StyleSheet,
    WebView,
    View,
} from 'react-native'

import NavigationBar from '../component/NavigationBar'
import ViewUtils from '../util/ViewUtils'
import Separator from "./Separator";

const WEBVIEW_REF = 'webview';

export default class WebViewPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            url: this.props.url,
            canGoBack: false,
            title: this.props.title,
            theme: this.props.theme
        }
    }

    onBackPress(e) {
        if (this.state.canGoBack) {
            this.refs[WEBVIEW_REF].goBack();
        } else {
            this.props.navigator.pop();
        }
    }

    onNavigationStateChange(navState) {
        this.setState({
            canGoBack: navState.canGoBack,
            url: navState.url,
        });
    }

    render() {
        return (
            <View style={styles.listViewContainer}>
                <NavigationBar
                    navigator={this.props.navigator}
                    style={{backgroundColor:'#ffffff'}}
                    popEnabled={false}
                    leftButton={ViewUtils.getLeftGreenButton(() => this.onBackPress())}
                    rightButton={ViewUtils.getShareGreenButton()}
                    titleColor='#000000'
                    title={this.state.title}
                />
                <Separator/>
                <WebView
                    ref={WEBVIEW_REF}
                    startInLoadingState={true}
                    onNavigationStateChange={(e)=>this.onNavigationStateChange(e)}
                    source={{uri: this.state.url}}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
    listViewContainer:{
        flex: 1,
        backgroundColor: '#f3f3f4',
    }
});
