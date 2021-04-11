import React from 'react';
import Routes from './src/routes'
import {PaymentProvider} from './src/hooks/recents';

export default function App() {
  return (
		<PaymentProvider>
			<Routes />
		</PaymentProvider>
	)
}

//#51398e Lilás
//#36bfb3 Azul
