import 'react-native-gesture-handler';
import * as React from 'react';

import { Button } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import LoadingScreen from './src/screens/loading';
import Home from './src/screens/home';
import Chat from './src/screens/chat';
import SearchResources from './src/screens/resources-search';
import AddResource from './src/screens/resource-add';
import EditResource from './src/screens/resource-edit';
import MyResources from './src/screens/resources-my';
import Map from './src/screens/map';
import Login from './src/screens/login';
import Register from './src/screens/register';
import Checkin from './src/screens/checkin';
import Checkout from './src/screens/checkout'

import { HomeIcon, DonateIcon, SearchIcon, MapIcon } from './src/images/svg-icons';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const ResourcesStackOptions = ({ navigation }) => {
  return ({
    headerRight: () => (
      <Button
        onPress={() => navigation.navigate('Chat')}
        title='Chat '
      />
    )
  });
};

const DonationsStackOptions = ({ navigation }) => {
  return ({
    headerRight: () => (
      <Button
        onPress={() => navigation.navigate('Add Donation')}
        title='Add '
      />
    )
  });
};

const tabBarOptions = {
  // showLabel: false,
  activeTintColor: '#1062FE',
  inactiveTintColor: '#000',
  style: {
    backgroundColor: '#F1F0EE',
    paddingTop: 5
  }
};

const TabLayout = () => (
  <Tab.Navigator
    style={{paddingTop: 50}}
    initialRouteName='Home'
    tabBarOptions={tabBarOptions} >
    <Tab.Screen
      name='Home'
      component={HomeStackLayout}
      options={{
        tabBarIcon: ({color}) => (<HomeIcon fill={color}/>)
      }}
    />
    {/* <Tab.Screen
      name='List'
      component={DonateStackLayout}
      options={{
        tabBarIcon: ({color}) => (<DonateIcon fill={color} />)
      }}
    /> */}
    <Tab.Screen
      name='Map'
      component={MapStackLayout}
      options={{
        tabBarIcon: ({color}) => (<MapIcon fill={color} />)
      }}
    />
    <Tab.Screen
      name='Search'
      component={SearchStackLayout}
      options={{
        tabBarIcon: ({color}) => (<SearchIcon fill={color} />)
      }}
    />
  </Tab.Navigator>
);

const HomeStackLayout = () => (
  <Stack.Navigator>
  <Stack.Screen name='Home' component={Home} />
    <Stack.Screen name='Login' component={Login} />
    <Stack.Screen name='Register' component={Register} />
    <Stack.Screen name='Checkin' component={Checkin} />
    <Stack.Screen name='Checkout' component={Checkout} />
  </Stack.Navigator>
);

const DonateStackLayout = () => (
  <Stack.Navigator>
  <Stack.Screen name='My List' component={MyResources} options={DonationsStackOptions} />
    <Stack.Screen name='Add Donation' component={AddResource} />
    <Stack.Screen name='Edit List' component={EditResource} />
  </Stack.Navigator>
);

const MapStackLayout = () => (
  <Stack.Navigator>
  <Stack.Screen name='Map' component={Map} />
    <Stack.Screen name='Search Near me' component={Map} />
  </Stack.Navigator>
);

const SearchStackLayout = () => (
  <Stack.Navigator>
    <Stack.Screen name='Search Resources' component={SearchResources} options={ResourcesStackOptions} />
    <Stack.Screen name='Chat' component={Chat} />
    <Stack.Screen name='Map' component={Map} />
  </Stack.Navigator>
);

const App = () => {
  const [isLoading, setIsLoading] = React.useState(true);


  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, []);

  if (isLoading) {
    return (<LoadingScreen />);
  } else {
    return (
      <NavigationContainer>
        <TabLayout/>
      </NavigationContainer>
    );
  }
};

export default App;
