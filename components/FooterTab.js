import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import PropTypes from 'prop-types';

const FooterTab = ({title, count}) => (
        <View style={styles.footerTabs}>
            <Text style={styles.tabText}>{title}</Text>
            <Text style={styles.tabText}>{count}</Text>
        </View>
        );

const styles = StyleSheet.create({
    footerTabs: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    tabText: {
        fontSize: 20,
        color: '#ffe066',
        fontFamily: 'Avenir-Black'
    }
});

FooterTab.propTypes = {
    title: PropTypes.string.isRequired,
    count: PropTypes.number
}

FooterTab.defaultProps = {
    title: 'Default'
}

export default FooterTab;