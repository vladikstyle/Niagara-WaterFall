import { StyleSheet, TouchableOpacity, View } from "react-native";
import { observer } from "mobx-react-lite";
import MapView, { Marker } from "react-native-maps";
import InfoStore from "../../store/InfoStore";
import PLACES from "../../config/PLACES";
import Theme from "../../config/Theme";
import Ionicons from "react-native-vector-icons/Ionicons";

const MapScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <MapView
        // zoomEnabled={false}
        // scrollEnabled={false}
        // showsUserLocation
        initialCamera={{ altitude: 100000000 }}
        // showsBuildings={true}
        mapType={"satellite"}
        style={StyleSheet.absoluteFill}>
        {
          PLACES.filter(({ id }) => InfoStore.places.includes(id)).map(el =>
            <Marker key={el?.id} coordinate={el.coords} image={require("../../assets/userMarkerSmall.png")} />,
          )
        }
      </MapView>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.btn}>
        <Ionicons name="return-down-back" size={30} color="white" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  btn: {
    backgroundColor: Theme.accent,
    height: 50,
    width: 50,
    borderRadius: 10,
    position: 'absolute',
    top: 60,
    left: 20,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default observer(MapScreen);
