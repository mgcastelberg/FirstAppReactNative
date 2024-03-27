import React from 'react'
import { StyleSheet, View } from 'react-native'

export const FlexDirectionScreen02 = () => {
  return (
    <View style={ styles.container }>
        <View style={[ styles.box, styles.box1 ]} />
        <View style={[ styles.box, styles.box2 ]} />
        <View style={[ styles.box, styles.box3 ]} />
        <View style={[ styles.box, styles.box4 ]} />

        <View style={[ styles.box, styles.box1 ]} />
        <View style={[ styles.box, styles.box2 ]} />
        <View style={[ styles.box, styles.box3 ]} />
        <View style={[ styles.box, styles.box4 ]} />

        <View style={[ styles.box, styles.box1 ]} />
        <View style={[ styles.box, styles.box2 ]} />
        <View style={[ styles.box, styles.box3 ]} />
        <View style={[ styles.box, styles.box4 ]} />

    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'gainsboro',
        flexDirection:'row',
        justifyContent:'space-evenly',
        flexWrap:'wrap',
        gap:10
    },
    box:{
        width:100,
        height:100
    },
    box1: {
        backgroundColor: '#b866ff',
    },
    box2: {
        backgroundColor: '#9032e3',
    },
    box3: {
        backgroundColor: '#4b0489',
    },
    box4: {
        backgroundColor: '#33025e',
    }
});
