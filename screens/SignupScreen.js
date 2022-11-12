import { SafeAreaView, StyleSheet, Text, View, TextInput} from "react-native";
import React from "react";
import colors from '../constants/colors'
import { TouchableOpacity } from "react-native-gesture-handler";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import InputField from "../constants/InputField";

const SignupScreen = ({ navigation }) => {
  return (
    <SafeAreaView>
      
      <View style={{paddingHorizontal:25}}>
      <View style={{alignItems: 'center'}}>
        <Text 
        style={{
          fontSize:28, 
          fontWeight:'500', 
          color:'#333',
          marginBottom:30}}>
            Sign up
        </Text>
        
        
        <InputField 
          label={'Full Name'}
          icon={
            <Ionicons
            name="person-outline"
            size={20}
            color="#666"
            style={{marginRight:5}}
            />
          }
        />

        <InputField 
          label={'Email Address'}
          icon={
            <MaterialIcons 
            name='alternate-email'
            size={20} 
            color='#666' 
            style={{marginRight:5}}
            />
          }
          keyboardType="email-address"
        />
        
        <InputField 
          label={'Password'}
          icon={
            <Ionicons
            name="ios-lock-closed-outline"
            size={20}
            color="#666"
            style={{marginRight:5}}
            />
          }
          inputType="password"
        />
        <InputField 
          label={'Confirm Password'}
          icon={
            <Ionicons
            name="ios-lock-closed-outline"
            size={20}
            color="#666"
            style={{marginRight:5}}
            />
          }
          inputType="password"
        />

        

        
        <TouchableOpacity 
        onPress={() => {}} 
        style= {{
          backgroundColor: colors.fiuGold, 
          padding:20, 
          borderRadius:10, 
          marginBottom:30
          }}>
            <Text 
            style={{
              textAlign:'center', 
              fontWeight:'700', 
              fontSize:16, 
              color:'#fff',
              }}>
                Sign Up
              </Text>

        </TouchableOpacity>

      </View>

      <Text>Already registered?</Text>
      <TouchableOpacity onPress={() => navigation.navigate("Home")}>
        <Text style={{color: '#AD40AF', fontWeight: '700'}}>Login</Text>
      </TouchableOpacity>

      </View>
    </SafeAreaView>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({safeAreaView: {
  flex: 1,
  backgroundColor: colors.fiuBlue
}});
