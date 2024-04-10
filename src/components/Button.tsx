import React, {FC} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

interface BottonProps {
  decreaseRange: () => void;
  range: number;
  increaseRange: () => void;
}

const Botton: FC<BottonProps> = ({decreaseRange, range, increaseRange}) => {
  return (
    <View
      // eslint-disable-next-line react-native/no-inline-styles
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        width: '100%',
      }}>
      <View>
        <TouchableOpacity onPress={decreaseRange}>
          <FontAwesome
            name="minus"
            // eslint-disable-next-line react-native/no-inline-styles
            style={{fontSize: 30, color: 'white', fontWeight: '200'}}
          />
        </TouchableOpacity>
      </View>

      <View>
        <Text style={{color: 'white', fontSize: 64}}>{Math.floor(range)}</Text>
      </View>

      <View>
        <TouchableOpacity onPress={increaseRange}>
          <FontAwesome name="plus" style={{fontSize: 30, color: 'white'}} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Botton;
