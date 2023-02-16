import * as React from 'react';
import { View, SafeAreaView, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Text } from 'react-native-paper';
import { SegmentedButtons } from 'react-native-paper';
import { Appbar, Divider } from 'react-native-paper';
import UserList from '../components/userList';
import UserCard from '../components/userCard';
import PointCard from '../components/pointCard';
import PointList from '../components/pointList';
import OrderCard from '../components/orderCard';
import LoginForm from '../components/loginForm';
import AddUserForm from '../components/addUserForm';

export default function AddUserPage() {
  return (
    <>
    <StatusBar 
        animated={true}
        translucent={true}
        backgroundColor="#61dafb"/>
    <Appbar.Header>
        <Appbar.BackAction onPress={() => {}} />
        <Appbar.Content title="Add User" />
    </Appbar.Header>
    <AddUserForm/>

        </>
  );
}