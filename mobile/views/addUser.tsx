import * as React from 'react';
import { View, SafeAreaView, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Text } from 'react-native-paper';
import { SegmentedButtons } from 'react-native-paper';
import { Appbar } from 'react-native-paper';
import AddUserForm from '../components/addUserForm';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../App';
type Props = NativeStackScreenProps<RootStackParamList, 'AddUser'>;

export default function AddUserPage({ navigation }: Props) {
  return (
    <>
    <StatusBar 
        animated={true}
        translucent={true}
        backgroundColor="#61dafb"/>
    <Appbar.Header>
        <Appbar.BackAction onPress={() => navigation.navigate('Users')} />
        <Appbar.Content title="Add User" />
    </Appbar.Header>
    <AddUserForm/>
    </>
  );
}