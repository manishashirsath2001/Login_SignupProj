import { ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import LoginScreen from './LoginScreen';


const SignupScreen = (props) => {
  const [name, setName] = useState('');
  const [nameErr, setNameErr] = useState('');
  const [email, setEmail] = useState('');
  const [emailErr, setEmailErr] = useState('');
  const [contact, setContact] = useState('');
  const [contactErr, setContactErr] = useState('');
  const [password, setPassword] = useState('');
  const [passwordErr, setPasswordErr] = useState('');
  const [confirm, setConfirm] = useState('');
  const [confirmErr, setConfirmErr] = useState('');

  const validation = () => {
    var isValid = false;
    if (name == '') {
      setNameErr('name do not empty');
      isValid = false;
    }
    else {
      setNameErr('');
    }
    if (
      email == '') {
      setEmailErr('Email do not Empty');
      isValid = false;
    }
    else if(email!='' && !email
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )
  ) { 
      setEmailErr('Please Enter Valid Email');
      isValid = false;
    }
    else if( email == '') {
      setEmailErr('Email do not Empty');
      isValid = false;
    }
    else if(email!='' && email
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )
    ){
      isValid = true;
      setEmailErr('');
    }
    if (contact == '') {
      setContactErr('contact do not empty');
      isValid = false;
    }
    else {
      setContactErr('');
    }
    if (password == '') {
      setPasswordErr('Please Enter Password');
      isValid = false;
    }
    else if(password !='' && password.length<6){
      setPasswordErr('Please Enter Min 6 Character Password');
      isValid = false;
    }
    else if(password !='' && password.length>5){
      setPasswordErr('');
      isValid = true;
    }
    if (confirm == '') {
      setConfirmErr('Password do not empty');
      isValid = false;
    }
    else {
      setConfirmErr('');
    }
  }
  return (
    <ImageBackground source={require('../assets/Images/Background.jpg')}
      style={{ height: '100%' }}>
      <View style={styles.text}>
        <Text style={styles.txt}>Register</Text>
        <Text style={styles.txt1}>Create a new account</Text>
      </View>
      <View style={styles.txtcontainer}>
        <View style={styles.Pstyle}>
          <TextInput
            style={styles.field}
            placeholder='Full Name'
            value={name}
            onChangeText={txt => setName(txt)}
          />
        </View>
        <Text style={styles.error}>{nameErr}</Text>
        <View style={styles.Pstyle}>
          <TextInput
            style={styles.field}
            placeholder='Email/Username'
            keyboardType='numeric'
            maxLength={10}
            value={email}
            onChangeText={txt => setEmail(txt)}
          />
        </View>
        <Text style={styles.error}>{emailErr}</Text>
        <View style={styles.Pstyle}>
          <TextInput
            style={styles.field}
            placeholder='Contact Number'
            keyboardType='numeric'
            maxLength={10}
            value={contact}
            onChangeText={txt => setContact(txt)}
          />
        </View>
        <Text style={styles.error}>{contactErr}</Text>
        <View style={styles.Pstyle}>
          <TextInput
            style={styles.field}
            placeholder='Password'
            keyboardType='numeric'
            maxLength={10}
            value={password}
            onChangeText={txt => setPassword(txt)}
          />
        </View>
        <Text style={styles.error}>{passwordErr}</Text>
        <View style={styles.Pstyle}>
          <TextInput
            style={styles.field}
            placeholder='Confirm Password'
            keyboardType='numeric'
            maxLength={10}
            value={confirm}
            onChangeText={txt => setConfirm(txt)}
          />
        </View>
        <Text style={styles.error}>{confirmErr}</Text>
        <TouchableOpacity style={styles.btn} onPress={validation}>
          <Text style={styles.btntext}>Signup</Text>
        </TouchableOpacity>

        <View style={styles.bottomtxt}>
          <Text style={styles.bottomsty}>Already have an account ?</Text>
          <TouchableOpacity onPress={() => props.navigation.navigate(LoginScreen)}>
            <Text style={styles.logintxt}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>


    </ImageBackground>
  )
}

export default SignupScreen

const styles = StyleSheet.create({
  text: {
    alignItems: 'center',
    width: wp('100%')
  },
  txt: {
    color: 'white',
    fontSize: hp('6%'),
    fontWeight: 'bold',
    marginVertical: hp('1%'),
  },
  txt1: {
    color: 'white',
    fontSize: hp('3%'),
    marginBottom: hp('3%'),
    fontWeight: 'bold'

  },
  txtcontainer: {
    backgroundColor: 'white',
    height: hp('100%'),
    width: wp('130%'),
    borderRadius: hp('15%'),
    paddingTop: hp('4%'),
    alignItems: 'center'
  },
  Pstyle: {
    marginTop: hp('2%'),
    borderRadius: hp('2%'),
    color: 'darkgreen',
    placeholdertextColor: 'green',
    backgroundColor: 'lightgray',
    marginRight: hp('10%'),
    width: 290,

  },
  field: {
    marginLeft: hp('2%'),
    fontSize:hp('2%'),
    fontWeight:'800',

  },
  btn: {
    height: hp('7%'),
    borderRadius: hp('2%'),
    backgroundColor: 'darkgreen',
    justifyContent: 'center',
    alignItems: 'center',
    width: wp('80%'),
    marginTop: hp('2%'),
    marginRight: hp('10%')
  },

  btntext: {
    color: 'white',
    fontSize: hp('3%')
  },
  error: {
    color: 'red',
    marginRight: hp('26%'),
    fontSize:hp('2%'),
    fontWeight:'400',

  },
  bottomtxt: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginEnd: hp('15%')
  },
  bottomsty:{
    fontSize:hp('2%'),
    fontWeight:'700',

  },
  logintxt:{
    fontSize:hp('2%'),
    fontWeight:'700',
    color:'green'
  }
})