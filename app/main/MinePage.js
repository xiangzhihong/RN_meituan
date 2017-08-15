/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow 个人中心
 */

import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Dimensions,
    RefreshControl,
    Image,
    ScrollView,
    TouchableOpacity,
    View
} from 'react-native';
import { Text16, Text14, Paragraph } from '../component/Text'
import MineItemCell from '../mine/MineItemCell';
import SpacingView from '../component/SpacingView'
import SettingPage from '../mine/SettingPage'
import WebViewPage from '../component/WebViewPage'
import AboutPage from '../mine/AboutPage'

const { width,height } = Dimensions.get('window');

export default class MinePage extends Component {

    state: {
        isRefreshing: boolean
    }

    constructor(props: Object) {
        super(props)

        this.state = {
            isRefreshing: false
        }
    }

    onHeaderRefresh() {
        this.setState({isRefreshing: true})

        setTimeout(() => {
            this.setState({isRefreshing: false})
        }, 2000);
    }

    setting() {
        this.props.navigator.push({
            component: SettingPage,
            args: {
            }
        })
    }

    about() {
        this.props.navigator.push({
            component: AboutPage,
        })
    }

    auth() {
        this.props.navigator.push({
            component: WebViewPage,
            args: {
                url: 'https://wwww.xiangzhihong.com',
                title: 'blog',
            }
        })
    }

    renderCells() {
        let cells = [];
        let dataList = this.getDataList();
        for (let i = 0; i < dataList.length; i++) {
            let sublist = dataList[i];
            for (let j = 0; j < sublist.length; j++) {
                let data = sublist[j];
                let cell = <MineItemCell image={data.image} title={data.title} subtitle={data.subtitle}
                                         key={data.title} />;
                cells.push(cell)
            }
            cells.push(<SpacingView key={i}/>)
        }

        return (
            <View style={{flex: 1}} >
                {cells}
            </View>
        )
    }

    renderHeader() {
        return (
            <View style={styles.header}>
                <View style={styles.topContainer}>
                    <TouchableOpacity onPress={this.setting.bind(this)}>
                        <Image style={[styles.icon, {marginRight: 15}]}
                               source={require('../images/icon_setting_white.png')}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.about.bind(this)}>
                        <Image style={[styles.icon, {marginRight: 10}]}
                               source={require('../images/icon_message_white.png')}/>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.userContainer} onPress={this.auth.bind(this)}>
                    <Image style={styles.avatar} source={require('../images/ic_avatar_default.png')} />
                    <View>
                        <View style={{flexDirection: 'row'}}>
                            <Text16 style={{color: 'white'}}>code_xzh</Text16>
                            <Image style={{marginLeft: 4,height:18,width:18}}
                                   source={require('../images/beauty_v1.png')}/>
                        </View>
                        <Paragraph style={{color: 'white', marginTop: 4}}>个人信息 ></Paragraph>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }

    getDataList() {
        return (
            [
                [
                    {title: '我的钱包', subtitle: '办信用卡', image: require('../images/icon_mine_wallet.png')},
                    {title: '余额', subtitle: '￥95872385', image: require('../images/icon_mine_balance.png')},
                    {title: '抵用券', subtitle: '63', image: require('../images/icon_mine_voucher.png')},
                    {title: '会员卡', subtitle: '2', image: require('../images/icon_mine_membercard.png')}
                ],
                [
                    {title: '好友去哪', image: require('../images/icon_mine_friends.png')},
                    {title: '我的评价', image: require('../images/icon_mine_comment.png')},
                    {title: '我的收藏', image: require('../images/icon_mine_collection.png')},
                    {title: '会员中心', subtitle: 'v15', image: require('../images/icon_mine_mineorder.png')},
                    {title: '积分商城', subtitle: '好礼已上线', image: require('../images/icon_mine_member.png')}
                ],
                [
                    {title: '客服中心', image: require('../images/icon_mine_service.png')},
                    {title: '关于美团', subtitle: '我要合作', image: require('../images/icon_mine_about.png')}
                ]
            ]
        )
    }


    render() {
        return (
            <View style={styles.container}>
                <View style={{
                    position: 'absolute',
                    width: width,
                    height: height / 2,
                    backgroundColor: '#06C1AE'
                }}/>
                <ScrollView
                    refreshControl={
                        <RefreshControl
                            refreshing={this.state.isRefreshing}
                            onRefresh={() => this.onHeaderRefresh()}
                            tintColor='gray'
                        />
                    }>
                    {this.renderHeader()}
                    <SpacingView />
                    {this.renderCells()}
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f3f3f3',
        marginTop:Platform.OS === 'android'?20:0
    },
    header: {
        backgroundColor: '#06C1AE',
        paddingBottom: 20
    },
    topContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginTop: 7,
    },
    icon: {
        width: 27,
        height: 27,
    },
    userContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        margin: 10,
    },
    avatar: {
        width: 50,
        height: 50,
        marginRight: 10,
        borderRadius: 25,
        borderWidth: 2,
        borderColor: '#51D3C6'
    }
});

