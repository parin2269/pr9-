import React,{Component} from "react"
import {View,Text,TextInput,TouchableOpactiy,Stylesheet} from"react-native"

export default class LoginScreen extends Component{
    constructor(props){
        super(props)
        this.state={
            email:"",
            password:"",
        }
    }
    onLogin(){
        this.props.navigation.navigate("ProfileScreen")
    }
render(){
    return(
        <View style={styles.container}>
            <Text style={styles.appTitle}>Book Recommendation</Text>
            <TextInput style={styles.inputFont}
            onChangeText={(email)=>this.setState({email})}
            placeholder={"Email"}
            placeholderTextColor="grey"></TextInput>
            <TextInput style={styles.inputFont}
            onChangeText={(password)=>this.setState({password})}
            placeholder={"Password"}
            placeholderTextColor="grey"
            secureTextEntry={true}></TextInput>
            <TouchableOpactiy style={styles.loginButton}
            onPress={()=>this.onLogin()}>
                <Text style={styles.loginText}>Login</Text>
            </TouchableOpactiy>
        </View>

    )
}

}
const styles=Stylesheet.create({
    container:{
        flex:1
    },
    appTitle:{
        fontSize:20,
        justifyContent:"center",
        alignItems:"center"
    },
    inputFont:{
        height:40,
        width:10,
        marginTop:40,
        borderWidth:2,
        borderRadius:10,
        borderColor:"blue",
        justifyContent:"center",
        textAlign:"center"
    },
    loginButton:{
        marginTop:50,
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"Blue",
        width:100,
        height:50
    },
    loginText:{
        color:"white"
    }
})


