import React from "react";
import { View,Text,} from "react-native";
import styles from './todoItems.style';
const TodoItems =({todo})=> {
    return(
        <View style={styles.container}>
            <Text style={styles.text}>{todo.text}</Text>
        </View>
    )
}
export default TodoItems;
