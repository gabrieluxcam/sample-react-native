/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { LogBox } from 'react-native';
import AppNavigator from './navigations/AppNavigator';
import { ClothesProvider } from './src/context';
import { React$Node } from './src/types/AppTypes';

// UXCam import
import RNUxcam from 'react-native-ux-cam';

// UXCam config
RNUxcam.optIntoSchematicRecordings(); // Add this line to enable iOS screen recordings
const configuration = {
    userAppKey: '2c03jxhvos3e8c9',
    enableAutomaticScreenNameTagging: false,
    enableImprovedScreenCapture: true
 }

const App: () => React$Node = () => {
  // Start UXCam
  RNUxcam.startWithConfiguration(configuration);

  LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
  LogBox.ignoreAllLogs(); //Ignore all log notifications

  return (
    <ClothesProvider>
      <AppNavigator />
    </ClothesProvider>
  );
};

export default App;