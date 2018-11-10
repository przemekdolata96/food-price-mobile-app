import React from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
  Picker,
  Alert,
  Text,
  TextInput
} from 'react-native';
import ProductList from '../components/ProductList';
import { connect } from 'react-redux';
import RNPickerSelect from 'react-native-picker-select';
import ProductDetail from '../components/ProductDetail';
import { selectProduct, deselectProduct} from '../store/actions/index';

class OthersScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      products: this.props.restaurantsList[Object.keys(this.props.restaurantsList)[0]],
      selectedRestaurant: Object.keys(this.props.restaurantsList)[0],
    }
  }

  static navigationOptions = {
    title: 'Pozostałe',
  };

  onRestaurantSelect = (value) => {
    this.setState({
      products: this.props.restaurantsList[value]
    })
  }

  productSelectedHandler = key => {
    this.props.onSelectProduct(key,this.state.selectedRestaurant,true);
  }

  modalClosedHandler = () => {
    this.props.onDeselectProduct();
  }
  
  render() {
    const restaurants = Object.keys(this.props.restaurantsList).map((element) => {
      return {
        label: element,
        value: element
      }
    });
    
    return (
      <View style={styles.container}>
        <RNPickerSelect
          placeholder={{}}
          style={{...pickerSelectStyles}}
          items={restaurants}
          onValueChange={(value) => {
            this.onRestaurantSelect(value);
            this.setState({selectedRestaurant: value});
          }}
        />
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <ProductList
            products={this.state.products}
            onItemSelected={this.productSelectedHandler}
          />
        </ScrollView>
         <ProductDetail
          selectedProduct={this.props.selectedProduct}
          onModalClosed= {this.modalClosedHandler}
        />
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
   restaurantsList: state.products.products.others,
   selectedProduct: state.products.selectedProduct
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSelectProduct: (key, restaurantName, isOther) => dispatch(selectProduct(key, restaurantName, isOther)),
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
  select: {}
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingTop: 13,
    paddingHorizontal: 10,
    paddingBottom: 12,
    backgroundColor: 'white',
    color: 'black',
    borderRadius: 5,
  },
  viewContainer: {
    backgroundColor: 'white',
    marginLeft: '10%',
    marginRight: '10%',
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  inputIOSContainer: {
  },
  headlessAndroidContainer: {
  },
  underline: {
    width: 0
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(OthersScreen);