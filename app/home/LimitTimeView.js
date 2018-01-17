/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * 限时抢购
 */

import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Dimensions,
    TouchableOpacity,
    TouchableHighlight,
    TouchableNativeFeedback,
    View,
    Text,
    Image,
    ScrollView
} from 'react-native';
import px2dp from '../util/Utils'
import LocalImg from '../util/Images'
import CountDownView from '../component/CountDownView'
import ClassifyPage from '../classify/ClassifyPage'
import DetailPage from '../detail/DetailPage'

const { width } = Dimensions.get('window');
const isIOS = Platform.OS == "ios";

export default class LimitTimeView extends Component {

    more() {
        this.props.navigator.push({
            component: ClassifyPage,
            args: {
            }
        })
    }

    detail() {
        this.props.navigator.push({
            component: DetailPage,
        })
    }

    render() {
        return (
            <View style={styles.flexStyle}>
                <View style={styles.container}>
                    <View style={{flexDirection: "row", alignItems: "center"}}>
                        <Text style={{fontSize: px2dp(14), fontWeight: "bold"}}>限时抢购</Text>
                        <Text style={{fontSize: px2dp(11), color: "#aaa", marginLeft: 10}}>距离结束</Text>
                        <CountDownView
                            date="2017-08-16T24:00:00+00:00"
                        />
                    </View>
                    <TouchableOpacity onPress={this.more.bind(this)}>
                        <View style={{flexDirection: "row", alignItems: "center"}}>
                            <Text style={{fontSize: px2dp(12), color: "#aaa", marginRight: 3}}>更多</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <ScrollView
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}
                    horizontal={true}
                    style={styles.lTimeScrollView}>
                    <View style={{flexDirection: "row", alignItems: "center", paddingTop: 15}}>
                        {
                            ["全素冒菜套餐", "荤素套餐", "培根餐", "酸汤水饺","必胜客宅急送"].map((item, i) => {
                                let layout = (
                                    <View style={styles.lTimeList}>
                                        <Image source={LocalImg["sale"+i]} style={{height: px2dp(85), width: px2dp(85), resizeMode: 'cover'}}/>
                                        <Text style={{fontSize: px2dp(13), color: "#333", marginVertical: 5}}>{item}</Text>
                                        <View style={{flexDirection: "row", alignItems: "center"}}>
                                            <Text style={{fontSize: px2dp(14), fontWeight:"bold", color: "#ff6000", marginRight: 2}}>{"￥99"}</Text>
                                            <Text style={{fontSize: px2dp(12), color: "#aaa", textDecorationLine: "line-through"}}>{"￥29"}</Text>
                                        </View>
                                    </View>
                                )
                                return isIOS?(
                                    <TouchableHighlight key={i} style={{borderRadius: 4,marginRight: 10}} onPress={this.detail.bind(this)}>{layout}</TouchableHighlight>
                                ):(
                                    <View key={i} style={{marginRight: 10}}><TouchableNativeFeedback onPress={()=>{}}>{layout}</TouchableNativeFeedback></View>
                                )
                            })
                        }
                    </View>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    flexStyle: {
        padding:10
    },
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    time: {
        paddingHorizontal: 3,
        backgroundColor: "#333",
        fontSize: px2dp(11),
        color: "#fff",
        padding:px2dp(2),
        marginHorizontal: 3
    },
    lTimeScrollView: {
    },
    lTimeList: {
        backgroundColor:"#fff",
        alignItems: "center"
    }

});

