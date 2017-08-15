/** https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { View, Dimensions, StyleSheet, ScrollView, } from 'react-native';

import PageControl from './PageControl'
import MenuItem from './MenuItem'

const { width } = Dimensions.get('window');

export default class MenuView extends Component {

    state: {
        currentPage: number
    }

    constructor(props: Object) {
        super(props)

        this.state = {
            currentPage: 0
        }
    }

    onScroll(e: any) {
        let x = e.nativeEvent.contentOffset.x;
        let currentPage = x / width;

        if (this.state.currentPage != currentPage) {
            this.setState({
                currentPage: currentPage
            })
        }
    }

    render() {
        let menuItems = []
        let menuInfos = this.props.menuInfos
        for (let i = 0; i < menuInfos.length; i++) {
            let menuInfo = menuInfos[i]
            let menuItem = (
                <MenuItem
                    key={menuInfo.title}
                    title={menuInfo.title}
                    icon={menuInfo.icon}
                    onPress={() => {
                        if (this.props.onMenuSelected) {
                            this.props.onMenuSelected(i)
                            // this.props.onMenuSelected(menuInfo.title)
                        }
                    }} />
            )
            menuItems.push(menuItem)
        }

        var pageSize=10;
        let menuViews = [];
        let pageCount = Math.ceil(menuItems.length / pageSize)
        for (let i = 0; i < pageCount; i++) {
            let length = menuItems.length < (i * pageSize) ? menuItems.length - (i * pageSize) : pageSize
            let items = menuItems.slice(i * pageSize, i * pageSize + length)

            let menuView = (
                <View style={styles.itemsView} key={i}>
                    {items}
                </View>
            )
            menuViews.push(menuView)
        }

        return (
            <View style={styles.container}>
                <ScrollView contentContainerStyle={styles.contentContainer}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    pagingEnabled={true}
                    onScroll={(e) => this.onScroll(e)}>
                    <View style={styles.menuContainer}>
                        {menuViews}
                    </View>
                </ScrollView>

                <PageControl
                    style={styles.pageControl}
                    numberOfPages={pageCount}
                    currentPage={this.state.currentPage}
                    hidesForSinglePage={true}
                    pageIndicatorTintColor='gray'
                    currentPageIndicatorTintColor='#06C1AE'
                    indicatorSize={{ width: 8, height: 8 }}
                />
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
    },
    contentContainer: {
    },
    menuContainer: {
        flexDirection: 'row',
    },
    itemsView: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: width,
    },
    pageControl: {
        margin: 10,
    }
});

