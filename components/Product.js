import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Dimensions } from 'react-native';
import TabBarIcon from '../components/TabBarIcon';

const product = (props) => (
  <TouchableOpacity onPress={props.onItemPressed}>
    <View style={styles.productContainer}>
      <View style={styles.product}>
        <Image resizeMode='contain' source={props.productImage} style={styles.productImage}/>
        <Text style={styles.productName}>{props.productName}</Text>
        <View style={styles.productPriceContainer}>
          <TabBarIcon name="md-pricetags" color="#8BC34A"/>
          <Text style={styles.productPrice}>{`${props.productPrice}zł`}</Text>
        </View>
      </View>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  productContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: Dimensions.get('window').width / 2,
  },
  product: {
    width: Dimensions.get('window').width / 2 - 20,
    backgroundColor: '#fff',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    paddingBottom:10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'transparent',
  },
  productImage: {
    height: 150,
    width: 150,
  },
  productName: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 10
  },
  productPriceContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  productPrice: {
    marginLeft: 10,
    fontSize: 16,
    fontWeight: "400",
  }
});

export default product;