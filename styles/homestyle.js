import { StyleSheet, Dimensions } from 'react-native';

const screenHeight = Dimensions.get('window').height;
const screemWidth = Dimensions.get('window').width;

export default StyleSheet.create({
    container:{
        marginTop:30,
        backgroundColor:"white",
        width:screemWidth,
        height:screenHeight*0.09,
        justifyContent:"center"
    },
    text1:{
        color:'black',
        fontSize:12,
    },
    text2:{
        color:'black',
        fontSize:15,
        fontWeight:"500"
    },
    row1:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center"
    },
    row2:{
        display:"flex",
        flexDirection:"row"
    },
    col1:{
        display:"flex",
        flexDirection:"column"
    },
    customButton: {
        borderWidth: 0.5,
        borderColor: 'grey',
        width: 35,
        height: 35,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        backgroundColor: 'white',
        marginRight:5
    },
    image:{
        width:40,
        height:40,
        objectFit:"contain",
        borderRadius:50,
        marginLeft:5,
        marginRight:8
    },
    searchBar:{
        width:screemWidth -16,
        height:screenHeight*0.06,
        backgroundColor:"#f9f9f9",
        borderColor:"#585858",
        borderWidth:0.5,
        marginRight:5,
        marginLeft:10,
        borderRadius:5,
        flexDirection:"row",
        alignItems:'center',
    }
});
