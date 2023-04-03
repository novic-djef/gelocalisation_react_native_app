/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import Welcome from './screens/Auth/welcome';
import HomeScreen from './screens/Auth/HomeScreen';
import Tabs from "./screens/tabs/Tabs"

import {createNativeStackNavigator} from '@react-navigation/native-stack';
//import Notifications from './screens/tabs/profile/notifications';
import Inscription from './screens/Auth/Inscription';

const Stack = createNativeStackNavigator();


const App = () => {
  return (
      <NavigationContainer>
      <Stack.Navigator
       screenOptions={{headerShown: false}}
      >
        <Stack.Screen name="Home" component={Welcome} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="Inscription" component={Inscription} />
        <Stack.Screen name="index" component={Tabs} />
        {/* <Stack.Screen name="Notifications" component={Notifications} /> */}


      </Stack.Navigator>
    </NavigationContainer>
  );
};

 

// const HomeScreen = ({navigation}) => {
//   return (
//     <Button
//       title="Go to Jane's profile"
//       onPress={() =>
//         navigation.navigate('Profile', {name: 'Jane'})
//       }
//     />
//   );
// };
// const ProfileScreen = ({navigation, route}) => {
//   return <Text>This is {route.params.name}'s profile</Text>;
// };

export default App;