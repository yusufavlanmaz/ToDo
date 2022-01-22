import React, { useState } from "react";
import { SafeAreaView, StyleSheet, Text, TouchableHighlight, View } from "react-native";

const TouchableHighlightExample = () => {
  const [count, setCount] = useState(0);
  const onPress = () => setCount(count + 1);

  return (
    <SafeAreaView>
      
    </SafeAreaView>
  )
}



export default TouchableHighlightExample;