import * as React from 'react';

import { AnimatedFAB } from 'react-native-paper';

export default function ScannerButton() {
  return (
    <AnimatedFAB
        icon={'qrcode-scan'}
        label={'Scanner'}
        extended={false}
        onPress={() => console.log('Pressed')}
        visible={true}
        animateFrom={'right'}
        iconMode={'dynamic'}
        style={{
            bottom: 16,
            right: 16,
            position: 'absolute',
          }}
      />
  );
}