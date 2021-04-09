

import React, { Component } from "react";
import {
    Body, Container, Content, Icon, Left, Header, Button, Footer, Text, FooterTab,
    Card, CardItem, Thumbnail, Right, Title, Input,
} from 'native-base';
import { ScrollView, SearchBar, FlatList, TouchableHighlight, View, StyleSheet, Dimensions, TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class Deal extends Component {



    term = () => {
        this.props.navigation.navigate('term')
    }
    render() {
        return (

            <View style={styles.container}>

                <Text style={styles.text1}>
                    Where are you from?

                </Text >
               
                <Text style={styles.text2}>
                Help us find the right sounds for you!


                </Text>
                <TextInput
                    style={styles.input}
                    placeholder='Pakistan' />

                <TouchableOpacity
                    style={styles.btn}
                    onPress={this.term}
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

    text1: {
        fontSize: 25,
        fontStyle: 'normal',
        color: 'black',
        marginLeft: 80,
        marginTop:100

    },
    text2: {
        fontSize: 15,
        fontStyle: 'normal',
        color: 'black',
        marginLeft: 70,
        marginTop:10
    },
    input: {
        borderWidth: 1,
        borderColor: 'black',
        padding: 10,
        margin: 30,
        width: 330,
        fontSize: 20,
        marginTop:400,
        borderRadius: 10

    },
    
    btn: {
        marginTop:0,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'darkblue',
        borderWidth: 1,
        padding: 10,
        width: 330,
        borderRadius: 10,
        margin:30
    },
    text: {
        fontSize: 20,
        color: "white",
    },

});