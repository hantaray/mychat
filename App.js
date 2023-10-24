import StartScreen from './components/StartScreen';
import ChatScreen from './components/ChatScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

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

const App = () => {
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
          {props => <ChatScreen component={ChatScreen} db={db} {...props} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
