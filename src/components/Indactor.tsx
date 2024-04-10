import React, {FC} from 'react';
import {View, StyleSheet} from 'react-native';

interface IndactorRowProps {
  step: number;
  stepLength: number;
  activeStep: number;
  isPlaying: boolean;
}

const IndactorRow: FC<IndactorRowProps> = ({
  stepLength,
  activeStep,
  isPlaying,
}) => {
  const steps = Array(stepLength).fill(null);

  return (
    <View style={styles.container}>
      {steps.map((_, index) => {
        // Calculate the indicatorIndex based on the step and time signature
        const reversedIndex = stepLength - index - 1; // Reverse the index

        const isActive = isPlaying && reversedIndex === activeStep;

        return (
          <View
            key={index}
            style={[
              styles.circle,
              {
                backgroundColor: isActive ? '#FF8C00' : '#FFA500',
              },
            ]}
          />
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '50%',
    padding: 100,
    backgroundColor: 'black',
    flexDirection: 'row-reverse',
    justifyContent: 'center',
    alignItems: 'center',
  },
  circle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginHorizontal: 17,
  },
});

export default IndactorRow;
