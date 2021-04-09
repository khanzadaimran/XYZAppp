

import React, { Component } from "react";
import {
    Body, Container, Content, Icon, Left, Header, Button, Footer, Text, FooterTab,
    Card, CardItem, Thumbnail, Right, Title,
} from 'native-base';
import { ScrollView, SearchBar, FlatList, TouchableHighlight, View, StyleSheet, Dimensions, TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import SwitchSelector from "react-native-switch-selector";


const options = [
    { label: " For You", value: " For You" },
    { label: "Following", value: "Following" },
  
  ];
export default class Deal extends Component {



    loginno = () => {
        this.props.navigation.navigate('login no')
    }

    render() {
        return (

            <View style={styles.container}>
                <SwitchSelector
    options={options}
  initial={0}
  onPress={value => console.log(`Call onPress with value: ${this.loginno}`)}
/><SwitchSelector
  initial={0}
  onPress={value => this.setState({ gender: value })}
  textColor={'#7a44cf'} //'#7a44cf'
  selectedColor={'#7a44cf'}
  buttonColor={'#7a44cf'}
  borderColor={'#7a44cf'}
  hasPadding
  options={[
    { label: "Feminino", value: "f", }, //images.feminino = require('./path_to/assets/img/feminino.png')
    { label: "Masculino", value: "m", } //images.masculino = require('./path_to/assets/img/masculino.png')
  ]}
  testID="gender-switch-selector"
  accessibilityLabel="gender-switch-selector"
/>
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