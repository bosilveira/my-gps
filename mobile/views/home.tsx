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
    <Appbar.Header>
        <Appbar.Content title="My GPS" />
        <Appbar.Action icon="wifi" onPress={() => navigation.navigate('Help')} />
        <Appbar.Action icon="signal" onPress={() => navigation.navigate('Users')} />
        <Appbar.Action icon="sync" onPress={() => {}} />
        <Appbar.Action icon="sync-alert" onPress={() => {}} />
        <Appbar.Action  icon="magnify" onPress={() => {}} />
        <Appbar.Action icon="dots-vertical" onPress={showModal} />
    </Appbar.Header>

    <Provider>

    <Link to={{ screen: 'Disclaimer'}}>
        Home
      </Link>
    <View style={{height: '100%', padding: 8}}>

    <Portal>

        <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={{backgroundColor: 'white', margin: 24, padding: 24}}>
          <Text>Example Modal.  Click outside this area to dismiss.</Text>
          <Button icon="login" mode="contained" onPress={() => navigation.push('Login')}>Login</Button>
          <Divider style={{marginVertical: 8}} />
          <Button icon="account-multiple" mode="contained" onPress={() => navigation.navigate('Users')}>Users</Button>
          <Divider style={{marginVertical: 8}} />
          <Button icon="dolly" mode="contained" onPress={() => navigation.navigate('Orders')}>Orders</Button>
          <Divider style={{marginVertical: 8}} />
          <Button icon="crosshairs" mode="contained" onPress={() => navigation.navigate('Points')}>Points</Button>
          <Divider style={{marginVertical: 8}} />
          <Button icon="information-outline" mode="contained" onPress={() => navigation.navigate('Disclaimer')}>Disclaimer</Button>
          <Divider style={{marginVertical: 8}} />
          <Button icon="help-circle-outline" mode="contained" onPress={() => navigation.navigate('Help')}>Help</Button>
        </Modal>
        </Portal>

  <OrderList />

  <Switch value={isSwitchOn} onValueChange={onToggleSwitch} />

    </View>



    <ScannerButton />

    </Provider>


    </>
  );
}