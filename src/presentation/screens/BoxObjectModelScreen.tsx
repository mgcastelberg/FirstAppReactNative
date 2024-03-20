import { Text, View, StyleSheet } from 'react-native';

export const BoxObjectModelScreen = () => {
  return (
    <View style={ styles.container }>
        {/* <Text style={ styles.title } >BoxObjectModelScreen</Text> */}
        <View style={ styles.purpleBox }>
            <Text style={{ color:'white' }}  >Hola Mundo</Text>
        </View>
        <View style={ styles.purpleBox }></View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'red'
    },
    title: {
        fontSize: 30,
        borderWidth: 10,
        paddingHorizontal: 30,
        paddingVertical: 10
    },
    purpleBox: {
        height:30,
        backgroundColor: "purple",
        marginHorizontal:20,
        marginTop:30,
        paddingHorizontal:10,
        paddingTop:4
    }
});
