/**
 * Created by xiangzhihong on 2017/7/15.
 * Function: 扫描二维码
 */
import React, {Component} from 'react';
import {StyleSheet,Text, View} from "react-native";

import  QRScannerView from '../component/QRScannerView'
import  ImageButton from '../component/ImageButton'


export default class QRScannerScreen extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <QRScannerView
                bottomMenuStyle={{height: 120, backgroundColor: '#000000', opacity: 1}}
                isShowScanBar={true}
                scanBarImage={require('../images/scanBar.png')}
                cornerColor={'#FFD900'}
                cornerOffsetSize={0}
                borderWidth={0}
                hintText={'请对准车牌上的二维码'}
                hintTextStyle={{color: '#FFD900', fontSize: 16, fontWeight: 'bold'}}
                hintTextPosition={110}
                maskColor={'#FFD900'}
                onScanResultReceived={this.barcodeReceived.bind(this)}
                bottomMenuHeight={120}

                renderBottomMenuView={() => this._renderMenu()}
            />
        )
    }

    _renderMenu() {
        return (
            <View style={styles.view_menu_container}>
                <View style={styles.view_menu_item_container}>
                    <ImageButton
                        style={styles.image_bottom_menu}
                        source={require('../images/manualInput.png')}
                    />
                    <Text
                        style={styles.text_menu_title}
                    >手动输入车牌号</Text>
                </View>

                <View style={styles.view_menu_item_container}>
                    <ImageButton
                        style={styles.image_bottom_menu}
                        source={require('../images/scanLigtOff.png')}
                    />
                    <Text
                        style={styles.text_menu_title}
                    >手电筒</Text>
                </View>
            </View>
        )
    }

    barcodeReceived(e) {
        console.log(e);
    }
}

const styles = StyleSheet.create({
    image_bottom_menu:{
        height:50,
        width:50,
        marginBottom:10,
    },
    view_menu_container:{
        flexDirection:'row',
        justifyContent:'space-around',
        paddingTop:16
    },
    text_menu_title:{
        color:'white',
        fontSize:14
    },
    view_menu_item_container:{
        justifyContent:'center',
        alignItems:'center',
    }
});