/* eslint-disable react/react-in-jsx-scope */
/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
// import App from './app1';
import {name as appName} from './app.json';
import {PaperProvider} from 'react-native-paper';
import theme from './src/Theme/theme';
export default function Main() {
  return (
    <PaperProvider theme={theme}>
      <App />
    </PaperProvider>
  );
}

AppRegistry.registerComponent(appName, () => Main);
