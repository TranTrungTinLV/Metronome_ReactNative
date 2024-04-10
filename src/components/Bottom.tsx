import { View, StyleSheet } from "react-native"
import Botton from "./Button"
import Toggle from "./Toggle"
import Slider from './Slider';
import React, { FC } from "react"
interface BottomProps{
    range:number;
    increaseRange: ()=>void;
    decreaseRange: ()=>void;
    handleSliderChange: (value:number)=>void;
    increaseBeats: ()=>void;
    beatsPerMeasure:number;
    togglePlay: ()=>void;
    isPlaying:boolean;
}
const Bottom: FC<BottomProps> = ({range,increaseRange,decreaseRange,handleSliderChange,increaseBeats,beatsPerMeasure,togglePlay,isPlaying}) => {
    return <View style={styles.bottom}>
        <Botton
          range={range}
          increaseRange={increaseRange}
          decreaseRange={decreaseRange}
        />
        <Slider handleSliderChange={handleSliderChange} range={range} />
        <View
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 10,
          }}>
          <Toggle
            increaseBeats={increaseBeats}
            beatsPerMeasure={beatsPerMeasure}
            togglePlay={togglePlay}
            isPlaying={isPlaying}
          />
        </View>
      </View>
}

const styles = StyleSheet.create({
    bottom: {
        width: '100%',
        height: '50%',
        padding: 5,
        alignItems: 'center',
        paddingBottom: 33,
        paddingLeft: 37,
        paddingRight: 29,
        paddingTop: 30,
      },
})

export default Bottom;