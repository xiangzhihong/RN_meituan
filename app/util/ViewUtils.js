/**
 * ViewUtils
 * @flow
 **/

import React  from 'react';
import {
    TouchableHighlight,
    Image,
    TouchableOpacity,
    StyleSheet,
    Text,
    View,
} from 'react-native';

export default class ViewUtils {

    static getSettingItem(callBack, icon, text, tintStyle, expandableIco) {
        return (
            <TouchableHighlight
                onPress={callBack}>
                <View style={[styles.setting_item_container]}>
                    <View style={{alignItems: 'center', flexDirection: 'row'}}>
                        {icon ?
                            <Image source={icon} resizeMode='stretch'
                                   style={[{opacity: 1, width: 16, height: 16, marginRight: 10,}, tintStyle]}/> :
                            <View style={{opacity: 1, width: 16, height: 16, marginRight: 10,}}/>
                        }
                        <Text>{text}</Text>
                    </View>
                    <Image source={expandableIco ? expandableIco : require('../images/ic_tiaozhuan.png')}
                           style={[{
                               marginRight: 10,
                               height: 22,
                               width: 22,
                               alignSelf: 'center',
                               opacity: 1
                           }, tintStyle]}/>
                </View>
            </TouchableHighlight>
        )
    }

    static getMoreButton(callBack) {
        return <TouchableHighlight
            ref='moreMenuButton'
            underlayColor='transparent'
            style={{padding: 5}}
            onPress={callBack}>
            <View style={{paddingRight: 8}}>
                <Image
                    style={{width: 24, height: 24, marginLeft: 5}}
                    source={require('../images/ic_more_white.png')}
                />
            </View>
        </TouchableHighlight>
    }

    static getShareButton(callBack) {
        return <TouchableHighlight
            ref='moreMenuButton'
            underlayColor='transparent'
            style={{padding: 5}}
            onPress={callBack}>
            <View style={{paddingRight: 8}}>
                <Image
                    style={{width: 24, height: 24, marginLeft: 5}}
                    source={require('../images/icon_share_white.png')}
                />
            </View>
        </TouchableHighlight>
    }

    static getShareGreenButton(callBack) {
        return <TouchableHighlight
            ref='moreMenuButton'
            underlayColor='transparent'
            style={{padding: 5}}
            onPress={callBack}>
            <View style={{paddingRight: 8}}>
                <Image
                    style={{width: 24, height: 24, marginLeft: 5}}
                    source={require('../images/icon_share.png')}
                />
            </View>
        </TouchableHighlight>
    }

    static getLeftButton(callBack) {
        return <TouchableOpacity
            style={{padding: 8}}
            onPress={callBack}>
            <Image
                style={{width: 26, height: 26,}}
                source={require('../images/ic_back_white.png')}/>
        </TouchableOpacity>
    }

    static getLeftGreenButton(callBack) {
        return <TouchableOpacity
            style={{padding: 8}}
            onPress={callBack}>
            <Image
                style={{width: 26, height: 26,}}
                source={require('../images/ic_back_green.png')}/>
        </TouchableOpacity>
    }

    static getLeftBlackButton(callBack) {
        return <TouchableOpacity
            style={{padding: 8}}
            onPress={callBack}>
            <Image
                style={{width: 26, height: 26,}}
                source={require('../images/ic_back.png')}/>
        </TouchableOpacity>
    }

    static getLeftCircleButton(callBack) {
        return <TouchableOpacity
            style={{padding: 8}}
            onPress={callBack}>
            <Image
                style={{width: 26, height: 26,}}
                source={require('../images/icon_circle_back.png')}/>
        </TouchableOpacity>
    }

    static getLeftCloseButton(callBack) {
        return <TouchableOpacity
            style={{padding: 8}}
            onPress={callBack}>
            <Image
                style={{width: 20, height: 20}}
                source={require('../images/ic_close_white.png')}/>
        </TouchableOpacity>
    }


}

const styles = StyleSheet.create({
    setting_item_container: {
        backgroundColor: 'white',
        padding: 10, height: 60,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
})