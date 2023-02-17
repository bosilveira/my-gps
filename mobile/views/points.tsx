import * as React from 'react';
import { View, SafeAreaView, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Text } from 'react-native-paper';
import { SegmentedButtons } from 'react-native-paper';
import { Appbar, Button } from 'react-native-paper';
import PointList from '../components/pointList';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../App';
type Props = NativeStackScreenProps<RootStackParamList, 'Points'>;

export default function PointsPage({ navigation }: Props) {
  return (
    <>
    <StatusBar 
        animated={true}
        translucent={true}
        backgroundColor="#61dafb"/>
    <Appbar.Header>
        <Appbar.BackAction onPress={() => navigation.navigate('Home')} />
        <Appbar.Content title="Points" />
        <Appbar.Action icon="crosshairs" onPress={() => {}} />
    </Appbar.Header>
    <Button icon="plus" mode="contained" onPress={() => navigation.push('AddPoint')} style={{marginVertical: 16, marginHorizontal: 32}}>New Point</Button>
    <PointList/>
    </>
  );
}