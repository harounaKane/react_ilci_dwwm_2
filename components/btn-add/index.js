import React from 'react';
import ActionButton from 'react-native-action-button';
import {Icon} from 'react-native-elements';

const BtnAdd = () => (
     <ActionButton
          buttonColor={"blue"}
          onPress={() => {console.log('click du btn add')}}
          renderIcon={
               active => active 
               ? 
                    (<Icon name="add" /> ) 
               : (<Icon name="add" />)}
     >

     </ActionButton>
);

export default BtnAdd;
