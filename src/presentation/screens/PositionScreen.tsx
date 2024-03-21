import { StyleSheet, View } from "react-native"

export const PositionScreen = () => {
  return (
    <View style={ styles.container } >
        <View style={ styles.greenBox } ></View>
        <View style={ styles.purpleBox } ></View>
        <View style={ styles.orangeBox } ></View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: { //los hijos siempre estaran en una posicion relativa al padre
        // width:300,
        // height:'50%',
        flex:1,
        backgroundColor:'#28C4D9',
        // justifyContent:'center',
        // alignItems:'center'
    },
    purpleBox: {
        borderRadius:20,
        width:100,
        height:100,
        backgroundColor:'#5856D6',
        borderWidth: 10,
        borderColor:'white',
        position: 'absolute',
        bottom:0
    },
    orangeBox: {
        width:100,
        height:100,
        backgroundColor:'#F0A23B',
        borderWidth: 10,
        borderColor:'white',
        position: 'absolute',
        right:0
        // top:50
    },
    greenBox: {
        // width:100,
        // height:100,
        backgroundColor:'#17c323',
        borderWidth: 10,
        borderColor:'white',
        // position: 'absolute',
        // right:0,
        // bottom:0,
        // top:0,
        // left:0,
        ...StyleSheet.absoluteFillObject
    }
})
