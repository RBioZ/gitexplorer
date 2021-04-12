import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useRecents } from '../../hooks/recents';
import * as S from './styles';
import { FlatList } from 'react-native-gesture-handler';
import User from '../../components/User';

const Recents: React.FC = () => {
	const navigation = useNavigation();
	const {users} = useRecents();

	return(
		<>
		<S.Header>
			<S.Back onPress={() => navigation.goBack()}>
				<Ionicons name="arrow-back" size={30} color="white" />
			</S.Back>
			<S.Title>Histórico</S.Title>
		</S.Header>
		<FlatList
				style={{marginTop: 10, paddingLeft: 20, paddingRight: 20}}
				keyExtractor={(item, index) => String(index)}
				data={users}
				renderItem={({item}) =>
					<User
						id={item.id}
						login={item.login}
						avatar_url={item.avatar_url}
						navigate={() => navigation.navigate('Profile', {login: item.login})}
					/>}
		/>
		</>
	)
}

export default Recents;
