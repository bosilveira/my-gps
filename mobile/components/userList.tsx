import * as React from 'react';
import { View, ScrollView } from 'react-native';

import { Button, Card, Avatar, Text, Divider } from 'react-native-paper';
import { Switch, IconButton, List, Chip } from 'react-native-paper';


export default function UserList({ data }: any) {

const createCards = (data: any[]) => {
    const list = []
    for (let i = 0; i < data?.length; i++) {
    let jsx = <>
        <List.Item
        key={'card'+i}
        title={() => <Text variant="labelLarge">{data[i].name}</Text>}
        description={() =><>
        <Text variant="labelMedium">{["Administrator", "Manager", "Courier", "Driver", "CSR"][data[i].role]}</Text>
        <Text variant="labelMedium">{data[i].available ? "Available" : "Unavailable"}</Text>
        <Text variant="labelMedium">{data[i].status}</Text>
        </>}
        left={() => <List.Icon icon="car" />}
        right={() => <List.Icon icon="arrow-right-drop-circle-outline" />}
        style={{marginLeft: 16, marginVertical: 8}}
        />
        <Divider style={{marginVertical: 8}} />
        </>;

    list.push(jsx);
    }
    return list;
}


    return (
    <ScrollView>

        <List.Section>
            <Divider style={{marginVertical: 8}} />
            {createCards(data)}
        </List.Section>

    </ScrollView>
    );
}