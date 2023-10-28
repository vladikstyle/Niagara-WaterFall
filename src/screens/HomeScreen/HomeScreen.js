import {
  Dimensions,
  FlatList,
  Image,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { observer } from "mobx-react-lite";
import PLACES from "../../config/PLACES";
import Theme from "../../config/Theme";
import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";
import InfoStore from "../../store/InfoStore";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import LEVELS from "../../config/LEVELS";
import Ionicons from "react-native-vector-icons/Ionicons";
import Entypo from "react-native-vector-icons/Entypo";
import { launchImageLibrary } from "react-native-image-picker";

const size = (Dimensions.get("screen").width - 60) / 2;

const Item = ({ item }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("CardScreen", { item })}
      style={styles.itemBox}>
      <Image style={styles.image} source={item?.images[0]} />
      <View style={styles.titleBox}>
        <Text style={styles.title}>{item?.title}</Text>
      </View>
      {
        InfoStore.places.includes(item?.id) &&
        <View style={styles.checkBox}>
          <Ionicons name="checkmark-done" size={20} color={Theme.title} />
        </View>
      }
    </TouchableOpacity>
  );
};

const PlaceItem = ({ item }) => {
  return (
    <Image style={styles.smallPlace} source={item?.images[0]} />
  );
};

const HomeScreen = ({ navigation }) => {

  useEffect(() => {
    InfoStore.getPlaces();
    InfoStore.getAvatar();
  }, []);

  const openGallery = async () => {
    let result = await launchImageLibrary({
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result?.didCancel) {
      // console.log(result?.assets?.uri)
      InfoStore.addAvatar(result?.assets[0]?.uri);
    }
  };

  return (
    <ImageBackground style={styles.container} source={Theme.bcg}>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <View style={styles.avatarBox}>
            <TouchableOpacity onPress={() => openGallery()} style={styles.avatar}>
              <Entypo name="user" size={24} color="white" />
              {
                InfoStore.avatar &&
                <Image style={styles.avatarImage} source={{ uri: InfoStore.avatar }} />
              }
            </TouchableOpacity>
          </View>
          <View>
            <View style={styles.levelBox}>
              <Text style={styles.level}>{LEVELS[InfoStore.level].title}</Text>
              <Text style={styles.levelD}>{LEVELS[InfoStore.level].description}</Text>
            </View>
            <View style={styles.placesBox}>
              <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={PLACES.filter(({ id }) => InfoStore.places.includes(id))}
                renderItem={({ item, index }) => <PlaceItem item={item} key={index} />} />
              <TouchableOpacity onPress={() => navigation.navigate("MapScreen")} style={styles.box}>
                <FontAwesome name="location-arrow" size={30} color="white" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <FlatList
          data={PLACES.sort((a, b) => {
            const aIndex = InfoStore.places.indexOf(a.id);
            const bIndex = InfoStore.places.indexOf(b.id);

            if (aIndex === -1 && bIndex === -1) return 0;
            if (aIndex === -1) return 1;
            if (bIndex === -1) return -1;

            return aIndex - bIndex;
          })}
          numColumns={2}
          columnWrapperStyle={{ justifyContent: "space-evenly" }}
          renderItem={({ item }) => <Item item={item} key={item?.id} />} />
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  itemBox: {
    width: size,
    height: size,
    backgroundColor: "white",
    borderRadius: 25,
    marginVertical: 8,
    padding: 12,
  },
  image: {
    width: size - 24,
    height: size - 64,
    borderRadius: 20,
  },
  titleBox: {
    flex: 1,
    // backgroundColor: 'red',
    justifyContent: "center",
  },
  title: {
    marginLeft: 15,
    fontSize: 14,
    fontWeight: "700",
    color: Theme.title,
  },
  header: {
    width: Dimensions.get("screen").width,
    height: 200,
    // backgroundColor: 'red',
    marginBottom: 10,
    padding: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  avatar: {
    height: 100,
    width: 70,
    borderRadius: 10,
    backgroundColor: Theme.text,
    alignItems: "center",
    justifyContent: "center",
  },
  avatarImage: {
    height: 100,
    width: 70,
    borderRadius: 10,
    position: "absolute",
  },
  placesBox: {
    width: Dimensions.get("screen").width - 150,
    height: 60,
    backgroundColor: Theme.main,
    alignSelf: "flex-end",
    padding: 5,
    borderRadius: 10,
    alignItems: "center",
    flexDirection: "row",
    marginVertical: 5,
  },
  levelBox: {
    width: Dimensions.get("screen").width - 150,
    minHeight: 50,
    backgroundColor: Theme.main,
    alignSelf: "flex-end",
    padding: 5,
    borderRadius: 10,
    marginVertical: 5,
  },
  box: {
    height: 50,
    width: 50,
    borderRadius: 7,
    backgroundColor: Theme.accent,
    marginLeft: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  smallPlace: {
    height: 50,
    width: 50,
    marginRight: 5,
    borderRadius: 7,
  },
  level: {
    color: Theme.title,
    fontSize: 15,
    fontWeight: "700",
  },
  levelD: {
    color: Theme.text,
    fontSize: 13,
    fontWeight: "400",
  },
  avatarBox: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  checkBox: {
    height: 26,
    width: 26,
    backgroundColor: Theme.main,
    borderRadius: 13,
    position: "absolute",
    right: 20,
    top: 20,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default observer(HomeScreen);
