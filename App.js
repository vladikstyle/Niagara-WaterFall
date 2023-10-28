import React, {createContext, useEffect, useRef, useState} from 'react';
//import RNAdvertisingId from 'react-native-advertising-id';
import { LogLevel, OneSignal } from 'react-native-onesignal';
import AsyncStorage, {useAsyncStorage} from '@react-native-async-storage/async-storage';
import {WebView} from 'react-native-webview';
//import NetInfo, { NetInfoStateType, useNetInfo } from "@react-native-community/netinfo";
import appsFlyer from 'react-native-appsflyer';
//import {Settings} from 'react-native-fbsdk-next';
//import {FBAppLink} from 'react-native-fbsdk-next';
import LottieView from 'lottie-react-native';
//import Orientation from 'react-native-orientation';
import ReactNativeIdfaAaid from '@sparkfabrik/react-native-idfa-aaid';
import {createStackNavigator} from "@react-navigation/stack";
import { requestTrackingPermission } from 'react-native-tracking-transparency';
import LoadingScreen from './src/LoadingScreen';
import Ionicons from "react-native-vector-icons/Ionicons"
import { StyleSheet, SafeAreaView, View, Alert,Dimensions, Text, BackHandler, ActivityIndicator,StatusBar, Vibration,Pressable } from 'react-native';


//import OneSignal from 'react-native-onesignal';

//import {FBAppLink} from 'react-native-fbsdk-next';
import RNAdvertisingId from 'react-native-advertising-id';
//import Orientation from 'react-native-orientation';
//import ReactNativeIdfaAaid, { AdvertisingInfoResponse } from '@sparkfabrik/react-native-idfa-aaid';
//import RNRestart from 'react-native-restart';
//import CheckBox from '@react-native-community/checkbox';
//import Modal from "react-native-modal";
import thunk from 'redux-thunk';
//import { Realm, RealmProvider, useRealm, useQuery } from '@realm/react';
import moment from "moment";
//import {GestureHandlerRootView} from "react-native-gesture-handler";
//import Orientation from 'react-native-orientation-locker';
import RNPickerSelect from 'react-native-picker-select';
//import NetInfo, { NetInfoStateType, useNetInfo } from "@react-native-community/netinfo";
//import {FBAppLink} from 'react-native-fbsdk-next';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import {NativeModules} from 'react-native';
//import Orientation from 'react-native-orientation';
//import ReactNativeIdfaAaid, { AdvertisingInfoResponse } from '@sparkfabrik/react-native-idfa-aaid';
import {NavigationContainer} from "@react-navigation/native";
//import RNRestart from 'react-native-restart';
//import CheckBox from '@react-native-community/checkbox';
import FlipCard from 'react-native-flip-card';
//import DatePicker from 'react-native-date-picker'
//import Modal from "react-native-modal";
//import thunk from 'redux-thunk';
//import { Realm, RealmProvider, useRealm, useQuery } from '@realm/react';
//import moment from "moment";

import TravelPlaces from './src/App';
//import UnityView from '@azesmway/react-native-unity';
//import  Orientation from "react-native-orientation-locker";
/*export const BetsContext = createContext()
const App = () => {
  if (Platform.OS === 'android') {
    if (UIManager.setLayoutAnimationEnabledExperimental) {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }
  const [bets, setBets] = useState([]);
  const getBets = async () => {
    setBets(await getValue('BETS'))
  }
  const BetsData = {
    bets,
    getBets
  }


*/
//const AppLink = require ('react-native').NativeModules.FBAppLink;
const idoAdv = 'niagara=';
const idoSingale = 'c0f568aa-3027-442d-8a13-e14a1ecd1ae4';

const keyflayero = 'bpivSZh6p72rW97G97Ddze'
const appid = '6468250947'
const urelmy = 'https://playfulactivitytodaywithjoyfulhearts.space/travel_object';
const CloUrl = 'https://playfulactivitytodaywithjoyfulhearts.space/new_object';
const chastnaminga = 'object';
const useradjustly = 'places=';
const OrganicSub = 'waterfall';
const ProgressLottieResourse = './src/assets/loader.json';
const storedUrlItem = 'traveling';

