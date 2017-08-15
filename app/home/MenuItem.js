
import React, { Component } from 'react';
import { StyleSheet,Dimensions, Image,Text, TouchableOpacity } from 'react-native';

const { width } = Dimensions.get('window');

export default class MenuItem extends Component {
    render() {
        return (
            <TouchableOpacity style={styles.container}
                onPress={this.props.onPress}>
                <Image source={this.props.icon} resizeMode='contain' style={styles.icon} />
                <Text style={styles.text}>
                    {this.props.title}
                </Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        width: width / 5,
        height: width/ 5,
    },
    icon: {
        width: width / 9,
        height: width / 9,
        margin: 5,
    },
    text: {
        fontSize:12,
        color:'#666666',
        justifyContent: 'center',
    }
});

