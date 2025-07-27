import {View} from 'react-native';
import React,{useState} from 'react';;
import Header from '../components/home/Header';
import SearchBar from '../components/home/SearchBar';
import AdSection from '../components/home/AdSection';
import ScrollProducts from '../components/home/ScrollProducts';
import { TouchableOpacity } from 'react-native';
import CustomText from '../components/customText';
import styles from '../styles/homestyle';

function Home({navigation}){
    {/* menu bar states */}
    const items = ["Table","Lamp", "Stools", "Chair", "Sofa"];
    const [selectedItem, updateSelectedItem] = useState(0);

    return(
        <View style={{ flex: 1 }}>
            <Header/>
            <SearchBar navigation={navigation}/>

            {/* menu bar code */}
            <View style={styles.menubar}>
            {items.map((item, index) => (
                <TouchableOpacity
                key={index}
                onPress={() => updateSelectedItem(index)}
                style={{ marginLeft: index === 0 ? 5 : 0, marginRight: index === 4 ? 5 : 0 }}
                >
                <View style={[
                    styles.menu_item,
                    {
                    backgroundColor: selectedItem === index ? '#ab7e42' : '#ffffff',
                    }
                ]}>
                    <CustomText style={{ color: selectedItem === index ? 'white' : 'black' }}>
                    {item}
                    </CustomText>
                </View>
                </TouchableOpacity>
            ))}
            </View>

            <ScrollProducts navigation={navigation} selectedCategory={items[selectedItem]}/>
        </View>
    );
}


export default Home;

