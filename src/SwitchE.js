//This is an example code to understand Switch//

import React from 'react';
//import react in our code.

import { Switch, Text, View, StyleSheet } from 'react-native';
//import all the components we are going to use.

export default class SwitchE extends React.Component {
  //Initial state false for the switch. You can change it to true just to see.
  state = { switchValue: false };

  toggleSwitch = value => {
    //onValueChange of the switch this function will be called
    this.setState({ switchValue: value });
    //state changes according to switch
    //which will result in re-render the text
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>{this.state.switchValue ? 'Notificaciones ON' : 'Notificaciones OFF'}</Text>

        <Switch
          style={{ marginTop: 30 }}
          onValueChange={this.toggleSwitch}
          value={this.state.switchValue}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

