/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Dimensions,
    TouchableOpacity,
    Text,
    Image,
    View
} from 'react-native';
import ScrollableTabView, { DefaultTabBar } from 'react-native-scrollable-tab-view';
import { Paragraph } from '../component/Text'
import NearbyListScene from '../nearby/NearbyListScene'

const { width } = Dimensions.get('window');
const isIOS = Platform.OS == "ios"

export default class NearbyPage extends Component {

    static renderTitle = () => {
        return (
            <TouchableOpacity style={styles.searchBar}>
                <Image source={require('../images/ic_search.png')} style={styles.searchIcon} />
                <Paragraph>找附近的吃喝玩乐</Paragraph>
            </TouchableOpacity>
        );
    }

    static renderLeftButton = () => {
        return (
            <NavigationItem
                icon={require('../images/ic_address.png')}
                iconStyle={{width: 13,height:16, marginTop: 1}}
                title='上海'
                onPress={() => {

                }}
            />
        );
    }


    renderHeadView() {
        return (
            <View style={styles.headStyle}>

                <TouchableOpacity style={styles.addressStyle}>
                    <Image style={styles.searchIcon}
                        source={require('../images/ic_address.png')}/>
                    <Text style={styles.headText}>上海市</Text>

                </TouchableOpacity>

                <TouchableOpacity style={styles.searchBar}>
                    <Image source={require('../images/ic_search.png')} style={styles.searchIcon} />
                    <Paragraph>找附近的吃喝玩乐</Paragraph>
                </TouchableOpacity>

            </View>
        )
    }

    render() {

        let titles = ['享美食', '住酒店', '爱玩乐', '全部']
        let types = [
            ['热门', '面包甜点', '小吃快餐', '川菜', '日本料理', '韩国料理', '台湾菜', '东北菜'],
            ['热门', '商务出行', '公寓民宿', '情侣专享', '高星特惠', '成人情趣'],
            ['热门', 'KTV', '足疗按摩', '洗浴汗蒸', '大宝剑', '电影院', '美发', '美甲'],
            []
        ]

        let storyListViews = [];
        for (let i = 0; i < titles.length; i++) {
            let storyListView = <NearbyListScene {...this.props} tabLabel={titles[i]} key={i} types={types[i]} />
            storyListViews.push(storyListView)
        }

        return (

            <View style={styles.flexStyle}>
                {this.renderHeadView()}
            <ScrollableTabView
                style={styles.container}
                tabBarBackgroundColor='white'
                tabBarActiveTextColor='#FE566D'
                tabBarInactiveTextColor='#555555'
                tabBarTextStyle={styles.tabBarText}
                tabBarUnderlineStyle={styles.tabBarUnderline}
            >
            {storyListViews}
            </ScrollableTabView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    flexStyle: {
        flex: 1,
        width:width,
        alignItems: 'center',
    },
    headStyle: {
        width:width,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft:15,
        paddingRight:15
    },
    addressStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: isIOS ? 25 : 13,
    },
    searchBar: {
        width: width * 0.65,
        height: 30,
        borderRadius: 19,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#eeeeee',
        alignSelf: 'flex-end',
        marginTop: isIOS ? 25 : 13,
        marginRight: 20,
    },
    searchIcon: {
        width: 20,
        height: 20,
        margin: 5,
    },
    headText: {
        fontSize: 14,
        marginLeft:5,
        marginRight:5,
        color: '#222222',
    },
    tabBarText: {
        fontSize: 14,
        marginTop: 13,
    },
    tabBarUnderline: {
        backgroundColor: '#FE566D',
        height: 2,
    },

});

