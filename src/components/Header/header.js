import React from "react";
import { SafeAreaView,View,Text } from "react-native";
import styles from './header.styles';
const Header = (props) =>{

    return(
        <View style={styles.container}>
            <Text style={styles.text}>Yapılacaklar</Text>

        </View>
    )
}
export default Header;