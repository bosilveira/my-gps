import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Appbar } from 'react-native-paper';
import PointCard from '../components/pointCard';

export default function PointPage() {
  return (
    <>
    <StatusBar 
        animated={true}
        translucent={true}
        backgroundColor="#61dafb"/>
    <Appbar.Header>
        <Appbar.BackAction onPress={() => {}} />
        <Appbar.Content title="Point" />
        <Appbar.Action icon="crosshairs-gps" onPress={() => {}} />
    </Appbar.Header>
    <PointCard/>
    </>
  );
}