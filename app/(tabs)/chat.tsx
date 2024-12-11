import React, { useEffect, useState, useRef } from 'react';
import { View, TextInput, Button, FlatList, Text, StyleSheet, useColorScheme } from 'react-native';
import io, { Socket } from 'socket.io-client';
import axios, { AxiosResponse, AxiosError } from 'axios';

type Message = {
  id: string;
  text: string;
};


const api = axios.create({
  baseURL: 'https://362d-2804-14c-f261-8035-20eb-aef8-8a0c-e092.ngrok-free.app'
});

export default function Chat() {
const theme = useColorScheme(); 
const isDark = theme === 'dark';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: isDark ? '#121212' : '#ffffff',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    color: isDark ? '#e0e0e0' : '#333333',
  },
  message: {
    padding: 10,
    marginVertical: 5,
    backgroundColor: '#ddd',
    borderRadius: 5,
  },
});

  const [messages, setMessages] = useState<Message[]>([]); 
  const [message, setMessage] = useState(''); 
  const socket = useRef<Socket | null>(null); 

  useEffect(() => {
    socket.current = io('https://362d-2804-14c-f261-8035-20eb-aef8-8a0c-e092.ngrok-free.app'); // SEMPRE TROCAR PARA O NOVO QUE A NGROK DER

    socket.current.on('connect', () => {
      console.log('Conectado ao servidor');
    });

    socket.current.on('message', (newMessage) => {
      console.log('Nova mensagem recebida:', newMessage);
      setMessages((prevMessages) => [...prevMessages, { id: Date.now().toString(), text: newMessage }]);
    });


    api.get('/some-endpoint')
      .then((response: AxiosResponse) => {
        console.log('Resposta do backend:', response.data);
      })
      .catch((error: AxiosError) => {
        console.error('Erro ao fazer requisição ao backend:', error.message);
      });

    return () => {
      socket.current?.disconnect();
    };
  }, []);

  const sendMessage = () => {
    if (message.trim() !== '' && socket.current) {
      console.log('Enviando mensagem:', message);

      const newMessage = { id: Date.now().toString(), text: message };
      setMessages((prevMessages) => [...prevMessages, newMessage]);
      socket.current.emit('message', message);
      setMessage('');
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={messages}
        renderItem={({ item }) => <Text style={styles.message}>{item.text}</Text>}
        keyExtractor={(item) => item.id}
        extraData={messages} 
      />
      <TextInput
        style={styles.input}
        value={message}
        onChangeText={setMessage}
        placeholder="Digite sua mensagem"
      />
      <Button title="Enviar" onPress={sendMessage} />
    </View>
  );
}

