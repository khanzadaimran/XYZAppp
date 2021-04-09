

import React, { Component } from "react";
import {
    Body, Container, Content, Icon, Left, Header, Button, Footer, Text, FooterTab,
    Card, CardItem, Thumbnail, Right, Title,
} from 'native-base';
import { ScrollView, SearchBar, FlatList, TouchableHighlight, View, StyleSheet, Dimensions, TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import FontAwesome5Icon from "react-native-vector-icons/FontAwesome5";

export default class Deal extends Component {



    Activity = () => {
        this.props.navigation.navigate('Activity')
    }

    render() {
        return (

            <View >
                    <View style={{
                    height: 55,backgroundColor: '#d7ddda',elevation: 15,flexDirection: 'row',
                    justifyContent: 'space-between'}}>

                     <View style={{ marginLeft: 15, margin: 10 }} >
                        <TouchableOpacity
                            onPress={this.Activity} >
                            <FontAwesome5Icon name={'arrow-left'} size={25} />
                        </TouchableOpacity>
                    </View >
                   
                    <View style={{ margin: 12 ,marginLeft:60}}>
                        <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-between', width: 180 }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 20 }}>
                               Direct Messages
                        </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ marginRight: 20, margin: 12 }}>
                        <TouchableOpacity
                        onPress={this.settingsandprivacy} >
                            <FontAwesome5Icon name={'plus'} size={25} />
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={{ justifyContent:'center',alignItems:'center',marginTop:300}}>
                    <Text style={{fontWeight:'bold'}}>
                        Message your friends
                    </Text>

                    <Text style={{fontWeight:'bold',color:'grey'}}>
                        Share vedios or start a conversation
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

    },


});