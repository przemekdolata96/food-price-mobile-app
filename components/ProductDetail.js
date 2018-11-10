import React from 'react'
import { Modal, View, Image, Text, Button, StyleSheet } from 'react-native';

const productDetail = props => {
  let modalContent = null;

  if (props.selectedProduct) {
    modalContent = (
      <View>
        <Image source={props.selectedProduct.image} style={styles.productImage} />
        <Text style={styles.productName}>{props.selectedProduct.name}</Text>
      </View>
    );
  };

  return (
    <Modal onRequestClose={props.onModalClosed} visible={props.selectedProduct !== null} animationType="slide">
      <View style={styles.modalContainer}>
        {modalContent}
        <View>
          <Button title="Close" onPress={props.onModalClosed} />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    margin: 22
  },
  productImage: {
    width: '100%',
    height: 200
  },
  productName: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 28
  }
});

export default productDetail;
