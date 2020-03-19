import React,{Component} from 'react';
import {View, StyleSheet, Alert,Button,Switch, TextInput} from 'react-native';
import { Container,Text, Header,ActivityIndicator, Content, Card, CardItem,Body,Item, Label, Input,Icon} from "native-base";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Indicator from './Indicadores';
import Constants from 'expo-constants';

// **********************************
// HERVERT ZEA LAURA YANELI
//        TI02SM-18
//***********************************


function Login({navigation}) {

  const [postUser, setPostUser] = React.useState('');
  const [postPass, getPostPass] = React.useState('');
  return (
       <Container>
        <Header />
        <Content padder contentContainerStyle = {misEstilos.content}>
          <Card>
            <CardItem header bordered>
              <Text style= {misEstilos.textCenter}>Iniciar  sesión</Text>
            </CardItem>
            <CardItem bordered>
              <Body style = {misEstilos.body}>
                <Item inlineLabel>
                <Icon type= 'FontAwesome' name= 'user'></Icon>
                  <Input placeholder= 'Usuario'
                             value={postUser}
                             onChangeText={setPostUser}/>
                </Item>
                <Item inlineLabel last>
                <Icon type= 'FontAwesome' name= 'lock'></Icon>
                  <Input placeholder= 'Contraseña'
                  type='text'
                   value={postPass}
                   onChangeText={getPostPass}/>
                </Item>
              </Body>
            </CardItem>
            <CardItem>
            <Button
              onPress={() => navigation.navigate('Principal',{pass:postUser,user:postPass})}
              style={misEstilos.boton}
              title="Acceder" 
            />
            
            </CardItem>
            <CardItem>
            <Button
              onPress={() => navigation.navigate('Notificaciones',{pass:postUser,user:postPass})}
              style={misEstilos.boton}
              title="Notificaciones" 
            />
            
            </CardItem>
            <CardItem footer bordered style = {misEstilos.boton}>
            <Button 
            title="Registrarse" 
            onPress={() => navigation.navigate('Registro')}  
              /> 
            </CardItem>
          </Card>

        </Content>
      </Container>
  );
}
const misEstilos = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
  },
  textCenter:{
    textAlign: 'center',
    width: '100%',
  },
  body: {
    paddingVertical: 35,
  },
    boton: {
    marginLeft: '50%',
    marginTop: Constants.statusBarHeight,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },

  
});

export default Login