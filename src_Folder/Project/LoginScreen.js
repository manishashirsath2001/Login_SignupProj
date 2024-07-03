import { ImageBackground, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
// import AsyncStorage from '@react-native-async-storage/async-storage';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
//import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import SignupScreen from './SignupScreen';
import { BASE_URL } from './Utilis/String';

const LoginScreen = (props) => {
  const [email, setEmail] = useState('');
  const [emailErr, setEmailErr] = useState('');
  const [pass, setPass] = useState('');
  const [passErr, setPasserr] = useState('');


  const validation = () => {
    var isValid = true;
    if (
      email == '') {
      setEmailErr('Please Enter Email');
      isValid = false;
    }
    else if (email != '' && !email
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
    ) {
      setEmailErr('Please Enter Valid Email');
      isValid = false;
    }
    else if (email != '' && email
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
    ) {
      isValid = true;
      setEmailErr('');
    }
    if (pass == '') {
      setPasserr('Please Enter Password');
      isValid = false;
    }
    else if (pass != '' && pass.length < 6) {
      setPasserr('Please Enter Min 6 Character Password');
      isValid = false;
    }
    else if (pass != '' && pass.length > 5) {
      setPasserr('');
      isValid = true;
    }
    // if (isValid) {
    //   check();
    // }
    return isValid
  }
  const login=()=>{
    console.log(email+" "+pass)
    const myHeaders=new Headers()
    myHeaders.append("Content-type","applicaton/json")
    fetch(BASE_URL + lOGIN_USER,{
      body: {
        emailId:email,
        password:pass,
      },
      method:'POST',
      headers:myHeaders
    }).then(res=>res.json).then(json=>{
      console.log(json)
    }).catch(err=>{
      console.log(err)
    });
  };
  return (
    <ScrollView>
      <ImageBackground source={require('../assets/Images/Background.jpg')}
        style={{ height: hp('100%') }}>
        <View style={styles.text}>
          <Text style={styles.txt}>Login</Text>
        </View>

        <View style={styles.txtcontainer}>
          <Text style={styles.Wlc}>Welcome Back</Text>
          <Text style={styles.msg}>Login to your account</Text>

          <View style={styles.Pstyle}>
            <TextInput
              style={styles.field}
              placeholder='Enter Email'
              value={email}
              onChangeText={(text) => setEmail(text)}
              isValid={setEmailErr==''?true:false}
            />

          </View>
          {setEmailErr != '' &&<Text style={styles.error}>{emailErr}</Text>}
          <View style={styles.Pstyle}>
            <TextInput
              style={styles.field}
              placeholder='Enter Password'
              keyboardType='numeric'
              maxLength={10}
              value={pass}
              onChangeText={(text) => setPass(text)}
              isValid={setPasserr==''?true:false}
            />
          </View>
          {setEmailErr != '' &&<Text style={styles.error}>{passErr}</Text>}
          <TouchableOpacity>
            <Text style={styles.forgot}>Forgot Password?</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btn} onPress={() =>{
            if(validation()){
              login()
            }
          }}>
            <Text style={styles.btntext}>Login</Text>
          </TouchableOpacity>

          <View style={styles.bottomtxt}>
            <Text style={styles.bottomsty}>Don't have an account ?</Text>
            <TouchableOpacity onPress={() => props.navigation.navigate(SignupScreen)}>
              <Text style={styles.logintxt}>Signup</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </ScrollView>
  )
}
export default LoginScreen

const styles = StyleSheet.create({
  text: {
    alignItems: 'center',
    width: wp('100%')
  },
  txt: {
    color: 'white',
    fontSize: hp('7%'),
    fontWeight: 'bold',
    marginVertical: hp('5%'),
  },
  txtcontainer: {
    backgroundColor: 'white',
    height: hp('100%'),
    width: wp('130%'),
    borderRadius: hp('15%'),
    paddingTop: hp('8%'),
    alignItems: 'center'
  },

  Wlc: {
    color: 'green',
    fontSize: hp('5%'),
    fontWeight: '900',
    marginRight: hp('10%')
  },
  msg: {
    marginRight: hp('10%'),
    fontWeight: '800',
  },
  Pstyle: {
    marginTop: hp('3%'),
    borderRadius: hp('3%'),
    color: 'darkgreen',
    placeholdertextColor: 'green',
    backgroundColor: 'lightgray',
    marginRight: hp('10%'),
    width: hp('40%'),

  },
  field: {
    marginLeft: hp('2%'),
    fontWeight: '600'
  },
  forgot: {
    color: 'green',
    alignItems: 'flex-end',
    marginLeft: 60
  },
  btn: {
    height: '7%',
    borderRadius: 20,
    backgroundColor: 'darkgreen',
    justifyContent: 'center',
    alignItems: 'center',
    width: '65%',
    marginTop: 30,
    marginRight: 80
  },

  btntext: {
    color: 'white',
    fontSize: 20
  },
  error: {
    color: 'red',
    marginRight: hp('25%')
  },
  bottomtxt: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginEnd: hp('15%')
  },
  bottomsty: {
    fontSize: hp('2%'),
    fontWeight: '700',

  },
  logintxt: {
    fontSize: hp('2%'),
    fontWeight: '700',
    color: 'green'
  }
})