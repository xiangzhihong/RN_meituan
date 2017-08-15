import React from 'react'
import {
    StyleSheet,
    Platform,
    View,
    Text,
    Image,
    TouchableOpacity,
    Alert,
    Modal,
    Dimensions,
} from 'react-native'
import SpacingView from "./SpacingView";
import QRScanPage from "../home/QRScanPage";

const {width, height} = Dimensions.get('window');
import px2dp from '../util/Utils'

const mTop = px2dp(Platform.OS == "ios" ? 64 : 44)

let mwidth = 95;
let mheight = 100;
const marginTop = mTop;

export default class MorePopWidows extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isVisible: this.props.show,
        };
        mwidth = this.props.width;
        mheight = this.props.height;
    }

    componentWillReceiveProps(nextProps) {
        this.setState({isVisible: nextProps.show});
    }

    closeModal() {
        this.setState({
            isVisible: false
        });
        this.props.closeModal(false);
    }

    scan() {
        this.props.navigator.push({
            component: QRScanPage,
        })
    }

    renderItemView() {
        return (
            <View>
                <View style={styles.modal}>
                    <TouchableOpacity onPress={this.scan.bind(this)} style={styles.itemView}>
                        <Image style={styles.imgStyle} source={require('../images/ic_scan_code_white.png')}/>
                        <Text style={styles.textStyle}>扫一扫</Text>
                    </TouchableOpacity>
                    <SpacingView/>
                    <TouchableOpacity onPress={() => Alert.alert('点击了付款码')} style={styles.itemView}>
                        <Image style={styles.imgStyle} source={require('../images/ic_code_white.png')}/>
                        <Text style={styles.textStyle}>付款码</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    render() {
        return (
            <View style={styles.container}>
                <Modal
                    transparent={true}
                    visible={this.state.isVisible}
                    animationType={'fade'}
                    onRequestClose={() => this.closeModal()}>
                    <TouchableOpacity style={styles.container} activeOpacity={1} onPress={() => this.closeModal()}>
                        {this.renderItemView()}
                    </TouchableOpacity>
                </Modal>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        width: width,
        height: height,
    },
    modal: {
        backgroundColor: '#696969',
        width: mwidth,
        height: mheight,
        position: 'absolute',
        left: width - mwidth - 10,
        top: marginTop,
        padding: 5,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 3,
    },
    itemView: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    textStyle: {
        color: '#fff',
        fontSize: 14,
        marginLeft: 2,
    },
    imgStyle: {
        width: 20,
        height: 20,
    }
});