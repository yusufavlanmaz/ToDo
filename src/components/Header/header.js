import React from "react";
import {View,Text} from 'react-native';
import styles from './header.styles';
const Header= ({todo})=> {
    return(
        <View style={styles.container}>
            <Text style={styles.text_header}>Yapılcaklar</Text>
            <Text style={styles.text_header}>{todo.length}</Text>
        </View>
    )

}
export default Header;