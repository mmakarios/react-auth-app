import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import transitionConfig from '../utils/transitionConfig';
import HomePage from './HomePage';
import LoginPage from './LoginPage';

const MainNavigator = createStackNavigator(
  {
    Home: { screen: HomePage },
    Login: { screen: LoginPage },
  },
  {
    initialRouteName: 'Home',
    headerMode: 'float',
    transitionConfig,
  }
);

const App = createAppContainer(MainNavigator);

export default App;
