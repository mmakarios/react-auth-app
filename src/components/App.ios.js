import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import transitionConfig from '../utils/transitionConfig';
import HomePage from './HomePage';
import LoginPage from './LoginPage';

const AppStack = createStackNavigator(
  { Home: HomePage },
  { headerMode: 'float', transitionConfig }
);
const AuthStack = createStackNavigator(
  { Login: LoginPage },
  { headerMode: 'float', transitionConfig }
);

const MainNavigator = createSwitchNavigator(
  {
    App: AppStack,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'Auth',
  }
);

const App = createAppContainer(MainNavigator);

export default App;
