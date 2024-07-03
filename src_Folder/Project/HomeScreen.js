import { StyleSheet, Text, View, ImageBackground, TouchableOpacity } from 'react-native'
import React from 'react'
import LoginScreen from './LoginScreen'
import SignupScreen from './SignupScreen'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
const HomeScreen = (props) => {
  return (
    <View>
      <ImageBackground source={require("../assets/Images/Patterns.jpg")}
        style={{ height: '100%' }} />
      <View style={styles.title}>
        <Text style={styles.title1}>Let's Start</Text>
        <Text style={styles.title2}>Coding</Text>
        <TouchableOpacity style={styles.btn} onPress={() =>props.navigation.navigate(LoginScreen)}>
          <Text style={styles.btntext}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn1} onPress={()=> props.navigation.navigate(SignupScreen)}>
          <Text style={styles.btntext1}>Signup</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
export default HomeScreen
const styles = StyleSheet.create({
  title: {
    position: 'absolute',
    marginHorizontal: hp('5%'),
    marginVertical: hp('5%'),
    justifyContent:'center',
    alignContent:'center',
    fontWeight: '900'
  },
  title1: {
    color: 'white',
    fontSize: hp('8%'),
    justifyContent:'center',
    alignContent:'center',
    fontWeight:'900'
  },
  title2: {
    color: 'white',
    fontSize: hp('8%'),
    fontWeight:'900'
  },
  btn: {
    height: hp('7%'),
    borderRadius: hp('2%'),
    backgroundColor: 'darkgreen',
    justifyContent: 'center',
    alignItems: 'center',
    width: wp('80%'),
    marginTop: hp('15%'),
  },
  btn1: {
    height: hp('7%'),
    borderRadius: hp('2%'),
    marginTop: hp('5%'),
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    width: wp('80%')
  },
  btntext: {
    color: 'white',
    fontSize: hp('3%'),
    fontWeight:'500'
  },
  btntext1: {
    color: 'green',
    fontSize: hp('3%'),
    fontWeight:'500'
  },
 
})
