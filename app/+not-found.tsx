// Página exibida quando o usuário acessa uma rota que não existe
// Isto é útil para melhorar a experiência do usuário.

import { Text, View } from 'react-native';

export default function NotFound() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 18 }}>Página não encontrada!</Text>
    </View>
  );
}
