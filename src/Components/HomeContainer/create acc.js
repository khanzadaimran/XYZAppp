

import React, { Component } from "react";
import {
    Body, Container, Content, Icon, Left, Header, Button, Footer, Text, FooterTab,
    Card, CardItem, Thumbnail, Right, Title,
} from 'native-base';
import { ScrollView, SearchBar, FlatList, TouchableHighlight, View, StyleSheet, Dimensions, TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default class Deal extends Component {
  
    loginno = () => {
        this.props.navigation.navigate('login no')
  }
  username= () => {
    this.props.navigation.navigate('username')
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

                <View style={{width: 180, margin: 20 }}>
                    <Text style={{  fontSize: 30 }}>
                       Your email
                              </Text>
                </View>
                <View style={{ width: 350, margin: 20, borderWidth: 1, borderRadius: 5 }}>
                    <TextInput style={{ fontSize: 20, marginLeft: 10 }}
                        placeholder='Email Address' />
                </View>

                <View style={{ alignItems: 'center', width: 250, marginLeft: 75, margin: 10 }}>
                    <TouchableOpacity
                        onPress={this.loginno}>
                        <Text style={{ fontSize: 15,color: 'blue' }}>
                            Sign up with Phone Number
                        </Text>
                    </TouchableOpacity>
                </View>

                <View style={{ backgroundColor: 'darkblue',width: 350,
                 height: 50,marginLeft:20, borderRadius: 5,marginTop:380,
                 alignItems:'center' }}>
                    <TouchableOpacity style={{width:250,height:50,borderRadius:5,alignItems:'center'}}
                        onPress={this.username}>
                        <Text style={{ fontWeight: 'normal', fontSize: 30,color:'white' }}>
                          NEXT
                              </Text>
                    </TouchableOpacity>
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