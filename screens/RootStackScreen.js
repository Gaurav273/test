import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';


import SignUpScreen from './SignUpScreen';
import DetailsScreen from './DetailsScreen';

const RootStack = createStackNavigator();

const RootStackScreen = ({navigation}) => (
    <RootStack.Navigator headerMode='none'>
      <RootStack.Screen name="SignUpScreen" component={SignUpScreen}/>
        <RootStack.Screen name="DetailsScreen" component={DetailsScreen}/>
    </RootStack.Navigator>
);

export default RootStackScreen;