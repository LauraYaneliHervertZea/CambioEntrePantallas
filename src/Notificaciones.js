import React, { Component } from 'react';
import { View,Button,StyleSheet,Switch ,Slider,Text,Image,TouchableOpacity} from 'react-native';


export default function Notificaciones ({navigation}) {
      const [isSwitchEnabled,setSwitch] = React.useState(false);
      const [value,setState] = React.useState(0);

      return (
      <View styles={misEstilos.container}>  
         <View>
           <Text >Recibir notificaciones</Text>
           <Switch 
           value={isSwitchEnabled}
           onValueChange={(value) => setSwitch(value)}
           />
         <Image
          style={{width: 400, height: 300}}
          source={{uri: 'https://img.freepik.com/vector-gratis/notificacion-diseno-plano_23-2147715931.jpg?size=338&ext=jpg'}} />
           </View>
           <View>
           <Text >Brillo de pantalla</Text>
           <Slider
            maximumValue={100}
            minimumValue={0}
            minimumTrackTintColor="#307ecc"
            maximumTrackTintColor="#000000"
           step={1} 
            value={value}
            onValueChange={value => setState(value)}
            />
  <Text>Brillo: {value}</Text>
            <Button
              title="Guardar"
            />
         </View>
      </View>
      );
   }


const misEstilos = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
    alignItems: 'center',
  }

});