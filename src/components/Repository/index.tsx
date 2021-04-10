import React from 'react';
import { FontAwesome } from '@expo/vector-icons';

import * as S from './styles';

const Repositories: React.FC = () => {
	return (
		<S.Container>
			<S.Title>TESTE TESTE</S.Title>
			<S.Description>Uma descrição qualquer para esse repositório</S.Description>
			<S.BottomContainer>
				<S.Lenguage>Typescript</S.Lenguage>
				<S.ItemContainer>
					<FontAwesome name="code-fork" size={18} color="black" />
					<S.ItemValue>45</S.ItemValue>
				</S.ItemContainer>
				<S.ItemContainer>
					<FontAwesome name="star-o" size={18} color="black" />
					<S.ItemValue>45</S.ItemValue>
				</S.ItemContainer>
			</S.BottomContainer>
		</S.Container>
	)
}

export default Repositories;
