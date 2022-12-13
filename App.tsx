import { StatusBar, StyleSheet, View } from 'react-native';
import { Home } from './src/screens/Home';
import React, {useState, useEffect, useCallback} from "react"
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";
import {
    Inter_400Regular,
    Inter_700Bold
} from "@expo-google-fonts/inter";


export default function App() {
  const [appIsReady, setAppIsReady ] = useState(false);

  useEffect(() => {
    (async () => {
        try {
          await SplashScreen.preventAutoHideAsync();
          await Font.loadAsync({
            Inter_400Regular,
            Inter_700Bold
          });
        } catch (error) {
          
        }
        finally {
          setAppIsReady(true);
        }
    })();
  }, [])

  const onLayout = useCallback(() => {
    if(appIsReady) {
      SplashScreen.hideAsync();
    }
  }, [appIsReady])

  if(!appIsReady) {
    return null;
  }

  return (
      <View style={style.container} onLayout={onLayout}>
        <StatusBar 
          barStyle="light-content"
          translucent
          backgroundColor="tranparent"
        />
        <Home/>
      </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1
  }
})
;
