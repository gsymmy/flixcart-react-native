import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

export default class FooterTab extends React.Component {
    render() {
        return (
        <View style={styles.footerTabs}>
            <Text style={styles.tabText}>{this.props.title}</Text>
            <Text style={styles.tabText}>{this.props.count}</Text>
        </View>
        );
    }
}

const styles = StyleSheet.create({
    footerTabs: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    tabText: {
        fontSize: 20,
        color: '#ECE948',
        fontFamily: 'Avenir-Black'
    }



});