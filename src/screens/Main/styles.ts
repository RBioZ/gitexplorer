import styled from 'styled-components/native';
import Constants from 'expo-constants';

export const Container = styled.View`
	margin-top: ${Constants.statusBarHeight}px;
	background: #f0f0f5;
`;

export const Header = styled.View`
	height: 50px;
	flex-direction: row;
	margin: 0 20px;
`;

export const Input = styled.TextInput`
	flex: 1;
	border: 1px solid #fff;
	margin-right: 10px;
	border-radius: 5px;
	background-color: #fff;
`;

export const Button = styled.TouchableOpacity`
	background: #fff;
	width: 50px;
	border-radius: 25px;

	align-items: center;
	justify-content: center;
`;

