import * as React from 'react';
import { BarCodeScanner, BarCodeScannerResult } from 'expo-barcode-scanner';
import { StyleSheet, Dimensions, View } from 'react-native';
import { Button,Avatar, Text, Divider } from 'react-native-paper';

import { Appbar } from 'react-native-paper';

export default function Scanner() {

    const [hasPermission, setHasPermission] = React.useState(false);
    const [scanned, setScanned] = React.useState(false);
    const [openScanner, setOpenScanner] = React.useState(false);
    const { width, height } = Dimensions.get('window');
    const qrWidth = width;
    const qrHeight = height * .8;


    React.useEffect(() => {
        (async () => {
          const { status } = await BarCodeScanner.requestPermissionsAsync();
          setHasPermission(status === 'granted');
        })();
      }, []);

      const handleBarCodeScanned = ({ type, data }: BarCodeScannerResult) => {
        setScanned(true);
        setOpenScanner(false);
        alert(`Bar code with type ${type} and data ${data} has been scanned!`);
      };


  return (
        <>
        <View style={{height: '100%', width: '100%', alignContent: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>

        {openScanner &&
        <View style={{height: qrHeight, width: qrWidth, position: 'absolute', top: 0}}>
            <BarCodeScanner
            onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
            style={StyleSheet.absoluteFillObject}
            />
        </View>
        }

        <Text>{hasPermission ? "Permitted" : "Forbidden"} {openScanner ? "Open" : "Closed"}</Text>
        <Button 
        icon="qrcode-scan" 
        mode="contained" 
        onPress={() => setOpenScanner(true)}
        style={{marginVertical: 16, marginHorizontal: 32}}>
        Activate Scanner
        </Button>

        <Button 
        icon="qrcode-scan" 
        mode="contained" 
        onPress={() => setOpenScanner(false)}
        style={{marginVertical: 16, marginHorizontal: 32}}>
        Close Scanner
        </Button>



        </View>


</>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
      baseText: {
      fontSize: 24,
    },
  });