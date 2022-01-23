import React from "react";
import { SafeAreaView,View,Text, FlatList,StyleSheet } from "react-native";
import Header from "./components/Header/header";
const App = () =>
{
  return(
    <SafeAreaView style={styles.container}>
       <Header />
      <View style={styles.inner_container}>
        <View>
          <FlatList data = {[1,2,3,4,5,6,7,8,9,10,11]} 
          renderItem= {data => <Text>{data.item}</Text>} 
          />
        </View>
      </View>
    </SafeAreaView>
  )
}
export default App
const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  inner_container:{
    flex:1,
   
  },
  
})