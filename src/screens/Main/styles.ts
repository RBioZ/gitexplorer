import styled from 'styled-components/native';
import Constants from 'expo-constants';

export const Container = styled.View`
	flex: 1;
	margin: 0 20px;
	margin-top: ${ Constants.statusBarHeight}px;
	background: #f0f0f5;
	padding-bottom: 5px;
`;

export const Header = styled.View`
	height: 50px;
	flex-direction: row;
	margin-top: 10px;
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
	background-color: #51398e;
	padding: 8px;
	border-radius: 5px;
`;

export const Recent = styled.Text`
	text-decoration: underline;
	font-weight: bold;
	color: #FFF;
`;

export const Logo = styled.Image`
	width: 200px;
	max-height: 50px;
`;

export const LogoContainer = styled.View`
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	margin-top: 20px;
`;

export const LoadingContainer = styled.View`
	background-color: rgba(0,0,0,0.5);
	flex: 1;
	align-items: center;
	justify-content: center;
`;
