import React,{Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppRoutes from './src/Routes/AppRoutes';

class App extends Component {
    render(){
      return (
        <NavigationContainer>
            <AppRoutes/>
        </NavigationContainer>
      )
    }
}
export default App

