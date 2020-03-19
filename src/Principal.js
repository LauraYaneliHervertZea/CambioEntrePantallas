import React,{Component,useState,useEffect} from 'react';
import {View,Image, StyleSheet, Alert,Button, TextInput} from 'react-native';
import { Container,Text, Header,ActivityIndicator, Content, Card, CardItem,Body,Item, Label, Input,Icon} from "native-base";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Indicator from './Indicadores';
import SwitchE from './SwitchE';
// **********************************
// HERVERT ZEA LAURA YANELI
//        TI02SM-18
//***********************************


function Principal({route,navigation}){
 
  const [isVisible, setIsVisible] = useState(true);
    const toggleVisible = () => {
        setIsVisible(!isVisible);
    };

    useEffect(() => {
        setTimeout(() => {
            toggleVisible();
        }, 1000);
    }, []);
  React.useEffect(() => {
    if (route.params?.pass && route.params?.user){
    }
  }, [route.params?.pass],[route.params?.user]);
  
  return (
    <View style={misEstilos.container}>
      <Indicator isVisible={isVisible}/>
       <Image style={misEstilos.imgStyle}source={{uri: 'https://www.wasapeamos.com/wp-content/uploads/2015/12/foto-de-perfil.jpg'}}></Image>
      <Text >Hola: {route.params?.pass}</Text>
      <Text >Tu contraseña es: {route.params?.user}</Text>
            <Button
              onPress={() => navigation.navigate('Login')}
              style={misEstilos.boton}
              title="Log Out"
            />
            <Button
              onPress={() => navigation.navigate('SwitchE')}
              style={misEstilos.boton}
              title="Notificaciones"
            />
    </View>
  );
 
}


const misEstilos = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#E5E7E9',
      flexDirection: 'column', 
      justifyContent: 'center',
      alignItems: 'center',
  },
  imgStyle:{
    width: 100,
    height: 100,
    marginTop: 10,
  }

});
 
export default Principal;