//const waytopcrogress = '../lostdiamond/assets/marik.json';
/*module.exports = {
  fetchDeferredAppLink(): Promise <string | null> {
    return AppLink.fetchDeferredAppLink();
  },
};
*/

/*async function DeapGetKery() {
  await Settings.setAdvertiserTrackingEnabled(true);
  await Settings.initializeSDK();

 // NativeModules.FBAppLink.initializeSDK();
  console.log('nachalo:');
  const demleper = await AppLink.fetchDeferredAppLink();

    console.log('deeplenk:'+ demleper);
    try {
      deeppop = demleper.split('?');
      okster = deeppop[1]
    } catch(e) {
      okster='null';
    }
    return okster;
  //let demleper = await FBAppLink.fetchDeferredAppLink()
//console.log('deeplenk: '+ demleper);
 //return demleper;
}
*/


/*async function GethttpCode (){


        setTest('');

        setIsLoading(false);

      }
      return response.status;
    })
}
*/

//OneSignal Init CodeOneSignal.setLogLevel(6, 0);
OneSignal.initialize(idoSingale);
//END OneSignal Init Code
//OneSignal.Notifications.requestPermission(true);
OneSignal.Notifications.addEventListener('click', (event) => {
  console.log('OneSignal: notification clicked:', event);
});
//Prompt for push on iOS





/*
async function waitOneSignalPermissions() {
  return new Promise((resolve, reject) => {
    OneSignal.push(() => {
      OneSignal.on('notificationPermissionChange', (permissionChange) => {
        if (permissionChange && permissionChange.to === 'granted') {
          resolve(true); // Пользователь предоставил разрешение
        } else {
          resolve(false); // Пользователь отклонил разрешение или произошла ошибка
        }
      });
    });
  });
}
*/
//Method for handling notifications received while app in foreground 

/*
OneSignal.setNotificationWillShowInForegroundHandler(notificationReceivedEvent => {
  console.log("OneSignal: notification will show in foreground:", notificationReceivedEvent);
  let notification = notificationReceivedEvent.getNotification();
  console.log("notification: ", notification);
  const data = notification.additionalData
  console.log("additionalData: ", data);
  // Complete with null means don't show a notification.
  notificationReceivedEvent.complete(notification);
});

//Method for handling notifications opened
OneSignal.setNotificationOpenedHandler(notification => {
  console.log("OneSignal: notification opened:", notification);
});
*/
//1ST FUNCTION
function InitAppsflyer() {
  return new Promise((resolve, reject) => {
    appsFlyer.initSdk(
      {
        devKey: keyflayero,
        appId: appid,
        isDebug: true,
        onInstallConversionDataListener: true, //Optional
        onDeepLinkListener: true, //Optional
        timeToWaitForATTUserAuthorization: 10, //for iOS 14.5
      },
      resolve,
      reject,
    );
  });
}

function GetUIDAppsflyer() {
  return new Promise((resolve, reject) => {
    appsFlyer.getAppsFlyerUID((err, appsFlyerUID) => {
      if (err) {
        reject(err);
      } else {
        // console.log('on getAppsFlyerUID: ' + appsFlyerUID);

        resolve(appsFlyerUID);
      }
    });
  });
}

function GetAttributionInfoAppsflyer() {
  return new Promise((resolve, reject) => {
    const onInstallConversionDataCanceller = appsFlyer.onInstallConversionData(
      res => {
        if (JSON.parse(res.data.is_first_launch) == true) {
          if (res.data.af_status === 'Non-organic') {
            var media_source = res.data.media_source;
            var af_adset = res.data.af_adset;
            var af_status = res.data.af_status;
            var af_channel = res.data.af_channel;
            var af_ad = res.data.af_ad;
            var af_os = res.data.af_os;
            var campaign = res.data.campaign;
            var konec = campaign + '_' + af_adset + '_' + af_ad + '_&kil=' + af_os;
            //   console.log(campaign);


          } else if (res.data.af_status === 'Organic') {
            //  console.log('This is first launch and a Organic Install');
          }
        } else {
          // console.log('This is not first launch');
        }

        // console.log('GetAttributionInfoAppsflyer end');
        return resolve(konec);
      },
    );
  });
}


