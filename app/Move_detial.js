/**
 * Created by Administrator on 2018/1/23 0023.
 */
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
    NetUtils,
    ImageBackground,

} from 'react-native';

export default class Move_detial extends Component<{}> {

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {};
        console.log("1111");
    }
    render() {

        let pic = {uri: 'http://test.whgxwl.com:8001/YX_sJsBEkT12004/upFile/17121814033375.jpg'};

        return (
            <ScrollView>
                <View style={styles.container }>
                    <ImageBackground style={{flexDirection: 'row', height: 250}} source={require('../img/xq.png')}>
                        <Image source={require('../img/xq.png')} style={styles.move}/>
                        <View style={{marginTop:60, marginLeft:20, flex:1, flexDirection:'column'}}>
                            <View style={{flexDirection:"row"}}>
                                <Text style={{color: '#E85475'}}>评分：7.4</Text>
                                <Text style={{color: '#ffffff'}}> 18646 评分</Text>
                            </View>
                            <View style={{flexDirection:"column"}}>
                                <Text style={{color: '#ffffff'}}>导演：莱恩 约翰逊</Text>
                                <View style={{backgroundColor:'red', height:2, width:30}}/>
                            </View>
                            <Text style={{color: '#ffffff'}}>主演：黛西 雷德利/ 约翰 博耶加</Text>
                            <Text style={{color: '#ffffff'}}>类型：动作/科幻/冒险</Text>
                            <Text style={{color: '#ffffff'}}>上映时间：2017</Text>
                            <Text style={{color: '#ffffff'}}>制片国家/地区：美国</Text>
                        </View>
                    </ImageBackground>

                    <View style={{flexDirection: 'row',marginLeft: 10, marginTop:20 }}>
                        <View style={{width:2,backgroundColor:'red',height: 27 }}/>
                        <View style={{flexDirection:'row',alignItems:'center', marginLeft:10}}>
                            <Text style={{fontWeight:'bold'}}>另称</Text>
                        </View>
                    </View>

                    <View style={{ marginLeft:20}}>
                        <Text>星球大战：最后绝地武士（港）/星球大战8/start Wars:Episode VII</Text>
                    </View>

                    <View style={{flexDirection:'row',marginLeft: 10, marginTop:20}}>
                        <View style={{backgroundColor: 'red', width:2, height:27, }}/>
                        <View style={{marginLeft:10}}>
                            <Text style={{fontWeight:'bold'}}>剧情简介</Text>
                        </View>
                    </View>

                    <View style={{marginLeft:20, marginRight:20}}>
                        <Text>星元前250年，一些贸易星球成立了贸易联邦，这批家伙就是跟《星战前传》系列中组织机器人军团跟共和国打仗、最后被阿纳金屠杀的那群难看的外星人。
                          星元前32年，《星战前传1魅影危机》开始，贸易联邦不满银河共和国对他们的船收税，派出机器人军团进攻两国边缘的纳布星。
                          本系列女主角、纳布星女王帕德美·阿米达拉到共和国求援不成，间接地帮助帕丁议员成为共和国议会议长。而帕丁议员的真实身份其实是这一代的西斯大君——达斯·西帝。
                          这里要解释一下，严格意义上的共和政体与民主无关，而是不同团体的代表一起决定国家大事。在这里，作为共和国成员的各个星球喜欢用奴隶制或是君主制都行，只要在共和国大事上服从议会就可以了。就好像《笑傲江湖》里各种邪魔外道结盟攻打少林寺，盟主令狐冲只能约法三章，没办法约束手下随地大小便之类的不文明行为。
                          最后，帕德美在纳布星土著“刚刚人”的帮助下夺回纳布星，绝地武士奎刚和他的徒弟奥比王以及他们在沙漠星球塔图因捡到的天才儿童阿纳金·天行者成为决定性的力量。
                          绝地武士有先知能力，奎刚一眼认定阿纳金是消灭西斯、令原力和宇宙恢复平衡的天才。而事实证明，他是对的，只不过他只看到了结局，没看到过程——阿纳金先毁了绝地武士团和共和国，然后才在36年之后杀掉了达斯·西帝，自己也随后死去，令西斯灭绝。
                          在纳布星之战中，奎刚被西斯学徒达斯·魔所杀，而达斯·魔则死于奥比王之手。</Text>
                    </View>

                    <View style={{flexDirection:'row',marginTop:20,marginLeft:20, marginTop:20}}>
                        <View style={{backgroundColor:'red', height:27, width:2, }}/>
                        <View style={{marginLeft:10, alignItems: 'center'}}>
                            <Text style={{fontWeight:'bold'}}>导演 & 演员</Text>
                        </View>
                    </View>
                    <View >
                        <FlatList
                            ItemSeparatorComponent={() => <View style={{backgroundColor:'#E9E2E3',height:1, marginTop: 10}}></View>}
                            data={[
                                    {key: 'Devin', key2: require('../img/1.png'), key3:'导演'},
                                    {key: 'Jackson', key2: require('../img/2.png'),key3:'演员'},
                                    {key: 'James', key2: require('../img/3.png'),key3:'演员'},
                                    {key: 'Joel', key2: require('../img/4.png'),key3:'演员'},
                                    {key: 'John', key2: require('../img/5.png'),key3:'演员'},
                                    ]}
                            renderItem={({item}) =>
                                    <View style={{flexDirection:'row', marginLeft:20, marginTop:20}}>
                                        <Image source={item.key2} style={{width:80, height:80}}/>
                                        <View style={{flexDirection:"column"}}>
                                             <Text style={styles.item}>{item.key}</Text>
                                             <Text style={{ padding: 10,fontSize: 14,height: 44,}}>{item.key3}</Text>
                                        </View>
                                        </View>

                            }
                        />
                    </View>
                </View>
            </ScrollView>
        );
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
        fontSize: 18,
        height: 44,
    },
});