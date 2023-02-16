import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Appbar } from 'react-native-paper';
import OrderList from '../components/orderList';

export default function OrdersPage() {
  return (
    <>
    <StatusBar 
        animated={true}
        translucent={true}
        backgroundColor="#61dafb"/>
    <Appbar.Header>
        <Appbar.BackAction onPress={() => {}} />
        <Appbar.Content title="Order List" />
        <Appbar.Action icon="dolly" onPress={() => {}} />
    </Appbar.Header>
    <OrderList/>
    </>
  );
}