import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { FlatList } from 'react-native';
import { Feather, MaterialIcons } from '@expo/vector-icons';
import { useForm } from 'react-hook-form';
import api from '../../services/api'
import User from '../../components/User'
import * as S from './styles';

interface IUser {
	id: string;
	login: string;
	avatar_url: string;
}

const Main: React.FC = () => {

	const [users, setUsers] = useState<IUser[]>();
	const {register, handleSubmit, setValue} = useForm();
	const navigation = useNavigation();

	const handleSubmitSearch = async(data: any) => {
		try {
			const response = await api.get(`/search/users?q=${data.query}`)
			setUsers(response.data.items)
			// console.log(response.data)
		}
		catch(error){
			console.log(error)
		}
	}

	useEffect(() => {
    register('query');
  }, [register]);

	return (
		<S.Container>
			<S.Header>
				<S.Input onChangeText={text => {setValue('query', text)}} placeholder={'Procure um usuário, ex. RBioZ'} />
				<S.Button onPress={handleSubmit(handleSubmitSearch)}>
					<Feather name="search" size={30} color="#51398e" />
				</S.Button>

			</S.Header>
			<S.RecentsLink onPress={() => navigation.navigate('Recents')}>
				<S.Recent>Recentes</S.Recent>
				<MaterialIcons name="keyboard-arrow-right" size={24} color="#51398e" />
			</S.RecentsLink>
			<FlatList
				style={{marginTop: 0, marginBottom: 100}}
				keyExtractor={(item) => String(item.id)}
				data={users}
				renderItem={({item}) =>
					<User
						id={item.id}
						login={item.login}
						avatar_url={item.avatar_url}
						navigate={() => navigation.navigate('Profile', {login: item.login})}
					/>}
			/>
		</S.Container>
	)
}

export default Main;
