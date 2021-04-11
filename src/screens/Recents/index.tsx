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
				<Ionicons name="arrow-back" size={30} color="black" />
			</S.Back>
			<S.Title>Recents</S.Title>
		</S.Header>
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
		</>
	)
}

export default Recents;
