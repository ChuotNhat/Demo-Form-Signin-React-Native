/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from 'react';
import { 
	StyleSheet, 
	Text, 
	View, 
	Alert, 
	Image, 
	TextInput,
	TouchableHighlight,
	StatusBar,
	Dimensions
 } from 'react-native';

const iconBack = require('./src/images/left-arrow.png');
const iconLogo = require('./src/images/piggy-bank.png');
const iconUser = require('./src/images/user.png');
const iconPass = require('./src/images/lock.png');

const width = Dimensions.get('window').width; //full width
const height = Dimensions.get('window').height; //full height

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = { textUser: '', textPass: '' };
	}

	_onPressButton() {
		Alert.alert('You tapped the button!')
	}
	render() {
		return (
			<View style={styles.container}>
				<StatusBar backgroundColor="#a8e9f4" barStyle="default" />
				<View>
					<Image source={iconBack} style={styles.iconBack}/>
				</View>

				<View style={styles.logo}>
					<Image source={iconLogo} style={styles.iconLogo}/>
					<Text style={styles.textLogo}>MANAGE MONEY</Text>
				</View>

				<Text style={styles.textSignin}>SIGNIN</Text>

				<View style={styles.boxForm}>
					<View style={styles.wrapContent}>
						<Image source={iconUser} style={styles.iconForm}/>
						<TextInput
							style={styles.boxInput}
							onChangeText={(textUser) => this.setState({textUser})}
							value={this.state.textUser}
							placeholder="Username"
						/>
					</View>
					
					<View style={styles.wrapContent}>
						<Image source={iconPass} style={styles.iconForm}/>
						<TextInput
							style={styles.boxInput}
							onChangeText={(textPass) => this.setState({textPass})}
							value={this.state.textPass}
							placeholder="Password"
							secureTextEntry 
							keyboardType="default"
						/>
					</View>
					<TouchableHighlight
						style={styles.buttonGo}
						onPress={this._onPressButton}
						underlayColor="transparent"
						>
						<Text style={styles.submit}> GO! </Text>
					</TouchableHighlight>
					<View style={styles.wrapSocial}>
						<TouchableHighlight
							style={styles.buttonSocial}
							onPress={this._onPressButton}
							underlayColor="transparent"
							>
							<Text style={[styles.textCenter, styles.colorWhite, styles.textBold]}> FACEBOOK </Text>
						</TouchableHighlight>
						<Text style={[styles.textCenter, styles.colorWhite]}> or </Text>
						<TouchableHighlight
							style={styles.buttonSocial}
							onPress={this._onPressButton}
							underlayColor="transparent"
							>
							<Text style={[styles.textCenter, styles.colorWhite, styles.textBold]}> GOOGLE </Text>
						</TouchableHighlight>
					</View>
				</View>
				
				<View style={styles.wrapTextLast}>
					<Text style={styles.textRight}>Don't have an account? <Text style={styles.textLink}>Signup here</Text></Text>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#a8e9f4',
		paddingHorizontal: 20,
	},

	iconBack: {
		width: 10,
		height: 20,
		marginTop: 5,
	},

	logo: {
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 10
	},

	iconLogo: {
		width: 150,
		height: 150
	},

	textLogo: {
		color: '#fff',
		fontWeight: 'bold',
		position: 'absolute',
		paddingRight: 18
	},

	textSignin: {
		textAlign: 'center',
		fontSize: 20,
		color: '#000',
		paddingVertical: 30
	},

	boxForm: {
	},

	iconForm: {
		width: 20,
		height: 20,
		position: 'absolute',
		zIndex: 1,
		top: 10,
		left: 15
	},

	wrapContent: {
		position: 'relative'
	},

	boxInput: {
		height: 40,
		backgroundColor: '#fff',
		marginBottom: 15,
		borderRadius: 5,
		paddingLeft: 50

	},

	buttonGo: {
		backgroundColor: '#f67a56',
		paddingVertical: 10,
		marginVertical: 15,
		borderRadius: 5
	},

	submit: {
		color: '#fff',
		textAlign: 'center'
	},

	wrapSocial: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginTop: 15
	},

	buttonSocial: {
		padding: 5,
		borderWidth: 3,
		borderColor: '#fff',
		borderRadius: 10,
		width: (width + 60)/3,
	},

	textCenter: {
		textAlign: 'center'
	},

	colorWhite: {
		color: '#fff'
	},

	textBold: {
		fontWeight: 'bold'
	},

	wrapTextLast: {
		marginTop: 40
	},

	textRight: {
		textAlign: 'right'
	},

	textLink: {
		color: '#f67a56'
	}
});
