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
            <List.Subheader>Points</List.Subheader>
            <Divider style={{marginVertical: 8}} />

            <List.Item
            title="João Guimarães Rosa"
            description="41.40338 | 2.17403 | 100km"
            left={() => <List.Icon icon="car" />}
            right={() => <List.Icon icon="arrow-right-drop-circle-outline" />} />
            <Divider style={{marginVertical: 8}} />

            <List.Item
            title="João Guimarães Rosa"
            description="41.40338 | 2.17403 | 100km"
            left={() => <List.Icon icon="car" />}
            right={() => <List.Icon icon="arrow-right-drop-circle-outline" />} />
            <Divider style={{marginVertical: 8}} />

        </List.Section>

    </ScrollView>
    );
}