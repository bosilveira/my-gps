import * as React from 'react';
import { BarCodeScanner, BarCodeScannerResult } from 'expo-barcode-scanner';
import { StyleSheet, Dimensions, View } from 'react-native';
import { Button,Avatar, Text, Divider } from 'react-native-paper';

import { Appbar } from 'react-native-paper';
import QRCode from 'react-native-qrcode-svg';

export default function Scanner(code: string = "123e4567-e89b-12d3-a456-426614174000") {

  return (
    <QRCode
      value={code}
    />
  );
}
