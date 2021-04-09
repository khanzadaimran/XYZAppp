

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
    manageaccount = () => {
        this.props.navigation.navigate('manageaccount')
    }
    render() {
        return (
            
            <View>
               
               <ScrollView>
                <View style={{
                    height: 55, backgroundColor: '#d7ddda', elevation: 15, flexDirection: 'row',
                    justifyContent: 'space-between'
                }}>
                    <View style={{ marginLeft: 15, margin: 10 }} >
                        <TouchableOpacity
                            onPress={this.Profile2} >
                            <FontAwesome5Icon name={'arrow-left'} size={25} />
                        </TouchableOpacity>
                    </View >
                    <View style={{ margin: 10, marginRight: 90 }}>
                        
                            <Text style={{ fontWeight: 'bold', fontSize: 20 }}>
                                settings and privacy
                        </Text>
                           
                    
                    </View>

                </View>
               
               
                <View style={{marginLeft:20,margin:10,width:220}}>
               
                <View style={{margin:10}}>
                    <Text style={{fontWeight:'bold',color:'grey'}}>
                        ACCOUNT
                    </Text>
                </View>
                

                <View >
                    <TouchableOpacity style={{flexDirection:'row',margin:10}}
                    onPress={this.manageaccount}>
                        <FontAwesome5Icon name={'user'} size={18} color={'grey'} />
                    <Text style={{marginLeft:10}}>
                        Manage account
                    </Text>
                    </TouchableOpacity>
                </View>

                <View>
                <TouchableOpacity style={{flexDirection:'row',margin:10}}>
                        <FontAwesome5Icon name={'lock'} size={18} color={'grey'} />
                    <Text style={{marginLeft:10}}>
                       Privacy
                    </Text>
                    </TouchableOpacity>

                </View>

                <View>
                <TouchableOpacity style={{flexDirection:'row',margin:10}}>
                        <FontAwesome5Icon name={'shield-alt'} size={18} color={'grey'} />
                    <Text style={{marginLeft:10}}>
                        Security and login
                    </Text></TouchableOpacity>

                </View>

                <View>
                <TouchableOpacity style={{flexDirection:'row',margin:10}}>
                        <FontAwesome5Icon name={'balance-scale-left'} size={18} color={'grey'} />
                    <Text style={{marginLeft:10}}>
                        Balance
                    </Text></TouchableOpacity>

                </View>

                <View>
                <TouchableOpacity style={{flexDirection:'row',margin:10}}>
                        <FontAwesome5Icon name={'barcode'} size={18} color={'grey'} />
                    <Text style={{marginLeft:10}}>
                        Tikcode
                    </Text></TouchableOpacity>

                </View>

                <View>
                <TouchableOpacity style={{flexDirection:'row',margin:10}}>
                        <FontAwesome5Icon name={'share'} size={18} color={'grey'} />
                    <Text style={{marginLeft:10}}>
                        Share profile
                    </Text></TouchableOpacity>

                </View>

                <View>
                    <Text style={{fontWeight:'bold',color:'grey'}}>
                        CONTENT AND ACTIVITY
                    </Text >

                </View>

                <View>
                <TouchableOpacity style={{flexDirection:'row',margin:10}}>
                        <FontAwesome5Icon name={'bell'} size={18} color={'grey'} />
                    <Text style={{marginLeft:10}}>
                        Push notification
                    </Text></TouchableOpacity>

                </View>

                <View>
                <TouchableOpacity style={{flexDirection:'row',margin:10}}>
                        <FontAwesome5Icon name={'language'} size={18} color={'grey'} />
                    <Text style={{marginLeft:10}}>
                        App language
                    </Text></TouchableOpacity>

                </View>

                <View>
                <TouchableOpacity style={{flexDirection:'row',margin:10}}>
                        <FontAwesome5Icon name={'tv'} size={18} color={'grey'} />
                    <Text style={{marginLeft:10}}>
                       Content preferences
                    </Text></TouchableOpacity>

                </View>

                <View>
                <TouchableOpacity style={{flexDirection:'row',margin:10}}>
                        <FontAwesome5Icon name={'digital-tachograph'} size={18} color={'grey'} />
                    <Text style={{marginLeft:10}}>
                        Digital Wellbeing
                    </Text></TouchableOpacity>

                </View>

                <View>
                <TouchableOpacity style={{flexDirection:'row',margin:10}}>
                        <FontAwesome5Icon name={'home'} size={18} color={'grey'} />
                    <Text style={{marginLeft:10}}>
                        Family pairing
                    </Text></TouchableOpacity>

                </View>

                <View>
                <TouchableOpacity style={{flexDirection:'row',margin:10}}>
                        <FontAwesome5Icon name={'circle-notch'} size={18} color={'grey'} />
                    <Text style={{marginLeft:10}}>
                        Accessibilty
                    </Text></TouchableOpacity>

                </View>

                <View>
                    <Text style={{fontWeight:'bold',color:'grey',margin:10}}>
                        CACHE AND CELLULAR DATA
                    </Text >

                </View>

                <View>
                <TouchableOpacity style={{flexDirection:'row',margin:10}}>
                        <FontAwesome5Icon name={'trash-alt'} size={18} color={'grey'} />
                    <Text style={{marginLeft:10}}>
                        Free up space
                    </Text></TouchableOpacity>

                </View>

                <View>
                <TouchableOpacity style={{flexDirection:'row',margin:10}}>
                        <FontAwesome5Icon name={'signal'} size={18} color={'grey'} />
                    <Text style={{marginLeft:10}}>
                        Data saver
                    </Text></TouchableOpacity>

                </View>

                <View>
                    <Text style={{fontWeight:'bold',color:'grey'}}>
                        SUPPORT
                    </Text>

                </View>
               
                </View></ScrollView>
               
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
