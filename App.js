import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from 'react-native';
import FooterTab from './components/FooterTab'

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      totalCount: 1,
      watchingCount: 4,
      watchedCount: 3,
    };
  }
  render() {
  return (
    <View style={styles.appBody}>
    <SafeAreaView style={{backgroundColor: '#2974F0'}} />
      <View style={styles.header}>
        <Text style={styles.headerText}>FlixCart</Text>
      </View>
      <View style={styles.mainBody}>
      <TouchableOpacity style={{position: 'absolute', right: 20, bottom: 20}}>
        <View style={styles.roundButton}>
          <Text style={{color:'white', fontSize: 30}}>+</Text>
        </View>
        </TouchableOpacity>
      </View>
      <View style={styles.footer}>
        <FooterTab title='Total' count={this.state.totalCount}/>
        <FooterTab title='Watching' count={this.state.watchingCount} />
        <FooterTab title='Watched' count={this.state.watchedCount} />
      </View>
    <SafeAreaView style={{backgroundColor: '#2974F0'}} />
    </View>
  );
  }
}

const styles = StyleSheet.create({
  appBody: {
    flex: 1,
  },
  header: {
    height: 50,
    backgroundColor: '#2974F0',
    alignItems: 'center',
    justifyContent: 'center'
  },
  headerText : {
    fontSize: 25,
    fontFamily: 'Avenir-Black',
    color: '#ECE948'
  },
  mainBody: {
    flex: 1,
    backgroundColor: '#151414'
  },
  footer: {
    height: 70,
    backgroundColor: '#2974F0',
    flexDirection: 'row'
  },
  roundButton: {
    height: 50,
    width: 50,
    backgroundColor: 'red',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
