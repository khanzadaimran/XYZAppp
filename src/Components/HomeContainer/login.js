
import React, { Component } from "react";
import {
      Body, Container, Content, Icon, Left, Header, Button, Footer, Text, FooterTab,
      Card, CardItem, Thumbnail, Right, Title,
} from 'native-base';
import { ScrollView, SearchBar, FlatList, TouchableHighlight, View, StyleSheet, Dimensions, TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
export default class Deal extends Component {
      handleStart = () => {
            this.props.navigation.navigate('LoadingScreen')
      }

      loginno = () => {
            this.props.navigation.navigate('login no')
      }
      feeds = () => {
            this.props.navigation.navigate('feeds')
      }
      render() {
            return (

                  <View style={styles.container}>

                        <View style={{width:30,margin:20}}>
                              <TouchableOpacity
                                    onPress={this.handleStart}>
                                    <FontAwesome5  name={'arrow-left'} size={30} color="black" />
                              </TouchableOpacity> 
                        </View>


                        <View style={{width:150,margin:10,marginLeft:20}}>
                              <Text style={{fontSize:40}}> 
                              Login
                              </Text>
                        </View>

                        <View style={{width:350,margin:20,borderWidth:1,borderRadius:5}}>
                        <TextInput style={{fontSize:20,marginLeft:10}}
                              placeholder='Email or Username' />
                        </View>

                        <View style={{width:350,marginLeft:20,borderWidth:1,borderRadius:5}}>
                        <TextInput
                              style={{fontSize:20,marginLeft:10}}
                              placeholder='Password' />
                        </View>

                        <View style={{alignItems:'center',width:200,marginLeft:100,marginTop:20}}>
                        <TouchableOpacity>
                        <Text style={{fontSize:20,fontWeight:'bold',color:'grey'}}>
                                    Forgot password?
                        </Text>
                        </TouchableOpacity>
                        </View>
                        
                        <View style={{alignItems:'center',width:250,marginLeft:75,margin:10}}>
                        <TouchableOpacity
                              onPress={this.loginno}>
                        <Text style={{fontSize:20,fontWeight:'bold',color:'blue'}}>
                                    Login with phone number
                        </Text>
                        </TouchableOpacity>
                        </View>


                        <View style={{backgroundColor:'grey',width:250,
                        height:50,marginLeft:75,marginTop:250,borderRadius:5,}}>
                        <TouchableOpacity style={{width:250,height:50,borderRadius:5,alignItems:'center'}}
                              onPress={this.feeds}>

                              <Text style={{fontWeight:'normal',fontSize:30,color:'white'}}>
                                    LOG IN
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