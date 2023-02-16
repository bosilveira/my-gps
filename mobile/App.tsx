import { NavigationContainer, Link } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import Header from './components/header';
import Home from './views/home';
import DisclaimerPage from './views/disclaimer';
import HelpPage from './views/help';
import LoginPage from './views/login';
import NetworkPage from './views/network';
import UsersPage from './views/users';
import UserPage from './views/user';
import AddUserPage from './views/addUser';
import OrdersPage from './views/orders';
import OrderPage from './views/order';
import AddOrderPage from './views/addOrder';
import PointsPage from './views/points';
import PointPage from './views/point';
import AddPointPage from './views/addPoint';
import RadarPage from './views/radar';

type RootStackParamList = {
  Home: undefined;
  Disclaimer: undefined,
  Help: undefined,
  Login: undefined,
  Users: undefined,
  User: undefined,
  AddUser: undefined,
  Points: undefined,
  Point: undefined,
  AddPoint: undefined,
  Orders: undefined,
  Order: undefined,
  AddOrder: undefined,
  Radar: undefined,
  Network: undefined,
  Profile: { userId: string };
  Feed: { sort: 'latest' | 'top' } | undefined;
};


const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Disclaimer" component={DisclaimerPage} options={{ headerShown: false }}/>
        <Stack.Screen name="Help" component={HelpPage} options={{ headerShown: false }}/>
        <Stack.Screen name="Login" component={LoginPage} options={{ headerShown: false }}/>
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }}/>
        <Stack.Screen name="Network" component={NetworkPage} options={{ headerShown: false }}/>
        <Stack.Screen name="Users" component={UsersPage} options={{ headerShown: false }}/>
        <Stack.Screen name="User" component={UserPage} options={{ headerShown: false }}/>
        <Stack.Screen name="AddUser" component={AddUserPage} options={{ headerShown: false }}/>
        <Stack.Screen name="Orders" component={OrdersPage} options={{ headerShown: false }}/>
        <Stack.Screen name="Order" component={OrderPage} options={{ headerShown: false }}/>
        <Stack.Screen name="AddOrder" component={AddOrderPage} options={{ headerShown: false }}/>
        <Stack.Screen name="Points" component={PointsPage} options={{ headerShown: false }}/>
        <Stack.Screen name="Point" component={PointPage} options={{ headerShown: false }}/>
        <Stack.Screen name="AddPoint" component={AddPointPage} options={{ headerShown: false }}/>
        <Stack.Screen name="Radar" component={RadarPage} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
