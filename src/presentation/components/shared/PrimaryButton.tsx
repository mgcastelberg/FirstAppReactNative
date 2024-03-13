import React from 'react'
import { Platform, Pressable, StyleSheet, Text } from 'react-native'

interface Props {
    label: string;
    onPress?: () => void;
    onLongPress?: () => void;
}

export const PrimaryButton = ( { label, onPress, onLongPress }: Props ) => {
  return (
    <Pressable 
        onPress={ () => onPress && onPress() } //Si exite onPress y es diff a nulo
        onLongPress={ () => onLongPress && onLongPress() } //Si exite onLongPress y es diff a nulo
        style={ ({ pressed }) => [
            styles.button,
            pressed && styles.buttonPressed
        ]} 
    >
        <Text style={{ color: Platform.OS ==='android' ? 'white' : '#4746AB' }}>{ label }</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
    button:{
      backgroundColor:'#5856D6',
      paddingHorizontal:20,
      paddingVertical:10,
      borderRadius:10,
      color:'white'
    },
    buttonPressed: {
      backgroundColor:'#4746AB'
    }
  })