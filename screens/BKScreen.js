import React from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import ProductList from '../components/ProductList';
import { connect } from 'react-redux';

class BKScreen extends React.Component {
  static navigationOptions = {
    title: 'Burger King',
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <ProductList
            products={this.props.products}
            onItemSelected={() => {}}
          />
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
   products: state.products.products.burgerKing,
  };
};

const mapDispatchToProps = dispatch => {
  return {
   
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    paddingTop: 30,
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(BKScreen);