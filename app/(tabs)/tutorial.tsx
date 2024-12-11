import { ScrollView, Text, View, StyleSheet, useColorScheme } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function TutorialPage() {
  const theme = useColorScheme();
  const isDark = theme === 'dark';


  const styles = StyleSheet.create({
    container: {
      padding: 20,
      backgroundColor: isDark ? '#121212' : '#ffffff',
      minHeight: '100%',
    },
    title: {
      fontSize: 28,
      fontWeight: 'bold',
      marginBottom: 20,
      color: isDark ? '#ffffff' : '#000000',
      textAlign: 'center', 
    },
    sectionTitle: {
      fontSize: 22,
      fontWeight: 'bold',
      marginTop: 20,
      marginBottom: 10,
      color: isDark ? '#90caf9' : '#1e88e5',
      textAlign: 'center', 
    },
    paragraph: {
      fontSize: 16,
      lineHeight: 24,
      color: isDark ? '#e0e0e0' : '#333333',
      textAlign: 'center', 
    },
    codeBlock: {
      fontFamily: 'monospace',
      backgroundColor: isDark ? '#1e1e1e' : '#f5f5f5',
      padding: 10,
      borderRadius: 5,
      marginBottom: 15,
      color: isDark ? '#c3e88d' : '#2c3e50',

    },
    sectionContainer: {
      backgroundColor: isDark ? '#121212' : '#ffffff',
      marginBottom: 20,
    },
    conclusion: {
      backgroundColor: isDark ? '#121212' : '#ffffff',
      padding: 20,
      borderRadius: 10,
      textAlign: 'center', 
    },
  });

  return (
    <ScrollView contentContainerStyle={styles.container}> <View style={styles.sectionContainer}> <Text style={styles.title}>Guia Completo do Projeto Expo</Text> <Text style={styles.paragraph}> Bem-vindo ao nosso tutorial sobre o Expo! Vamos explorar juntos essa poderosa ferramenta para desenvolver aplicativos móveis usando JavaScript e React. </Text>

<Text style={styles.sectionTitle}>O que é o Expo?</Text> <Text style={styles.paragraph}> O Expo é um framework e uma plataforma para aplicações universais em React. Com ele, você pode criar aplicativos móveis para iOS e Android usando um único código base em JavaScript. </Text>

<Text style={styles.sectionTitle}>Instalando o Expo CLI</Text> <Text style={styles.paragraph}> Primeiro, vamos instalar o Expo CLI. Você precisa ter o Node.jsinstalado. No terminal, execute o seguinte comando: </Text> <Text style={styles.codeBlock}> npm install -g expo-cli </Text>

<Text style={styles.sectionTitle}>Criando um novo projeto Expo</Text> <Text style={styles.paragraph}> Para criar um novo projeto Expo, execute: </Text> <Text style={styles.codeBlock}> expo init my-new-project </Text> <Text style={styles.paragraph}> Navegue até o diretório do projeto e inicie o servidor de desenvolvimento: </Text> <Text style={styles.codeBlock}> cd my-new-project expo start </Text>

<Text style={styles.sectionTitle}>Estrutura de Diretórios</Text> <Text style={styles.paragraph}> Um projeto Expo tem uma estrutura de diretórios bastante organizada. Aqui estão os diretórios mais importantes: </Text> <Text style={styles.paragraph}> - assets/: Contém imagens, fontes e outros ativos usados no aplicativo. - components/: Componentes React reutilizáveis. - screens/: Componentes de tela para a navegação. - App.js: O ponto de entrada principal do seu aplicativo. </Text>

<Text style={styles.sectionTitle}>Adicionando Navegação</Text> <Text style={styles.paragraph}> Para adicionar navegação, você pode usar a biblioteca React Navigation. Instale-a com: </Text> <Text style={styles.codeBlock}> npm install @react-navigation/native npm install @react-navigation/native-stack expo install react-native-screens react-native-safe-area-context </Text> <Text style={styles.paragraph}> Em seguida, configure sua navegação no arquivo App.js: </Text> <Text style={styles.codeBlock}> {`import * as React from 'react'; import { NavigationContainer } from '@react-navigation/native'; import { createNativeStackNavigator } from '@react-navigation/native-stack'; import HomeScreen from './screens/HomeScreen'; import DetailsScreen from './screens/DetailsScreen';

const Stack = createNativeStackNavigator();

export default function App() { return ( <NavigationContainer> <Stack.Navigator initialRouteName="Home"> <Stack.Screen name="Home" component={HomeScreen} /> <Stack.Screen name="Details" component={DetailsScreen} /> </Stack.Navigator> </NavigationContainer> ); }`} </Text>

<Text style={styles.sectionTitle}>Usando Temas Globais</Text> <Text style={styles.paragraph}> Agora, vamos criar um modo global de cor que se adapta ao tema do sistema operacional. Crie um arquivo chamado theme.js: </Text> <Text style={styles.codeBlock}> {`import { useColorScheme } from 'react-native';

export function useTheme() { const theme = useColorScheme(); const isDark = theme === 'dark';

return { isDark, theme: { background: isDark ? '#121212' : '#ffffff', text: isDark ? '#ffffff' : '#000000', }, }; }

export function ThemeProvider({ children }) { const theme = useTheme();

return ( <ThemeContext.Provider value={theme}> {children} </ThemeContext.Provider> ); }

export const ThemeContext = React.createContext();`} </Text> <Text style={styles.paragraph}> Em seguida, aplique o tema global em seus componentes, conforme necessário. </Text>

<Text style={styles.sectionTitle}>Configuração do Servidor</Text> <Text style={styles.codeBlock}> {`const express = require('express'); const http = require('http'); const { Server } = require('socket.io'); const cors = require('cors');

const app = express(); app.use(cors());

const server = http.createServer(app); const io = new Server(server, { cors: { origin: "*", methods: ["GET", "POST"], allowedHeaders: ["Content-Type"], credentials: true, }, });

server.listen(8080, () => { console.log('Servidor Socket.IO rodando na porta 8080...'); });

io.on('connection', (socket) => { console.log('Novo cliente conectado!');

socket.on('message', (message) => { console.log(\Mensagem recebida: \${message}\); io.emit('message', message); });

socket.on('disconnect', () => { console.log('Cliente desconectado!'); }); });} </Text> <Text style={styles.paragraph}> Este código configura o servidor usando Express e Socket.IO: </Text> <Text style={styles.paragraph}> - **express**: Importa o módulo Express para criar um servidor HTTP. - **http**: Importa o módulo HTTP do Node.js para criar o servidor. - **{ Server } = require('socket.io')**: Importa o móduloServer do Socket.IO para comunicação em tempo real. - cors: Importa o módulo CORS para permitir solicitações de origens diferentes. - app = express(): Cria uma instância do servidor Express. - app.use(cors()): Aplica o middleware CORS ao servidor Express. - server = http.createServer(app): Cria um servidor HTTP usando a instância Express. - io = new Server(server, {...}): Cria uma instância do servidor Socket.IO com configurações de CORS. - server.listen(8080, () => {...}): Faz o servidor HTTP escutar na porta 8080 e exibe uma mensagem quando iniciado. - io.on('connection', (socket) => {...}): Configura um evento de conexão para o Socket.IO. - socket.on('message', (message) => {...}): Configura um evento para ouvir mensagens do cliente e retransmitir para todos os clientes conectados. - socket.on('disconnect', () => {...}): Configura um evento para detectar quando um cliente se desconecta e exibe uma mensagem no console.`} </Text>

<Text style={styles.sectionTitle}>Configuração do Cliente</Text> <Text style={styles.codeBlock}> {`import React, { useEffect, useState, useRef } from 'react'; import { View, TextInput, Button, FlatList, Text, StyleSheet } from 'react-native'; import io, { Socket } from 'socket.io-client';

type Message = { id: string; text: string; };

export default function Chat() { const [messages, setMessages] = useState<Message[]>([]); const [message, setMessage] = useState(''); const socket = useRef<Socket | null>(null);

useEffect(() => { socket.current= io('https://YOUR_NGROK_URL_HERE'); // Substitua pela URL do ngrok

socket.current.on('connect', () => { console.log('Conectado ao servidor'); });

socket.current.on('message', (newMessage) => { console.log('Nova mensagem recebida:', newMessage); setMessages((prevMessages) => [...prevMessages, { id: Date.now().toString(), text: newMessage }]); });

return () => { socket.current?.disconnect(); }; }, []);

const sendMessage = () => { if (message.trim() !== '' && socket.current) { console.log('Enviando mensagem:', message); const newMessage = { id: Date.now().toString(), text: message }; setMessages((prevMessages) => [...prevMessages, newMessage]); socket.current.emit('message', message); setMessage(''); } };

return ( <View style={styles.container}> <FlatList data={messages} renderItem={({ item }) => <Text style={styles.message}>{item.text}</Text>} keyExtractor={(item) => item.id} extraData={messages} /> <TextInput style={styles.input} value={message} onChangeText={setMessage} placeholder="Digite sua mensagem" /> <Button title="Enviar" onPress={sendMessage} /> </View> );`}</Text>
</View>
</ScrollView>
)};
