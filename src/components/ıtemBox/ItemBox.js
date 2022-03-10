import React from "react";
import { View,Text,TouchableHighlight, TextInput,Alert} from "react-native";
import styles from './ItemBox.style';
const ItemBox =({text,setTodo,setText,todo})=> {
    const handleClick = ()=> {
        if (text === '') {
            return Alert.alert('Hata!','Yapılacak alanını doldurunuz!')
        }
        setTodo([...todo,{text}]);
        setText('');
        return Alert.alert('Başarılı!', 'Yapılacak işiniz başarıyla eklendi!');

    };
    const handleChange = item => setText(item);


    return( 
        
            <View style={styles.ItemBox_container}> 
            <TextInput
            style={styles.input}
            placeholder="Yapılacak..."
            placeholderTextColor='#37474F'
            value={text}
            onChangeText={handleChange}

            />
           <TouchableHighlight
           style={styles.button}
           onPress={handleClick}
        >
               <Text style={styles.text}>Kaydet</Text>
           </TouchableHighlight>
        </View>
        
    )
}
export default ItemBox;