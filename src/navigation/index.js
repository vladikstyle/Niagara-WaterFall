import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import PreViewScreen from "../screens/PreViewScreen/PreViewScreen";
import HomeScreen from "../screens/HomeScreen/HomeScreen";
import CardScreen from "../screens/CardScreen/CardScreen";
import MapScreen from "../screens/MapScreen/MapScreen";

const Stack = createStackNavigator();
export default function MainNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="PreViewScreen" component={PreViewScreen} options={{ headerShown: false }} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="CardScreen" component={CardScreen} options={{ headerShown: false }} />
        <Stack.Screen name="MapScreen" component={MapScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
