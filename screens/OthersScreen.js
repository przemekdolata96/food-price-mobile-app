import React from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
  Picker,
} from 'react-native';
import ProductList from '../components/ProductList';
import { connect } from 'react-redux';

class OthersScreen extends React.Component {
  static navigationOptions = {
    title: 'Others',
  };

  state = {user: ''}
  updateUser = (user) => {
    this.setState({ user: user })
  }

  render() {
    return (
      <View style={styles.container}>
         <Picker selectedValue = {this.state.user} onValueChange = {this.updateUser}>
            <Picker.Item label = "Steve" value = "steve" />
            <Picker.Item label = "Ellen" value = "ellen" />
            <Picker.Item label = "Maria" value = "maria" />
          </Picker>
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
   products: state.products.products.others,
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

export default connect(mapStateToProps, mapDispatchToProps)(OthersScreen);