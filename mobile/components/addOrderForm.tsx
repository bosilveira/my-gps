import * as React from 'react';
import { View, ScrollView } from 'react-native';

import { Appbar } from 'react-native-paper';

import { Button, Card, Avatar, Text, Divider } from 'react-native-paper';
import { ProgressBar, MD3Colors } from 'react-native-paper';
import { Switch, IconButton, List } from 'react-native-paper';
import { RadioButton, Menu, Provider  } from 'react-native-paper';
import { TextInput } from 'react-native-paper';

export default function AddOrderForm() {

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

    const [flag, setFlag] = React.useState('Green');


    return (
    <ScrollView>

        <TextInput
        mode="outlined"
        label="Title"
        placeholder=""
        right={<TextInput.Icon icon="tag" />}
        style={{marginVertical: 8, marginHorizontal: 8}}
        />

        <TextInput
        mode="outlined"
        label="Custody (User)"
        placeholder=""
        right={<TextInput.Icon icon="account" />}
        style={{marginVertical: 8, marginHorizontal: 8}}
        />

        <TextInput
        mode="outlined"
        label="Status"
        placeholder=""
        right={<TextInput.Icon icon="list-status" />}
        style={{marginVertical: 8, marginHorizontal: 8}}
        />

        <View
        style={{marginVertical: 8, marginHorizontal: 8}}
        >
        <Text variant="labelLarge"
                style={{marginTop: 0, marginBottom: 8, marginHorizontal: 8}}

        >Flag</Text>
        <List.Accordion
        title={flag}
        left={props => <List.Icon {...props} icon='flag' />}>
            <RadioButton.Group onValueChange={value => setFlag(value)} value={flag}>
                <RadioButton.Item label="Green" value="Green" />
                <RadioButton.Item label="Yellow" value="Yellow" />
                <RadioButton.Item label="Red" value="Red" />
                <RadioButton.Item label="Blue" value="Blue" />
            </RadioButton.Group>
        </List.Accordion>
        </View>

        <Button 
        icon="plus" 
        mode="contained" 
        onPress={() => console.log('Pressed')}
        style={{marginVertical: 16, marginHorizontal: 32}}>
        Create Order
        </Button>
        <ProgressBar animatedValue={0.1} style={{marginHorizontal: 12, marginVertical: 8}}/>
        
        <Divider style={{marginVertical: 8}} />

    </ScrollView>
    );
}