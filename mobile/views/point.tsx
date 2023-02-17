import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Appbar } from 'react-native-paper';
import PointCard from '../components/pointCard';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../App';
type Props = NativeStackScreenProps<RootStackParamList, 'Point'>;

export default function PointPage({ navigation }: Props) {
  return (
    <>
    <StatusBar 
        animated={true}
        translucent={true}
        backgroundColor="#61dafb"/>
    <Appbar.Header>
        <Appbar.BackAction onPress={() => navigation.navigate('Points')} />
        <Appbar.Content title="Point" />
        <Appbar.Action icon="crosshairs-gps" onPress={() => {}} />
    </Appbar.Header>
    <PointCard/>
    </>
  );
}