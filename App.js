import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  SafeAreaView, 
  TouchableOpacity, 
  TextInput } from 'react-native';

import {Ionicons} from '@expo/vector-icons';

import FooterTab from './components/FooterTab'

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      totalCount: 0,
      watchingCount: 0,
      watchedCount: 0,
      isNewShowAdderVisible: false,
      newShowText: "",
      shows:[]
    };
  }

  openShowAdder = () => {
    this.setState({isNewShowAdderVisible:true});
  };

  closeShowAdder = () => {
    this.setState({isNewShowAdderVisible:false});
  };

  addShow = show => {
    this.setState((state, props) => ({
      shows: [...state.shows, show]
    }), ()=> {
      console.log(this.state.shows);
    });
  };

  render() {
  return (
    <View style={styles.appBody}>
    <SafeAreaView style={{backgroundColor: '#2974F0'}} />
      <View style={styles.header}>
        <Text style={styles.headerText}>FlixCart</Text>
      </View>
      <View style={styles.mainBody}>
      <View style={{flex:1}}>
      {this.state.isNewShowAdderVisible && (
        <View style={{height:50, flexDirection: 'row'}}>
          <TextInput onChangeText={(text)=>this.setState({newShowText: text})} style={{flex:1, backgroundColor: '#FFFFFF', paddingLeft: 5}} placeholder="Enter a TV Show/Movie that you wish to watch" placeholderTextColor='grey' />
          <TouchableOpacity onPress={()=> this.addShow(this.newShowText)}>
            <View style={{width: 50, height:50, backgroundColor:'#a5deba', alignItems: 'center', justifyContent: 'center'}}>
              <Ionicons name='ios-checkmark' style={{fontSize: 40, color: 'white'}} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.closeShowAdder}>
            <View style={{width: 50, height:50, backgroundColor:'#deada5', alignItems: 'center', justifyContent: 'center'}}>
              <Ionicons name='ios-close' style={{fontSize: 40, color: 'white'}} />
            </View>
          </TouchableOpacity>
        </View>
      )}
      </View>
      <TouchableOpacity onPress={this.openShowAdder} style={{position: 'absolute', right: 20, bottom: 20}}>
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
