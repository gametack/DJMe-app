import { createAppContainer, createStackNavigator } from 'react-navigation';
import Home from '../screens/Home';
import CreateParty from '../screens/CreateParty';

const RootStack = createStackNavigator({
  Home: { screen: Home },
  CreateParty: { screen: CreateParty},
});

const AppNavigator = createAppContainer(RootStack);
export default AppNavigator;