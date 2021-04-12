import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler'
import Constants from 'expo-constants';

export const Container = styled(RectButton)`
	min-height: 100px;
	margin-bottom: 10px;
	padding: 10px 20px;
	background-color: #fff;

`;

export const Title = styled.Text`
	font-weight: bold;
	font-size: 16px;
	color: #51398e;
`;

export const Description = styled.Text``;

export const BottomContainer = styled.View`
	flex-direction: row;
	margin-top: auto;
	margin-bottom: 5px;
`;

export const Lenguage = styled.Text`
	color: #555;
`;

export const ItemContainer = styled.View`
	flex-direction: row;
	margin-left: 10px;
`;

export const ItemValue = styled.Text`
	margin-left: 3px;
	color: #555;
`;
