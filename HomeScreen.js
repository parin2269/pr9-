import React,{Component} from "react"
import {View,Text,TouchableOpactiy,Stylesheet,Image} from"react-native"

export default class HomeScreen extends Component{
    
    render(){
        return(
            <View style={styles.container}>
                <Image source={require("../assets/logo.jpg")}style={styles.logoimg}></Image>
                <Text style={styles.heading}>Genre</Text>
                <TouchableOpactiy style={styles.genre}onPress={()=>this.props.navigation.navigate("Fiction")}>
                    <Text style={styles.buttontext}>Fiction</Text>
                </TouchableOpactiy>
                <TouchableOpactiy style={styles.genre}onPress={()=>this.props.navigation.navigate("Novels")}>
                    <Text style={styles.buttontext}>Fantasy</Text>
                </TouchableOpactiy>
                <TouchableOpactiy style={styles.genre}onPress={()=>this.props.navigation.navigate("Horror")}>
                    <Text style={styles.buttontext}>Thriller</Text>
                </TouchableOpactiy>
                <TouchableOpactiy style={styles.genre}onPress={()=>this.props.navigation.navigate("Romance")}>
                    <Text style={styles.buttontext}>Romance</Text>
                </TouchableOpactiy>
            </View>
        )
    }
}
const styles=Stylesheet.create({
    container:{
        flex:1,
        justifyContent:"center"
    },
    logoimg:{
        width:50,
        height:50
    },
    heading:{
        textAlign:"center",
        fontSize:20
    },
    genre:{
    width:75,
    height:75,
    justifyContent:"center",
    backgroundColor:"Blue"
    },
    buttontext:{
        textAlign:"center",
        justifyContent:"center",
        color:"yellow"
    }
})