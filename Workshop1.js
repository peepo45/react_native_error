/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';


export default Workshop1 = () => {
  return(
      <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'stretch'}}>
        <View style={{width: 50, backgroundColor: '#FF0000'}} />
        <View style={{width: 50, height: 50, backgroundColor: '#00FF00'}} />
        <View style={{width: 50, backgroundColor: '#FF00FF'}} />
      </View>
  );
}