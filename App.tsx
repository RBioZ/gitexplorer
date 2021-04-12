import React from 'react';
import { StatusBar } from 'expo-status-bar';
import Routes from './src/routes'
import { PaymentProvider } from './src/hooks/recents';

export default function App() {
  return (
		<PaymentProvider>
			<StatusBar style="light" backgroundColor="#51398e" translucent />
			<Routes />
		</PaymentProvider>
	)
}
