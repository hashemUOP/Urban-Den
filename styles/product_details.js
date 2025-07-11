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
        }
    }
);