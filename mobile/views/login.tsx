import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Appbar, Snackbar } from 'react-native-paper';
import LoginForm from '../components/loginForm';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../App';
type Props = NativeStackScreenProps<RootStackParamList, 'Login'>;

export default function LoginPage({ navigation }: Props) {
    const [visible, setVisible] = React.useState(false);
    const onToggleSnackBar = () => setVisible(!visible);
    const onDismissSnackBar = () => setVisible(false);

  return (
    <>
    <StatusBar 
        animated={true}
        translucent={true}
        backgroundColor="#61dafb"/>
    <Appbar.Header>
        <Appbar.BackAction onPress={() => navigation.navigate('Home')} />
        <Appbar.Content title="Login" />
        <Appbar.Action icon="login" onPress={onToggleSnackBar}/>
    </Appbar.Header>
    <Snackbar
        visible={visible}
        onDismiss={onDismissSnackBar}
        action={{
          label: 'Dismiss',
          onPress: () => {
            // Do something
          },
        }}>
        Forneça o email cadastrado.
      </Snackbar>
    <LoginForm/>
    </>
  );
}