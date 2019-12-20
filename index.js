/**
 * @format
 */

import { AppRegistry } from 'react-native';
// Automatically fetches Root.native.js by detecting build platform
// https://facebook.github.io/react-native/docs/platform-specific-code#native-specific-extensions-ie-sharing-code-with-nodejs-and-web
import Root from './src/components/Root';
import { name as appName } from './app.json';
import 'react-native-gesture-handler';

AppRegistry.registerComponent(appName, () => Root);
