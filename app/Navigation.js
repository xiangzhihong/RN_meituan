/**
 * 路由界面
 */

import React, { Component } from 'react'
import {View, StatusBar, Platform } from 'react-native'
import {Navigator } from 'react-native-deprecated-custom-components'
import MainScreen from './main/MainScreen'
import SplashView from './navigation/SplashView'

export default class Navigation extends Component{

    constructor(props){
      super(props)
    }

    render(){
        return Platform.OS == "ios"?(
          <Navigator
            initialRoute={{component: SplashView}}
            configureScene={() => Navigator.SceneConfigs.FloatFromRight}
            renderScene={(route, navigator) => {
                  return <route.component navigator={navigator} {...route.args}/>
                }
            }/>
        ):(
          <View style={{flex: 1}}>
            <StatusBar
             backgroundColor="#0398ff"
             barStyle="light-content"/>
            <Navigator
              initialRoute={{component: SplashView}}
              configureScene={() => Navigator.SceneConfigs.PushFromLeft}
              renderScene={(route, navigator) => {
                    return <route.component navigator={navigator} {...route.args}/>
                  }
              }/>
          </View>
        )
    }
}
