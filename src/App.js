import React,{useState} from "react";
import { FlatList, SafeAreaView,Text,View,StyleSheet,TouchableHighlight } from "react-native";
import Header from './components/Header'
import ItemBox from "./components/ıtemBox/ItemBox";
import TodoItems from "./components/todoItems/todoItems";
const App = ()=> {
  const [todo, setTodo] = useState([]);
  const [text, setText] = useState('');

  const handleLongPress = item => {
    setTodo(todo.filter(i => i !== item));
    return Alert.alert('Başarılı!', 'Yapılacak iş başarıyla silindi!');
  };
  const renderTodo = ({item}) => {
    return (
      <TouchableHighlight onLongPress={() => handleLongPress(item)}>
        <TodoItems todo={item} />
      </TouchableHighlight>
    );
  };
  return(
    <SafeAreaView style={styles.container}>
        <Header todo={todo} />

        <View style={styles.inner_container}>
        <View style={styles.itembox_container}>
          <FlatList 
          data={todo} renderItem={renderTodo}
          /> 
          </View>
            
            <ItemBox todo={todo} setTodo={setTodo} text={text} setText={setText}/>
           
        </View>


    </SafeAreaView>
  )
}
export default App;

const styles = StyleSheet.create(
  {
    container:{
      flex:1,
      backgroundColor: '#0F2027',
      padding:20,
    },
    inner_container:{
      flex: 1,
      justifyContent:'space-between',
    },
   
  }
)