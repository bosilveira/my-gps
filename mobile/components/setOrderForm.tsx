import * as React from 'react';
import { View, ScrollView } from 'react-native';

import { Appbar } from 'react-native-paper';

import { Button, Card, Avatar, Text, Divider } from 'react-native-paper';
import { ProgressBar, MD3Colors } from 'react-native-paper';
import { Switch, IconButton, List } from 'react-native-paper';
import { RadioButton, Menu, Provider  } from 'react-native-paper';
import { TextInput } from 'react-native-paper';

export default function SetOrderForm() {

    const [isSwitchOn, setIsSwitchOn] = React.useState(false);
    const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

    const [service, setService] = React.useState('Available');
    const [status, setStatus] = React.useState('Status');

    const [visible, setVisible] = React.useState(false);

    const openMenu = () => setVisible(true);
  
    const closeMenu = () => setVisible(false);

    const [expanded, setExpanded] = React.useState(true);
    const handlePress = () => setExpanded(!expanded);

    const [text, setText] = React.useState('');

    return (
    <ScrollView>
        <TextInput
        mode="outlined"
        label="Order ID"
        placeholder=""
        right={<TextInput.Icon icon="qrcode-scan" />}
        style={{marginVertical: 8, marginHorizontal: 8}}
        />
        <Button icon="tag-search" mode="contained" onPress={() => console.log('Pressed')} style={{marginVertical: 16, marginHorizontal: 32}}>Search Order</Button>
        <Divider style={{marginVertical: 24}} />
        <Button icon="qrcode-scan" mode="contained" onPress={() => console.log('Pressed')} style={{marginVertical: 16, marginHorizontal: 32}}>Scan QR-Code</Button>
    </ScrollView>
    );
}