import { createAppContainer, createStackNavigator } from 'react-navigation';
import Home from '../screens/Home';
import CreateParty from '../screens/CreateParty';
import Room from '../screens/Room';

const RootStack = createStackNavigator({
  Home: { screen: Home },
  CreateParty: { screen: CreateParty},
  Room: { screen: Room}
});

const AppNavigator = createAppContainer(RootStack);
export default AppNavigator;