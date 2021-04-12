import styled from 'styled-components/native';
import {StyleSheet} from 'react-native';
import Constants from 'expo-constants';

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
	background-color: #51398e;
`;

export const Title = styled.Text`
	font-size: 20px;
	font-weight: bold;
	color: #fff;
`;
