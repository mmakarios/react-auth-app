import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import transitionConfig from '../utils/transitionConfig';
import HomePage from './HomePage';
import ExamplePage from './ExamplePage';

const MainNavigator = createStackNavigator(
  {
    Home: { screen: HomePage },
    Example: { screen: ExamplePage },
  },
  {
    initialRouteName: 'Home',
    headerMode: 'float',
    transitionConfig,
  }
);

const App = createAppContainer(MainNavigator);

export default App;
