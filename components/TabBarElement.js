import React from 'react';
import { Icon } from 'expo';
import { Platform, View, Image, StyleSheet } from 'react-native';

import Colors from '../constants/Colors';

export default class TabBarElement extends React.Component {
  render() {
    return (
      <View style={styles.iconContainer}>
        <Image 
          style={[styles.tabImage, this.props.focused ? '' : styles.tabNotFocused]}
          source={{uri: this.props.image}} 
          />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  tabImage: {
    flex: 1,
    resizeMode: 'contain',
  },
  tabNotFocused: {
    tintColor: '#999999'
  },
  iconContainer: {
    width: 20,
    height: 20
  }
});