async function GetAdvertisingUserID() {
  try {
    const response = await ReactNativeIdfaAaid.getAdvertisingInfo();
    const idadvers = idoAdv + response.id;
    // console.log(" " + idadvers);
    return idadvers;
  } catch (error) {
    // Обработка ошибки, если она возникла
    console.error('Error getting advertising info:', error);
    return null; // или верните значение по умолчанию
  }
}

//2ST FUNCTION


async function Taimeng() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      return resolve("taimeng")
    }, 23000);
  });
}

async function Taimengadv() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      return resolve("taimengadv")
    }, 15000);
  });
}


//3ST FUNCTION
/*async function GetAttributionInfoAppsflyer() {

  return new Promise((resolve, reject) => {

    Adjust.getAttribution((arrtibution) => {
     // JSON.parse(arrtibution);
      console.log("Tracker token = " + arrtibution.trackerToken);
      console.log("Tracker name = " + arrtibution.trackerName);
      console.log("Network = " + arrtibution.network);
      console.log("Campaign = " + arrtibution.campaign);

      console.log("Adgroup = " + arrtibution.adgroup);
      console.log("Creative = " + arrtibution.creative);
      console.log("Click label = " + arrtibution.clickLabel);
      console.log("Adid = " + arrtibution.adid);

      if (arrtibution.network != 'Organic'){
        var useradjustly =+ arrtibution.adid;
        var campaign = arrtibution.campaign;
        var received_attr = [campaign,useradjustly];
        resolve();
        return (received_attr);
      } else {
        console.log('Organic Install');
        var received_attr = [arrtibution.network,useradjustly];
        resolve();
        return (received_attr);
      }

  })

});
  }
*/
const Stack = createStackNavigator();

// const [isLobading, setIsLobading] = useState(false);


