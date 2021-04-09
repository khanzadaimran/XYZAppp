

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

    
    settingsandprivacy = () => {
        this.props.navigation.navigate('settingsandprivacy')
    }
    render() {
        return (
            
            <View>
               
               
                <View style={{
                    height: 55, backgroundColor: '#d7ddda', elevation: 15, flexDirection: 'row',
                    justifyContent: 'space-between'
                }}>
                    <View style={{ marginLeft: 15, margin: 10 }} >
                        <TouchableOpacity
                            onPress={this.settingsandprivacy} >
                            <FontAwesome5Icon name={'arrow-left'} size={25} />
                        </TouchableOpacity>
                    </View >
                    <View style={{ margin: 10, marginRight: 100 }}>
                        
                            <Text style={{ fontWeight: 'bold', fontSize: 20 }}>
                            Manage Account
                        </Text>
                           
                    
                    </View>

                </View>
               
               
                <View style={{marginLeft:20,margin:10,width:220}}>
               
                <View style={{margin:10}}>
                    <Text style={{fontWeight:'bold',color:'grey'}}>
                        Account information
                    </Text>
                </View>
                

                <View >
                    <TouchableOpacity style={{flexDirection:'row',margin:10}}>
                    
                    <Text style={{marginLeft:10}}>
                        Phone number
                    </Text>
                    </TouchableOpacity>
                </View>

                <View>
                <TouchableOpacity style={{flexDirection:'row',margin:10}}>
                     
                    <Text style={{marginLeft:10}}>
                       Email
                    </Text>
                    </TouchableOpacity>

                </View>

                <View>
                <TouchableOpacity style={{flexDirection:'row',margin:10}}>
                     
                    <Text style={{marginLeft:10}}>
                        password
                    </Text></TouchableOpacity>

                </View>

                <View style={{margin:10}}>
                    <Text style={{fontWeight:'bold',color:'grey'}}>
                        Account Control
                    </Text>
                </View>

                <View>
                <TouchableOpacity style={{flexDirection:'row',margin:10}}>
                        
                    <Text style={{marginLeft:10}}>
                        Switch to Pro Account
                    </Text></TouchableOpacity>

                </View>

                <View>
                <TouchableOpacity style={{flexDirection:'row',margin:10}}>
                       
                    <Text style={{marginLeft:10}}>
                        Delete Account
                    </Text></TouchableOpacity>

                </View>

               
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
