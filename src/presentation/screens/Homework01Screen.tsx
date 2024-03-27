import { StyleSheet, View } from 'react-native'
import { Text } from 'react-native-paper'

export const Homework01Screen = () => {
  return (
    <View style={ styles.container }>
        <View style={[ styles.box, styles.purpleBox ]} />
        <View style={[ styles.box, styles.orangeBox ]} />
        <View style={[ styles.box, styles.blueBox ]} />
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#28425B',
        flexDirection:'column',
        justifyContent:'center',
        alignItems: 'center'
    },
    box:{
        width:100,
        height:100,
        borderWidth:5,
        borderColor:'white'
    },
    purpleBox:{
        top:100,
        backgroundColor:'#5856D6'
    },
    orangeBox:{
        left:100,
        backgroundColor:'#F0A23B',
    },
    blueBox:{
        backgroundColor:'#28c4d9'
    }
})

