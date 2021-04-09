

import React, { Component } from "react";
import {
    Body, Container, Content, Icon, Left, Header, Button, Footer, Text, FooterTab,
    Card, CardItem, Thumbnail, Right, Title,
} from 'native-base';
import {
    ScrollView, SearchBar, FlatList, TouchableHighlight, View, StyleSheet, Dimensions,
    TextInput
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import FontAwesome5Icon from "react-native-vector-icons/FontAwesome5";

export default class Deal extends Component {

    
    Profile1 = () => {
        this.props.navigation.navigate('Profile1')
    }
    Profile2 = () => {
        this.props.navigation.navigate('Profile2')
    }

    Profile3 = () => {
        this.props.navigation.navigate('Profile3')
    } 
    settingsandprivacy = () => {
        this.props.navigation.navigate('settingsandprivacy')
    }
    render() {
        return (
            <View>
                <View style={{
                    height: 55,backgroundColor: '#d7ddda',elevation: 15,flexDirection: 'row',
                    justifyContent: 'space-between'}}>
                    <View style={{ marginLeft: 15, margin: 10 }} >
                        <TouchableOpacity >
                            <FontAwesome5Icon name={'user-plus'} size={25} />
                        </TouchableOpacity>
                    </View >
                    <View style={{ margin: 10 }}>
                        <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-between', width: 140 }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 20 }}>
                                xyzkaka123
                        </Text>
                            <FontAwesome5Icon name={'caret-down'} size={30} />
                        </TouchableOpacity>
                    </View>
                    <View style={{ marginRight: 15, margin: 7 }}>
                        <TouchableOpacity 
                        onPress={this.settingsandprivacy}>
                            <FontAwesome5Icon name={'ellipsis-v'} size={35} />
                        </TouchableOpacity>
                    </View>
                </View>


                <View style={{ marginLeft: 140, marginTop: 15 }}>
                    <TouchableOpacity >
                        <FontAwesome5Icon name={'circle'} size={100} />
                    </TouchableOpacity>
                </View>


                <View style={{ alignItems: 'center' }} >
                    <TouchableOpacity>
                        <Text style={{ fontWeight: 'bold', fontSize: 20 }}>
                            @xyzkaka123
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Text style={{ fontWeight: '700', fontSize: 18 }}>
                            Check out my lintTree below
                        </Text>
                    </TouchableOpacity>
                </View>


                <View style={{ flexDirection: 'row', justifyContent: 'center' }}>

                    <View style={{ marginRight: 30 }}>
                        <TouchableOpacity>
                            <FontAwesome5Icon name={'twitter-square'} size={40} />
                        </TouchableOpacity>
                    </View>

                    <View style={{ marginRight: 30 }}>
                        <TouchableOpacity>
                            <FontAwesome5Icon name={'facebook'} size={40} />
                        </TouchableOpacity>
                    </View>

                    <View style={{ marginRight: 30 }}>
                        <TouchableOpacity>
                            <FontAwesome5Icon name={'instagram'} size={40} />
                        </TouchableOpacity>
                    </View>

                    <View style={{ marginRight: 0 }}>
                        <TouchableOpacity>
                            <FontAwesome5Icon name={'external-link-alt'} size={40} />
                        </TouchableOpacity>
                    </View>
                </View>


                <View style={{
                    flexDirection: 'row', justifyContent: 'space-between',
                    width: 250, marginLeft:55, margin: 10
                }}>
                    <View style={{ flexDirection: 'column', alignItems: 'center',marginRight:20 }}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
                            0
                        </Text>
                        <Text style={{ fontSize: 20 }}>
                            Followers
                        </Text>
                    </View>
                    <Text style={{ fontSize: 30, marginRight: 20, marginTop: 5, color: 'grey' }}>
                        |
                   </Text>
                    <View style={{ flexDirection: 'column', alignItems: 'center',marginRight:20 }}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
                            0
                        </Text>
                        <Text style={{ fontSize: 20 }}>
                            Following
                        </Text>
                    </View>
                    <Text style={{ fontSize: 30, marginRight: 20, marginTop: 5, color: 'grey' }}>
                        |
                     </Text>
                    <View style={{ flexDirection: 'column', alignItems: 'center' }}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
                            0
                        </Text>
                        <Text style={{ fontSize: 20 }}>
                            Like
                        </Text>
                    </View>
                </View>


                <View style={{ flexDirection:'row',justifyContent:'center'}}>
                    <View >
                    <TouchableOpacity style={{alignItems:'center',borderWidth:1,borderColor:'grey',
                    padding: 7,width: 200}}>
                        <Text style={{fontSize:25}}>
                            Edit Profile
                        </Text>
                    </TouchableOpacity>
                    </View>
                    <View style={{marginLeft:20}}>
                    <TouchableOpacity style={{alignItems:'center',borderWidth:1,borderColor:'grey',
                    width: 60,height:50,padding:7}}>
                        <FontAwesome5Icon name={'bookmark'} size={34} />
                    </TouchableOpacity></View>
                </View>


                <View style={{alignItems:'center',margin:5}}>
                    <TouchableOpacity>
                        <Text style={{fontWeight:'bold'}}>
                            Tap to add bio
                        </Text>
                    </TouchableOpacity>
                </View>
                

                <View style={{
                    height: 55,flexDirection: 'row',
                    alignItems:'center',justifyContent:'space-around',borderWidth:1,borderColor:'grey'}}>

                    <View>
                        <TouchableOpacity onPress={this.Profile1} >
                            <FontAwesome5Icon name={'align-justify'} size={30} />
                        </TouchableOpacity>
                    </View >

                    <View>
                        <TouchableOpacity onPress={this.Profile2}>
                            <FontAwesome5Icon name={'heart'} size ={30}/>
                        </TouchableOpacity>
                    </View>

                    <View>
                        
                            <FontAwesome5Icon name={'lock'} size={30} />
                       
                    </View>
                </View>

                <View style={{ justifyContent:'center',alignItems:'center', marginTop:50}}>
                    <Text style={{fontWeight:'bold' }}>
                        Your private videos
                    </Text>
                    <Text style={{color:'grey'}}>
                        To make your video visible only to yourself set it
                        to "Private" in the video's privacy settings
                    </Text>
                    </View>
                </View>
            
        );
    }

}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#fff',

    }
});
