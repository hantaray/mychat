import { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, TextInput, ImageBackground } from 'react-native';

const StartScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [bgColor, setBgColor] = useState('#FFFFFF');
  const colors = ['#474056', '#757083', '#8A95A5', '#B9C6AE'];

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
              <TouchableOpacity key={index} style={[styles.colorButtons, { backgroundColor: color },
              bgColor === color && styles.selected]} onPress={() => setBgColor(color)} />
            ))}
          </View>
          <TouchableOpacity
            style={styles.startButton}
            onPress={() => navigation.navigate('ChatScreen', { name: name, bgColor: bgColor })}>
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