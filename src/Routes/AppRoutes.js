import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoadingScreen from '../Components/LoadingContainer/LoadingScreen';
import login from '../Components/HomeContainer/login';
import loginno from '../Components/HomeContainer/login no';
import createacc from '../Components/HomeContainer/create acc';
import username from '../Components/HomeContainer/username';
import password from '../Components/HomeContainer/password';
import birthday from '../Components/HomeContainer/birthday';
import term from '../Components/HomeContainer/term';
import nation from '../Components/HomeContainer/nation';
import feeds from '../Components/HomeContainer/feeds';
import following from '../Components/HomeContainer/following';
import Activity from '../Components/HomeContainer/Activity';
import Explore from '../Components/HomeContainer/Explore';
import Camera from '../Components/HomeContainer/Camera';
import Profile1 from '../Components/HomeContainer/Profile1';
import Profile2 from '../Components/HomeContainer/Profile2';
import Profile3 from '../Components/HomeContainer/Profile3';
import settingsandprivacy from '../Components/HomeContainer/settingsandprivacy';
import manageaccount from '../Components/HomeContainer/manageaccount';
import directmessage from '../Components/HomeContainer/directmessage';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();
const Tabs=createBottomTabNavigator();


function abc(){

return(
<Tabs.Navigator >
    <Tabs.Screen name="Feeds"  component={feeds} />
    <Tabs.Screen name="Explore" component={Explore}/>
    <Tabs.Screen name="Camera" component={Camera}/>
    <Tabs.Screen name="Activity" component={Activity}/>
    <Tabs.Screen name="Profile" component={Profile1}/>
  </Tabs.Navigator>
)
}

class AppRoutes extends Component {
  render() {

    return (
      <Stack.Navigator initialRouteName="LoadingScreen">
        <Stack.Screen
          name="LoadingScreen"
          component={LoadingScreen}
          options={{
            headerShown: false,
          }}
        />
        

        <Stack.Screen
          name="login"
          component={login}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="login no"
          component={loginno}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="create acc"
          component={createacc}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="username"
          component={username}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="password"
          component={password}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="birthday"
          component={birthday}
          options={{
            headerShown: false,
          }}
        />
         <Stack.Screen
          name="nation"
          component={nation}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="term"
          component={term}
          options={{
            headerShown: false,
          }}
        />
          <Stack.Screen
          name="feeds"
          component={abc}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="following"
          component={following}
          options={{
            headerShown: false,
          }}
        />
       
        <Stack.Screen
          name="Profile1"
          component={Profile1}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="Profile2"
          component={Profile2}
          options={{
            headerShown: false,
          }}
        />  
        <Stack.Screen
          name="Profile3"
          component={Profile3}
          options={{
            headerShown: false,
          }}
        /> 
        <Stack.Screen
          name="settingsandprivacy"
          component={settingsandprivacy}
          options={{
            headerShown: false,
          }}
        /> 
         <Stack.Screen
          name="manageaccount"
          component={manageaccount}
          options={{
            headerShown: false,
          }}
        />
   
        <Stack.Screen
          name="directmessage"
          component={directmessage}
          options={{
            headerShown: false,
          }}
        /> 

         <Stack.Screen
          name="Activity"
          component={Activity}
          options={{
            headerShown: false,
          }}
        /> 
      </Stack.Navigator>
    );
  }

}
export default AppRoutes;
