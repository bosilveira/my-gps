import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Appbar } from 'react-native-paper';
import OrderCard from '../components/orderCard';

export default function OrderPage() {
  return (
    <>
    <StatusBar 
        animated={true}
        translucent={true}
        backgroundColor="#61dafb"/>
    <Appbar.Header>
        <Appbar.BackAction onPress={() => {}} />
        <Appbar.Content title="Order" />
        <Appbar.Action icon="package" onPress={() => {}} />
    </Appbar.Header>
    <OrderCard/>
    </>
  );
}