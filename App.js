import React from 'react';
import { Button, TextInput, View } from 'react-native';
import BtnAdd from './components/btn-add';
import Header from './components/Header/index';

const inputText = '';

export default class App extends React.Component {

  addTache = () => {
    console.log(this.inputText);
  }

  onChangeTextInput = (text) => {
    this.inputText = text;
  }
  
  render(){
    return (
      <View>
        <Header titre="Liste de tâches"/>

        <TextInput 
          placeholder="tache"
          style={{borderColor: 'red', borderWidth: 2}}
          onChangeText={this.onChangeTextInput} />

        <Button 
          title="Add" 
          onPress={ this.addTache } 
        />

        <BtnAdd />

      </View>
    );
  }

}
