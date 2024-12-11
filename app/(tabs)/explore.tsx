// Aba "Explore" - Exemplo de uma página secundária dentro da navegação por abas.

import { Text, View } from 'react-native';

export default function ExploreTab() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 18 }}>Bem-vindo à Aba Explorar!</Text>
    </View>
  );
}
