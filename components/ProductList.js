import React from 'react';
import { StyleSheet, FlatList } from 'react-native';
import Product from '../components/Product';

const productList = props => {

  return (
    <FlatList 
      style={styles.listContainer}
      data={props.products}
      numColumns={2}
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
    flex: 1,
  },
});
export default productList;