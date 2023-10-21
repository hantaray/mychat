import { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, TextInput, ImageBackground } from 'react-native';

const StartScreen = ({ navigation }) => {
  const [name, setName] = useState('anonymous');
  const [color, setColor] = useState('#FFFFFF');
  const colors = ['#FFFFFF', '#474056', '#757083', '#8A95A5', '#B9C6AE'];

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
            <TouchableOpacity
              style={[styles.colorButtons, styles.colorBtn1]}
              onPress={() => setColor(colors[1])}
            >
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.colorButtons, styles.colorBtn2]}
              onPress={() => setColor(colors[2])}
            >
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.colorButtons, styles.colorBtn3]}
              onPress={() => setColor(colors[3])}
            >
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.colorButtons, styles.colorBtn4]}
              onPress={() => setColor(colors[4])}
            >
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={styles.startButton}
            onPress={() => navigation.navigate('ChatScreen', { name: name, color: color })}>
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
    width: '88%',
    padding: 16,
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  colorButtons: {
    width: 50,
    height: 50,
    borderRadius: 25
  },
  colorBtn1: {
    backgroundColor: '#474056'
  },
  colorBtn2: {
    backgroundColor: '#757083'
  },
  colorBtn3: {
    backgroundColor: '#8A95A5'
  },
  colorBtn4: {
    backgroundColor: '#B9C6AE'
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