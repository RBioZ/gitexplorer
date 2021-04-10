import styled from 'styled-components/native';
import {StyleSheet} from 'react-native';
import Constants from 'expo-constants';

export const Container = styled.View`
	background: #fff;
`;

export const DataContainer = styled.View`
	padding: 0 20px;
	padding-bottom: 20px;
	border-bottom-width: ${StyleSheet.hairlineWidth}px;
	margin-bottom: 10px;
`;

export const DataHeader = styled.View`
	flex-direction: row;
`;

export const DataItem = styled.View`
	flex: 1;
	align-items: center;
	justify-content: center;
`;

export const DataKey = styled.Text``;

export const DataValue = styled.Text`
	font-weight: bold;
`;

export const Avatar = styled.Image`
	height: 70px;
	width: 70px;
	background-color: #ccc;
`;

export const Login = styled.Text`
	margin-left: 5px;
	color: #51398e;
`;

export const Name = styled.Text`
	font-weight: bold;
	font-size: 18px;
`;

export const Bio = styled.Text`

`;

export const NameContainer = styled.View`
	flex-direction: row;
	align-items: center;
	margin: 5px 0;
`;

export const Back = styled.TouchableOpacity`
	position: absolute;
	left: 15px;
	height: 50px;
	width: 50px;
	justify-content: center;
`;

export const Header = styled.View`
	margin-top: ${Constants.statusBarHeight}px;
	height: 50px;
	align-items: center;
	justify-content: center;
	background-color: #fff;
`;

export const Title = styled.Text`
	font-size: 20px;
	font-weight: bold;
`;
