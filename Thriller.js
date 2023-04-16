import React,{Component} from "react"
import {View,Text,TouchableOpactiy,Stylesheet,Button} from"react-native"

export default class Thriller extends Component{
    render(){
        return(
            <View style={styles.recomendationview}>
                <Text style={styles.header}>Recomended Books</Text>
                <Button title="Keeper Of the Lost Cities"onPress={()=>Linking.openURL("ttps://www.13stream.com/wp-content/uploads/2022/11/Keeper-Of-The-Lost-Cities-PDFDrive-.pdf")}></Button>
                <Button title="Gone Girl"onPress={()=>Linking.openURL("https://icrrd.com/media/15-05-2021-082725Gone-Girl-Gillian-Flynn.pdf")}></Button>
                <Button title="The Island"onPress={()=>Linging.openURL("https://links.ajpdf.com/pdf-the-island-by-adrian-mckinty/")}></Button>
                <TouchableOpactiy style={styles.backbutton}onPress={()=>this.props.navigation.navigate("HomeScreen")}>
                    <Text style={styles.backtext}>Back</Text>
                </TouchableOpactiy>
            </View>
        )
    }
}
const styles=Stylesheet.create({
    recomendationview:{
        flex:1
    },
    header:{
        fontSize:20,
        justifyContent:"center",
        textAlign:"center"
    },
    backbutton:{
        width:70,
        height:70,
        backgroundColor:"Blue",
        justifyContent:"center"
    },
    backtext:{
        textAlign:"center",
        color:"black"
    }

    
})