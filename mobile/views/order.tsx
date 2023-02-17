import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Appbar } from 'react-native-paper';
import OrderCard from '../components/orderCard';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../App';
type Props = NativeStackScreenProps<RootStackParamList, 'Order'>;

export default function OrderPage({ navigation }: Props) {
  return (
    <>
    <StatusBar 
        animated={true}
        translucent={true}
        backgroundColor="#61dafb"/>
    <Appbar.Header>
        <Appbar.BackAction onPress={() => navigation.navigate('Orders')} />
        <Appbar.Content title="Order" />
        <Appbar.Action icon="package"/>
    </Appbar.Header>
    <OrderCard/>
    </>
  );
}