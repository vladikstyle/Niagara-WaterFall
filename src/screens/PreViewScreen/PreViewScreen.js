import { Image, ImageBackground, SafeAreaView, StyleSheet, TouchableOpacity } from "react-native";
import { observer } from "mobx-react-lite";
import Theme from "../../config/Theme";
import { MotiImage } from "moti";
import { useEffect } from "react";
import InfoStore from "../../store/InfoStore";

const PreViewScreen = ({ navigation }) => {

  useEffect(() => {
    InfoStore.getPlaces();
    InfoStore.getAvatar();
  }, []);

  return (
    <ImageBackground style={styles.container} source={Theme.bcg}>
      <SafeAreaView style={styles.container}>
        <MotiImage
          from={{
            opacity: 1,
            scale: 1.2,
          }}
          animate={{
            opacity: 0.5,
            scale: 1,
          }}
          transition={{
            type: "timing",
            loop: true,
            duration: 2000,
          }}
          style={styles.image}
          source={require("../../assets/logo.png")} />
        <TouchableOpacity onPress={() => navigation.navigate("HomeScreen")} style={styles.btn}>
          <MotiImage
            from={{
              scale: 1,
            }}
            animate={{
              scale: 1.2,
            }}
            transition={{
              type: "timing",
              loop: true,
              duration: 1000,
            }}
            style={styles.button}
            source={require("../../assets/btn.png")} />
        </TouchableOpacity>
        <Image
          style={styles.text}
          source={require("../../assets/text.png")} />
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    position: "absolute",
    height: 300,
    width: 350,
    alignSelf: "center",
    bottom: 40,
  },
  text: {
    width: 201,
    height: 123,
    position: "absolute",
    left: 45,
    top: 100,
  },
  btn: {
    width: 156,
    height: 50,
    position: "absolute",
    left: 45,
    top: 250,
    // backgroundColor: "red",
  },
  button: {
    width: 196,
    height: 50,
  },
});

export default observer(PreViewScreen);
