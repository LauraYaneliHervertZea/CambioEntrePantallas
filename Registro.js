import React,{Component} from 'react';
import {View, StyleSheet, Alert, TextInput} from 'react-native';
import { Container,Button,Text, Header, Content, Card, CardItem,Body,Item, Label, Input,Icon} from "native-base";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import  api from '../src/data/api';
// **********************************
// HERVERT ZEA LAURA YANELI
//        TI02SM-18
//***********************************
class Registro extends Component {
    constructor(props){
    super(props)
    this.state={
      user: '',
      pass: '',
      email: ''
    }
  }

  register = () => api.registerData(this.state.user,this.state.pass,this.state.email);
 
  userRegister = () =>{ 

    const {user} = this.state;
    const {pass} = this.state;
    const {email} = this.state;

    fetch('http://192.168.1.71/cambioentrepantallas/data/registro.php',{ 
      method: 'post',
      header: {
        'Accept': 'application/json',
        'Content-type': 'application/json'
      },
      body:JSON.stringify({
        pUsuario: user,
        pPass: pass,
        pEmail: email
      })

    })
    .then((response) => response.text())
      .then((responseData) =>{
       
        Alert.alert("Registro exitoso");
        
      
      })
      .catch((error)=>{
          console.error(error);
      
      });
      
  }
 
  render(){
  const navegar = this.props.navigation;
    return(
       <Container>
        <Header />
        <Content padder contentContainerStyle = {misEstilos.content}>
          <Card>
            <CardItem header bordered>
              <Text style= {misEstilos.textCenter}>Llena los siguientes campos</Text>
            </CardItem>
            <CardItem bordered>
              <Body style = {misEstilos.body}>
                <Item inlineLabel>
                  <Icon type= 'FontAwesome' name= 'user'></Icon>
                  <Input placeholder= 'Usuario'/>
                </Item>
                <Item inlineLabel last>
                  <Icon type= 'MaterialCommunityIcons' name= 'email'></Icon>
                  <Input placeholder= 'Correo'/>
                </Item>
                <Item inlineLabel last>
                  <Icon type= 'FontAwesome' name= 'lock'></Icon>
                  <Input placeholder= 'Contraseña'/>
                </Item>
                <Item inlineLabel last>
                  <Icon type= 'FontAwesome' name= 'lock'></Icon>
                  <Input placeholder= 'Confirmar contraseña'/>
                </Item>
              </Body>
            </CardItem>
            <Button success style= {misEstilos.boton} onPress={() => navegar.navigate                   ('Movies')}>
            <Text>API Movies</Text>
             </Button> 
            <Button success style= {misEstilos.boton} onPress={() => navegar.navigate                   ('Disney')}>
            <Text>API Disney</Text>
             </Button> 
            <CardItem footer bordered>
             <Button success style= {misEstilos.boton} onPress={() => navegar.navigate                   ('Login')}>
            <Text>Iniciar Sesión</Text>
             </Button> 
             
            </CardItem>
          </Card>
          <Button full>
            
            <Text>Registrarse con número</Text>
          </Button>
        </Content>
        
      </Container>
    );
  }
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
    paddingVertical: 35
  }, 
  boton: {
         marginLeft: '60%',
         borderBottomColor: '#737373',
    }

});



export default Registro;