import * as React from 'react';
import { View, ScrollView } from 'react-native';

import { Appbar } from 'react-native-paper';

import { Button, Card, Avatar, Text, Divider } from 'react-native-paper';
import { ProgressBar, MD3Colors } from 'react-native-paper';
import { Switch, IconButton, List } from 'react-native-paper';
import { RadioButton, Menu, Provider  } from 'react-native-paper';
import { TextInput } from 'react-native-paper';

export default function LoginForm() {

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
        label="User Email"
        placeholder="user@email.com"
        right={<TextInput.Icon icon="email" />}
        style={{marginVertical: 8, marginHorizontal: 8}}
        />

        <TextInput
        disabled={true}
        label="Password"
        secureTextEntry
        right={<TextInput.Icon icon="eye" />}
        style={{marginVertical: 8, marginHorizontal: 8}}
        />

        <Button 
        icon="login" 
        mode="contained" 
        onPress={() => console.log('Pressed')}
        style={{marginVertical: 16, marginHorizontal: 32}}
        >Login</Button>
        <ProgressBar animatedValue={0.1} style={{marginHorizontal: 12, marginVertical: 8}}/>
        
        <Divider style={{marginVertical: 8}} />

    </ScrollView>
    );
}