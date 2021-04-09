import React, { PureComponent } from "react";
import { View, Image, StyleSheet, Text } from "react-native";
import { TouchableOpacity } from 'react-native-gesture-handler';
class LoadingScreen extends PureComponent {

    handleStartt = () => {
        this.props.navigation.navigate('create acc')
    }
    handleStart = () => {
        this.props.navigation.navigate('login')
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.Tet}>
                    XYZ App
                  </Text>
                   <View style={styles.containerB}>
                <TouchableOpacity
                    style={styles.btn}
                    onPress={this.handleStartt}
                >
                    <Text style={styles.text}>CREATE ACCOUNT</Text>
                </TouchableOpacity>
                
                <TouchableOpacity
                    style={styles.btn}
                    onPress={this.handleStart}
                >
                    <Text style={styles.text}>LOGIN</Text>
                </TouchableOpacity>
                </View>
                </View>
        )
    }
}
export default LoadingScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
     
    },
    
    Tet:
    {
        fontSize: 50,
        fontStyle: 'normal',
        fontWeight: 'bold',
        color: 'black', 
       marginTop:250
     
    },
    containerB: {
        flex:.1,
        padding : 80,
        justifyContent:'flex-end',
        marginTop:0,
        marginBottom:5,
    
    },
    btn: {
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'darkblue',
        borderWidth: 1,
        padding: 15,
        borderRadius: 5,
    },
    text: {
        fontSize: 20,
        color: "white",
        
      
    }
})