/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import type {Node} from 'react';
import {TextInput, View} from 'react-native';

import {GiftedChat} from 'react-native-gifted-chat';

const App: () => Node = () => {
  const [text, setText] = useState('');
  const [messages, setMessages] = useState([]);

  const onSend = (newMessages = []) => {
    setMessages(prevMessages => GiftedChat.append(prevMessages, newMessages));
  };

  const renderComposer = props => {
    <TextInput
      testID={props.placeholder}
      accessible
      onChangeText={props.onChangeText}
      value={props.text}
      enablesReturnKeyAutomatically
      underlineColorAndroid="transparent"
      {...props.textInputProps}
    />;
  };

  return (
    <View style={{flex: 1}}>
      <GiftedChat
        alwaysShowSend
        messages={messages}
        text={text}
        onInputTextChanged={setText}
        onSend={onSend}
        renderComposer={renderComposer}
        keyboardShouldPersistTaps="never"
      />
    </View>
  );
};

export default App;
