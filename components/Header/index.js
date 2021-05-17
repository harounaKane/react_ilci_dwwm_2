import React from 'react'
import { View, Text, StyleSheet } from "react-native";

const Header = ({titre}) => (
     <View>
          <View style={styles.subHeader}/>
          <View  style={styles.header}>
               <Text style={styles.text}>{titre}</Text>
          </View>
    </View>
);

export default Header;

const styles = StyleSheet.create({
     subHeader: {
          backgroundColor: "#335fff",
          padding: 11
     },
     header: {
          backgroundColor: "#3395ff",
          height: 100,
          justifyContent: 'center',
          alignItems: 'center'
     },
     text: {
          color: "#ffff",
          fontSize: 30
     }
})