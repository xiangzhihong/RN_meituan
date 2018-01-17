'use strict';
import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    ListView,
    Dimensions,
} from 'react-native';

import Toast, {DURATION} from '../component/ToastUtil'

const SECTIONHEIGHT = 30;
const ROWHEIGHT = 40;
const ROWHEIGHT_BOX = 40;
var totalheight = []; //每个字母对应的城市和字母的总高度

const {width, height} = Dimensions.get('window');

var that;

const key_now = '当前';
const key_last_visit = '最近';
const key_hot = '热门';

export default class SortListView extends Component {

    constructor(props) {
        super(props);

        var getSectionData = (dataBlob, sectionID) => {
            return sectionID;
        };
        var getRowData = (dataBlob, sectionID, rowID) => {
            return dataBlob[sectionID][rowID];
        };

        let ALL_CITY_LIST = this.props.allCityList;
        let CURRENT_CITY_LIST = this.props.nowCityList;
        let LAST_VISIT_CITY_LIST = this.props.lastVisitCityList;
        let HOT_CITY_LIST = this.props.hotCityList;

        let letterList = this._getSortLetters(ALL_CITY_LIST);

        let dataBlob = {};
        dataBlob[key_now] = CURRENT_CITY_LIST;
        dataBlob[key_last_visit] = LAST_VISIT_CITY_LIST;
        dataBlob[key_hot] = HOT_CITY_LIST;

        ALL_CITY_LIST.map(cityJson => {
            let key = cityJson.sortLetters.toUpperCase();

            if (dataBlob[key]) {
                let subList = dataBlob[key];
                subList.push(cityJson);
            } else {
                let subList = [];
                subList.push(cityJson);
                dataBlob[key] = subList;
            }
        });

        let sectionIDs = Object.keys(dataBlob);
        let rowIDs = sectionIDs.map(sectionID => {
            let thisRow = [];
            let count = dataBlob[sectionID].length;
            for (let ii = 0; ii < count; ii++) {
                thisRow.push(ii);
            }

            let eachheight = SECTIONHEIGHT + ROWHEIGHT * thisRow.length;
            if (sectionID === key_hot || sectionID === key_now || sectionID === key_last_visit) {
                let rowNum = (thisRow.length % 3 === 0)
                    ? (thisRow.length / 3)
                    : parseInt(thisRow.length / 3) + 1;

                console.log('sectionIDs===>' + sectionIDs + ", rowNum=====>" + rowNum);

                eachheight = SECTIONHEIGHT + ROWHEIGHT_BOX * rowNum;
            }

            totalheight.push(eachheight);

            return thisRow;
        });


        let ds = new ListView.DataSource({
            getRowData: getRowData,
            getSectionHeaderData: getSectionData,
            rowHasChanged: (row1, row2) => row1 !== row2,
            sectionHeaderHasChanged: (s1, s2) => s1 !== s2
        });

        this.state = {
            dataSource: ds.cloneWithRowsAndSections(dataBlob, sectionIDs, rowIDs),
            letters: sectionIDs
        };

        that = this;
    }

    _getSortLetters(dataList) {
        let list = [];

        for (let j = 0; j < dataList.length; j++) {
            let sortLetters = dataList[j].sortLetters.toUpperCase();

            let exist = false;
            for (let xx = 0; xx < list.length; xx++) {
                if (list[xx] === sortLetters) {
                    exist = true;
                }
                if (exist) {
                    break;
                }
            }
            if (!exist) {
                list.push(sortLetters);
            }
        }

        return list;
    }

    _cityNameClick(cityJson) {
        // alert('选择了城市====》' + cityJson.id + '#####' + cityJson.name);
        this.props.onSelectCity(cityJson);
    }

    _scrollTo(index, letter) {
        this.refs.toast.close();
        let position = 0;
        for (let i = 0; i < index; i++) {
            position += totalheight[i]
        }
        this._listView.scrollTo({y: position});
        this.refs.toast.show(letter, DURATION.LENGTH_SHORT);
    }

