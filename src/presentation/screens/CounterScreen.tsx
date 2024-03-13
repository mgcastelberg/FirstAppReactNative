import { useState } from "react"
import { Platform, Pressable, StyleSheet, Text, View } from "react-native"
import { PrimaryButton } from "../components";
import { Button } from "react-native-paper";

export const CounterScreen = () => {

  const [count, setCount] = useState(11);

  return (
    <View style={ styles.container}>
      <Text style={ styles.title } >{ count }</Text>
      <PrimaryButton
        label = 'Incrementar'
        onPress={ ()=>{setCount(count + 1)} }
        onLongPress={ ()=>{setCount(0)} }
      />
      
      <Button 
        mode="contained"
        onPress={ ()=>{setCount(count + 1)} }
        onLongPress={ ()=>{setCount(0)} }
      >Increment</Button>

      {/* <Pressable style={ ({ pressed }) => [
        styles.button,
        pressed && styles.buttonPressed
      ]} onPress={ ()=>{ setCount(count + 1) } } onLongPress={ ()=>{ setCount(0) }}>
        <Text style={{ color:Platform.OS ==='android' ? 'white' : '#4746AB' }}>Pressed</Text>
      </Pressable> */}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
      flex:1,
      justifyContent: 'center',
      backgroundColor:'gainsboro',
      alignItems: 'center'
  },
  title: {
      fontSize:70,
      textAlign:'center',
      color:'black',
      padding:20
  }
})