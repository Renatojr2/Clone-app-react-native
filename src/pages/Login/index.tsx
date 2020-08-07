import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image, TouchableOpacity, TextInput } from 'react-native';

import logo from '../../assets/image/logo.png';

export default function Login() {
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Text style={styles.title}>INTERNET <Text style={styles.titleBold}>BANCKING</Text></Text>
        <Image style={styles.logoImage} source={logo} />
        <View style={styles.buttomContainer}>
          <TouchableOpacity style={styles.buttom}>
            <Text style={styles.buttomText}>Pessoa física</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttom}>
            <Text style={styles.buttomText}>Pessoa jurídica</Text>
          </TouchableOpacity>

        </View>
      </View>
      <View style={styles.inputContainer}>
        <View>
          <TextInput style={styles.input} />
          <TextInput style={styles.input} />
        </View>
        <View>
        <TouchableOpacity style={styles.InputButtom}>
            <Text style={styles.buttonInputText}>Acessar minha conta</Text>
        </TouchableOpacity>
        </View>

      </View>
   </View>
  )
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1963ab',


  },
  topContainer: {
    alignItems: 'center',
    marginTop: 40,
    marginBottom: 20,
  },
  title: {
    color: '#fff',
  },
  titleBold: {
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  logoImage: {
    height: 50,
    width: 220,
    marginVertical: 30,
  },
  buttomContainer: {
    flexDirection: 'row',
    marginVertical: 10,
  },

  buttom: {
    backgroundColor: '#fff',
    padding: 15,
    marginHorizontal: 10,
    borderRadius: 35,
    width: 135,
    alignItems: 'center',
    justifyContent: 'center'
  },

  buttomText: {
    color: '#1963ab',
    textTransform: 'uppercase',
    fontSize: 12,
  },
  inputContainer: {
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    backgroundColor: '#fff',
    padding:40,

  },
  input: {
    height: 55, 
    borderColor: 'gray', 
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,

    marginVertical: 10,
    
  },

  InputButtom: {
    backgroundColor: '#1963ab',
    padding: 20,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  buttonInputText: {
    color: '#fff',
    fontSize: 14,
  }
})