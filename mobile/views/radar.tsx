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
import RadarList from '../components/radarList';

export default function RadarPage() {
  return (
    <>
    <StatusBar 
        animated={true}
        translucent={true}
        backgroundColor="#61dafb"/>
    <Appbar.Header>
        <Appbar.BackAction onPress={() => {}} />
        <Appbar.Content title="Radar" />
        <Appbar.Action icon="radar"/>
    </Appbar.Header>
    <RadarList/>

        </>
  );
}