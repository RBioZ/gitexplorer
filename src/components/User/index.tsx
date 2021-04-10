import React from 'react';
import * as S from './styles';

interface IUser {
	id: string;
	login: string;
	avatar_url: string;
}

const User: React.FC<IUser> = ({id, avatar_url, login}) => {
	return (
		<S.Container>
			<S.Image source={{uri: avatar_url}} />
			<S.Right>
				<S.Title>{login}</S.Title>
				<S.Code>ID: {id}</S.Code>
			</S.Right>
		</S.Container>
	)
}

export default User;
