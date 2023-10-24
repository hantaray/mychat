import { useEffect, useState } from 'react';
import { StyleSheet, View, KeyboardAvoidingView, Platform } from 'react-native';
import { GiftedChat, Bubble } from 'react-native-gifted-chat'

const ChatScreen = ({ route, navigation }) => {
  const name = route.params.name;
  const bgColor = route.params.bgColor;
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    navigation.setOptions({ title: name });

    setMessages([
      {
        _id: 1,
        text: "Hello " + name + ", how are you?",
        createdAt: new Date(),
        user: {
          _id: 2,
          name: "React Native",
          avatar: "https://picsum.photos/id/64/140/140",
        },
      },
      {
        _id: 2,
        text: name + ' entered the chat',
        createdAt: new Date(),
        system: true,
      }
    ]);
  }, []);

  const onSend = (newMessages) => {
    setMessages(previousMessages => GiftedChat.append(previousMessages, newMessages))
  }

  const renderBubble = (props) => {
    return <Bubble
      {...props}
      wrapperStyle={{
        right: {
          backgroundColor: "blue"
        },
        left: {
          backgroundColor: "#FFF"
        }
      }}
    />
  }

  return (
    <View style={[styles.container, { backgroundColor: bgColor }]}>
      <GiftedChat
        messages={messages}
        renderBubble={renderBubble}
        onSend={messages => onSend(messages)}
        user={{
          _id: 1
        }}
      />
      {/* Fix for hidden keyboard on android */}
      {Platform.OS === 'android' ? <KeyboardAvoidingView behavior="height" /> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default ChatScreen;