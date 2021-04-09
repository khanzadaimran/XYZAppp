

import React, { Component } from "react";
import {
    Body, Container, Content, Icon, Left, Header, Button, Footer, Text, FooterTab,
    Card, CardItem, Thumbnail, Right, Title,
} from 'native-base';
import {
    ScrollView, SearchBar, FlatList, TouchableHighlight, View, StyleSheet, Dimensions,
    TextInput,Switch
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import FontAwesome5Icon from "react-native-vector-icons/FontAwesome5";


export default function App() {
    const [ isSwitchEnabled , setSwitch]= React.useState(false)



   
        return (

            
            <View style={styles.container}>
            
            <View style={{
                    height: 55, backgroundColor: '#d7ddda', elevation: 15, flexDirection: 'row',}}>
                    <View style={{ marginLeft: 15, margin: 10 }} >
                        <TouchableOpacity
                            >
                            <FontAwesome5Icon name={'arrow-left'} size={25} />
                        </TouchableOpacity>
                    </View >
                    <View style={{ margin: 10 }}>
                        
                            <Text style={{ fontWeight: 'bold', fontSize: 20 }}>
                                Share Vedio
                        </Text>
                    </View>
            </View>


            <View style={{ flexDirection:'row',margin:20}}>

            <View style={{ height:150,width:120,borderColor:'red',borderRadius:20,borderWidth:2}}>
     
            </View>
            <View>

            <View style={{width:200,height:80,margin:10}}>

                <TextInput
                placeholder ='Add a Caption,#hasstags and @mention to help get your
                video trending on XYZ App..'>
                </TextInput>
            </View>
            <View style={{ margin:5 ,flexDirection:'row',alignItems:'center'}}>
            <FontAwesome5Icon name={'hashtag'} size={30} color={'grey'} />
            <TextInput style={{width:185,height:40}}
                placeholder ='Add hasstags'>
                </TextInput>
            </View>

            
            </View>
            </View>

            <View style={{ flexDirection:'row',justifyContent:'space-between',margin:10}}>
                <Text style={{ fontWeight:'normal',fontSize:18}}>
                    Sound title
                </Text>
                <Text style={{ fontWeight:'bold',fontSize:18}}>
                    Orignal Sound - @xyzakaka.....
                </Text>
                <TouchableOpacity>
                <FontAwesome5Icon name={'angle-right'} size={25} />
                </TouchableOpacity>

            </View>

            <View style={{ flexDirection:'row',justifyContent:'space-between',margin:10}}>
                <Text style={{ fontWeight:'normal',fontSize:18}}>
                    who can see this post
                </Text>
                <Text style={{ fontWeight:'bold',fontSize:18,marginLeft:100}}>
                   Public
                </Text>
                <TouchableOpacity>
                <FontAwesome5Icon name={'angle-right'} size={25} />
                </TouchableOpacity>

            </View>
            <View style={{ flexDirection:'row',justifyContent:'space-between',margin:10}}>
                <Text style={{ fontWeight:'normal',fontSize:18}}>
                    Allow comments
                </Text>
                <Switch
                value={isSwitchEnabled}
                onValueChange={(value)=> setSwitch(value)}
                />
                
            </View>
            <View style={{ flexDirection:'row',justifyContent:'space-between',margin:10}}>
                <Text style={{ fontWeight:'normal',fontSize:18}}>
                    Allow duet
                </Text>

                <Switch
                value={isSwitchEnabled}
                onValueChange={(value)=> setSwitch(value)}
                />

            </View>
               
               <View style={{flexDirection:'row',justifyContent:'space-evenly',marginTop:180}}>

                   <View style={{elevation:100, backgroundColor:'#d7ddda', width:150,height:50,justifyContent:'center'}}>
                       <TouchableOpacity style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                       <FontAwesome5Icon name={'download'} size={25} />
                         <Text style={{fontWeight:'bold',fontSize:20}}>
                             DOWNLOAD
                         </Text>
                       </TouchableOpacity>
                   </View>
                    
                    <View style={{elevation:100, backgroundColor:'#d7ddda',width:150,height:50,justifyContent:'center'}}>
                    <TouchableOpacity style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                         <Text style={{fontWeight:'bold',fontSize:20}}>
                            Post
                         </Text>
                       </TouchableOpacity>
                    </View>

               </View>
        
        </View>

        );
    }



const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#fff',

    },

});