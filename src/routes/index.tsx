import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import MainScreen from '../screens/Main';
import ProfileScreen from '../screens/Profile';
import WebViewScreen from '../screens/WebView';

const Stack = createStackNavigator();

const AppRoutes: React.FC = () => (
	<NavigationContainer>
		<Stack.Navigator
			initialRouteName="Home"
			screenOptions={{ headerShown: false }}
		>
			<Stack.Screen name="Home" component={MainScreen} />
			<Stack.Screen name="Profile" component={ProfileScreen} />
			<Stack.Screen name="WebView" component={WebViewScreen} />
		</Stack.Navigator>
	</NavigationContainer>
);

export default AppRoutes;
