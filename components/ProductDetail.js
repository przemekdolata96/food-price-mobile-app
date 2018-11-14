import React from 'react'
import { Modal, View, Image, Text, Button, StyleSheet, ScrollView } from 'react-native';
import { PieChart } from 'react-native-svg-charts';
import TabBarIcon from '../components/TabBarIcon';

const productDetail = props => {
  let modalContent = null;
  let protein = null;
  let carbons = null;
  let fats = null;
  let ingredients = null;
  let price = null;

  if (props.selectedProduct) {
    modalContent = (
      <View>
        <Image resizeMode='contain' source={props.selectedProduct.image} style={styles.productImage} />
        <Text style={styles.productName}>{props.selectedProduct.name}</Text>
      </View>
    );

    ingredients = (
       <View style={styles.ingredientsContainer}>
          {
            props.selectedProduct.ingredients.map((element) => (
              <Text style={styles.ingredient} key={element}>{element}</Text>
            ))
          }
        </View>
    );
    
    protein = props.selectedProduct.composition.protein;
    carbons = props.selectedProduct.composition.carbohydrates;
    fats = props.selectedProduct.composition.fats;
    price = props.selectedProduct.price;
  };
  return (
    <Modal onRequestClose={props.onModalClosed} visible={props.selectedProduct !== null} animationType="slide">
      <View style={styles.price}>
        <TabBarIcon name="md-pricetags" color="#8BC34A"/>
        <Text style={styles.productPrice}>{`${price}zł`}</Text>
      </View>
      <ScrollView>
        <View style={styles.modalContainer}>
          {modalContent}
          {ingredients}
          <PieChart
            style= {styles.chart}
            data={
              [
                {
                  value: protein,
                  svg: {
                    fill: '#4CAF50',
                  },
                  key: 'proteins'
                },
                {
                  value: carbons,
                  svg: {
                    fill: '#03A9F4',
                  },
                  key: 'carbons'
                },
                {
                  value: fats,
                  svg: {
                    fill: '#F44336',
                  },
                  key: 'fats'
                },
              ]
            }
          />
          <View style={styles.compositionStyle}>
            <Text style={[styles.compositionTextContainer, {backgroundColor: '#4CAF50'}]}>Białko</Text>
            <Text style={[styles.compositionTextContainer, {backgroundColor: '#03A9F4'}]}>Węglowodany</Text>
            <Text style={[styles.compositionTextContainer, {backgroundColor: '#F44336'}]}>Tłuszcze</Text>
          </View>
          <View>
            <Button title="Zamknij" onPress={props.onModalClosed} />
          </View>
        </View>
      </ScrollView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    margin: 22,
    flex:1,
  },
  productImage: {
    width: '100%',
    height: 200
  },
  productName: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 28,
    marginBottom: 10,
  },
  chart: {
    height: 150,
    marginBottom: 10,
  },
  compositionStyle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    marginBottom: 10
  },
  compositionTextContainer: {
    padding: 5,
    borderRadius: 5,
    margin: 5,
    height: 30,
    overflow: 'hidden',
    color: '#FFF',
    fontSize: 16,
    fontWeight: '500',
  },
  ingredientsContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    flexWrap: 'wrap',
    marginBottom: 10,
  },
  ingredient: {
    padding: 5,
    borderRadius: 5,
    margin: 5,
    height: 30,
    textAlignVertical: 'center',
    overflow: 'hidden',
    backgroundColor: '#E0E0E0',
    fontWeight: '400',
  },
  price: {
    position: 'absolute',
    top: 42,
    left: 0,
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex:2,
    width: 80,
    height:80,
    backgroundColor: '#FFF',
    borderRadius: 80,
    overflow: 'hidden'
  },
  productPrice: {
    marginLeft: 10,
    fontSize: 16,
    fontWeight: "400",
  },
});

export default productDetail;
