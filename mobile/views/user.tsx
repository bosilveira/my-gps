import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Appbar } from 'react-native-paper';
import UserCard from '../components/userCard';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../App';
type Props = NativeStackScreenProps<RootStackParamList, 'User'>;

export default function UserPage({ navigation }: Props) {
  return (
    <>
    <StatusBar 
        animated={true}
        translucent={true}
        backgroundColor="#61dafb"/>
    <Appbar.Header>
        <Appbar.BackAction onPress={() => navigation.navigate('Users')} />
        <Appbar.Content title="Usuário" />
        <Appbar.Action icon="account" onPress={() => {}} />
    </Appbar.Header>
    <UserCard/>
    </>
  );
}