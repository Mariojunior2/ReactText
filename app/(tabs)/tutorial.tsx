import { ScrollView, Text, View, StyleSheet, useColorScheme } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function TutorialPage() {
  const theme = useColorScheme(); // 'dark' ou 'light'
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
      textAlign: 'center', // Centraliza o texto do título
    },
    sectionTitle: {
      fontSize: 22,
      fontWeight: 'bold',
      marginTop: 20,
      marginBottom: 10,
      color: isDark ? '#90caf9' : '#1e88e5',
      textAlign: 'center', // Centraliza o texto do título da seção
    },
    paragraph: {
      fontSize: 16,
      lineHeight: 24,
      color: isDark ? '#e0e0e0' : '#333333',
      textAlign: 'center', // Centraliza o texto do parágrafo
    },
    codeBlock: {
      fontFamily: 'monospace',
      backgroundColor: isDark ? '#1e1e1e' : '#f5f5f5',
      padding: 10,
      borderRadius: 5,
      marginBottom: 15,
      color: isDark ? '#c3e88d' : '#2c3e50',
      // textAlign: 'center' não é aplicado aqui
    },
    sectionContainer: {
      backgroundColor: isDark ? '#121212' : '#ffffff',
      marginBottom: 20,
    },
    conclusion: {
      backgroundColor: isDark ? '#121212' : '#ffffff',
      padding: 20,
      borderRadius: 10,
      textAlign: 'center', // Centraliza o texto da conclusão
    },
  });

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.sectionContainer}>
        <Text style={styles.title}>Guia Completo do Projeto Expo</Text>
        <Text style={styles.paragraph}>
          Bem-vindo ao nosso tutorial sobre o Expo! Vamos explorar juntos essa poderosa ferramenta para desenvolver aplicativos móveis usando JavaScript e React.
        </Text>

        <Text style={styles.sectionTitle}>O que é o Expo?</Text>
        <Text style={styles.paragraph}>
          O Expo é um framework e uma plataforma para aplicações universais em React. Com ele, você pode criar aplicativos móveis para iOS e Android usando um único código base em JavaScript.
        </Text>

        <Text style={styles.sectionTitle}>Instalando o Expo CLI</Text>
        <Text style={styles.paragraph}>
          Primeiro, vamos instalar o Expo CLI. Você precisa ter o Node.js instalado. No terminal, execute o seguinte comando:
        </Text>
        <Text style={styles.codeBlock}>
          npm install -g expo-cli
        </Text>

        <Text style={styles.sectionTitle}>Criando um novo projeto Expo</Text>
        <Text style={styles.paragraph}>
          Para criar um novo projeto Expo, execute:
        </Text>
        <Text style={styles.codeBlock}>
          expo init my-new-project
        </Text>
        <Text style={styles.paragraph}>
          Navegue até o diretório do projeto e inicie o servidor de desenvolvimento:
        </Text>
        <Text style={styles.codeBlock}>
          cd my-new-project
          expo start
        </Text>

        <Text style={styles.sectionTitle}>Estrutura de Diretórios</Text>
        <Text style={styles.paragraph}>
          Um projeto Expo tem uma estrutura de diretórios bastante organizada. Aqui estão os diretórios mais importantes:
        </Text>
        <Text style={styles.paragraph}>
          - **assets/**: Contém imagens, fontes e outros ativos usados no aplicativo.
          - **components/**: Componentes React reutilizáveis.
          - **screens/**: Componentes de tela para a navegação.
          - **App.js**: O ponto de entrada principal do seu aplicativo.
        </Text>

        <Text style={styles.sectionTitle}>Adicionando Navegação</Text>
        <Text style={styles.paragraph}>
          Para adicionar navegação, você pode usar a biblioteca React Navigation. Instale-a com:
        </Text>
        <Text style={styles.codeBlock}>
          npm install @react-navigation/native
          npm install @react-navigation/native-stack
          expo install react-native-screens react-native-safe-area-context
        </Text>
        <Text style={styles.paragraph}>
          Em seguida, configure sua navegação no arquivo App.js:
        </Text>
        <Text style={styles.codeBlock}>
          {`import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}`}
        </Text>

        <Text style={styles.sectionTitle}>Usando Temas Globais</Text>
        <Text style={styles.paragraph}>
          Agora, vamos criar um modo global de cor que se adapta ao tema do sistema operacional. Crie um arquivo chamado `theme.js`:
        </Text>
        <Text style={styles.codeBlock}>
          {`import { useColorScheme } from 'react-native';

export function useTheme() {
  const theme = useColorScheme();
  const isDark = theme === 'dark';

  return {
    isDark,
    theme: {
      background: isDark ? '#121212' : '#ffffff',
      text: isDark ? '#ffffff' : '#000000',
    },
  };
}

export function ThemeProvider({ children }) {
  const theme = useTheme();

  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  );
}

export const ThemeContext = React.createContext();`}
        </Text>
        <Text style={styles.paragraph}>
          Em seguida, aplique o tema global em seus componentes, conforme necessário.
        </Text>

        <Text style={styles.sectionTitle}>Conclusão</Text>
        <Text style={styles.paragraph}>
          E é isso! Agora você tem um guia completo sobre o Expo, e seu aplicativo está configurado para adaptar automaticamente ao tema do sistema operacional. Continue explorando e criando coisas incríveis!
        </Text>

        <Text style={styles.sectionTitle}>Dicionário de Componentes e Funções</Text>
        <Text style={styles.paragraph}>
          Vamos detalhar o que cada parte do código faz:
        </Text>

        <Text style={styles.sectionTitle}>Componentes e Funções</Text>

        <Text style={styles.sectionTitle}>import</Text>
        <Text style={styles.paragraph}>
          Importa componentes necessários do React Native e do React Navigation.
        </Text>

        <Text style={styles.sectionTitle}>createNativeStackNavigator</Text>
        <Text style={styles.paragraph}>
          Cria um stack navigator para navegação entre telas.
        </Text>

        <Text style={styles.sectionTitle}>useColorScheme</Text>
        <Text style={styles.paragraph}>
          Detecta o tema atual do sistema (claro ou escuro).
        </Text>

        <Text style={styles.sectionTitle}>useTheme</Text>
        <Text style={styles.paragraph}>
          Customiza os temas claro e escuro para toda a aplicação.
        </Text>

        <Text style={styles.sectionTitle}>NavigationContainer</Text>
        <Text style={styles.paragraph}>
          Provedor de navegação que contém o estado de navegação.
        </Text>

        <Text style={styles.sectionTitle}>ScrollView</Text>
        <Text style={styles.paragraph}>
          Permite rolar o conteúdo na tela.
        </Text>

        <Text style={styles.sectionTitle}>Text</Text>
        <Text style={styles.paragraph}>
          Exibe texto na tela.
        </Text>

        <Text style={styles.sectionTitle}>View</Text>
        <Text style={styles.paragraph}>
          Contêiner básico para layouts, que pode conter outros componentes.
        </Text>

        <Text style={styles.sectionTitle}>StyleSheet</Text>
        <Text style={styles.paragraph}>
          Cria estilos para os componentes.
        </Text>
        <Text style={styles.codeBlock}> {`  const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: isDark ? '#121212' : '#ffffff',
        minHeight: '100%',
      },

    }); // Tudo isto sendo um exemplo`} 
        </Text>


        <Text style={styles.sectionTitle}>ThemeContext</Text>
        <Text style={styles.paragraph}>
          Contexto para acessar e definir o tema global.
        </Text>

        <Text style={styles.sectionTitle}>Button</Text>
        <Text style={styles.paragraph}>
          Um botão clicável.
        </Text>
      </View>
    </ScrollView>
  );
}
