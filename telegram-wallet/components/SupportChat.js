import React, { useState, useEffect } from 'react';
import { GiftedChat } from 'react-native-gifted-chat';
import firebase from '../services/firebaseConfig';

const SupportChat = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const unsubscribe = firebase
      .firestore()
      .collection('supportChats')
      .orderBy('createdAt', 'desc')
      .onSnapshot(snapshot => {
        const messages = snapshot.docs.map(doc => {
          const firebaseData = doc.data();

          const data = {
            _id: doc.id,
            text: firebaseData.text,
            createdAt: firebaseData.createdAt.toDate(),
            user: {
              _id: firebaseData.user._id,
              name: firebaseData.user.name,
            },
          };

          return data;
        });

        setMessages(messages);
      });

    return () => unsubscribe();
  }, []);

  const handleSend = async messages => {
    const writes = messages.map(m => {
      return firebase.firestore().collection('supportChats').add({
        text: m.text,
        createdAt: new Date(),
        user: m.user,
      });
    });

    await Promise.all(writes);
  };

  return (
    <GiftedChat
      messages={messages}
      onSend={handleSend}
      user={{
        _id: 1, // User ID, replace with actual user ID
        name: 'User', // User name, replace with actual user name
      }}
      />
    );
  };
  
  export default SupportChat;
  
   
