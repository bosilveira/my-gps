import * as React from 'react';
import { View, SafeAreaView, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Text } from 'react-native-paper';
import { SegmentedButtons } from 'react-native-paper';
import { Appbar, Divider } from 'react-native-paper';
import AddOrderForm from '../components/addOrderForm';
import SetOrderForm from '../components/setOrderForm';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../App';
type Props = NativeStackScreenProps<RootStackParamList, 'SetOrder'>;

export default function SetOrderPage({ navigation }: Props) {
  return (
    <>
    <StatusBar 
        animated={true}
        translucent={true}
        backgroundColor="#61dafb"/>
    <Appbar.Header>
        <Appbar.BackAction onPress={() => navigation.navigate('Orders')} />
        <Appbar.Content title="Set Order" />
    </Appbar.Header>
    <SetOrderForm/>
    </>
  );
}