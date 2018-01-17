/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Dimensions,
    Text,
    ListView,
    View
} from 'react-native';

import RefreshListView , { RefreshState } from '../component/RefreshListView'
import HomeActionBar from '../home/HomeActionBar'
import ProductItemCell from '../home/ProductItemCell'
import MenuView from '../home/MenuView'
import ActiveView from '../home/ActiveView'
import LimitTimeView from '../home/LimitTimeView'
import WebViewPage from '../component/WebViewPage'
import SpacingView from '../component/SpacingView'
import DetailPage from '../detail/DetailPage'
import FoodPage from '../home/FoodPage'

import api from '../config/api'
const { width } = Dimensions.get('window');

export default class HomeScreen extends Component {

    state: {
        actives: Array<Object>,
        dataSource: ListView.DataSource
    };

    constructor(props: Object) {
        super(props)
        let ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })
        this.state = {
            actives: [],
            dataSource: ds.cloneWithRows([]),
        }
    }

    componentDidMount() {
        this.refs.listView.startHeaderRefreshing();
    }

    //获取打折数据和推荐商品
    requestData() {
        this.requestActives();
        this.requestRecommend()
    }

    requestActives() {
        fetch(api.actives)
            .then((response) => response.json())
            .then((json) => {
                console.log(JSON.stringify(json));
                this.setState({ actives: json.data })
            })
            .catch((error) => {
               console.log('fetch error:'+error);
            })
    }

    //请求推荐列表
    requestRecommend() {
        fetch(api.recommend)
            .then((response) => response.json())
            .then((json) => {
                console.log(JSON.stringify(json));

                let dataList = json.data.map((info) => {
                    return {
                        id: info.id,
                        imageUrl: info.squareimgurl,
                        title: info.mname,
                        subtitle: `[${info.range}]${info.title}`,
                        price: info.price
                    }
                })

                this.setState({
                    dataSource: this.state.dataSource.cloneWithRows(dataList)
                })
                setTimeout(() => {
                    this.refs.listView.endRefreshing(RefreshState.NoMoreData)
                }, 500);
            })
            .catch((error) => {
                this.refs.listView.endRefreshing(RefreshState.Failure)
            })
    }

    loadMenuInfos() {
        return api.menuInfo;
    }

    onMenuSelected(index: number) {
        if(index==0){
            this.props.navigator.push({
                component: FoodPage,
            })
        }else {
            alert('你点击了：'+index)
        }
    }

    onGridSelected(index: number) {
        let discount = this.state.actives[index]
        if (discount.type == 1) {
            let url='https://evt.dianping.com/movie/page-qydc-2017-07-21/index.html';
            // let location = discount.tplurl.indexOf('https')
            // let url = discount.tplurl.slice(location)
            let title=discount.title;
            if(url!=null){
                this.props.navigator.push({
                    component: WebViewPage,
                    args: {
                        url: url,
                        title: title,
                    }
                })
            }
        }
    }

    //详情页面
    toDetail() {
        this.props.navigator.push({
            component: DetailPage,
            args: {
            }
        })
    }

    renderView() {
        return (
            <View style={styles.flexStyle}>
                <MenuView menuInfos={this.loadMenuInfos()} onMenuSelected={(index) => this.onMenuSelected(index)} />
                <SpacingView/>
                <ActiveView infos={this.state.actives} onGridSelected={(index) => this.onGridSelected(index)} />
                <SpacingView/>
                <LimitTimeView {...this.props}/>
                <SpacingView/>
                <View style={styles.recommendHeader}>
                    <Text style={styles.text}>猜你喜欢</Text>
                </View>
            </View>
        )
    }

    render() {
        return (
            <View style={styles.flexStyle}>
                <HomeActionBar {...this.props}/>
                <RefreshListView
                    ref='listView'
                    dataSource={this.state.dataSource}
                    renderHeader={() => this.renderView()}
                    renderRow={(rowData) =>
                        <ProductItemCell
                            info={rowData}
                            onPress={() => {
                                 this.toDetail()
                            }}
                        />
                    }
                    onHeaderRefresh={() => this.requestData()}
                />

            </View>
        );
    }
}

const styles = StyleSheet.create({
    flexStyle: {
        flex: 1,
        width:width
    },
    container: {
        flex: 1,
        backgroundColor: '#f3f3f3',
        marginTop:Platform.OS === 'android'?0:20
    },
    text: {
        fontSize: 14,
        color: '#222222',
    },
    textStyle: {
        fontSize: 20,
        alignItems: 'center'
    },
    recommendHeader: {
        flex:1,
        height: 35,
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#e9e9e9',
        paddingVertical: 8,
        paddingLeft: 20,
        backgroundColor: 'white'
    },

});

