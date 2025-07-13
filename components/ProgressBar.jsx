import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import * as Progress from 'react-native-progress';
import { Dimensions } from 'react-native';
import CustomText from '../components/customText';

const screenWidth = Dimensions.get('screen').width;

export default function ProgressBar({numOfFinishedStages,navigation}) {
  return (
        <NumOfProgress numOfFinishedStages={numOfFinishedStages} navigation={navigation}/>
    
  )
}
function NumOfProgress({numOfFinishedStages,navigation}){
    function Empty(){
      return(
            <Progress.Bar
                progress={0}
                width={screenWidth/7}
                height={1.5}
                borderWidth={1}
                borderColor="#d6d6d4"
                unfilledColor="#868686ff"
                borderRadius={0}
            />
       ); 
    }
    function Filled(){
      return(
            <Progress.Bar
                progress={1}
                width={screenWidth/7}
                color="#fefefc"  
                height={0.5}
                borderWidth={1}
                borderColor="#fefefc"
                borderRadius={0}
            />
       ); 
    }
    function Skip({navigation}){
        return(
                <Pressable style={{marginLeft:"auto",marginRight:15}} onPress={()=>navigation.navigate("Home")}>
                    <CustomText style={{
                        color:"#fefefc",
                        textShadowColor: 'rgba(0, 0, 0, 0.3)',
                        textShadowOffset: { width: 1, height: 1 },
                        textShadowRadius: 4,
                    }} >Skip</CustomText>    
                </Pressable>
        );
    }
    if(numOfFinishedStages===1){
        return(
            <View style={styles.progressBox}>
                <Filled/>
                <Empty/>
                <Empty/>
                <Empty/>
                <Empty/>
                <Skip navigation={navigation}/>
            </View>
        );
    }else if(numOfFinishedStages===2){
        return(
            <View style={styles.progressBox}>
                <Filled/>
                <Filled/>
                <Empty/>
                <Empty/>
                <Empty/>
                <Skip navigation={navigation}/>
            </View>
        );
    }else if(numOfFinishedStages===3){
        return(
            <View style={styles.progressBox}>
                <Filled/>
                <Filled/>
                <Filled/>
                <Empty/>
                <Empty/>
                <Skip navigation={navigation}/>
            </View>
        );
    }else if(numOfFinishedStages===4){
        return(
            <View style={styles.progressBox}>
                <Filled/>
                <Filled/>
                <Filled/>
                <Filled/>
                <Empty/>
                <Skip navigation={navigation}/>
            </View>
        );
    }
    return(
            <View style={styles.progressBox}>
                <Filled/>
                <Filled/>
                <Filled/>
                <Filled/>
                <Filled/>
                <Skip navigation={navigation}/>
            </View>
        );

}
const styles = StyleSheet.create({
  progressBox:{
    flexDirection:"row",
    position: 'absolute',
    top: 50,            
    left: 15,              
    right: 0,            
    alignItems: 'center', 
    zIndex: 10,          
    elevation: 10,   
    gap:5,
  },
});
