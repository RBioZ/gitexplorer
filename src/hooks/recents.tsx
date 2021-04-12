import React, { createContext, useCallback, useContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-community/async-storage';

interface IUser {
	id: string;
	login: string;
	avatar_url: string;
}

interface RecentContextData {
	users: IUser[];
	addUser(user: IUser):void;
}

const RecentsContext = createContext<RecentContextData>({} as RecentContextData);

export const PaymentProvider: React.FC = ({ children }) => {

	const [users, setUsers] = useState<IUser[]>([])

	const addUser = useCallback(async(user: IUser) => {
		if(users.length >= 10){
			let tmp = users;
			tmp.pop();
			setUsers(tmp);
		}
		setUsers(prev => [user,...prev]);
		await AsyncStorage.setItem('@gitsearch/recents', JSON.stringify([user,...users]));
	}, [users, setUsers])

	useEffect(() => {

		const loadRecents = async() => {
			const recents = await AsyncStorage.getItem('@gitsearch/recents');
			setUsers(JSON.parse(String(recents)));
		}

		loadRecents();

	} ,[])

  return (
		<RecentsContext.Provider value={{users, addUser}}>
			{children}
		</RecentsContext.Provider>
  )
}

export function useRecents(): RecentContextData {
  const context = useContext(RecentsContext);

  if (!context) throw new Error('useRecents must be used within an AuthProvider');

  return context;
}
