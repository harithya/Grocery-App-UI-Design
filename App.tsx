import React from 'react'
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import StackNavigation from './src/routes/StackNavigation';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import Mapping from './src/assets/theme/mapping.json';
import * as eva from '@eva-design/eva';
import Color from './src/assets/theme/color.json';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { LogBox } from 'react-native';

const App = () => {
  LogBox.ignoreAllLogs();
  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: 'white'
    },
  };
  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider  {...eva} theme={{ ...eva.light, ...Color }} customMapping={{ ...eva.mapping, ...Mapping }}>
        <NavigationContainer theme={MyTheme}>
          <StackNavigation />
        </NavigationContainer>
      </ApplicationProvider>
    </>
  )
}

export default App