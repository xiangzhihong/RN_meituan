'use strict';
import React, {Component} from 'react';
import {
    View,
    StyleSheet,
} from 'react-native';

import SortList from '../component/SortListView';
import NavigationBar from '../component/NavigationBar'
import ViewUtils from '../util/ViewUtils'
// 城市列表数据部分(不完整)
import DATA_JSON from '../config/city-list.json';

const NOW_CITY_LIST = [
    {
        "name": "上海",
        "spellName": "shanghai",
        "id": 3100,
        "fullname": "上海/上海",
        "sortLetters": "s"
    }
];
const ALL_CITY_LIST = DATA_JSON.allCityList;
const HOT_CITY_LIST = DATA_JSON.hotCityList;
const LAST_VISIT_CITY_LIST = DATA_JSON.lastVisitCityList;

export default class SelectCityPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showSearchResult: false,
            keyword: '',
            searchResultList: [],
            allCityList: ALL_CITY_LIST,
            hotCityList: HOT_CITY_LIST,
            lastVisitCityList: LAST_VISIT_CITY_LIST,
            nowCityList: NOW_CITY_LIST
        };
    }

    onBackPress(e) {
        this.props.navigator.pop();
    }

    onSelectCity(cityJson) {
        if (this.state.showSearchResult) {
            this.setState({showSearchResult: false, keyword: ''});
        }
        alert('你选择了城市====》' + cityJson.id + '#####' + cityJson.name);
        let navigation=this.props.navigation;
        // navigation.pop()
        this.onBackPress()
    }

    render() {
        return (
            <View style={styles.container}>
                <NavigationBar
                    navigator={this.props.navigator}
                    popEnabled={false}
                    leftButton={ViewUtils.getLeftButton(()=>this.onBackPress())}
                    title='城市选择'
                    titleColor='#ffffff'
                />

                <View style={styles.flexStyle}>
                    <SortList
                        onSelectCity={this.onSelectCity.bind(this)}
                        allCityList={this.state.allCityList}
                        hotCityList={this.state.hotCityList}
                        lastVisitCityList={this.state.lastVisitCityList}
                        nowCityList={this.state.nowCityList}/>
                </View>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#ffffff',
    },
    flexStyle: {
        flex: 1
    },
    currentCity: {
        backgroundColor: '#ffffff',
        height: 20,
        margin: 5
    },
    currentCityText: {
        fontSize: 16
    }
});
