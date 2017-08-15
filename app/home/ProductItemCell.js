import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Text16, Paragraph } from '../component/Text'

export default class ProductItemCell extends Component {

    render() {
        let { info } = this.props;
        let imageUrl = info.imageUrl.replace('w.h', '160.0').replace('http','https');

        return (
            <TouchableOpacity style={styles.container} onPress={() => this.props.onPress()}>
                <Image source={{ uri: imageUrl }} style={styles.icon} />

                <View style={styles.rightContainer}>
                    <Text16>{info.title}</Text16>
                    <View>
                    </View>
                    <Paragraph numberOfLines={0} style={{ marginTop: 8 }}>{info.subtitle}</Paragraph>
                    <View style={{ flex: 1, justifyContent: 'flex-end' }}>
                        <Text16 style={styles.price}>{info.price}元</Text16>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        flexDirection: 'row',
        padding: 10,
        borderBottomWidth: 1,
        borderColor: '#e9e9e9',
        backgroundColor: 'white',
    },
    icon: {
        width: 80,
        height: 80,
        borderRadius: 5,
    },
    rightContainer: {
        flex: 1,
        paddingLeft: 20,
        paddingRight: 10,
    },
    price: {
        color: '#06C1AE'
    }
});

