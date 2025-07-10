import {View} from 'react-native';
import React from 'react';;
import Header from '../components/home/Header';
import SearchBar from '../components/home/SearchBar';

function Home(){
    return(
        <View>
            <Header/>
            <SearchBar/>
        </View>
    );
}


export default Home;

