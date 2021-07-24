import React,{useState} from 'react';
 import {View, Text, TextInput, StyleSheet, Button} from 'react-native';
import { styles } from '../../styles/style';

 export default function Header(){
     return(
        < View style={styles.header}>
          <Text style={styles.textHeader}>Calculadora</Text>
        </View>
     )
     
 }