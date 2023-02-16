import * as React from 'react';
import { View, SafeAreaView, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Text } from 'react-native-paper';
import { SegmentedButtons } from 'react-native-paper';
import { Appbar, Divider } from 'react-native-paper';
import UserList from '../components/userList';

export default function UsersPage() {
  return (
    <>
    <StatusBar 
        animated={true}
        translucent={true}
        backgroundColor="#61dafb"/>
    <Appbar.Header>
        <Appbar.BackAction onPress={() => {}} />
        <Appbar.Content title="Lista de Usuários" />
        <Appbar.Action icon="account-multiple" onPress={() => {}} />
    </Appbar.Header>
    <UserList/>

        </>
  );
}