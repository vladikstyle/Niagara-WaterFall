import {
  Dimensions,
  FlatList,
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { observer } from "mobx-react-lite";
import Theme from "../../config/Theme";
import { useState } from "react";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import MapView, { Marker } from "react-native-maps";
import Ionicons from "react-native-vector-icons/Ionicons";
import InfoStore from "../../store/InfoStore";

const { width } = Dimensions.get("screen");

const Item = ({ item, index, setSelectedIndex }) => {
  return (
    <TouchableOpacity onPress={() => setSelectedIndex(index)}>
      <Image style={styles.smallImage} source={item} />
    </TouchableOpacity>
  );
};

const CardScreen = ({ navigation, route: { params: { item } } }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <ImageBackground style={styles.container} source={Theme.bcg}>
      <SafeAreaView style={styles.container}>
        <Image style={styles.image} source={item?.images[selectedIndex]} />
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
          <Ionicons name="return-down-back" size={30} color="white" />
        </TouchableOpacity>
        <View style={styles.scrollBox}>
          <FlatList
            horizontal
            data={item?.images}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item, index }) => <Item setSelectedIndex={setSelectedIndex} item={item} key={index}
                                                   index={index} />} />
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          {
            !InfoStore.places.includes(item?.id) &&
            <TouchableOpacity onPress={() => InfoStore.addPlace(item?.id)} style={styles.btn}>
              <Text style={styles.btnText}>DONE</Text>
              <Ionicons name="checkmark-done" size={24} color="white" />
            </TouchableOpacity>
          }
          <View style={{ padding: 20 }}>
            <Text style={styles.title}>{item?.title}</Text>
            <Text style={styles.description}>{item?.description}</Text>
            <View style={styles.row}>
              <View style={styles.box}>
                <MaterialIcons name="location-pin" size={30} color={Theme.title} />
              </View>
              <Text style={styles.title2}>{item?.location}</Text>
            </View>
            <View style={styles.row}>
              <View style={styles.box}>
                <FontAwesome5 name="calendar-alt" size={30} color={Theme.title} />
              </View>
              <Text style={styles.title2}>{item?.time}</Text>
            </View>
            <View style={styles.row}>
              <View style={styles.box}>
                <FontAwesome5 name="swimmer" size={30} color={Theme.title} />
              </View>
              <Text style={styles.title2}>{item?.swimming}</Text>
            </View>
            <View style={styles.row}>
              <View style={styles.box}>
                <FontAwesome name="location-arrow" size={30} color={Theme.title} />
              </View>
              <Text style={styles.title2}>{item?.howToGet}</Text>
            </View>
            <View style={styles.mapContainer}>
              <MapView
                zoomEnabled={false}
                scrollEnabled={false}
                showsUserLocation
                camera={{ zoom: 0.1, altitude: 10000, center: item.coords }}
                showsBuildings={true}
                mapType={"satellite"}
                style={styles.map}>
                <Marker coordinate={item.coords} image={require("../../assets/userMarkerSmall.png")} />
              </MapView>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width,
    height: width * 0.7,
  },
  scrollBox: {
    width,
    height: 86,
  },
  smallImage: {
    height: 60,
    width: 60,
    borderRadius: 10,
    marginLeft: 22,
    marginVertical: 13,
  },
  title: {
    color: "white",
    fontSize: 20,
    fontWeight: "800",
  },
  title2: {
    color: "white",
    fontSize: 18,
    fontWeight: "700",
    marginRight: 20,
    // backgroundColor: 'red',
    flex: 1,
  },
  description: {
    color: "white",
    fontSize: 12,
    fontWeight: "400",
    marginVertical: 10,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 8,
  },
  box: {
    height: 50,
    width: 50,
    borderRadius: 7,
    backgroundColor: Theme.bg,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 17,
  },
  mapContainer: {
    height: width - 40,
    width: width - 40,
    alignSelf: "center",
    marginTop: 10,
    marginBottom: 20,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
    height: width - 40,
    width: width - 40,
    borderRadius: 20,
  },
  btn: {
    width: width - 80,
    height: 50,
    borderRadius: 20,
    backgroundColor: Theme.accent,
    alignSelf: "center",
    marginVertical: 10,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  btnText: {
    color: "white",
    fontSize: 25,
    fontWeight: "500",
    marginRight: 10,
  },
  backBtn: {
    position: "absolute",
    left: 20,
    top: 70,
  },
});

export default observer(CardScreen);
