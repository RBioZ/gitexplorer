import React from 'react';
import { Feather } from '@expo/vector-icons';

import * as S from './styles';

const Main: React.FC = () => (
	<S.Container>
		<S.Header>
			<S.Input />
			<S.Button>
				<Feather name="search" size={30} color="#51398e" />
			</S.Button>
		</S.Header>
	</S.Container>
)

export default Main;
