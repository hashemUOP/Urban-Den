import { View, Text } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

const color = '#ab7e42';
export default function Stars({numOfStars}){
    if(numOfStars === 5){
        return(
            <View style={{flexDirection:"row"}}>
                <MaterialCommunityIcons name="star" size={24} color={color} />
                <MaterialCommunityIcons name="star" size={24} color={color}/>
                <MaterialCommunityIcons name="star" size={24} color={color} />
                <MaterialCommunityIcons name="star" size={24} color={color} />
                <MaterialCommunityIcons name="star" size={24} color={color}/>    
            </View>
        );
    }else if(numOfStars === 4.5){
        return(
            <View style={{flexDirection:"row"}}>
                <MaterialCommunityIcons name="star" size={24} color={color} />
                <MaterialCommunityIcons name="star" size={24} color={color} />
                <MaterialCommunityIcons name="star" size={24} color={color} />
                <MaterialCommunityIcons name="star" size={24} color={color} />
                <MaterialCommunityIcons name="star-half-full" size={24} color={color} />
            </View>
        );
    }else if(numOfStars === 4){
        return(
            <View style={{flexDirection:"row"}}>
                <MaterialCommunityIcons name="star" size={24} color={color} />
                <MaterialCommunityIcons name="star" size={24} color={color} />
                <MaterialCommunityIcons name="star" size={24} color={color} />
                <MaterialCommunityIcons name="star" size={24} color={color} />
                <MaterialCommunityIcons name="star-outline" size={24} color={color} />
            </View>
        );
    }else if(numOfStars === 3.5){
        return(
            <View style={{flexDirection:"row"}}>
                <MaterialCommunityIcons name="star" size={24} color={color} />
                <MaterialCommunityIcons name="star" size={24} color={color}/>
                <MaterialCommunityIcons name="star" size={24} color={color} />
                <MaterialCommunityIcons name="star-half-full" size={24} color={color} />
                <MaterialCommunityIcons name="star-outline" size={24} color={color} />
            </View>
        );
    }else if(numOfStars === 3){
        return(
            <View style={{flexDirection:"row"}}>
                <MaterialCommunityIcons name="star" size={24} color={color}/>
                <MaterialCommunityIcons name="star" size={24} color={color}/>
                <MaterialCommunityIcons name="star" size={24} color={color} />
                <MaterialCommunityIcons name="star-outline" size={24} color={color} />
                <MaterialCommunityIcons name="star-outline" size={24} color={color} />
            </View>
        );
    }
    else if(numOfStars === 2.5){
        return(
            <View style={{flexDirection:"row"}}>
                <MaterialCommunityIcons name="star" size={24} color={color} />
                <MaterialCommunityIcons name="star" size={24} color={color}/>
                <MaterialCommunityIcons name="star-half-full" size={24} color={color} />
                <MaterialCommunityIcons name="star-outline" size={24} color={color} />
                <MaterialCommunityIcons name="star-outline" size={24} color={color}/>
            </View>
        );
    }else if(numOfStars === 2){
        return(
            <View style={{flexDirection:"row"}}>
                <MaterialCommunityIcons name="star" size={24} color={color} />
                <MaterialCommunityIcons name="star" size={24} color={color} />
                <MaterialCommunityIcons name="star-outline" size={24} color={color} />
                <MaterialCommunityIcons name="star-outline" size={24} color={color} />
                <MaterialCommunityIcons name="star-outline" size={24} color={color} />
            </View>
        );
    }else if(numOfStars === 1.5){
        return(
            <View style={{flexDirection:"row"}}>
                <MaterialCommunityIcons name="star" size={24} color={color} />
                <MaterialCommunityIcons name="star-half-full" size={24} color={color} />
                <MaterialCommunityIcons name="star-outline" size={24} color={color}/>
                <MaterialCommunityIcons name="star-outline" size={24} color={color}/>
                <MaterialCommunityIcons name="star-outline" size={24} color={color} />
            </View>
        );
    }else if(numOfStars === 1){
        return(
            <View style={{flexDirection:"row"}}>
                <MaterialCommunityIcons name="star" size={24} color={color} />
                <MaterialCommunityIcons name="star-outline" size={24} color={color} />
                <MaterialCommunityIcons name="star-outline" size={24} color={color}/>
                <MaterialCommunityIcons name="star-outline" size={24} color={color} />
                <MaterialCommunityIcons name="star-outline" size={24} color={color}/>
            </View>
        );
    }else if(numOfStars === 0.5){
        return(
            <View style={{flexDirection:"row"}}>
                <MaterialCommunityIcons name="star-half-full" size={24} color={color} />
                <MaterialCommunityIcons name="star-outline" size={24} color={color} />
                <MaterialCommunityIcons name="star-outline" size={24} color={color}/>
                <MaterialCommunityIcons name="star-outline" size={24} color={color} />
                <MaterialCommunityIcons name="star-outline" size={24} color={color} />
            </View>
        );
    }
    return(
            <View style={{flexDirection:"row"}}>
                <MaterialCommunityIcons name="star-outline" size={24} color={color} />
                <MaterialCommunityIcons name="star-outline" size={24} color={color}/>
                <MaterialCommunityIcons name="star-outline" size={24} color={color}/>
                <MaterialCommunityIcons name="star-outline" size={24} color={color} />
                <MaterialCommunityIcons name="star-outline" size={24} color={color} />
            </View>
        );
}