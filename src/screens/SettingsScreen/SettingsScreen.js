import {SafeAreaView, StyleSheet} from "react-native";
import {observer} from "mobx-react-lite";

const SettingsScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default observer(SettingsScreen);
