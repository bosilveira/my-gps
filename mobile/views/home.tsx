import * as React from 'react';
import { View, DevSettings } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import ScannerButton from '../components/scannerButton';

import { Appbar, Button, Card, Avatar, Text, Divider } from 'react-native-paper';
import { ProgressBar, MD3Colors } from 'react-native-paper';
import { Switch } from 'react-native-paper';

import UserCard from '../components/userCard';
import UserList from '../components/userList';

import PointCard from '../components/pointCard';
import PointList from '../components/pointList';

import OrderCard from '../components/orderCard';
import OrderList from '../components/orderList';
import { Link } from '@react-navigation/native';

import { Menu, Modal, Portal, Provider } from 'react-native-paper';
import { Drawer } from 'react-native-paper';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../App';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

export default function Home({ navigation }: Props) {

    const [isSwitchOn, setIsSwitchOn] = React.useState(false);

    const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

    const [visible, setVisible] = React.useState(false);

    const openMenu = () => setVisible(true);
  
    const closeMenu = () => setVisible(false);

    const [active, setActive] = React.useState('');


    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);

  return (
    <>
    <StatusBar 
    animated={true}
    translucent={true}
    backgroundColor="#61dafb"/>
    <Provider>
        <Appbar.Header>
            <Appbar.Action icon="home" onPress={showModal} />
            <Appbar.Content title="My GPS" />
            <Appbar.Action icon="help-circle-outline" onPress={() => navigation.navigate('Help')} />
            <Appbar.Action icon="dots-vertical" onPress={showModal} />
        </Appbar.Header>

        <Portal>
            <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={{backgroundColor: 'white', margin: 24, padding: 24}}>
            <Button icon="login" mode="contained" onPress={() => navigation.push('Login')} style={{marginVertical: 4}} >Login</Button>
            <Button icon="broadcast" mode="contained" onPress={() => navigation.push('Network')} style={{marginVertical: 4}}>GPS & Network</Button>
            <Button icon="account-multiple" mode="contained" onPress={() => navigation.navigate('Users')} style={{marginVertical: 4}}>Users</Button>
            <Button icon="dolly" mode="contained" onPress={() => navigation.navigate('Orders')} style={{marginVertical: 4}}>Orders</Button>
            <Button icon="crosshairs" mode="contained" onPress={() => navigation.navigate('Points')} style={{marginVertical: 4}}>Points</Button>
            <Button icon="information-outline" mode="contained" onPress={() => navigation.navigate('Disclaimer')} style={{marginVertical: 4}}>Disclaimer</Button>
            <Button icon="help-circle-outline" mode="contained" onPress={() => navigation.navigate('Help')} style={{marginVertical: 4}}>Help</Button>
            <Divider style={{marginVertical: 16}} />
            <Button icon="logout" mode="contained" buttonColor='rgb(192, 1, 0)' onPress={() => navigation.navigate('Login')}>Logout</Button>
            </Modal>
        </Portal>
        
        <Switch value={isSwitchOn} onValueChange={onToggleSwitch} />

        <ScannerButton />

    </Provider>
    </>
    );
}