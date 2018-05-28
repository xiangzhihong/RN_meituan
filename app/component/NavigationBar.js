/**
 * NavigationBar
 * @flow
 */
import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {
    StyleSheet,
    Platform,
    TouchableOpacity,
    StatusBar,
    Text,
    View
} from 'react-native'

const NAV_BAR_HEIGHT_IOS = 40;
const NAV_BAR_HEIGHT_ANDROID = 50;
const STATUS_BAR_HEIGHT = 20;

const ButtonShape = {
    title: PropTypes.string.isRequired,
    style: PropTypes.any,
    handler: PropTypes.func,
};

const StatusBarShape = {
    barStyle: PropTypes.oneOf(['light-content', 'default',]),
    networkActivityIndicatorVisible: PropTypes.bool,
    showHideTransition: PropTypes.oneOf(['fade', 'slide']),
    hidden: PropTypes.bool,
    translucent: PropTypes.bool,
    backgroundColor: PropTypes.string,
    animated: PropTypes.bool
};

export default class NavigationBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: '',
            popEnabled: true,
            hide: false
        };
    }

    static propTypes = {
        style: View.propTypes.style,
        titleLayoutStyle: View.propTypes.style,
        navigator: PropTypes.object,
        leftButtonTitle: PropTypes.string,
        popEnabled: PropTypes.bool,
        onLeftButtonClick: PropTypes.func,
        titleColor: PropTypes.string || '#ffffff',
        title: PropTypes.string,
        titleView: PropTypes.element,
        hide: PropTypes.bool,
        statusBar: PropTypes.shape(StatusBarShape),
        rightButton: PropTypes.oneOfType([
           PropTypes.shape(ButtonShape),
            PropTypes.element,
        ]),
        leftButton: PropTypes.oneOfType([
            PropTypes.shape(ButtonShape),
            PropTypes.element,
        ]),
    }

    static defaultProps = {
        statusBar: {
            barStyle: 'default',
            hidden: false,
            translucent: false,
            animated: false,
        },
    }


    getButtonElement(data = {}, style) {
        return (
            <View style={styles.navBarButton}>
                {(!!data.props) ? data : (
                    <NavBarButton
                        title={data.title}
                        style={[data.style, style,]}
                        tintColor={data.tintColor}
                        handler={data.handler}/>
                )}
            </View>
        );
    }

    render() {
        let statusBar = !this.props.statusBar.hidden ?
            <View style={styles.statusBar}>
                <StatusBar {...this.props.statusBar}  style={styles.statusBar}/>
            </View> : null;

        let titleView = this.props.titleView ? this.props.titleView :
            <Text style={[styles.title, {color: this.props.titleColor}]} ellipsizeMode="head"
                  numberOfLines={1}>{this.props.title}</Text>;

        let content = this.props.hide ? null :
            <View style={styles.navBar}>
                {this.getButtonElement(this.props.leftButton)}
                <View style={[styles.navBarTitleContainer, this.props.titleLayoutStyle]}>
                    {titleView}
                </View>
                {this.getButtonElement(this.props.rightButton, {marginRight: 8,})}
            </View>;
        return (
            <View style={[styles.container, this.props.style]}>
                {statusBar}
                {content}
            </View>
        )
    }
}

class NavBarButton extends Component {
    render() {
        const {style, tintColor, margin, title, handler} = this.props;

        return (
            <TouchableOpacity style={styles.navBarButton} onPress={handler}>
                <View style={style}>
                    <Text style={[styles.title, {color: tintColor,},]}>{title}</Text>
                </View>
            </TouchableOpacity>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#06C1AE',
    },
    navBar: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: Platform.OS === 'ios' ? NAV_BAR_HEIGHT_IOS : NAV_BAR_HEIGHT_ANDROID,
    },
    navBarTitleContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        left: 40,
        top: 0,
        right: 40,
        bottom: 0,
    },
    title: {
        fontSize: 18,
    },
    navBarButton: {
        alignItems: 'center',
    },
    statusBar: {
        height: Platform.OS === 'ios' ? STATUS_BAR_HEIGHT : 0,
        backgroundColor:'transparent'
    },
});
