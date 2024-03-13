import { useState } from "react"
import { FAB, Text } from "react-native-paper";
import { globalStyles } from "../theme/global.styles";
import { View } from "react-native";

import Icon from 'react-native-vector-icons/Ionicons';

export const CounterM3Screen = () => {

  const [count, setCount] = useState(11);

  return (
    <View style={ globalStyles.centerContainer }>
      <Text style={ globalStyles.title } >{ count }</Text>
      <Icon name="accessibility-outline" size={45} />
      <FAB 
        icon="add"
        // label="+1"
        style={ globalStyles.fab }
        onPress={ ()=>{setCount(count + 1)} }
        onLongPress={ ()=>{setCount(0)} }
      />
    </View>
  )
}