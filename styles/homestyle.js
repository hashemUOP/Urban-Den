import { StyleSheet, Dimensions } from 'react-native';

const screenHeight = Dimensions.get('window').height;
const screemWidth = Dimensions.get('window').width;

export default StyleSheet.create({
    container:{
        marginTop:30,
        backgroundColor:"white",
        width:screemWidth,
        height:80,
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
        height:40,
        backgroundColor:"#f9f9f9",
        borderColor:"#585858",
        borderWidth:0.5,
        marginRight:5,
        marginLeft:10,
        borderRadius:5,
        flexDirection:"row",
        alignItems:'center',
    },
    menubar:{
        height:40,
        width:screemWidth -16,
        height:45,
        borderColor:"#585858",
        borderWidth:0.5,
        marginRight:5,
        marginLeft:10,
        borderRadius:5,
        flexDirection:"row",
        alignItems:'center',
        marginTop:10,
        justifyContent:"space-between",
        alignContent:"space-between",
    },
    menu_item:{
        width:60,
        height:35,
        borderRadius:7,
        alignItems:"center",
        justifyContent:"center",
    },
    adImage: {
    width: screemWidth - 16,
    height: 140,
    justifyContent: 'flex-end', // makes sure content flows from bottom
    padding: 10,
    marginRight:5,
    marginLeft:10,
    borderRadius:5,
    marginTop:10,
    },
    overlayContent: {
    borderRadius: 5,
    padding: 8,
    },
    adButton:{
        width:90,
        height:30,
        borderRadius:5,
        backgroundColor:"white",
        marginTop:5,
        justifyContent:"center"
    },
    adButtonText:{
        color:"black",
        alignSelf:"center",
        justifySelf:"center",
        fontSize:12
    },
    scrollContainer: {
    padding: 8,
  },
  itemBox: {
    flex: 1,
    backgroundColor: '#cce5ff',
    margin: 8,
    height: 100,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3, // for Android shadow
    shadowColor: '#000', // iOS shadow
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
  },
  itemText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
