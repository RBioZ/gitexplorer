import React from 'react';
import * as S from './styles';
import { WebView } from 'react-native-webview';
import { useNavigation, RouteProp, useRoute } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const Web: React.FC = () => {

	const navigation = useNavigation();
  const route = useRoute<
    RouteProp<
      {
        params: {
          url: string;
        };
      },
      'params'
    >
  >();

  return (
		<>
		<S.Header>
			<S.Back onPress={() => navigation.goBack()}>
				<Ionicons name="arrow-back" size={30} color="black" />
			</S.Back>
			<S.Title>Repositório</S.Title>
		</S.Header>
    <WebView source={{ uri: route.params.url }} />
		</>
  );
};

export default Web;
