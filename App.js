import StartScreen from './components/StartScreen';
import ChatScreen from './components/ChatScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { initializeApp } from 'firebase/app';
import { getFirestore, disableNetwork, enableNetwork } from 'firebase/firestore';
import { useNetInfo } from "@react-native-community/netinfo";
import { useEffect } from "react";
import { Alert } from "react-native";
import { getStorage } from "firebase/storage";

// Create the navigator
const Stack = createNativeStackNavigator();

const firebaseConfig = {
  apiKey: "AIzaSyBMsZVIKIoWCvyLtMVnHNc1uDVaESNfzE0",
  authDomain: "mychat-3a712.firebaseapp.com",
  projectId: "mychat-3a712",
  storageBucket: "mychat-3a712.appspot.com",
  messagingSenderId: "415772447820",
  appId: "1:415772447820:web:f276ff1fefbf2db9db10e9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

// Initialize Firestore Storage
const storage = getStorage(app);

const App = () => {
  const connectionStatus = useNetInfo();

  useEffect(() => {
    if (connectionStatus.isConnected === false) {
      Alert.alert("Connection Lost!");
      disableNetwork(db);
    } else if (connectionStatus.isConnected === true) {
      enableNetwork(db);
    }
  }, [connectionStatus.isConnected]);

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="StartScreen"
      >
        <Stack.Screen
          name="StartScreen"
          component={StartScreen}
        />
        <Stack.Screen
          name="ChatScreen"
        >
          {props =>
            <ChatScreen
              component={ChatScreen}
              isConnected={connectionStatus.isConnected}
              db={db} {...props}
              storage={storage}
            />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
