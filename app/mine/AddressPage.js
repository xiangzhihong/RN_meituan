/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * 地址管理
 */

import React, {Component} from 'react'
import {
    View,
    Text,
    Modal,
    Dimensions,
    StyleSheet,
    ScrollView,
    Image,
    TextInput,
    TouchableOpacity,
    ActivityIndicator
} from 'react-native'
import px2dp from '../util/Utils'
import NavigationBar from '../component/NavigationBar'
import ViewUtils from '../util/ViewUtils'
import Button from '../component/RNButton'

export default class AddressPage extends Component {


    constructor(props) {
        super(props)
        this.state = {
            loading: false,
            address: [
                {
                    name: "xzh",
                    phone: "13731312322",
                    tag: "公司",
                    color: "#0096ff",
                    address: "凌空soho"
                },
                {
                    name: "xzh",
                    phone: "13731312322",
                    tag: "公司",
                    color: "#0096ff",
                    address: "凌空soho"
                }
            ],
            location: "虹桥广场"
        }
    }

    onBackPress(e) {
        this.props.navigator.pop();
    }

    getLocation() {
        if (this.state.loading) {
            return
        }
        this.setState({
            loading: true
        })
        setTimeout(() => {
            this.setState({
                loading: false
            })
            // this.props.setLocation("人民广场")
        }, 1500)
    }

    renderView() {
        return (
            <View style={styles.wrap}>
                <View style={styles.searchView}>
                    <TextInput ref="search" style={styles.textInput} underlineColorAndroid="transparent"
                               placeholder="请输入地址" placeholderTextColor="#666"/>
                </View>
                <ScrollView style={styles.scrollView}>
                    <Text style={styles.title}>{"当前地址"}</Text>
                    <View style={styles.address}>
                        <Text>{this.state.location}</Text>
                        <TouchableOpacity onPress={this.getLocation.bind(this)}>
                            <View style={{flexDirection: "row", alignItems: "center"}}>
                                {this.state.loading ? <ActivityIndicator style={styles.aior}/> :
                                    <Image source={require('../images/ic_locate.png')}
                                           style={{width: 18, height: 18}}/>}
                                <Text style={{color: "#06C1AE", fontSize: px2dp(13), marginLeft: 5}}>{"重新定位"}</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.title}>{"收货地址"}</Text>
                    {
                        this.state.address.map((item, i) => {
                            return (
                                <Button key={i} onPress={() => {
                                }}>
                                    <View style={styles.address1}>
                                        <Text style={{
                                            color: "#333",
                                            fontSize: px2dp(14)
                                        }}>{item.name + " " + item.phone}</Text>
                                        <View style={styles.ads1List}>
                                            <Text
                                                style={[styles.tag, {backgroundColor: item.color || "#0096ff",}]}>{item.tag}</Text>
                                            <Text style={{color: "#bbb", fontSize: px2dp(13)}}>{item.address}</Text>
                                        </View>
                                    </View>
                                </Button>
                            )
                        })
                    }
                </ScrollView>

                <View style={styles.addAddress}>
                    <Text style={{color: "#ffffff", fontSize: px2dp(14)}}>{"新增收货地址"}</Text>
                </View>
            </View>
        )
    }

    render() {
        return (
            <Modal
                style={styles.wrap}
                animationType={'slide'}
                onRequestClose={() => {
                }}
                visible={this.props.modalVisible}>

                <NavigationBar
                    navigator={this.props.navigator}
                    popEnabled={false}
                    leftButton={ViewUtils.getLeftCloseButton(() => this.onBackPress())}
                    title='收货地址管理'
                    titleColor='#ffffff'
                />

                {this.renderView()}
            </Modal>
        )
    }
}

const styles = StyleSheet.create({
    wrap: {
        flex: 1,
        backgroundColor: "#fff"
    },
    title: {
        fontSize: 13,
        paddingHorizontal: 16,
        paddingTop: 15,
        paddingBottom: 10,
        color: "#666"
    },
    scrollView: {
        flex:1,
        backgroundColor: "#f3f3f3"
    },
    tag: {
        color: "#fff",
        fontSize: px2dp(12),
        minWidth: px2dp(30),
        textAlign: "center",
        paddingVertical: 1,
        paddingHorizontal: 2,
        borderRadius: 5,
        marginRight: 5
    },
    ads1List: {
        flexDirection: "row",
        alignItems: "center",
        paddingTop: 5
    },
    searchView: {
        paddingHorizontal: 16,
        paddingVertical: 8,
        backgroundColor: "#06C1AE"
    },
    textInput: {
        fontSize: 13,
        paddingLeft: 10,
        paddingRight: 10,
        paddingVertical: 0,
        height: px2dp(28),
        borderRadius: px2dp(5),
        backgroundColor: "#fff"
    },
    address: {
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        paddingHorizontal: 16,
        height: px2dp(45),
        backgroundColor: "#fff"
    },
    address1: {
        borderBottomWidth: 1,
        borderBottomColor: "#fbfbfb",
        paddingHorizontal: 16,
        backgroundColor: "#fff",
        paddingVertical: 8
    },
    addAddress: {
        height: px2dp(42),
        flexDirection: "row",
        backgroundColor: "#06C1AE",
        alignItems: "center",
        justifyContent: "center"
    }
})
