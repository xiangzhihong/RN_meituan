/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 */

import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Dimensions,
    ListView,
    Image,
    TouchableOpacity,
    View
} from 'react-native';
import NavBar from '../component/NavBar'
import OrderMenuItem from '../order/OrderMenuItem'
import SpacingView from '../component/SpacingView'
import ProductItemCell from '../home/ProductItemCell'
import MineOrderPage from '../order/MineOrderPage'
import RefreshListView , { RefreshState } from '../component/RefreshListView'
import { Text12, Text14, Paragraph } from '../component/Text'
import api from '../config/api'
import Separator from "../component/Separator";
const { width } = Dimensions.get('window');

export default class OrderPage extends Component {

    state: {
        dataSource: ListView.DataSource
    }

    constructor(props: Object) {
        super(props)
        let ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })
        this.state = {
            dataSource: ds.cloneWithRows([]),
        }
    }

    //全部订单
    orders() {
        this.props.navigator.push({
            component: MineOrderPage,
        })
    }

    componentDidMount() {
        this.refs.listView.startHeaderRefreshing();
    }

    requestData() {
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

                // 测试数据
                dataList.sort(() => { return 0.5 - Math.random() })

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

    renderHeader() {
        return (
            <View style={styles.container}>
                {this.renderOrderHead()}
                 <Separator/>
                <View style={styles.itemContainer}>
                    <OrderMenuItem title='待付款' icon={require('../images/order_tab_need_pay.png')} onPress={this.orders.bind(this)}/>
                    <OrderMenuItem title='待使用' icon={require('../images/order_tab_need_use.png')} onPress={this.orders.bind(this)}/>
                    <OrderMenuItem title='待评价' icon={require('../images/order_tab_need_review.png')} />
                    <OrderMenuItem title='退款/售后' icon={require('../images/order_tab_needoffer_aftersale.png')} />
                </View>
                <SpacingView />
                {this.renderFavorHead()}
                <Separator/>
            </View>
        )
    }

    renderOrderHead() {
        return (
             <TouchableOpacity onPress={this.orders.bind(this)}>
                 <View style={styles.orderHead}>
                     <Text14>我的订单</Text14>
                     <View style={{ flex: 1}} />
                     <Text12 style={{ color: '#999999' }}>全部订单</Text12>
                     <Image style={styles.arrow} source={require('../images/icon_arrow.png')} />
                 </View>
             </TouchableOpacity>

        )}

    renderFavorHead() {
        return (
            <TouchableOpacity>
                <View style={styles.orderHead}>
                    <Text14>我的收藏</Text14>
                </View>
            </TouchableOpacity>

        )}

    render() {
        return (
            <View style={styles.container}>
                <NavBar title="订单"/>
                <RefreshListView
                    ref='listView'
                    dataSource={this.state.dataSource}
                    renderHeader={() => this.renderHeader()}
                    renderRow={(rowData) =>
                        <ProductItemCell
                            info={rowData}
                            onPress={() => {

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
        backgroundColor: 'white',
    },
    itemContainer: {
        flexDirection: 'row',
    },
    orderHead: {
        flexDirection: 'row',
        alignItems: 'center',
        height:38,
        paddingLeft:15,
        paddingRight:15
    },
    arrow: {
        width: 14,
        height: 14,
        marginLeft: 5,
    }

});