// LAST ST FUNCTIONr
export const LoadingContext = createContext()
export default function App() {

//  NetInfo.fetch().then(state => {

  //  const connected = state.isConnected;
  //  if (connected == false) {
  //  console.log("Is connected?", state.isConnected);

  //   Alert.alert("Please check yours internet connection!");
  //   <Text>Connection Status</Text>;
  //    <View style={styles.container}>

  //   </View>
  //     }
//  });


  //console.log('App');


  const [LoadingProgress, setLoadingProgress] = useState(true);
  const [SavedLastLink, setSavedLastLink] = useState(false);
  const [ID, setID] = useState('');
  const [GetAtributtionState, setGetAtributtionState] = useState({});
  const [storedUrl, setstoredUrl] = useState('');
  const [cloakResponse, setcloakResponse] = useState('');
  const [test, setTest] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [idfa, setIdfa] = useState('');
  const [openunity, setopenunity] = useState(false);
  const [showPermissionAlert, setShowPermissionAlert] = useState(true);


  //const [deep, setDeep] = useState('noconect');
  const [singId, setSingId] = useState('false');
  const {getItem, setItem} = useAsyncStorage('@storage_key');

  const refWebview = useRef();
  const unityRef = useRef(null);
  //const unityRef = useRef(null);

  function getCampainQuery(campaign) {


    //console.log('MYFINAL'+campaign);
    const parts = campaign.split('_');
    return parts.map((part, i) => `${chastnaminga}${i + 1}=${part}`).join('&');
  }


  function handleBackPress() {
    refWebview.current.goBack();
    return true;
  }

  function onWebviewLoad() {
    //console.log('Loaded ' + mycomburl);
    setLoadingProgress(false);
  }


  useEffect( () => {

    const moment = require('moment')
    async function GetPremissionRequest(){
      const trackingStatus = await requestTrackingPermission();
      }
    const time = moment() // moment(new Date()).format("YYYY-MM-DD hh:mm:ss")

    const timestamp = time.unix();

    //console.log('bonud'+timestamp)
    if (timestamp < 1698217692) {
    //  Orientation.lockToLandscape();
     
      GetPremissionRequest();
      setTimeout(() => {
        // Здесь вы можете выполнить дополнительные действия, если необходимо
        setopenunity(true);
        setLoadingProgress(false);
        // Перейти к следующему экрану, скрыв сплеш-экран
      }, 3000)
   //   Settings.setAdvertiserTrackingEnabled(true);
      // Alert.alert("Today there are no bonuses for you.");

      GetAdvertisingUserID().then(() => setShowPermissionAlert(false))
     // console.log('Kvadrik')
      InitAppsflyer();
      /*  if (unityRef?.current) {
          const message: IMessage = {
            gameObject: 'gameObject',
            methodName: 'methodName',
            message: 'message',
          };
          unityRef.current.postMessage(message.gameObject, message.methodName, message.message);
        }*/
     
     
      

    } else {
    //  Settings.setAdvertiserTrackingEnabled(true);

    

      fetch(CloUrl)

        .then(response => {
          AsyncStorage.getItem(storedUrlItem).then(value => {

            //console.log('satus'+response.status);
            const CloackCodeResponse = response.status;
            setcloakResponse(CloackCodeResponse);
            if (response.status != '200') {
              //Orientation.lockToLandscape();
              GetPremissionRequest();
              //console.log('rotation good')
              // Orientation.lockToLandscape();
              GetAdvertisingUserID().then(() => setShowPermissionAlert(false))
               //console.log('hey we are requsted all')
              InitAppsflyer();
              setopenunity(true);
              setLoadingProgress(false);
             // Orientation.lockToLandscape();
            } else {
             // Orientation.unlockAllOrientations();
             //   Orientation.lockToPortrait();
              //  console.log('Portrait')
              if (value) {
                // Orientation.lockToLandscape();
                setstoredUrl(value);
                // setLoadingProgress(false);
              } else {
                //console.log('adGIROELSE:' + CloackCodeResponse);
                CollectUrl(CloackCodeResponse);
              }
            }
          })
        });

      //GethttpCode();


      async function CollectUrl(CloackCodeResponse) {

        await InitAppsflyer();
        const gvard = CloackCodeResponse;
        const appsFlyerUID = await GetUIDAppsflyer();
        // console.log({appsFlyerUID});
        setcloakResponse(gvard);
        const AdverId = await Promise.race([GetAdvertisingUserID(), Taimengadv()]);
        //console.log('AdverId:'+AdverId);


        //const deeplop = await DeapGetKery();
        //console.log('deeplop:'+deeplop);

        //console.log('kolaka:'+kodeotwet);


        await OneSignal.Notifications.requestPermission(true);

        var GetAtributtionRes = await Promise.race([GetAttributionInfoAppsflyer(), Taimeng()]);
        // console.log('GetAtributtionRes:'+GetAtributtionRes);
        setGetAtributtionState(GetAtributtionRes);


        //const combURL = `${urelmy}?${userAppfly}${appsFlyerUID}&${getCampainQuery(
        //GetAtributtionRes || OrganicSub,)}&${AdverId}&${deeplop}`;
        const combURL = `${urelmy}?${getCampainQuery(
          GetAtributtionRes || OrganicSub,)}&${useradjustly}${appsFlyerUID}&${AdverId}`;
        setstoredUrl(combURL);
//console.log(combURL);
        AsyncStorage.setItem(storedUrlItem, combURL)
        // console.log('gvard: '+ isResponseNotFound + 'and');
        //render the webview


      }


      return () => {
      };
    }
  }, []);
  const onBack = () => {
    refWebview.current.goBack();
  }
  const onReload = () => {
    refWebview.current.reload();
  }

  /* const readItemFromStorage = async () => {
     const item = await getItem();
     setDeep(item);
   };

   const writeItemToStorage = async newValue => {
     await setItem(newValue);
     setDeep(newValue);
   };

  /* RNAdvertisingId.getAdvertisingId()
     .then(response => {
       setSingId(response.advertisingId);
     })
     .catch(error => console.error(error));

   // eslint-disable-next-line no-undef
   /*_responseInfoCallback = async () => {
     readItemFromStorage();
     const urls = `https://graph.facebook.com/v6.0/3161383457459677/activities?access_token=3161383457459677|3a9ac25fb788ed7058469a39189bf760&advertiser_id=${singId}&advertiser_tracking_enabled=1&application_tracking_enabled=1&event=DEFERRED_APP_LINK`;
     try {
       const get = await fetch(urls, {method: 'POST'});
       const jsons = await get.json();
       if (jsons.success) {
         console.log('const jsons', jsons);
         return;
       } else {
         writeItemToStorage(`${jsons.applink_url}`);
       }
     } catch (e) {
       console.log('e');
       return;
     }
   };
   // Create a graph request asking for user information with a callback to handle the response.
  /* const infoRequest = new GraphRequest(
     '/3161383457459677/activities',
     {
       access_token: '3161383457459677|3a9ac25fb788ed7058469a39189bf760',
       advertiser_id: `${singId}`,
       advertiser_tracking_enabled: '1',
       application_tracking_enabled: '1',
       event: 'MOBILE_APP_INSTALL',
     },
     this._responseInfoCallback,
   );
   // Start the graph request.
   new GraphRequestManager().addRequest(infoRequest).start();
      <UnityView
         ref={unityRef}
         style={{ flex: 1 }}
         onUnityMessage={(result) => {
           console.log('onUnityMessage', result.nativeEvent.message)
         }}
       />
 */

  return (
    <View style={styles.container}>
      <View style={{width: '100%', height: '100%'}}>
        {(LoadingProgress || showPermissionAlert) ?
          <View style={[StyleSheet.absoluteFillObject, progres.container]}>
        <LoadingScreen></LoadingScreen>
          </View>
          :
          <>
            {cloakResponse !== 200 && openunity &&
              <View style={{flex: 1}}>
              
             <TravelPlaces></TravelPlaces>
              </View>
            }
          </>
        }
        {storedUrl && cloakResponse === 200 &&
        <>
          <SafeAreaView style={{flex: 1}}>
        
          <WebView
              /* source={
                AsyncStorage.getItem('svd').then(value =>{
                 if (value != null) {
                   uri:value
                 } else {
                   uri: storedUrl
                 }})}
                 */
              textZoom={100}
              ref={refWebview}
              allowsBackForwardNavigationGestures={true}
              domStorageEnabled={true}
              javaScriptEnabled={true}
              source={{uri: storedUrl}}
              allowsInlineMediaPlayback={true}
              setSupportMultipleWindows={false}
              mediaPlaybackRequiresUserAction={false}
              allowFileAccess={true}
              onLoad={() => setLoadingProgress(false)}
              onLoadStart={(syntheticEvent) => {
                if (SavedLastLink != true) {
                  setLoadingProgress(true)
                }
              }}
              onLoadEnd={async (syntheticEvent) => {
                const {nativeEvent} = syntheticEvent;
                const {url, loading, canGoBack} = nativeEvent;
               // console.log(url);
                // console.log(await AsyncStorage.getItem(storedUrlItem));
                //console.log(storedUrl);
                if (SavedLastLink != true) {
                  if (await AsyncStorage.getItem(storedUrlItem) == storedUrl) {
                    //console.log('url saved:' + url);
                    AsyncStorage.setItem(storedUrlItem, url)
                    setSavedLastLink(true);
                  }
                }
              }}
              javaScriptCanOpenWindowsAutomatically={true}/>
              <View style={styles.modal}>
  <Pressable onPress={() => onBack()}>
    <Ionicons name="arrow-back" size={30} color="white" />
  </Pressable>
  <Pressable onPress={() => onReload()}>
    <Ionicons name="reload" size={30} color="white" />
  </Pressable>
</View>
          </SafeAreaView>
        </>}
      </View>
    </View>)
}
const styles = StyleSheet.create({
  container: {
    marginTop: 0,
    flex: 1,
    backgroundColor: '#191d24',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modal: {
    height: 50,
    width: Dimensions.get("screen").width,
    backgroundColor: 'black',
    paddingHorizontal: 24,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: "space-between",
    position: 'absolute',
    bottom: 0,
    left: 0
  }
});

const progres = StyleSheet.create({
  container: {
    marginTop: 0,
    flex: 1,
    backgroundColor: '#191d24',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
