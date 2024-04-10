import React, {FC} from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

interface ToggleProps {
  increaseBeats: () => void;
  beatsPerMeasure: number;
  togglePlay: () => void;
  isPlaying: boolean;
}

const Toggle: FC<ToggleProps> = ({
  increaseBeats,
  beatsPerMeasure,
  togglePlay,
  isPlaying,
}) => {
  return (
    <View
      style={styles.container}>
      <View>
        <TouchableOpacity onPress={increaseBeats}>
          <View>
            <Text style={styles.beatsButtonText}>
              {beatsPerMeasure.toString()} / 4
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={togglePlay}>
        <View>
          {isPlaying ? (
            <AntDesign
              name="pause"
              // eslint-disable-next-line react-native/no-inline-styles
              style={{
                fontSize: 50,
                color: 'white',
                paddingRight: 20,
                textAlign: 'center',
              }}
            />
          ) : (
            <AntDesign
              name="play"
              style={{
                fontSize: 50,
                color: 'white',
                paddingRight: 20,
                textAlign: 'center',
              }}
            />
          )}
        </View>
      </TouchableOpacity>
      <View />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '100%',
  },
  slider: {
    justifyContent: 'center',
    width: 300,
    height: 50,
  },
  ButtonPlay: {
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    marginHorizontal: 60,
    borderRadius: 100,
    backgroundColor: 'transparent',
    borderWidth: 0,
  },
  beatsButtonText: {
    fontSize: 20,
    color: 'white',
  },
});

export default Toggle;
