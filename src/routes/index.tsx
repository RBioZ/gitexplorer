import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import MainScreen from '../screens/Main';
import ProfileScreen from '../screens/Profile';

const Stack = createStackNavigator();

const AppRoutes: React.FC = () => (
	<NavigationContainer>
		<Stack.Navigator
			screenOptions={{ headerShown: false }}
		>
			<Stack.Screen name="Home" component={MainScreen} />
			<Stack.Screen name="Profile" component={ProfileScreen} />
		</Stack.Navigator>
	</NavigationContainer>
);

export default AppRoutes;
