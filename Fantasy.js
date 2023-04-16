import React,{Component} from "react"
import {View,Text,TouchableOpactiy,Stylesheet,Button} from"react-native"

export default class Fantasy extends Component{
    render(){
        return(
            <View style={styles.recomendationview}>
                <Text style={styles.header}>Recomended Books</Text>
                <Button title="The Name Of The Wind"onPress={()=>Linking.openURL("https://www.allfreenovel.com/Page/Story/10060/page-1-of-The-Name-of-the-Wind--The-Kingkiller-Chronicle-1-/1/79")}></Button>
                <Button title="The Way Of the Kings"onPress={()=>Linking.openURL("https://www.brandonsanderson.com/wp-content/uploads/2020/07/The-Way-of-Kings-Prime-by-Brandon-Sanderson_web.pdf")}></Button>
                <Button title="A Wizard Of Earth Sea"onPress={()=>Linging.openURL("https://cornerstones--live.s3.eu-west-2.amazonaws.com/uploads/2020/03/05084947/A-Wizard-of-Earthsea-Ursula-Le-Guin.pdf")}></Button>
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