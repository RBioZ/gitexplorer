import React, { useEffect } from 'react';
import { FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Repository from '../../components/Repository';
import * as S from './styles';

const Profile: React.FC = () => {
	return(
	<>
		<S.Header>
			<S.Back>
				<Ionicons name="arrow-back" size={30} color="black" />
			</S.Back>
			<S.Title>Perfil</S.Title>
		</S.Header>
		<S.Container>
			<FlatList
			data={[1,2,3,4,5,6]}
			renderItem={() => <Repository />}
			ListHeaderComponent={() => (
				<S.DataContainer>
				<S.DataHeader>
					<S.Avatar source={{uri: 'https://avatars.githubusercontent.com/u/35699301?v=4'}} />
					<S.DataItem>
						<S.DataValue>453</S.DataValue>
						<S.DataKey>Repos</S.DataKey>
					</S.DataItem>
					<S.DataItem>
						<S.DataValue>453</S.DataValue>
						<S.DataKey>Seguindo</S.DataKey>
					</S.DataItem>
					<S.DataItem>
						<S.DataValue>453</S.DataValue>
						<S.DataKey>Seguidores</S.DataKey>
					</S.DataItem>
				</S.DataHeader>
				<S.NameContainer>
					<S.Name>Jonatha Rihan</S.Name>
					<S.Login>@RBioZ</S.Login>
				</S.NameContainer>
				<S.Bio>
					Working in the @npm cli team @github • Immigrant to beautiful Canada 🇨🇦 Node.js collaborator • JavaScript • UI/UX • CLI
				</S.Bio>
			</S.DataContainer>
			)}
			/>

		</S.Container>
	</>
	)
}

export default Profile;
