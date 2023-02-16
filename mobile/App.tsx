import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {Button, Alert} from 'react-native';
import { storeToken, getToken } from './utils/asyncStorage.utils';


export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <Button
    onPress={() => alert('This is a button!')}
    title="Info"
  />

<Button
    onPress={() => storeToken('asdasdkjsa lç dçalsk jdaçlskd jaçlsd kjaçlskd jçaslk djçaslkd jçaskld jaçlkds jaçsd lkj')}
    title="Save"
  />


<Button
    onPress={() => alert(getToken())}
    title="Load"
  />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
