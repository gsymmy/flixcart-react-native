import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import ActionButton from '../../components/ActionButton';
export default class Login extends React.Component {
    render() {
        return(
            <View style={{flex:1, backgroundColor: '#247ba0'}}>
                <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
                <Image source={require('../../images/flixcart.png')} style={{height: 250, width: 250}} />               
                </View>
                <View style={{flex:1, alignItems: 'center'}}>
                    <ActionButton style={styles.buttonStyle} onPress={() => this.props.navigation.navigate('Home')}>
                        <Text style={styles.buttonText}>Log In</Text>
                    </ActionButton>
                    <ActionButton style={styles.buttonStyle} onPress={() => this.props.navigation.navigate('SignUp')}>
                        <Text style={styles.buttonText}>Sign Up</Text>
                    </ActionButton>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    buttonText: {
        color: '#ffe066',
        fontFamily: 'Avenir',
        fontSize: 20
    },
    buttonStyle: {
        borderWidth: 0.5,
        height: 50,
        width: 200,
        marginBottom: 20,
        borderColor: 'white',
        borderRadius: 5
    }
});

