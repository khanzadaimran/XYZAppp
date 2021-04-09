

import React, { Component } from "react";
import {
    Body, Container, Content, Icon, Left, Header, Button, Footer, Text, FooterTab,
    Card, CardItem, Thumbnail, Right, Title,
} from 'native-base';
import { ScrollView, SearchBar, FlatList, TouchableHighlight, View, StyleSheet, Dimensions, TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default class Deal extends Component {
  
    passw = () => {
        this.props.navigation.navigate('password')
    }

    render() {
        return (

            <View style={styles.container}>
               

                <View style={{width: 350, margin: 20,marginTop:100 }}>
                    <Text style={{  fontSize: 30 }}>
                       What should we call you?
                              </Text>
                </View>
                <View style={{ width: 350, margin: 20, borderWidth: 1, borderRadius: 5 }}>
                    <TextInput style={{ fontSize: 20, marginLeft: 10 }}
                        placeholder='username' />
                </View>

                <View style={{ alignItems: 'center', width: 250, marginLeft: 75, margin: 10 }}>
                
                        <Text style={{ fontSize: 15,color: 'grey' }}>
                          Choose a unique Username
                        </Text>
                   
                </View>

                <View style={{ backgroundColor: 'darkblue',width: 350,
                 height: 50,marginLeft:20, borderRadius: 5,marginTop:380,
                 alignItems:'center' }}>
                    <TouchableOpacity style={{width:250,height:50,borderRadius:5,alignItems:'center'}}
                        onPress={this.passw}>
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