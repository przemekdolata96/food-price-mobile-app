import React from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import ProductList from '../components/ProductList';
import ProductDetail from '../components/ProductDetail';
import { selectProduct, deselectProduct} from '../store/actions/index';
import { connect } from 'react-redux';

class KFCScreen extends React.Component {
  static navigationOptions = {
    title: 'KFC',
  };

  productSelectedHandler = key => {
    this.props.onSelectProduct(key, 'kfc');
  }

  modalClosedHandler = () => {
    this.props.onDeselectProduct();
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <ProductList
            products={this.props.products}
            onItemSelected={this.productSelectedHandler}
          />
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    products: state.products.products.kfc,
    selectedProduct: state.products.selectedProduct
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSelectProduct: (key, restaurantName) => dispatch(selectProduct(key, restaurantName)),
    onDeselectProduct: () => dispatch(deselectProduct())
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEEEEE',
  },
  contentContainer: {
    paddingTop: 30,
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(KFCScreen);