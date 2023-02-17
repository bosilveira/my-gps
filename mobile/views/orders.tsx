import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Appbar, Button, Divider, Card } from 'react-native-paper';
import OrderList from '../components/orderList';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../App';
type Props = NativeStackScreenProps<RootStackParamList, 'Orders'>;

export default function OrdersPage({ navigation }: Props) {
  return (
    <>
    <StatusBar 
        animated={true}
        translucent={true}
        backgroundColor="#61dafb"/>
    <Appbar.Header>
    <Appbar.BackAction onPress={() => navigation.navigate('Home')} />
        <Appbar.Content title="Orders" />
        <Appbar.Action icon="dolly"/>
    </Appbar.Header>
    <Button icon="plus" mode="contained" onPress={() => navigation.push('AddOrder')} style={{marginVertical: 16, marginHorizontal: 32}}>New Order</Button>
    <Button icon="qrcode-scan" mode="contained" onPress={() => navigation.push('SetOrder')} style={{marginVertical: 0, marginHorizontal: 32}}>Set Order</Button>
    <OrderList/>
    </>
  );
}