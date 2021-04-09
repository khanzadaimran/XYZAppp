

import React, { Component } from "react";
import {
    Body, Container, Content, Icon, Left, Header, Button, Footer, Text, FooterTab,
    Card, CardItem, Thumbnail, Right, Title, Input,
} from 'native-base';
import { ScrollView, SearchBar, FlatList, TouchableHighlight, View, StyleSheet, Dimensions, TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class Deal extends Component {



    term = () => {
        this.props.navigation.navigate('feeds')
    }
    render() {
        return (

            <View style={styles.container}>

                 <View style={{ height:40,width:300,marginLeft:50,
                 marginTop:30,borderColor:'white',borderRadius:50,borderWidth:.75}}>
                <View style={{width:150,borderRadius:25}}>
                    <TouchableOpacity
                        style={{borderRadius:50,width:150,height:40,alignItems:'center',marginTop:-1}}
                        onPress={this.term}
                    >
                        <Text style={{fontSize:25,color:'white' }}>
                        For You</Text>
                    </TouchableOpacity>
                    </View>
                    <View style={{width:150,borderRadius:25,marginLeft:149,
                        marginTop:-40}}>

                    <View
                    style={{borderRadius:50,width:150,height:40,alignItems:'center',
                backgroundColor:'white'}}
                        onPress={this.ter}
                    >
                        <Text style={{fontSize:25,color:'black'}}>Following</Text>
                    </View>
                    </View>
               
                </View>
                {/* <View style={styles.btn}>
                    <TouchableOpacity
                        onPress={this.ter}
                    >
                        <Text style={styles.textf}>For You</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.btnn} >
                    <TouchableOpacity
                        onPress={this.ter}
                    >
                        <Text style={styles.text}>Following</Text>
                    </TouchableOpacity>
                </View> */}

                <View style={styles.view1}>
                    <Text style={{color:'white',fontSize: 25,}}>
                        Find your Community
                    </Text>
                </View>

                <View style={styles.view2}>
                    <Text style={{color:'grey',fontSize: 15}}>
                        When you follow people, you'll dee their vedios here
                    </Text>
                </View>

                <View style={styles.view3}>
                    <Text style={{color:'grey',fontSize: 18}}>
                        SUGGESTION FOR YOU
                    </Text>
                </View>
            </View>

        );
    }

}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: 'black',

    },
    btn: {
        marginTop: 0,
        //justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
        borderWidth: 1,
        padding: 8,
        width: 170,
        borderRadius: 25,
        marginTop: 47,
        marginLeft: 40,
        borderColor: 'white'

    },

    btnn: {
        marginTop: 0,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        borderWidth: 1,
        padding: 8,
        width: 170,
        borderRadius: 25,
        marginLeft: 170,
        marginTop: -38,
        borderColor: 'white'
    },

    text: {
        //  color:'white',
        fontSize: 15,
        color: 'black',
    },

    textf: {
        color: 'white',
        fontSize: 15,
        // color: 'black',
    },

    
    view1:{
        width:240,
        height:35,
        marginTop:50,
        justifyContent:'center',
        alignItems:'center',
        marginLeft:80
    },
    view2:{
        height:40,
        width:280,
        marginTop:10,
        justifyContent:'center',
        alignItems:'center',
        marginLeft:65
        
    },

    view3:{
        height:25,
        width:200,
        marginTop:40,
        justifyContent:'center',
        alignItems:'center',
        marginLeft:25,
    }
});