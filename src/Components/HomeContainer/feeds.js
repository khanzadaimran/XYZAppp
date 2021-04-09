

import React, { Component } from "react";
import {
    Body, Container, Content, Icon, Left, Header, Button, Footer, Text, FooterTab,
    Card, CardItem, Thumbnail, Right, Title, Input,
} from 'native-base';
import { ScrollView, SearchBar, FlatList, TouchableHighlight, View, StyleSheet, 
    Dimensions, TextInput,Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
//import {Icons} from 'react-native-vector-icons/Ionicons'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
export default class Deal extends Component {



    term = () => {
        this.props.navigation.navigate('following')
    }
    render() {
        return (

            <View style={styles.container}>


                <View style={{
                    height: 40, width: 300, marginLeft: 40,
                    marginTop: 30, borderColor: 'white', borderRadius: 50, borderWidth: .5
                }}>
                    <View style={{ width: 150, borderRadius: 25 }}>
                        <View
                            style={{ borderRadius: 50, backgroundColor: 'white', 
                            width: 150, height: 40, alignItems: 'center', marginTop: -1 }}
                            
                        >
                            <Text style={{ fontSize: 25, color: 'black' }}>
                                For You</Text>
                        </View>
                    </View>
                    <View style={{
                        width: 150, borderRadius: 25, marginLeft: 149,
                        marginTop: -40
                    }}>

                        <TouchableOpacity
                            style={{ borderRadius: 50, width: 150, height: 40, alignItems: 'center', }}
                            onPress={this.term}
                        >
                            <Text style={{ fontSize: 25, color: 'white' }}>Following</Text>
                        </TouchableOpacity></View>

                </View>

                <View style={styles.icntext3}>
                    

                    <TouchableOpacity >
                        <FontAwesome5 name={'ellipsis-h'} size={25} color="white" />
                        
                    </TouchableOpacity>
                </View>

                <View style={styles.icon1}>
                    <TouchableOpacity
                        onPress={this.ter}
                    >
                        <FontAwesome5 name={'tv'} size={25} color="white" />
                        <Text style={styles.icntext1}>Live</Text>
                    </TouchableOpacity>

                </View>

                {/* <Image
                  style={styles.image}
                  source={require('../../Assets/skip.jpg')}></Image> */}


                <View style={styles.icon2}>
                    <TouchableOpacity
                        onPress={this.ter}
                    >
                        <FontAwesome5 name={'thumbs-up'} size={35} color="white" light />
                        <Text style={styles.icntext1}>348</Text>
                    </TouchableOpacity>
                </View>


                <View style={styles.icon3}>
                    <TouchableOpacity
                        onPress={this.ter}
                    >
                        <FontAwesome5 name={'comment'} size={35} color="white" />
                        <Text style={styles.icntext1}>7</Text>
                    </TouchableOpacity>
                </View>


                <View style={styles.icon4}>
                    <TouchableOpacity
                        onPress={this.ter}
                    >
                        <FontAwesome5 name={'share'} size={35} color="white" />
                        <Text style={styles.icntext1}>Share</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.icon5}>
                    <TouchableOpacity
                        onPress={this.ter}
                    >
                        <FontAwesome5 name={'circle'} size={45} color="white" />
                    </TouchableOpacity>
                </View>

                <View style={styles.icon6}>
                    <TouchableOpacity
                        onPress={this.ter}
                    >
                        <FontAwesome5 name={'circle'} size={45} color="red" light />

                    </TouchableOpacity>
                </View>

                <View style={{ width: 220 }}>
                    <Text style={styles.icntext2}>bike experiment</Text>
                </View>

                <View style={{ width: 320, marginTop: 70, marginHorizontal: -30 }}>
                    <Text style={styles.icntext2}>#asam    #asmr    #trending   #odddlystaisfying</Text>
                </View>

                <View style={styles.icon7}>
                    <TouchableOpacity
                        onPress={this.ter}
                    >
                        <FontAwesome5 name={'music'} size={30} color="white" light />

                    </TouchableOpacity>
                </View>
                <View style={{ width: 320 }}>
                    <Text style={styles.icntext2}>Original Sound - @bike_experiment</Text>
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
        backgroundColor: 'white',
        borderWidth: 1,
        padding: 8,
        width: 170,
        borderRadius: 25,
        marginTop: 47,
        marginLeft: 40
    },

    btnn: {
        marginTop: 0,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
        borderWidth: 1,
        padding: 8,
        width: 170,
        borderRadius: 25,
        marginLeft: 170,
        marginTop: -38
    },

    text: {
        color: 'white',
        fontSize: 15,
        //color: 'black',
    },

    text2: {
        //color:'white',
        fontSize: 15,
        color: 'black',
    },

    icon1: {
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        //  backgroundColor:'red',
        width: 60,
        marginHorizontal: 320,
        marginTop: 10
    },
    icon2: {
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        // backgroundColor:'red',
        width: 60,
        marginHorizontal: 320,
        marginTop: 150,
        margin: 5
    },

    icon3: {
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        //backgroundColor:'red',
        width: 60,
        marginHorizontal: 320,
        marginTop: 5
    },

    icon4: {
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        //  backgroundColor:'red',
        width: 60,
        marginHorizontal: 320,
        marginTop: 5
    },
    icon5: {
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        // backgroundColor:'red',
        width: 60,
        marginHorizontal: 320,
        marginTop: 100
    },
    icon6: {
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        //backgroundColor:'green',
        width: 50,
        marginTop: -190
    },

    icon7: {
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        // backgroundColor:'green',
        width: 50,
        marginTop: 25,
    },



    icntext1: {
        color: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center'

    },
    icntext2: {
        color: 'white',
        fontStyle: 'italic',
        fontSize: 20,
        marginLeft: 55,
        marginTop: -30,
        // backgroundColor:'red',
        fontSize: 17
    },


    icntext: {
        color: 'white',
        fontSize: 40,
        height: 60,
        // backgroundColor:'red'
    },
    icntext3: {
        color: 'white',
        //backgroundColor:'red',
        justifyContent:'center',
        width: 30,
        height: 20,
        marginLeft: 350,
        marginBottom: 50,
        marginTop: -35,

    }





});