    _renderRightLetters(letter, index) {
        return (
            <TouchableOpacity key={'letter_idx_' + index} activeOpacity={0.6} onPress={() => {
                this._scrollTo(index, letter)
            }}>
                <View style={styles.letter}>
                    <Text style={styles.letterText}>{letter}</Text>
                </View>
            </TouchableOpacity>
        );
    }

    _renderListBox(cityJson, rowId) {
        return (
            <TouchableOpacity key={'list_item_' + cityJson.id} style={styles.rowViewBox} onPress={() => {
                that._cityNameClick(cityJson)
            }}>
                <View style={styles.rowdataBox}>
                    <Text style={styles.rowDataTextBox}>{cityJson.name}</Text>
                </View>
            </TouchableOpacity>
        );
    }

    _renderListRow(cityJson, rowId) {
        console.log('rowId===>' + rowId + ", cityJson====>" + JSON.stringify(cityJson));
        if (rowId === key_now || rowId === key_hot || rowId === key_last_visit) {
            return that._renderListBox(cityJson, rowId);
        }

        return (
            <TouchableOpacity key={'list_item_' + cityJson.id} style={styles.rowView} onPress={() => {
                that._cityNameClick(cityJson)
            }}>
                <View style={styles.rowdata}>
                    <Text style={styles.rowdatatext}>{cityJson.name}</Text>
                </View>
            </TouchableOpacity>
        )
    }

    _renderListSectionHeader(sectionData, sectionID) {
        return (
            <View style={styles.sectionView}>
                <Text style={styles.sectionText}>
                    {sectionData}
                </Text>
            </View>
        );
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.listContainner}>
                    <ListView ref={listView => this._listView = listView}
                              contentContainerStyle={styles.contentContainer} dataSource={this.state.dataSource}
                              renderRow={this._renderListRow} renderSectionHeader={this._renderListSectionHeader}
                              enableEmptySections={true} initialListSize={500}/>
                    <View style={styles.letters}>
                        {this.state.letters.map((letter, index) => this._renderRightLetters(letter, index))}
                    </View>
                </View>
                <Toast ref="toast" position='top' positionValue={200} fadeInDuration={750} fadeOutDuration={1000}
                       opacity={0.8}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        // paddingTop: 50,
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#F4F4F4',
    },
    listContainner: {
        height: Dimensions.get('window').height,
        marginBottom: 10
    },
    contentContainer: {
        flexDirection: 'row',
        width: width,
        backgroundColor: 'white',
        justifyContent: 'flex-start',
        flexWrap: 'wrap'
    },
    letters: {
        position: 'absolute',
        height: height,
        top: 0,
        bottom: 0,
        right: 10,
        backgroundColor: 'transparent',
        alignItems: 'center',
        justifyContent: 'center'
    },
    letter: {
        height: height * 4 / 100,
        width: width * 4 / 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    letterText: {
        textAlign: 'center',
        fontSize: height * 1.1 / 50,
        color: '#06C1AE'
    },
    sectionView: {
        paddingTop: 5,
        paddingBottom: 5,
        height: 30,
        paddingLeft: 10,
        width: width,
        backgroundColor: '#F4F4F4'
    },
    sectionText: {
        color: '#06C1AE',
        fontWeight: 'bold'
    },
    rowView: {
        height: ROWHEIGHT,
        paddingLeft: 10,
        paddingRight: 10,
        borderBottomColor: '#F4F4F4',
        borderBottomWidth: 0.5
    },
    rowdata: {
        paddingTop: 10,
        paddingBottom: 2
    },

    rowdatatext: {
        color: 'gray',
        width: width
    },

    rowViewBox: {
        height: ROWHEIGHT_BOX,
        width: (width - 30) / 3,
        flexDirection: 'row',
        backgroundColor: '#ffffff'
    },
    rowdataBox: {
        borderWidth: 1,
        borderColor: '#DBDBDB',
        marginTop: 5,
        marginBottom: 5,
        paddingBottom: 2,
        marginLeft: 10,
        marginRight: 10,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    rowDataTextBox: {
        marginTop: 5,
        flex: 1,
        height: 20
    }

});
