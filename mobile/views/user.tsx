import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Appbar } from 'react-native-paper';
import UserCard from '../components/userCard';

export default function UserPage() {
  return (
    <>
    <StatusBar 
        animated={true}
        translucent={true}
        backgroundColor="#61dafb"/>
    <Appbar.Header>
        <Appbar.BackAction onPress={() => {}} />
        <Appbar.Content title="Usuário" />
        <Appbar.Action icon="account" onPress={() => {}} />
    </Appbar.Header>
    <UserCard/>
    </>
  );
}