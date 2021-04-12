import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler'
import Constants from 'expo-constants';

export const Container = styled(RectButton)`
	margin-bottom: 5px;
	background: #fff;
	height: 100px;
	flex-direction: row;
	padding: 10px 10px;
`;

export const Right = styled.View`
	margin-left: 10px;
`;

export const Image = styled.Image`
	width: 80px;
	height: 80px;
	border-radius: 5px;
`;

export const Title = styled.Text`
	font-size: 20px;
	color: #51398e;
`;

export const Code = styled.Text`
	color: #888;
`;
