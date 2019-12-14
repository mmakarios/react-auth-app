import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import transitionConfig from  '../utils/transitionConfig';
import HomePage from '../components/HomePage';
import ExamplePage from '../components/ExamplePage';

const MainNavigator = createStackNavigator(
  {
    Home: {screen: HomePage},
    Example: {screen: ExamplePage},
  },
  {
    initialRouteName: 'Home',
    headerMode: 'none',
    transitionConfig
  }
);

const App = createAppContainer(MainNavigator);

export default App;
