import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

export default styles = StyleSheet.create(
    {
        imageWrapper: {
            height: screenHeight * 0.5,
            width: screenWidth,
            borderRadius: 8,
            overflow: 'hidden', 
            position:"relative"
        },
        image: {
            height: '100%',
            width: '100%',
            resizeMode: 'cover',
        },
        iconsRow:{
            position: "absolute",
            top: 55,
            left: 15,
            right: 15,
            zIndex: 1,
            flexDirection: "row",
            justifyContent: "space-between",
        },
        iconContainer:{
            backgroundColor: "white", 
            width: 40, 
            height: 40, 
            borderRadius: 20, 
            alignItems: 'center', 
            justifyContent: 'center' 
        },
        titleText:{
            paddingHorizontal:15,
            marginTop:30,
            gap:7
        },
        footerContainer:{
            flexDirection:"row",
            width:screenWidth,
            height:70,
            backgroundColor:"rgba(214, 214, 214, 0.8)",
            alignItems:"center",
            justifyContent:"space-between"
        },
        iconBox:{
            height:45,
            width:45,
            borderRadius:25,
            backgroundColor:'black',
            justifyContent:'center',
            alignItems:"center",
            marginRight:8,
        },
        buyBox:{
            backgroundColor:"#ab7e42",
            height:45,
            width:70,
            justifyContent:"center",
            alignItems:"center",
            borderRadius:15,
            marginRight:12,
        }
    }
);