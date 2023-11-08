import React, { Component } from 'react'
import { StyleSheet, Text, View , TextInput,TouchableOpacity,StyleSheet} from 'react-native'

class Inputs extends Component{
  state = {
    username : '',
    email : '',
    password : ''
  }
  handleUsername = (Text) => {
    this.setState({username : Text})
  }
  handleEmail = (Text) => {
    this.setState({email : Text})
  }
  handlePassword = (Test) => {
    this.setState({password : Text})
  }
  Registration = (username,email,pass) => {
    alert('username:' + username + 'email: ' + email + ' password: ' + pass)
  }
  render(){
    return(
      <View style ={styles.container} >
        <TextInput style = {styles.Input}
          underlineColorAndroid = "Transparent"
          placeholder = 'Username'
          placeholderTextColor = "#9a73ef"
          autoCapitalize='none'
          onChangeText={this.handleEmail}/>
        <TextInput style = {styles.Input}
          underlineColorAndroid = "Transparent"
          placeholder = 'Email'
          placeholderTextColor = "#9a73ef"
          autoCapitalize='none'
          onChangeText={this.handleEmail}/>
        <TextInput style = {styles.Input}
          underlineColorAndroid = "Transparent"
          placeholder = "Password"
          placeholderTextColor = "#9a73ef"
          autoCapitalize='none'
          onChangeText = {this.handlePassword}/> 
         <TouchableOpacity  
           style = {styles.submitButton}
           onPress={()=>this.Registration(this.username,this.state.email,this.state.password)}>
           <Text style = {styles.submitButtonText}> Create Account </Text>
           </TouchableOpacity>
      </View>
    )
  }
}



export default Inputs

const styles = StyleSheet.create({
  container: {
     paddingTop: 23
  },
  input: {
     margin: 15,
     height: 40,
     borderColor: '#7a42f4',
     borderWidth: 1
  },
  submitButton: {
     backgroundColor: '#7a42f4',
     padding: 10,
     margin: 15,
     height: 40,
  },
  submitButtonText:{
     color: 'white'
  }
})