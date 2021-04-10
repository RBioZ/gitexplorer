import React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import * as S from './styles';

interface IRepository {
	title: string;
	description: string;
	language: string;
	fork_count: number;
	stars_count: number;
}

const Repository: React.FC<IRepository> = ({title, description, stars_count, fork_count, language}) => {
	return (
		<S.Container>
			<S.Title>{title}</S.Title>
			<S.Description>{description}</S.Description>
			<S.BottomContainer>
				<S.Lenguage>{language}</S.Lenguage>
				<S.ItemContainer>
					<FontAwesome name="code-fork" size={18} color="black" />
					<S.ItemValue>{fork_count}</S.ItemValue>
				</S.ItemContainer>
				<S.ItemContainer>
					<FontAwesome name="star-o" size={18} color="black" />
					<S.ItemValue>{stars_count}</S.ItemValue>
				</S.ItemContainer>
			</S.BottomContainer>
		</S.Container>
	)
}

export default Repository;
