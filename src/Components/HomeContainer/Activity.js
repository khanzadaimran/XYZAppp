

import React, { Component } from "react";
import {
    Body, Container, Content, Icon, Left, Header, Button, Footer, Text, FooterTab,
    Card, CardItem, Thumbnail, Right, Title,
} from 'native-base';
import { ScrollView, SearchBar, FlatList, TouchableHighlight, View, StyleSheet, Dimensions, TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import FontAwesome5Icon from "react-native-vector-icons/FontAwesome5";

export default class Deal extends Component {



    directmessage = () => {
        this.props.navigation.navigate('directmessage')
    }

    render() {
        return (

            <View >
                    <View style={{
                    height: 55,backgroundColor: '#d7ddda',elevation: 15,flexDirection: 'row',
                    justifyContent: 'space-between'}}>
                   
                    <View style={{ margin: 10 ,marginLeft:130}}>
                        <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-between', width: 125 }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 20 }}>
                               All Activity
                        </Text>
                            <FontAwesome5Icon name={'caret-down'} size={30} />
                        </TouchableOpacity>
                    </View>
                    <View style={{ marginRight: 20, margin: 10 }}>
                        <TouchableOpacity
                        onPress={this.directmessage} >
                            <FontAwesome5Icon name={'location-arrow'} size={30} />
                        </TouchableOpacity>
                    </View>
                </View>
                
                <View style={{marginLeft:20,margin:10,width:220}}>
               
                <View >
                    <TouchableOpacity style={{flexDirection:'row',margin:10}}
                    onPress={this.manageaccount}>
                        <FontAwesome5Icon name={'comment'} size={18} color={'grey'} />
                    <Text style={{marginLeft:10,fontWeight:'bold'}}>
                        All Activity
                    </Text>
                    </TouchableOpacity>
                </View>

                <View>
                <TouchableOpacity style={{flexDirection:'row',margin:10}}>
                        <FontAwesome5Icon name={'heart'} size={18} color={'grey'} />
                    <Text style={{marginLeft:10,fontWeight:'bold'}}>
                       Likes
                    </Text>
                    </TouchableOpacity>

                </View>
                <View>
                <TouchableOpacity style={{flexDirection:'row',margin:10}}>
                        <FontAwesome5Icon name={'comment-dots'} size={18} color={'grey'} />
                    <Text style={{marginLeft:10,fontWeight:'bold'}}>
                        Comments
                    </Text></TouchableOpacity>

                </View>

                <View>
                <TouchableOpacity style={{flexDirection:'row',margin:10}}>
                        <FontAwesome5Icon name={'comment-alt'} size={18} color={'grey'} />
                    <Text style={{marginLeft:10,fontWeight:'bold'}}>
                        Q A 
                    </Text></TouchableOpacity>

                </View>

                <View>
                <TouchableOpacity style={{flexDirection:'row',margin:10}}>
                        <FontAwesome5Icon name={'at'} size={18} color={'grey'} />
                    <Text style={{marginLeft:10,fontWeight:'bold'}}>
                        Mention
                    </Text></TouchableOpacity>

                </View>

                <View>
                <TouchableOpacity style={{flexDirection:'row',margin:10}}>
                        <FontAwesome5Icon name={'user'} size={18} color={'grey'} />
                    <Text style={{marginLeft:10,fontWeight:'bold'}}>
                        Followers
                    </Text></TouchableOpacity>

                </View>

                <View>
                <TouchableOpacity style={{flexDirection:'row',margin:10}}>
                        <FontAwesome5Icon name={'location-arrow'} size={18} color={'grey'} />
                    <Text style={{marginLeft:10,fontWeight:'bold'}}>
                        From App
                    </Text></TouchableOpacity>

                </View>
            </View></View>

        );
    }

}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#fff',

    },


});