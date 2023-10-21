import { useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';

const ChatScreen = ({ route, navigation }) => {
  const name = route.params.name;
  const color = route.params.color;

  useEffect(() => {
    navigation.setOptions({ title: name });
  }, []);

  return (
    <View style={[styles.container, { backgroundColor: color }]}>
      <Text>Hello Chatscreen!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default ChatScreen;