import * as React from 'react';
import { View, SafeAreaView, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Text } from 'react-native-paper';
import { SegmentedButtons } from 'react-native-paper';
import { Appbar, Button } from 'react-native-paper';

import { Card, Avatar, Divider, ActivityIndicator } from 'react-native-paper';
import { Switch, IconButton, List, Chip } from 'react-native-paper';

import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../App';
type Props = NativeStackScreenProps<RootStackParamList, 'Users'>;

import { AppDispatch, RootState } from '../redux/store.redux';
import { useSelector, useDispatch } from 'react-redux';
import { getUsers } from '../redux/userSlices.redux';

export default function UsersPage({ navigation }: Props) {
  
  const dispatch = useDispatch<AppDispatch>();
  const login = useSelector((state: RootState) => state.login);
  const userData = useSelector((state: RootState) => state.user);

  const createCards = (data: any[]) => {
    const list = []
    for (let i = 0; i < data?.length; i++) {
    let jsx = <>
        <List.Item 
        onPress={() => navigation.push('User')} 
        key={'card'+i}
        title={() => <Text variant="labelLarge">{data[i].name}</Text>}
        description={() =><>
        <Text variant="labelMedium">{["Administrator", "Manager", "Courier", "Driver", "CSR"][data[i].role]}</Text>
        <Text variant="labelMedium">{data[i].available ? "Available" : "Unavailable"}</Text>
        <Text variant="labelMedium">{data[i].status}</Text>
        </>}
        left={() => <List.Icon icon="car" />}
        right={() => <List.Icon icon="arrow-right-drop-circle-outline"/>}
        style={{marginLeft: 16, marginVertical: 8}}
        />
        <Divider style={{marginVertical: 8}} />
        </>;

    list.push(jsx);
    }
    return list;
}


  return (
    <>
    <StatusBar 
        animated={true}
        translucent={true}
        backgroundColor="#61dafb"/>
    <Appbar.Header>
        <Appbar.BackAction onPress={() => navigation.navigate('Home')} />
        <Appbar.Content title="Users" />
        {userData.loading ? 
        <Appbar.Action icon={()=><ActivityIndicator animating={true} />} /> :
        <Appbar.Action icon="reload" onPress={()=>dispatch(getUsers())} /> }
        <Appbar.Action icon="account-multiple" />
    </Appbar.Header>
    <Button icon="plus" mode="contained" onPress={() => navigation.push('AddUser')} style={{marginVertical: 16, marginHorizontal: 32}}>Add User</Button>
    <ScrollView>
      <List.Section>
          <Divider style={{marginTop: 0, marginBottom: 8}} />
          {createCards(userData.list)}
      </List.Section>
    </ScrollView>
    </>
  );
}