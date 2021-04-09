

import React, { Component } from "react";
import {
    Body, Container, Content, Icon, Left, Header, Button, Footer, Text, FooterTab,
    Card, CardItem, Thumbnail, Right, Title,
} from 'native-base';
import { ScrollView, SearchBar, FlatList, TouchableHighlight, View, StyleSheet, Dimensions, TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default class Deal extends Component {
  
    login = () => {
        this.props.navigation.navigate('login')
    }
    render() {
        return (

            <View style={styles.container}>
                <View style={{ width: 30, margin: 20 }}>
                    <TouchableOpacity
                        onPress={this.login}>
                        <FontAwesome5 name={'arrow-left'} size={30} color="black" />
                    </TouchableOpacity>
                </View>

                <View style={{ width: 150, margin: 20 }}>
                    <Text style={{  fontSize: 40 }}>
                        Login
                              </Text>
                </View>
                <View style={{ width: 350, margin: 20, borderWidth: 1, borderRadius: 10 }}>
                    <TextInput style={{ fontSize: 20, marginLeft: 10 }}
                        placeholder='Phone number' />
                </View>

                <View style={{ alignItems: 'center', width: 250, marginLeft: 75, margin: 10 }}>
                    <TouchableOpacity
                        onPress={this.login}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'blue' }}>
                            Login in with Email
                        </Text>
                    </TouchableOpacity>
                </View>

                <View style={{ backgroundColor: 'grey',width: 250,
                 height: 50, marginLeft: 75, borderRadius: 5,marginTop:320 }}>
                    <TouchableOpacity style={{width:250,height:50,borderRadius:5,alignItems:'center'}}
                        onPress={this.feeds}>
                        <Text style={{ fontWeight: 'normal', fontSize: 30,color:'white' }}>
                            VERIFY
                              </Text>
                    </TouchableOpacity>
                </View>
                <View style={{alignItems:'center',margin:10}}>
                <Text style={{fontSize:20,color:'grey'}}>
                    Message and data rates may apply</Text>
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