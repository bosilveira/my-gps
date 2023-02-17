import * as React from 'react';
import { View, ScrollView } from 'react-native';

import { Appbar } from 'react-native-paper';

import { Button, Card, Avatar, Text, Divider } from 'react-native-paper';
import { ProgressBar, MD3Colors } from 'react-native-paper';
import { Switch, IconButton, List } from 'react-native-paper';
import { RadioButton, Menu, Provider, Chip  } from 'react-native-paper';
import { TextInput } from 'react-native-paper';

export default function AddUserForm() {

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

    const [role, setRole] = React.useState('Driver');


    return (
    <ScrollView>

      <View
        style={{marginVertical: 8, marginHorizontal: 8}}
        >
        <Text variant="labelLarge"
                style={{marginTop: 0, marginBottom: 8, marginHorizontal: 8}}

        >Role</Text>
        <List.Accordion
        title={role}
        left={props => <List.Icon {...props} icon='account-hard-hat' />}>
            <RadioButton.Group onValueChange={value => setRole(value)} value={role}>
                <RadioButton.Item label="Administrator" value="Administrator" />
                <RadioButton.Item label="Manager" value="Manager" />
                <RadioButton.Item label="Driver" value="Driver" />
                <RadioButton.Item label="Courier" value="Courier" />
                <RadioButton.Item label="Customer Service Representative" value="Customer Service Representative" />
            </RadioButton.Group>
        </List.Accordion>
        </View>



      <TextInput
        mode="outlined"
        label="User Name"
        placeholder="Full Name"
        right={<TextInput.Icon icon="account" />}
        style={{marginVertical: 8, marginHorizontal: 8}}
      />

      <TextInput
        mode="outlined"
        label="User Email"
        placeholder="user@email.com"
        right={<TextInput.Icon icon="email" />}
        style={{marginVertical: 8, marginHorizontal: 8}}
      />

    <TextInput
      mode="outlined"
      label="User Department"
      placeholder="Department"
      right={<TextInput.Icon icon="office-building" />}
      style={{marginVertical: 8, marginHorizontal: 8}}
    />

    <TextInput
      disabled={true}
      label="Password"
      secureTextEntry
      right={<TextInput.Icon icon="eye" />}
      style={{marginVertical: 8, marginHorizontal: 8}}
      />


    </ScrollView>
    );
}