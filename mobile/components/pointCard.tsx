import * as React from 'react';
import { View, ScrollView } from 'react-native';

import { Appbar } from 'react-native-paper';

import { Button, Card, Avatar, Text, Divider } from 'react-native-paper';
import { ProgressBar, MD3Colors } from 'react-native-paper';
import { Switch, IconButton, List } from 'react-native-paper';
import { RadioButton, Menu, Provider  } from 'react-native-paper';

export default function PointCard() {

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
    <Card>
        <Card.Title
        title="Tracking"
        left={(props) => <Avatar.Icon {...props} icon="crosshairs-gps" />}
        />
        <Card.Content>

            <Text variant="labelLarge">Tracking ID</Text>
            <Text variant="bodyLarge">123e4567-e89b-12d3-a456-426614174000</Text>
            <Divider style={{marginVertical: 8}} />

            <Text variant="labelLarge">Coordinates: Latitude | Longitude</Text>
            <Text variant="bodyLarge">41.40338 | 2.17403</Text>
            <Divider style={{marginVertical: 8}} />

            <Text variant="labelLarge">Speed</Text>
            <Text variant="bodyLarge">100km</Text>
            <Divider style={{marginVertical: 8}} />

            <Text variant="labelLarge">Timestamp</Text>
            <Text variant="bodyLarge">Delivery</Text>
            <Divider style={{marginVertical: 8}} />

            <Text variant="labelLarge">User</Text>
            <Text variant="bodyLarge">João Guimarães Rosa</Text>
            <Button icon="crosshairs-gps" mode="contained" onPress={() => console.log('Pressed')}>View User</Button>
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