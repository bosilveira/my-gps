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

    return (
    <ScrollView>

    <TextInput
      mode="outlined"
      label="User Name"
      placeholder="Full Name"
      right={<TextInput.Icon icon="account" />}
    />
    <Divider style={{marginVertical: 8}} />

    <TextInput
      mode="outlined"
      label="User Email"
      placeholder="user@email.com"
      right={<TextInput.Icon icon="email" />}
    />
    <Divider style={{marginVertical: 8}} />

    <TextInput
      mode="outlined"
      label="User Department"
      placeholder="Department"
      right={<TextInput.Icon icon="office-building" />}
    />
    <Divider style={{marginVertical: 8}} />



    <TextInput
      label="Password"
      secureTextEntry
      right={<TextInput.Icon icon="eye" />}
    />
    <Divider style={{marginVertical: 8}} />



    <Card>
        <Card.Title
        title="Driver"
        left={(props) => <Avatar.Icon {...props} icon="car" />}
        />
        <Card.Content>

            <Text variant="labelLarge">User ID</Text>
            <Text variant="bodyLarge">123e4567-e89b-12d3-a456-426614174000</Text>
            <Divider style={{marginVertical: 8}} />


            <Text variant="labelLarge">Name</Text>
            <Text variant="bodyLarge">João Guimarães Rosa</Text>
            <Divider style={{marginVertical: 8}} />

            <Text variant="labelLarge">Email</Text>
            <Text variant="bodyLarge">user@email.com</Text>
            <Divider style={{marginVertical: 8}} />

            <Text variant="labelLarge">Department</Text>
            <Text variant="bodyLarge">Delivery</Text>
            <Divider style={{marginVertical: 8}} />

            <Button icon="crosshairs-gps" mode="contained" onPress={() => console.log('Pressed')}>GPS Tracking</Button>
            <Divider style={{marginVertical: 8}} />

            <Text variant="labelLarge">Service</Text>
            <List.Accordion
            title={service}
            left={props => <List.Icon {...props} icon={service === 'Available' ? "check-circle" : "close-circle"} />}>
                <RadioButton.Group onValueChange={value => setService(value)} value={service}>
                    <RadioButton.Item label="Available" value="Available" />
                    <RadioButton.Item label="Unavailable" value="Unavailable" />
                </RadioButton.Group>
            </List.Accordion>
            <Divider style={{marginVertical: 8}} />

            <Text variant="labelLarge">Status</Text>
            <List.Accordion
            expanded={false}
            right={props => <List.Icon {...props} icon="checkbox-blank-off-outline" />}
            title={status}
            left={props => <List.Icon {...props} icon="message" />}>
                <RadioButton.Group onValueChange={value => setStatus(value)} value={status}>
                    <RadioButton.Item label="Idling" value="Idling" />
                    <RadioButton.Item label="On Delivery" value="On Delivery" />
                    <RadioButton.Item label="En Route" value="En Route" />
                    <RadioButton.Item label="Return Trip" value="Return Trip" />
                    <RadioButton.Item label="Refueling" value="Refueling" />
                    <RadioButton.Item label="Waiting for Dispatch" value="Waiting for Dispatch" />
                    <RadioButton.Item label="Waiting for Pickup" value="Waiting for Pickup" />
                    <RadioButton.Item label="On Break" value="On Break" />
                    <RadioButton.Item label="Maintenance" value="Maintenance" />
                </RadioButton.Group>
            </List.Accordion>

            <Divider style={{marginVertical: 8}} />


        </Card.Content>

        <Card.Actions>
            <Text variant="bodyLarge">Radar</Text>
            <Switch value={isSwitchOn} onValueChange={onToggleSwitch}/>
        </Card.Actions>
        <ProgressBar animatedValue={0.1} style={{marginHorizontal: 12, marginVertical: 8}}/>
    </Card>
    </ScrollView>
    );
}