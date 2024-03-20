import React from 'react'
import { StyleSheet, useWindowDimensions, View } from 'react-native'
import { Text } from 'react-native-paper'
// import {Dimensions} from 'react-native';
// const { width, height } = Dimensions.get('window');

export const DimensionScreen = () => {


    const { width, height } = useWindowDimensions();

    return (
    <View>
        <View style={ styles.container }>
            <View style={{ 
                ...styles.purpleBox,
                width: width * 0.7
            }}></View>
        </View>
        <Text style={ styles.title } >w: {width}, h: {height}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
      width: 300,
      height:200,
      backgroundColor: 'red'
    },
    purpleBox:{
      backgroundColor:'#5856d6',
      height:'50%',
      width:'50%'
    },
    title:{
        fontSize:20,
        textAlign:'center'
    }
});
