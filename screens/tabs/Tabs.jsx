import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Wallet from './Wallet.jsx/Wallet';
import Profile from './profile/Profile';
//import { View, Text, TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from './maps/Home';


const Tab = createBottomTabNavigator();

export default function Tabs() {
  
      return (
        <Tab.Navigator
        screenOptions={{
            headerShown: false,
        tabBarActiveTintColor: '#e91e63',
    }}
        >
         
          <Tab.Screen            
          name="Home" 
          component={Home} 
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />
            ),
            // tabBarBadge: 3,
          }}
          />
         
          <Tab.Screen 
          name="Wallet"
          component={Wallet} 
          options={{
            tabBarLabel: 'Wallet',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="wallet" color={color} size={size} />
            ),
            tabBarBadge: 3,
          }}
          
          />
          <Tab.Screen 
          name="Profile" 
          component={Profile} 
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="account-cog" color={color} size={size} />
            ),
          }}
         />
          
        </Tab.Navigator>
      );
//    return (
//         <View style={{ flexDirection: 'row' }}>
//           {state.routes.map((route, index) => {
//             const { options } = descriptors[route.key];
//             const label =
//               options.tabBarLabel !== undefined
//                 ? options.tabBarLabel
//                 : options.title !== undefined
//                 ? options.title
//                 : route.name;
    
//             const isFocused = state.index === index;
    
//             const onPress = () => {
//               const event = navigation.emit({
//                 type: 'tabPress',
//                 target: route.key,
//                 canPreventDefault: true,
//               });
    
//               if (!isFocused && !event.defaultPrevented) {
//                 // The `merge: true` option makes sure that the params inside the tab screen are preserved
//                 navigation.navigate({ name: route.name, merge: true });
//               }
//             };
    
//             const onLongPress = () => {
//               navigation.emit({
//                 type: 'tabLongPress',
//                 target: route.key,
//               });
//             };
    
//             return (
//               <TouchableOpacity
//                 accessibilityRole="button"
//                 accessibilityState={isFocused ? { selected: true } : {}}
//                 accessibilityLabel={options.tabBarAccessibilityLabel}
//                 testID={options.tabBarTestID}
//                 onPress={onPress}
//                 onLongPress={onLongPress}
//                 style={{ flex: 1 }}
//               >
//                 <Text style={{ color: isFocused ? '#673ab7' : '#222' }}>
//                   {label}
//                 </Text>
//               </TouchableOpacity>
//             );
//           })}
//         </View>
//      );
    }