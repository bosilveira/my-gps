import * as React from 'react';
import { View, ScrollView } from 'react-native';

import { Appbar } from 'react-native-paper';

import { Button, Card, Avatar, Text, Divider } from 'react-native-paper';
import { ProgressBar, MD3Colors } from 'react-native-paper';
import { Switch, IconButton, List } from 'react-native-paper';
import { RadioButton, Menu, Provider  } from 'react-native-paper';

export default function PointList() {

    const [isSwitchOn, setIsSwitchOn] = React.useState(false);
    const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

    const [service, setService] = React.useState('Available');
    const [status, setStatus] = React.useState('Status');

    const [visible, setVisible] = React.useState(false);

    const openMenu = () => setVisible(true);
  
    const closeMenu = () => setVisible(false);

    const [expanded, setExpanded] = React.useState(true);
    const handlePress = () => setExpanded(!expanded);

    return (
    <ScrollView>


        <List.Section>

            <Divider style={{marginVertical: 8}} />

            <List.Item
            title={() => <Text variant="labelLarge">João Guimarães Rosa</Text>}
            description={() =><>
            <Text variant="labelMedium">Latitude</Text>
            <Text variant="labelMedium">Longitude</Text>
            <Text variant="labelMedium">Speed</Text>
            </>}
            left={() => <List.Icon icon="car-connected" />}
            right={() => <List.Icon icon="arrow-right-drop-circle-outline" />}
            style={{marginLeft: 16, marginVertical: 8}}
            />

            <Divider style={{marginVertical: 8}} />

        </List.Section>

    </ScrollView>
    );
}