import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { FlatList, Modal, ActivityIndicator } from 'react-native';
import { Feather, MaterialIcons } from '@expo/vector-icons';
import { useForm } from 'react-hook-form';
import { useRecents } from '../../hooks/recents';
import api from '../../services/api'
import User from '../../components/User'
import logo from '../../assets/logo.png';
import * as S from './styles';

interface IUser {
	id: string;
	login: string;
	avatar_url: string;
}

const Main: React.FC = () => {

	const [users, setUsers] = useState<IUser[]>();
	const [loading, setIsLoading] = useState(false);
	const {register, handleSubmit, setValue} = useForm();
	const { addUser } = useRecents();
	const navigation = useNavigation();

	const handleSubmitSearch = async(data: any) => {
		setIsLoading(true);
		try {
			const response = await api.get(`/search/users?q=${data.query}`)
			setUsers(response.data.items)
			// console.log(response.data)
		}
		catch(error){
			console.log(error)
		}
		setIsLoading(false);
	}

	useEffect(() => {
    register('query');
  }, [register]);

	return (
		<>
		<Modal visible={loading} transparent animationType="fade">
			<S.LoadingContainer>
				<ActivityIndicator animating={loading} size="large" color="#FFF" />
			</S.LoadingContainer>
		</Modal>
		<S.Container>

			<S.LogoContainer>
				<S.Logo resizeMode="contain" source={logo} />

				<S.RecentsLink onPress={() => navigation.navigate('Recents')}>
					<S.Recent>Histórico</S.Recent>
					<MaterialIcons name="keyboard-arrow-right" size={24} color="#FFF" />
				</S.RecentsLink>
			</S.LogoContainer>


			<S.Header>
				<S.Input onChangeText={text => {setValue('query', text)}} placeholder={'Procure um usuário, ex. RBioZ'} />
				<S.Button onPress={handleSubmit(handleSubmitSearch)}>
					<Feather name="search" size={30} color="#51398e" />
				</S.Button>
			</S.Header>


			<FlatList
				showsVerticalScrollIndicator={false}
				style={{marginTop: 20, }}
				keyExtractor={(item) => String(item.id)}
				data={users}
				renderItem={({item}) =>
					<User
						id={item.id}
						login={item.login}
						avatar_url={item.avatar_url}
						navigate={() => {
							navigation.navigate('Profile', {login: item.login});
							addUser(item);
						}}
					/>}
			/>
		</S.Container>
		</>
	)
}

export default Main;
