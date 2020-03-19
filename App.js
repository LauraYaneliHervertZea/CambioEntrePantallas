import React from 'react';
import {View, StyleSheet, Alert, TextInput,Button,} from 'react-native';
import { Container,Text, Header, Content, Card, CardItem,Body,Item, Label, Input,Icon} from "native-base";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Registro from './src/Registro';
import Login from './src/Login';
import Principal from './src/Principal';
import Indicator from './src/Indicadores';
import SwitchE from './src/SwitchE';
import Movies from './src/Movies';
import Disney from './src/Disney';
import Notificaciones from './src/Notificaciones';
const Stack = createStackNavigator();

const App:  () => React$Node = () =>{
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen 
        name="Login" 
        component={Login} />
        <Stack.Screen 
        name="Registro" 
        component={Registro} />
         <Stack.Screen 
        name="switchE" 
        component={SwitchE} />
         <Stack.Screen 
        name="Principal" 
        component={Principal} />
        <Stack.Screen 
        name="Notificaciones" 
        component={Notificaciones} />
        <Stack.Screen 
        name="Movies" 
        component={Movies} />
        <Stack.Screen 
        name="Disney" 
        component={Disney} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};






export default App;