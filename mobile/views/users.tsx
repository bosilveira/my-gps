import * as React from 'react';
import { View, SafeAreaView, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Text } from 'react-native-paper';
import { SegmentedButtons } from 'react-native-paper';
import { Appbar, Button } from 'react-native-paper';
import UserList from '../components/userList';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../App';
type Props = NativeStackScreenProps<RootStackParamList, 'Users'>;

export default function UsersPage({ navigation }: Props) {
  return (
    <>
    <StatusBar 
        animated={true}
        translucent={true}
        backgroundColor="#61dafb"/>
    <Appbar.Header>
        <Appbar.BackAction onPress={() => navigation.navigate('Home')} />
        <Appbar.Content title="Users" />
        <Appbar.Action icon="account-multiple" onPress={() => {}} />
    </Appbar.Header>
    <Button icon="plus" mode="contained" onPress={() => navigation.push('AddUser')} style={{marginVertical: 16, marginHorizontal: 32}}>Add User</Button>
    <UserList/>
    </>
  );
}