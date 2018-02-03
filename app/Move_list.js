/**
 * Created by Administrator on 2018/1/23 0023.
 */
import React, {Component} from 'react';

import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
    ToastAndroid,
    TouchableNativeFeedback,
    TextInput,
    ScrollView,
    FlatList,
    SectionList,
    ImageBackground,
    ActivityIndicator,
    Animated,
    StatusBar,
    TouchableHighlight,

} from 'react-native';
import NetUtils from    '../NetUtils';
const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);


let itemTotalCount = 0;  //总的数量
let start = 0;
let count = 21;

export default class Move_list extends Component<{}> {

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.nav = this.props.navigation;
        this.state = {
            dataArray: [],
            isLoading: true,
            error: false,
            errorInfo: "",
            footState: false,

        };
    }

    componentDidMount() {
        this._feachGetData();
    }


    _feachGetData() {
        let params = {'start': start, 'count': count};
        NetUtils.get('https://api.douban.com/v2/movie/top250', params, (responseData) => {

            let datas = JSON.parse(responseData._bodyInit);

            let data = datas.subjects;
            let datatotal = datas.total;
            let dataBold = [];
            let i = itemTotalCount;
            data.map(function (item) {
                dataBold.push({key: i, value: item})
                i++;
            })
            itemTotalCount = i;

            if (start >= datatotal) {
                this.setState({
                    footState: true,
                });
            }
            this.setState({
                dataArray: this.state.dataArray.concat(dataBold),
                isLoading: false
            });
            console.log(itemTotalCount);
            data = null;
            dataBold = null;
        }, (error) => {
            this.setState({
                error: true,
                errorInfo: error,
            })
        })
    }

    renderLoadingView() {
        return (
            <View >
                <ActivityIndicator
                    animating={true}
                    style={[ {height: 80}]}
                    color='red'
                    size="large"
                />
            </View>
        );
    }

    renderErrorView(error) {
        return (
            <View>
                <Text>error:{error}</Text>
            </View>
        );
    }

    renderFooterView() {
        if (this.state.foot) {
            return (
                <View style={{height:40, flex:1, flexDirection: 'column',alignItems: 'center',justifyContent:'center'}}>
                    <Text>没有更多</Text>
                </View>
            );
        } else {
            return (
                <View style={{height:40, flex:1, flexDirection: 'column',alignItems: 'center',justifyContent:'center'}}>
                    <Text>正在加载更多</Text>
                </View>
            );
        }

    }

    _onEndReached() {

        if (this.state.footState == false) {
            start = start + 21;
            this._feachGetData();
        }

    }

    renderItemView({item}) {
        return (
            <TouchableHighlight style={{flex:1,flexDirection: 'column', marginTop:10 ,alignItems: 'center'}}
                                onPress={()=>{this._onPressItem(item.value.title)}} activeOpacity={0.7}
                                underlayColor='#fff'>
                <View style={{flex:1,flexDirection: 'column',alignItems: 'center'}}>
                    <Image style={{width:110, height:170}} source={{uri:item.value.images.large}}/>
                    <Text style={styles.item}>{item.value.title} </Text>
                    <Text style={{fontSize:10}}>评分：{item.value.rating.average}</Text>
                </View>
            </TouchableHighlight>
        );
    }

    _onPressItem(title) {
        console.log(title);
        this.nav.navigate('MoveDetial');
    }

    renderData() {
        return (
            <View style={{flex:1,flexDirection:'column'}}>
                <StatusBar
                    backgroundColor="red"
                    barStyle="light-content"
                />
                <AnimatedFlatList
                    numColumns={3}
                    data={this.state.dataArray}
                    renderItem={this.renderItemView.bind(this)}
                    ListFooterComponent={this.renderFooterView()}
                    onEndReached={this._onEndReached.bind(this)}/>
            </View>
        );
    }

    render() {

        if (this.state.isLoading && !this.state.error) {
            return this.renderLoadingView();
        } else if (this.state.error) {
            return this.renderErrorView(this.state.errorInfo);
        } else {
            return this.renderData();
        }
    }
}


const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
        flexDirection: 'column',
    },

    move: {
        width: 100,
        height: 160,
        marginLeft: 30,
        marginTop: 50
    },
    container1: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    sectionHeader: {
        paddingTop: 2,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 2,
        fontSize: 14,
        fontWeight: 'bold',
        backgroundColor: 'rgba(247,247,247,1.0)',
    },
    welcome: {
        backgroundColor: 'powderblue',
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    images: {
        width: 200,
        height: 200,
    },
    item: {
        padding: 10,
        fontSize: 10,
    },
});