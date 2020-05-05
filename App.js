import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  SafeAreaView, 
  TouchableOpacity, 
  TextInput, 
  FlatList } from 'react-native';

import {Ionicons} from '@expo/vector-icons';

import FooterTab from './components/FooterTab'

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      plannedCount: 0,
      watchingCount: 0,
      watchedCount: 0,
      isNewShowAdderVisible: false,
      newShowText: "",
      plannedShows:[]
    };
  }

  openShowAdder = () => {
    this.setState({isNewShowAdderVisible:true});
  };

  closeShowAdder = () => {
    this.setState({isNewShowAdderVisible:false});
  };

  addShowToPlanned = show => {
    this.setState((state, props) => ({
      plannedShows: [...state.plannedShows, show],
      plannedCount: state.plannedCount + 1
    }), ()=> {
      console.log(this.state.plannedShows);
    });
  };

  markAsWatching = (selectedShow, index) => {
    let newPlannedShows = this.state.plannedShows.filter(show => show !== selectedShow);
    this.setState(prev => ({
      plannedShows: newPlannedShows,
      plannedCount: prev.plannedCount - 1,
      watchingCount: prev.watchingCount + 1
    }));
  };


  renderShow = (item, index) => (
    <View  style={{flex:1, paddingLeft: 2.5, paddingRight: 2.5}}>
      <View style={styles.showListing}>
        <View style={{flex:4, justifyContent: 'center'}}>
          <Text style={styles.showListingText}>{item}</Text>
        </View>
        <TouchableOpacity style={{flex:1}} onPress={() => this.markAsWatching(item, index)}>
        <View style={styles.moveToWatchingView}>
            <View style={styles.moveToWatchingButton}>
              <Ionicons name='ios-arrow-round-forward' style={{fontSize: 40, color: '#ffe066', fontWeight: 'bold'}} />
            </View>
        </View>
        </TouchableOpacity>
      </View>
    </View>
  );

  render() {
  return (
    <View style={styles.appBody}>
    <SafeAreaView style={{backgroundColor: '#247ba0'}} />
      <View style={styles.header}>
        <Text style={styles.headerText}>FlixCart</Text>
      </View>
      <View style={styles.mainBody}>
      <View style={{flex:1}}>
      {this.state.isNewShowAdderVisible && (
        <View style={{height:50, flexDirection: 'row'}}>
          <TextInput onChangeText={text => this.setState({ newShowText: text })} style={{flex:1, backgroundColor: '#FFFFFF', paddingLeft: 5}} placeholder="Enter a TV Show/Movie that you wish to watch" placeholderTextColor='grey' />
          <TouchableOpacity onPress={() => this.addShowToPlanned(this.state.newShowText)}>
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
      <FlatList 
        data = {this.state.plannedShows}
        renderItem={({item}, index) => this.renderShow(item, index)}
        keyExtractor={(item,index) => index.toString()}
        ListEmptyComponent={
          <View style={styles.emptyListStyle}>
            <Text style={styles.emptyListText}>Nothing to watch yet? Add your first!</Text>
          </View>
        }
      />
      </View>
      <TouchableOpacity onPress={this.openShowAdder} style={{position: 'absolute', right: 20, bottom: 20}}>
        <View style={styles.roundButton}>
          <Text style={{color:'white', fontSize: 30}}>+</Text>
        </View>
        </TouchableOpacity>
      </View>
      <View style={styles.footer}>
        <FooterTab title='Planned' count={this.state.plannedCount}/>
        <FooterTab title='Watching' count={this.state.watchingCount} />
        <FooterTab title='Watched' count={this.state.watchedCount} />
      </View>
    <SafeAreaView style={{backgroundColor: '#247ba0'}} />
    </View>
  );
  }
}

const styles = StyleSheet.create({
  appBody: {
    flex: 1,
  },
  emptyListStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
    paddingLeft: 25,
    paddingRight: 25
  },
  emptyListText: {
    color: '#ffe066',
    fontFamily: 'Avenir-Black',
    fontSize: 30,
    textAlign: 'center'
  },
  showListing: {
    flexDirection: 'row',
    height: 75,
    backgroundColor: '#f25f5c',
    justifyContent: 'center',
    marginTop: 5,
    borderRadius: 5
  },
  showListingText: {
    marginLeft: 5,
    color: 'white',
    fontFamily: 'Avenir-Black',
    fontSize: 30
  },
  header: {
    height: 50,
    backgroundColor: '#247ba0',
    alignItems: 'center',
    justifyContent: 'center'
  },
  headerText : {
    fontSize: 25,
    fontFamily: 'Avenir-Black',
    color: '#ffe066'
  },
  mainBody: {
    flex: 1,
    backgroundColor: '#151414'
  },
  footer: {
    height: 70,
    backgroundColor: '#247ba0',
    flexDirection: 'row'
  },
  roundButton: {
    height: 50,
    width: 50,
    backgroundColor: '#247ba0',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center'
  },
  moveToWatchingView: {
    flex:1,
    backgroundColor:  '#f25f5c',
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    padding: 5
  },
  moveToWatchingButton: {
    flex:1,
    backgroundColor: '#247ba0',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  }
});
