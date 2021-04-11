import styled from 'styled-components/native';
import Constants from 'expo-constants';

export const Container = styled.View`
	margin: 0 20px;
	margin-top: ${ 20 + Constants.statusBarHeight}px;
	background: #f0f0f5;
`;

export const Header = styled.View`
	height: 50px;
	flex-direction: row;
`;

export const Input = styled.TextInput`
	flex: 1;
	border: 1px solid #fff;
	margin-right: 10px;
	border-radius: 5px;
	background-color: #fff;
	font-size: 18px;
	padding-left: 15px;
`;

export const Button = styled.TouchableOpacity`
	background: #fff;
	width: 50px;
	border-radius: 25px;

	align-items: center;
	justify-content: center;
`;

export const RecentsLink = styled.TouchableOpacity`
	margin: 5px 0;
	flex-direction: row;
`;

export const Recent = styled.Text`
	text-decoration: underline;
	font-weight: bold;
	color: #51398e;
`;


