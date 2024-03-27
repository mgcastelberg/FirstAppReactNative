import React from 'react'
import { StyleSheet, View } from 'react-native'

export const FlexScreen01 = () => {
  return (
    <View style={ styles.container }>
        <View style={ styles.box1 } />
        <View style={ styles.box2 } />
        <View style={ styles.box3 } />
    </View>
  )
}


const styles = StyleSheet.create({

    container: {
        flex:1,
        backgroundColor:'gainsboro'
    },
    box1: {
        backgroundColor: '#b866ff',
        flex:1 // 1/6
    },
    box2: {
        backgroundColor: '#9032e3',
        flex:2 // 2/6 = 1/3
    },
    box3: {
        backgroundColor: '#4b0489',
        flex:3  // 3/6 = 1/2
    }

});
