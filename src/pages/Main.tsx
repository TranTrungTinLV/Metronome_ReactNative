/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useState, useEffect} from 'react';
import {StyleSheet, View, SafeAreaView, Text} from 'react-native';
import Sound from 'react-native-sound';
import Bottom from './components/Bottom'
import Header from './components/Header';
import Middle from './components/Middle';
const Main: React.FC = () => {
  const [range, setRange] = useState<number>(40);
  const [isPlaying, setIsplaying] = useState<boolean>(false);
  const [changingBeat, setChangingBeat] = useState<boolean>(false);
  const [value, setValue] = useState<string>('2/4');
  const [beatsPerMeasure, setBeatsPerMeasure] = useState<number>(2);
  const [step, setStep] = useState<number>(-1); // Giá trị step
  const [stepLength, setStepLength] = useState<number>(4); // Giá trị stepLength
  let sound: Sound | null = null;
  let count = 0;
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);

  useEffect(() => {
    setBeatsPerMeasure(parseInt(value.split('/')[0], 10));
  }, [value]);

  const increaseBeats = () => {
    if (beatsPerMeasure === 4) {
      setBeatsPerMeasure(2);
    } else {
      setBeatsPerMeasure(prevBeats => prevBeats + 1);
    }
    setChangingBeat(true);
    stopAndClearInterval();
    if (isPlaying) {
      playSound();
    }
  };

  const playSound = () => {
    stopAndClearInterval();
    count = 0;
    let currentCount = count; // Lưu giá trị hiện tại của count
    const calculateIntervalDuration = () => (60 / range) * 1000;
    const intervalDuration = calculateIntervalDuration();
    const newInterval = setInterval(() => {
      if (!isPlaying) {
        stopSound();
        clearInterval(newInterval);
        return;
      }

      if (currentCount >= beatsPerMeasure) {
        currentCount = 0;
      }

      const soundFile = currentCount === 0 ? 'sound1.mp3' : 'sound2.mp3';
      const whoosh = new Sound(soundFile, Sound.MAIN_BUNDLE, error => {
        console.log(whoosh);
        if (error) {
          return;
        }

        whoosh.play(success => {
          whoosh.release();
        });
      });

      const activeStep = currentCount;
      setStepLength(beatsPerMeasure);
      setStep(activeStep);
      currentCount++;
    }, intervalDuration);

    setIsplaying(true);

    setIntervalId(newInterval);
  };

  const stopSound = () => {
    clearInterval(intervalId as NodeJS.Timeout);
    if (sound) {
      sound.stop(() => {
        if (sound) {
          sound.release();
        }
      });
    }
    setIsplaying(false);
  };

  const stopAndClearInterval = () => {
    stopSound();
    // if (intervalId) {
    //   clearInterval(intervalId);
    //   setIntervalId(null);
    // }
  };

  const handleSliderChange = (newValue: number) => {
    stopAndClearInterval();
    const newRange = Math.min(Math.max(newValue, 40), 210);
    setRange(newRange);
    setChangingBeat(true);
    setValue(`${beatsPerMeasure}/4`);
    if (isPlaying) {
      setIsplaying(true);
    }
  };

  const increaseRange = () => {
    const newRange = range + 1 <= 210 ? range + 1 : 210; // Giới hạn giá trị tối đa là 210
    setRange(newRange);
    stopAndClearInterval();
    if (isPlaying) {
      playSound();
    }
  };

  const decreaseRange = () => {
    const newRange = range - 1 >= 40 ? range - 1 : 40; // Giới hạn giá trị tối thiểu là 40
    setRange(newRange);
    stopAndClearInterval();
    if (isPlaying) {
      playSound();
    }
  };

  const togglePlay = () => {
    if (isPlaying) {
      stopSound();
    } else {
      if (changingBeat) {
        setIsplaying(true);
        playSound();
      } else {
        playSound();
      }
    }
    setIsplaying(!isPlaying);
  };

  useEffect(() => {
    if (changingBeat) {
      if (isPlaying) {
        playSound(); // Gọi lại hàm playSound để khởi động interval mới với nhịp mới
      }
      setChangingBeat(false); // Kết thúc quá trình thay đổi nhịp
    } else {
      if (isPlaying) {
        playSound(); // Khởi động interval mới với nhịp hiện tại
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [beatsPerMeasure, isPlaying, changingBeat]);

  

  return (
    <SafeAreaView style={styles.container}>
      <Header/>
      <Middle beatsPerMeasure={beatsPerMeasure} step={step} isPlaying={isPlaying}/>
      <Bottom range={range} increaseRange={increaseRange} increaseBeats={increaseBeats} decreaseRange={decreaseRange} beatsPerMeasure={beatsPerMeasure} togglePlay={togglePlay} handleSliderChange={handleSliderChange} isPlaying={isPlaying}/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  
  boxContainer: {
    width: '100%',
    height: '85%',
    flexDirection: 'column',
    flexWrap: 'wrap',
    backgroundColor: 'black',
  },
  container: {
    flex: 1,
    backgroundColor: '#303030',
  },


  slider: {
    justifyContent: 'center',
    width: 300,
    height: 50,
  },
});

export default Main;
