import React, { useLayoutEffect, useRef, useState } from 'react';
import { SafeAreaView, Text, View, StyleSheet } from 'react-native';

function MeasureComponent() {
  const elementRef = useRef(null); // Create a ref for the element to measure
  const [dimensions, setDimensions] = useState({ width: 0, height: 0, x: 0, y: 0 });

  // useLayoutEffect to measure the element after the layout is calculated
  useLayoutEffect(() => {
    if (elementRef.current) {
      // Measure the element's position and size in the window
      elementRef.current.measure((x, y, width, height, pageX, pageY) => {
        // Update state with the measurements
        setDimensions({ width, height, x, y });
      });
    }
  }, []); // Empty dependency array to run the effect only once after the first render

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>React Native useLayoutEffect Example</Text>

      {/* The element to measure */}
      <View ref={elementRef} style={styles.box}>
        <Text style={styles.boxText}>Measure Me!</Text>
      </View>

      {/* Display the measured dimensions */}
      <Text style={styles.measurementText}>
        Width: {dimensions.width}, Height: {dimensions.height}, X: {dimensions.x}, Y: {dimensions.y}
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  box: {
    width: 200,
    height: 200,
    backgroundColor: 'skyblue',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
  },
  boxText: {
    fontSize: 18,
    color: 'white',
  },
  measurementText: {
    fontSize: 16,
    marginTop: 10,
  },
});

export default MeasureComponent;
