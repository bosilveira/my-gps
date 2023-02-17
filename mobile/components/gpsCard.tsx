import * as React from 'react';
import { View, ScrollView } from 'react-native';

import { Appbar } from 'react-native-paper';

import { Button, Card, Avatar, Text, Divider } from 'react-native-paper';
import { ProgressBar, MD3Colors } from 'react-native-paper';
import { Switch, IconButton, List } from 'react-native-paper';
import { RadioButton, Menu, Provider  } from 'react-native-paper';

export default function GPSCard() {

    const [isSwitchOn, setIsSwitchOn] = React.useState(false);
    const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

    const [service, setService] = React.useState('1 second');
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
        title="GPS Tracking and Network"
        left={(props) => <Avatar.Icon {...props} icon="car-connected" />}
        />
        <Card.Content>

            <List.Section>
                <List.Item title="GPS Tracking"
                right={() => <Switch value={isSwitchOn} onValueChange={onToggleSwitch}/>}
                />

                <List.Accordion
                title={service}
                left={props => <List.Icon {...props} icon="timer-outline" />}>
                <RadioButton.Group onValueChange={value => setService(value)} value={service}>
                    <RadioButton.Item label="Green" value="Green" />
                    <RadioButton.Item label="Yellow" value="Yellow" />
                    <RadioButton.Item label="Red" value="Red" />
                    <RadioButton.Item label="Blue" value="Blue" />
                </RadioButton.Group>
            </List.Accordion>


            </List.Section>


        </Card.Content>

        <ProgressBar animatedValue={0.1} style={{marginHorizontal: 12, marginVertical: 8}}/>
    </Card>
    </ScrollView>
    );
}