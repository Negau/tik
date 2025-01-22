import React, { useRef, useState } from 'react';
    import { StyleSheet, View, Dimensions } from 'react-native';
    import Video from 'react-native-video';
    import { GestureHandlerRootView } from 'react-native-gesture-handler';
    import { SafeAreaProvider } from 'react-native-safe-area-context';

    const videos = [
      { uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4' },
      { uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4' },
      { uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4' }
    ];

    const { height } = Dimensions.get('window');

    export default function App() {
      const [currentIndex, setCurrentIndex] = useState(0);
      const videoRef = useRef(null);

      const onBuffer = ({ isBuffering }) => {
        console.log('Buffering:', isBuffering);
      };

      const onError = (error) => {
        console.log('Error:', error);
      };

      return (
        <GestureHandlerRootView style={{ flex: 1 }}>
          <SafeAreaProvider>
            <View style={styles.container}>
              <Video
                source={videos[currentIndex]}
                ref={videoRef}
                onBuffer={onBuffer}
                onError={onError}
                style={styles.video}
                resizeMode="cover"
                repeat
                paused={false}
              />
            </View>
          </SafeAreaProvider>
        </GestureHandlerRootView>
      );
    }

    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: 'black'
      },
      video: {
        height: height,
        width: '100%',
        position: 'absolute'
      }
    });
