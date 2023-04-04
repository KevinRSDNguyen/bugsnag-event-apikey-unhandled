import Bugsnag from '@bugsnag/react-native';
Bugsnag.start({
  onError: function (event) {
    event.apiKey = '8c6b15ba3fc73caee248c1c4b6a4022a';
    event.unhandled = true;

    // Return `false` if you'd like to stop this error being reported
    return true;
  },
});

/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
