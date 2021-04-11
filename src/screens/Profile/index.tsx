import React, { useEffect, useCallback, useState } from 'react';
import { FlatList, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Repository from '../../components/Repository';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import api from '../../services/api';
import {IUser, IRepository} from './types';

import * as S from './styles';

const Profile: React.FC = () => {

	const [user, setUser] = useState<IUser>();
	const [repositories, setRepositories] = useState<IRepository[]>();
	const navigation = useNavigation();
	const route = useRoute<
  	RouteProp<{ params: { login: string } }, 'params'>
	>();

	const handleLoadUser = useCallback(async() => {
		try{
			const response = await api.get(`/users/${route.params.login}`)
			setUser(response.data);
		}
		catch(error){
			Alert.alert('Error')
		}
	}, [route.params.login])

	const handleLoadRepositories = useCallback(async() => {
		try{
			const response = await api.get(`/users/${route.params.login}/repos`)
			setRepositories(response.data);
		}
		catch(error){
			Alert.alert('Error')
		}
	}, [route.params.login])

	useEffect(() => {
		handleLoadUser();
		handleLoadRepositories();
	}, [])

	return(
	<>
		<S.Header>
			<S.Back onPress={() => navigation.goBack()}>
				<Ionicons name="arrow-back" size={30} color="black" />
			</S.Back>
			<S.Title>Perfil</S.Title>
		</S.Header>
		<S.Container>
			<FlatList
			keyExtractor={(item) => String(item.id)}
			data={repositories}
			renderItem={({item}) => <Repository
				onPress={() => navigation.navigate('WebView', {url: 'https://www.google.com'})}
				title={item.name}
				description={item.description}
				fork_count={item.forks_count}
				stars_count={item.stargazers_count}
				language={item.language}
			/>}
			ListHeaderComponent={() => (
				<S.DataContainer>
				<S.DataHeader>
					<S.Avatar source={{uri: user?.avatar_url}} />
					<S.DataItem>
						<S.DataValue>{user?.public_repos}</S.DataValue>
						<S.DataKey>Repos</S.DataKey>
					</S.DataItem>
					<S.DataItem>
						<S.DataValue>{user?.following}</S.DataValue>
						<S.DataKey>Seguindo</S.DataKey>
					</S.DataItem>
					<S.DataItem>
						<S.DataValue>{user?.followers}</S.DataValue>
						<S.DataKey>Seguidores</S.DataKey>
					</S.DataItem>
				</S.DataHeader>
				<S.NameContainer>
					<S.Name>{user?.name}</S.Name>
					<S.Login>@{user?.login}</S.Login>
				</S.NameContainer>
				<S.Bio>
					{user?.bio}
				</S.Bio>
			</S.DataContainer>
			)}
			/>

		</S.Container>
	</>
	)
}

export default Profile;
