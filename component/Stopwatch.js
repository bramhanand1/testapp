import React, { useState, useRef } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const StopwatchScreen = () => {
  const [time, setTime] = useState(0);
  const [Start, setStart] = useState(false);
  const intervalRef = useRef(null);

  const formatTime = (time) => {
    const minutes = Math.floor((time / 60000) % 60);
    const seconds = Math.floor((time / 1000) % 60);
    const milliseconds = Math.floor((time % 1000) / 10);

    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}.${String(milliseconds).padStart(2, '0')}`;
  };


  const startTimer = () => {
    if (!Start) {
      setStart(true);
      intervalRef.current = setInterval(() => {
        setTime((prevTime) => prevTime + 10); 
      }, 10);
    }
  };


  const pauseTimer = () => {
    if (Start) {
      clearInterval(intervalRef.current);
      setStart(false);
    }
  };

 
  const stopTimer = () => {
    clearInterval(intervalRef.current);
    setStart(false);
    setTime(0); 
  };

  
  React.useEffect(() => {
    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Stopwatch</Text>
      <View style={styles.timerContainer}>
        <Text style={styles.timer}>{formatTime(time)}</Text>
      </View>
      <View style={styles.controls}>
        <Button title="Start" color="blue" onPress={startTimer} />
        <Button title="Pause" color="orange" onPress={pauseTimer} />
        <Button title="Stop" color="green" onPress={stopTimer} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 32,
    marginBottom: 20,
  },
  timerContainer: {
    backgroundColor: '#e0e0e0',
    borderRadius: 100,
    padding: 100,
    marginBottom: 30,
  },
  timer: {
    fontSize: 50,
    fontWeight: 'bold',
  },
  controls: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginTop: 20,
  },
});

export default StopwatchScreen;
