import { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, TextInput, ImageBackground } from 'react-native';
import { getAuth, signInAnonymously } from "firebase/auth";

const StartScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [bgColor, setBgColor] = useState('#FFFFFF');
  const colors = ['#474056', '#757083', '#8A95A5', '#B9C6AE'];
  const auth = getAuth();

  const signInUser = () => {
    signInAnonymously(auth)
      .then(result => {
        navigation.navigate('ChatScreen', { userID: result.user.uid, name: name, bgColor: bgColor });
        Alert.alert("Signed in Successfully!");
      })
      .catch((error) => {
        Alert.alert("Unable to sign in, try later again.");
      })
  }

  return (
    <View style={styles.container}>
      <ImageBackground source={require('../assets/bgImage.png')} resizeMode="cover" style={styles.bgImage}>
        <Text style={styles.title}>MyChat</Text>
        <View style={styles.contentBox}>
          <TextInput
            style={styles.textInput}
            value={name}
            onChangeText={setName}
            placeholder='Your name'
          />
          <Text style={styles.text}>Choose Background Color:</Text>
          <View style={styles.colorButtonContainer}>
            {colors.map((color, index) => (
              <TouchableOpacity
                key={index}
                style={[styles.colorButtons, { backgroundColor: color },
                bgColor === color && styles.selected]}
                onPress={() => setBgColor(color)} />
            ))}
          </View>
          <TouchableOpacity
            accessible={true}
            accessibilityLabel="Start chat"
            accessibilityHint="Go to the chat screen and begin to chat."
            accessibilityRole="button"
            style={styles.startButton}
            onPress={signInUser}>
            <Text style={styles.startButtonText}>Start Chatting</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground >
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bgImage: {
    flex: 1,
    justifyContent: 'center'
  },
  title: {
    flex: 1,
    fontSize: 45,
    marginTop: 80,
    fontWeight: '600',
    color: '#FFFFFF',
    alignSelf: 'center'
  },
  contentBox: {
    width: '88%',
    height: '44%',
    marginBottom: '6%',
    alignSelf: 'center',
    fontSize: 45,
    fontWeight: '600',
    backgroundColor: '#FFFFFF'

  },
  textInput: {
    width: '88%',
    padding: 16,
    borderWidth: 1,
    marginTop: 16,
    marginBottom: 16,
    alignSelf: 'center'
  },
  text: {
    marginTop: 16,
    paddingStart: '6%',
    fontSize: 16,
    fontWeight: '300',
    opacity: 1
  },
  colorButtonContainer: {
    padding: 8,
    alignSelf: 'center',
    flexDirection: 'row',
  },
  colorButtons: {
    width: 50,
    height: 50,
    margin: 8,
    borderRadius: 25
  },
  selected: {
    borderWidth: 2,
    borderColor: 'black',
  },
  startButton: {
    width: '88%',
    padding: 16,
    marginTop: 21,
    alignSelf: 'center',
    backgroundColor: '#757083'
  },
  startButtonText: {
    alignSelf: 'center',
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
  },
});

export default StartScreen;