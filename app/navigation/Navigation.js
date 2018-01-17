import {StackNavigator} from 'react-navigation'

import MainScreen from '../main/MainScreen'
import WebViewPage from '../component/WebViewPage'


const Navigation = StackNavigator({
    MainScreen: {screen: MainScreen},
    WebViewPage: {screen: WebViewPage},

},{
    headerMode: 'none',
});

export default Navigation
