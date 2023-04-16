import React,{Component} from "react"
import {View,Text,TouchableOpactiy,Stylesheet,Button} from"react-native"

export default class Fiction extends Component{
    render(){
        return(
            <View style={styles.recomendationview}>
                <Text style={styles.header}>Recomended Books</Text>
                <Button title="20,000 Leagues Under The Sea"onPress={()=>Linking.openURL("https://www.arvindguptatoys.com/arvindgupta/20000-leagues.pdf")}></Button>
                <Button title="The Mysterious Island"onPress={()=>Linking.openURL("https://www.arvindguptatoys.com/arvindgupta/mysterious-island.pdf")}></Button>
                <Button title="The Daughter of the Deep"onPress={()=>Linging.openURL("https://fliphtml5.com/esqlo/whey/basic")}></Button>
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