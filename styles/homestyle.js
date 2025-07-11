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
        borderColor: 'white',
        width: 35,
        height: 35,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        backgroundColor: 'white',
        marginRight:7
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
    paddingBottom: 70 
  },
  card: {
    flex: 1,
    backgroundColor: '#cce5ff',
    margin: 8,
    height: 300,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3, // shadow
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
  },
  cardImage:{
    height:"100%",
    width:"100%",
    objectFit:"cover"
  },
  cardCol:{
    position:"absolute",
    top:8,
  },
  cardRow:{
    width:"100%",
    flexDirection:'row',
    justifyContent:'space-between'
  },
  overlayRow: {
  position: 'absolute',
  width: '100%',
  flexDirection: 'row',
  justifyContent: 'space-between',
  paddingHorizontal: 7,
},
overlayBottom: {
  position: 'absolute',
  bottom: 8,
  left: 7,
  right: 7,
  backgroundColor: 'rgba(255, 255, 255, 0.9)',
  padding: 5,
  borderRadius: 8,
},
badge: {
  height: 30,
  width: 100,
  backgroundColor: 'black',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 15,
},
heart: {
  height: 33,
  width: 33,
  backgroundColor: 'white',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 15,
  paddingBottom: 3,
},
  footerContainer:{
    width:screemWidth,
    height:50,
    backgroundColor:"orange",
    height: 60,
    backgroundColor: 'orange',
    position: 'absolute', 
    bottom: 0, 
    left: 0, 
    right: 0, 
    justifyContent: 'center', 
    alignItems: 'center', 
  }
});
