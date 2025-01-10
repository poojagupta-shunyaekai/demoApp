import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {
  GestureHandlerRootView,
  PanGestureHandler,
} from 'react-native-gesture-handler';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  useAnimatedGestureHandler,
  withSpring,
} from 'react-native-reanimated';
const Slider = () => {
  const translateX = useSharedValue(0);
  const likeCount = useSharedValue(0);

  // Gesture Handler for slider movement
  const gestureHandler = useAnimatedGestureHandler({
    onStart: (_, ctx) => {
      ctx.startX = translateX.value;
    },
    onActive: (event, ctx) => {
      translateX.value = Math.min(
        Math.max(ctx.startX + event.translationX, 0),
        300,
      ); // Adjust slider range
      likeCount.value = Math.round((translateX.value / 300) * 100); // Calculate like count dynamically
    },
    onEnd: () => {
      translateX.value = withSpring(translateX.value);
    },
  });

  // Slider style
  const sliderStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateX: translateX.value}],
    };
  });

  // Like count style
  const likeCountStyle = useAnimatedStyle(() => {
    return {
      opacity: 1,
    };
  });

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <View style={styles.container}>
        <View style={styles.track} />
        <PanGestureHandler onGestureEvent={gestureHandler}>
          <Animated.View style={[styles.slider, sliderStyle]} />
        </PanGestureHandler>
        <Animated.Text style={[styles.likeCount, likeCountStyle]}>
          {likeCount.value.toFixed(0)} Likes
        </Animated.Text>
      </View>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  track: {
    height: 10,
    width: 300,
    backgroundColor: '#ddd',
    borderRadius: 5,
    position: 'absolute',
  },
  slider: {
    height: 30,
    width: 30,
    backgroundColor: '#ff6f61',
    borderRadius: 15,
    position: 'absolute',
  },
  likeCount: {
    marginTop: 50,
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default Slider;
