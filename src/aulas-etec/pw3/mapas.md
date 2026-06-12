---
layout: "base.njk"
description:  Localização e mapas
title: Localização e mapas
---

Usar mapas e geolocalização no Expo Snack é uma excelente forma de prototipar rapidamente, pois o ambiente já vem com as bibliotecas necessárias pré-configuradas para rodar no Expo Go (Android/iOS).

Para implementar essa funcionalidade, você precisará de duas bibliotecas principais do ecossistema Expo:
1.  `react-native-maps`: Para renderizar o mapa na tela.
2.  `expo-location`: Para acessar as coordenadas de GPS do dispositivo.

---

## 1. Estrutura Básica do Mapa
No Snack, você não precisa rodar comandos de terminal. Basta importar os componentes. O componente `MapView` precisa ocupar todo o espaço da tela para ser visível.

{% raw %}
```javascript
import React from 'react';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, View, Dimensions } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <MapView 
        style={styles.map}
        initialRegion={{
          latitude: -23.5505, // Exemplo: São Paulo
          longitude: -46.6333,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <Marker 
          coordinate={{ latitude: -23.5505, longitude: -46.6333 }}
          title="Ponto de Interesse"
          description="Descrição do local"
        />
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});
```
{% endraw %}
---

## 2. Obtendo a Localização Atual
Para pegar a posição real do usuário, você deve pedir permissão primeiro. O `expo-location` gerencia isso de forma simples.

### Passos principais:
*   Permissão: Use `requestForegroundPermissionsAsync()`.
*   Coordenadas: Use `getCurrentPositionAsync({})`.



### Exemplo de implementação completa:
{% raw %}
```javascript
import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';

export default function App() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permissão de localização negada');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location.coords);
    })();
  }, []);

  return (
    <View style={styles.container}>
      {location ? (
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: location.latitude,
            longitude: location.longitude,
            latitudeDelta: 0.005,
            longitudeDelta: 0.005,
          }}
        >
          <Marker coordinate={location} title="Você está aqui" />
        </MapView>
      ) : (
        <Text>{errorMsg || "Carregando mapa..."}</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  map: { width: '100%', height: '100%' },
});
```

{% endraw %}

## Dicas Importantes para o Snack:

*   Provedores: No iOS, o padrão é o Apple Maps. No Android, o Google Maps. Se quiser forçar o Google Maps em ambos, adicione a prop `provider="google"` no `MapView` (nota: no Snack isso funciona bem, mas em apps reais exige chave de API do Google Cloud).
*   Emulador vs Device: Testar localização em emuladores de navegador (Web) pode ser impreciso. O ideal é abrir o QR Code do Snack no seu celular físico com o app Expo Go.
*   Dependências: No painel lateral esquerdo do Snack, verifique se `react-native-maps` e `expo-location` aparecem na lista de `package.json`. Se não, o Snack costuma sugerir a adição automática ao digitar o `import`.

Você está tentando criar uma funcionalidade específica, como rastreamento em tempo real ou apenas exibir pontos fixos no mapa?



----


Para usar o Expo Go em conjunto com o seu projeto no Snack, o processo é bem direto. O Snack funciona como um editor em tempo real: tudo o que você digita no navegador é refletido instantaneamente no seu celular.

Aqui está o passo a passo para conectar e garantir que os mapas funcionem:

---

### 1. Preparando o Celular
*   Instale o aplicativo Expo Go (disponível na Play Store para Android ou App Store para iOS).
*   Certifique-se de que o seu celular e o seu computador estejam conectados à mesma rede Wi-Fi (embora o Snack aceite conexões via túnel, a mesma rede é muito mais estável).

### 2. Conectando o Snack ao Dispositivo
No painel lateral direito do site do Expo Snack, você verá uma área de visualização:
1.  Clique na aba "Device".
2.  Um QR Code será exibido.
3.  No Android: Abra o app Expo Go e toque em "Scan QR Code".
4.  No iOS: Abra a câmera padrão do iPhone, aponte para o QR Code e toque no link amarelo que aparece para abrir no Expo Go.

---

### 3. Configurações Específicas para Mapas e Localização
Para que o código que passei anteriormente funcione no seu celular via Expo Go, fique atento a estes detalhes:

*   Permissões em Tempo Real: Assim que o app carregar no celular, ele exibirá um pop-up nativo perguntando se você permite que o Expo Go acesse sua localização. Você deve aceitar para que as coordenadas apareçam.
*   Serviços de Localização (GPS): Verifique se o GPS do seu aparelho está ligado.
*   Dependências no `package.json`: No lado esquerdo do Snack, clique no ícone de arquivo `package.json`. Certifique-se de que as linhas abaixo estejam presentes (o Snack geralmente as adiciona sozinho ao detectar o `import`):
    ```json
    "react-native-maps": "*",
    "expo-location": "*"
    ```

### 4. Vantagem de usar o Dispositivo Real
Usar o Expo Go em vez do "Web Player" do Snack é fundamental para mapas por dois motivos:
1.  Precisão: O navegador do computador muitas vezes simula a localização via IP, o que é impreciso. O celular usa o hardware de GPS real.
2.  Performance: O renderizador de mapas (Google Maps ou Apple Maps) é muito mais fluido e fiel ao que o seu usuário final verá.

---

### Dica de "Debug"
Se o mapa ficar em branco no Android enquanto você usa o Expo Go, tente definir o provedor explicitamente no seu código:

```javascript
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

// No seu componente:
<MapView provider="{PROVIDER_GOOGLE}" style="{styles.map}" // ... outras props/>
```

