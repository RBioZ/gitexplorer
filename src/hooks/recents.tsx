import React, { createContext, useCallback, useContext, useState } from 'react';

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

	const addUser = (user: IUser) => {
		setUsers(prev => [...prev, user])
	}

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
