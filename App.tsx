import { SafeAreaView, StyleSheet, Text } from "react-native"
import { HelloWorldScreen } from "./src/presentation/screens/HelloWorldScreen"
import { CounterScreen } from "./src/presentation/screens/CounterScreen"
import { PaperProvider } from "react-native-paper"
import { CounterM3Screen } from "./src/presentation/screens/CounterM3Screen"

import IonIcon from "react-native-vector-icons/Ionicons";
import { BoxObjectModelScreen } from "./src/presentation/screens/BoxObjectModelScreen"
import { DimensionScreen } from "./src/presentation/screens/DimensionScreen"
import { PositionScreen } from "./src/presentation/screens/PositionScreen"
import { FlexScreen01 } from "./src/presentation/screens/FlexScreen01"
import { FlexDirectionScreen02 } from "./src/presentation/screens/FlexDirectionScreen02"
import { Homework01Screen } from "./src/presentation/screens/Homework01Screen"

export const App = () => {
  return (
    <PaperProvider settings={{ icon: (props)=> <IonIcon { ...props } /> }}>
      {/* <SafeAreaView style={{ height: 500 }}> */}
      <SafeAreaView style={{ flex:1 }}>
        {/* <CounterScreen /> */}
        {/* <CounterM3Screen /> */}
        {/* <BoxObjectModelScreen /> */}
        {/* <DimensionScreen/> */}
        {/* <PositionScreen/> */}
        {/* <FlexScreen01/> */}
        {/* <FlexDirectionScreen02/> */}
        <Homework01Screen/>
      </SafeAreaView>
    </PaperProvider>
  )
}
