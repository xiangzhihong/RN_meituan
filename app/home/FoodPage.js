/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, {Component} from 'react';
import {
    Text,
    StyleSheet,
    Dimensions,
    Image,
    View
} from 'react-native';
import FoodActionBar from '../home/FoodActionBar'
import Separator from "../component/Separator";
import BannerView from "../component/BannerView";

const { width } = Dimensions.get('window');

export default class FoodPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            canGoBack: false,
        }
    }

    render() {
        return (
            <View style={styles.flexStyle}>
                <FoodActionBar {...this.props}/>
                <Separator/>
                <BannerView />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    flexStyle: {
        flex: 1,
        width:width,
    },
    bannerStyle: {
        flex:1,
        width:width,
        height:220,
    },

});

