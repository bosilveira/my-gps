import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Appbar } from 'react-native-paper';
import LoginForm from '../components/loginForm';

export default function LoginPage() {
  return (
    <>
    <StatusBar 
        animated={true}
        translucent={true}
        backgroundColor="#61dafb"/>
    <Appbar.Header>
        <Appbar.BackAction onPress={() => {}} />
        <Appbar.Content title="Login" />
    </Appbar.Header>
    <LoginForm/>
    </>
  );
}