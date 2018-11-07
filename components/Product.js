import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const product = (props) => (
  <TouchableOpacity onPress={props.onItemPressed}>
    <View style={styles.product}>
      <Image resizeMode='contain' source={props.productImage} style={styles.productImage}/>
      <Text>{props.productName}</Text>
      <Text>{props.productPrice}</Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  product: {
    width: '100%',
    margin: 5,
    padding: 10,
    backgroundColor: '#eee',
    flexDirection: 'row',
    alignItems: 'center',
  },
  productImage: {
    marginRight: 8,
    height: 30,
    width: 30,
  }
});

export default product;