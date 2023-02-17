import * as React from 'react';
import { View, ScrollView } from 'react-native';

import { Appbar } from 'react-native-paper';

import { Button, Card, Avatar, Text, Divider } from 'react-native-paper';
import { ProgressBar, MD3Colors } from 'react-native-paper';
import { Switch, IconButton, List } from 'react-native-paper';
import { RadioButton, Menu, Provider  } from 'react-native-paper';

export default function OrderCard() {

    const [isSwitchOn, setIsSwitchOn] = React.useState(false);
    const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

    const [service, setService] = React.useState('Green');
    const [status, setStatus] = React.useState('Status');

    const [visible, setVisible] = React.useState(false);

    const openMenu = () => setVisible(true);
  
    const closeMenu = () => setVisible(false);

    const [expanded, setExpanded] = React.useState(true);
    const handlePress = () => setExpanded(!expanded);

    return (
    <ScrollView>
    <Card>
        <Card.Title
        title="Order Title"
        left={(props) => <Avatar.Icon {...props} icon="package" />}
        />
        <Card.Content>

            <Text variant="labelLarge">Order ID</Text>
            <Text variant="bodyLarge">123e4567-e89b-12d3-a456-426614174000</Text>
            <Divider style={{marginVertical: 8}} />


            <Text variant="labelLarge">Flag</Text>
            <List.Accordion
            title={service}
            left={props => <List.Icon {...props} icon="flag" />}>
                <RadioButton.Group onValueChange={value => setService(value)} value={service}>
                    <RadioButton.Item label="Green" value="Green" />
                    <RadioButton.Item label="Yellow" value="Yellow" />
                    <RadioButton.Item label="Red" value="Red" />
                    <RadioButton.Item label="Blue" value="Blue" />
                </RadioButton.Group>
            </List.Accordion>
            <Divider style={{marginVertical: 8}} />

            <Text variant="labelLarge">Status</Text>
            <List.Accordion
            title={status}
            left={props => <List.Icon {...props} icon="list-status" />}>
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

            <Text variant="labelLarge">User</Text>
            <Text variant="bodyLarge">João Guimarães Rosa</Text>
            <Button icon="crosshairs-gps" mode="contained" onPress={() => console.log('Pressed')}>View User</Button>
            <Divider style={{marginVertical: 8}} />

        </Card.Content>

        <ProgressBar animatedValue={0.1} style={{marginHorizontal: 12, marginVertical: 8}}/>
    </Card>
    </ScrollView>
    );
}