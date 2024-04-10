import RNSlider from '@react-native-community/slider';
import React, {FC} from 'react';
import {StyleSheet} from 'react-native';

interface SliderProps {
  handleSliderChange: (newValue: number) => void;
  range: number;
}
const Slider: FC<SliderProps> = ({handleSliderChange, range}) => {
  return (
    <RNSlider
      style={styles.slider}
      minimumValue={40}
      maximumValue={210}
      value={range}
      onValueChange={handleSliderChange}
      minimumTrackTintColor="#FAFAFA"
      maximumTrackTintColor="#D6D6D6"
      thumbTintColor="#FAFAFA"
    />
  );
};

const styles = StyleSheet.create({
  slider: {
    justifyContent: 'center',
    width: 300,
    height: 50,
  },
});
export default Slider;
