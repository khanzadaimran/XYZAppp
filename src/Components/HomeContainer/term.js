

import React, { Component } from "react";
import {
    Body, Container, Content, Icon, Left, Header, Button, Footer, Text, FooterTab,
    Card, CardItem, Thumbnail, Right, Title,
} from 'native-base';
import { ScrollView, SearchBar, FlatList, TouchableHighlight, View, StyleSheet, Dimensions, TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class Deal extends Component {



    loginno = () => {
        this.props.navigation.navigate('login no')
    }
    
    feeds = () => {
        this.props.navigation.navigate('feeds')
    }

    render() {
        return (

            <View style={styles.container}>
                <View style={styles.te}>

                    <Text style={styles.text1}>
                        XYZ APP
                </Text>

                    <Text style={styles.text2}>
                        Terms of Service and
                </Text>

                    <Text style={styles.text3}>
                        Privacy Policy
                </Text>
                </View>


                <View style={styles.tex}>

                    <Text style={styles.text4}>
                        Read Terms of Service
               </Text>

                    <Text style={styles.text5}>
                        Read Privacy Policy
                </Text>
                </View>

                

                    <Text style={styles.to}>
                       By clicking 'NEXT', I acknowlodge that i have read and I agree to
                       the XYZ APP Terms of Service and Privacy Policy.
                     </Text>
                


                <TouchableOpacity
                    style={styles.btn}
                    onPress={this.feeds}
                >
                    <Text style={styles.text}>NEXT</Text>
                </TouchableOpacity>
            </View>

        );
    }

}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#fff',

    },

    te: {
        marginTop: 200

    },

    tex: {
        marginTop: 100

    },
   
    to: {
        fontSize:13,
        marginTop: 50,
        marginLeft:40

    },

    text1: {
        fontSize: 30,
        fontStyle: 'normal',
        color: 'black',
        marginLeft: 140

    },
    text2: {
        fontSize: 30,
        fontStyle: 'normal',
        color: 'black',
        marginLeft: 55
    },
    text3: {
        fontSize: 30,
        fontStyle: 'normal',
        color: 'black',
        marginLeft: 110

    },
    text4: {
        fontSize: 30,
        fontStyle: 'normal',
        color: 'blue',
        marginLeft: 55

    },
    text5: {
        fontSize: 30,
        fontStyle: 'normal',
        color: 'blue',
        marginLeft: 80

    },
    btn: {
        marginTop: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'darkblue',
        borderWidth: 1,
        padding: 10,
        width: 320,
        borderRadius: 10,
        marginLeft: 40
    },
    text: {
        fontSize: 20,
        color: "white",
    },

});