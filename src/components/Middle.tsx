import React, { FC } from 'react';
import { StyleSheet, View } from 'react-native';
import IndactorRow from './Indactor';

interface MiddleProps {
    beatsPerMeasure: number;
    step: number;
    isPlaying: boolean;
}
const Middle: FC<MiddleProps> = ({beatsPerMeasure,step,isPlaying}) => {
    return <View style={styles.middle}>
        <IndactorRow
          step={beatsPerMeasure - 1}
          stepLength={beatsPerMeasure}
          activeStep={step}
          isPlaying={isPlaying}
        />
      </View>
}

const styles = StyleSheet.create({
    middle: {
        width: '100%',
        height: '50%',
        padding: 5,
        backgroundColor: 'black',
        alignItems: 'center',
      },
})

export default Middle;