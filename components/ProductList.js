import React from 'react';
import { StyleSheet, FlatList } from 'react-native';
import Product from '../components/Product';

const productList = props => {

  return (
    <FlatList 
      style={styles.listContainer}
      data={props.products}
      renderItem={(info) => (
        <Product
            onItemPressed={() => props.onItemSelected(info.item.key)}
            productName={info.item.name}
            productImage={info.item.image}
            productPrice={info.item.price}
          />
      )}
    />
  );
};

const styles = StyleSheet.create({
  listContainer: {
    width: '100%'
  }
});
export default productList;