import { DESELECT_PRODUCT, SELECT_PRODUCT} from '../actions/actionTypes';

const initialState = {
  products: {
    mcdonalds: [{
        key: `${Math.random()}`,
        name: 'Cheesburger',
        price: '4.00',
        image: {
          uri: 'https://mcdonalds.pl/images/products-og/cheeseburger.png'
        },
        composition: {
          protein: 10,
          carbohydrates: 30,
          fats: 20,
        },
        ingredients: [
          'wołownia',
          'pikle',
          'ser cheddar',
          'cebula szuszona',
          'mąka',
          'keczup',
          'musztarda'
        ]
      },
      {
        key: `${Math.random()}`,
        name: 'Hamburger',
        price: '3.50',
        image: {
          uri: 'https://mcdonalds.pl/images/products-og/hamburger.png'
        },
        composition: {
          protein: 10,
          carbohydrates: 30,
          fats: 10,
        },
        ingredients: [
          'wołownia',
          'pikle',
          'cebula szuszona',
          'mąka',
          'keczup',
          'musztarda'
        ]
      },
      {
        key: `${Math.random()}`,
        name: 'Fresh Tasty',
        price: '4.00',
        image: {
          uri: 'https://dsmaipc1fg2ox.cloudfront.net/uploads/20181009104542/icon-salatka-fresh-tasty.png?402'
        },
        composition: {
          protein: 10,
          carbohydrates: 26,
          fats: 10,
        },
        ingredients: [
          'wołownia',
          'mąka',
          'sałata krojona',
          'pomidor',
          'sos Big Tasty'
        ]
      },
      {
        key: `${Math.random()}`,
        name: 'Kurczakburger',
        price: '4.00',
        image: {
          uri: 'https://dsmaipc1fg2ox.cloudfront.net/uploads/20160210090950/kurczakburger.png?402'
        },
        composition: {
          protein: 15,
          carbohydrates: 26,
          fats: 10,
        },
        ingredients: [
          'kurczak',
          'mąka',
          'sałata krojona',
          'sos paprykowo-pomidorowy',
        ]
      },
      {
        key: `${Math.random()}`,
        name: 'McDouble',
        price: '6.00',
        image: {
          uri: 'https://dsmaipc1fg2ox.cloudfront.net/uploads/20160210091317/mcdouble.png?402'
        },
        composition: {
          protein: 30,
          carbohydrates: 30,
          fats: 25,
        },
        ingredients: [
          'wołownia',
          'pikle',
          'mąka',
          'ser cheddar',
          'cebula suszona',
          'keczup',
          'musztarda'
        ]
      },
      {
        key: `${Math.random()}`,
        name: 'WieśMac',
        price: '10.00',
        image: {
          uri: 'https://dsmaipc1fg2ox.cloudfront.net/uploads/20160210091618/wiesmac.png?402'
        },
        composition: {
          protein: 35,
          carbohydrates: 30,
          fats: 15,
        },
        ingredients: [
          'wołownia',
          'sałata lodowa krojona',
          'mąka',
          'ser cheddar topiony',
          'cebula świeża',
          'pomidor',
          'sos musztardowo-chrzanowy'
        ]
      },
      {
        key: `${Math.random()}`,
        name: 'McRoyal',
        price: '11.00',
        image: {
          uri: 'https://dsmaipc1fg2ox.cloudfront.net/uploads/20160210091404/mcroyal.png?402'
        },
        composition: {
          protein: 35,
          carbohydrates: 30,
          fats: 15,
        },
        ingredients: [
          'wołownia',
          'pikle',
          'sałata lodowa krojona',
          'mąka',
          'ser cheddar topiony',
          'cebula świeża',
          'pomidor',
          'keczup',
          'musztarda',
        ]
      },
      {
        key: `${Math.random()}`,
        name: 'Podwójny WieśMac',
        price: '10.00',
        image: {
          uri: 'https://dsmaipc1fg2ox.cloudfront.net/uploads/20160210091714/wiesmac-podwojny.png?402'
        },
        composition: {
          protein: 35,
          carbohydrates: 30,
          fats: 15,
        },
        ingredients: [
          'wołownia',
          'sałata lodowa krojona',
          'mąka',
          'ser cheddar topiony',
          'cebula świeża',
          'pomidor',
          'sos musztardowo-chrzanowy'
        ]
      },
      {
        key: `${Math.random()}`,
        name: 'Podwójny McRoyal',
        price: '11.00',
        image: {
          uri: 'https://dsmaipc1fg2ox.cloudfront.net/uploads/20160210091542/mcroyal-podwojny.png?402'
        },
        composition: {
          protein: 35,
          carbohydrates: 30,
          fats: 15,
        },
        ingredients: [
          'wołownia',
          'pikle',
          'sałata lodowa krojona',
          'mąka',
          'ser cheddar topiony',
          'cebula świeża',
          'pomidor',
          'keczup',
          'musztarda',
        ]
      },
    ],
    kfc: [
      {
        key: `${Math.random()}`,
        name: 'McDouble',
        price: '6.00',
        image: {
          uri: 'https://dsmaipc1fg2ox.cloudfront.net/uploads/20160210091317/mcdouble.png?402'
        },
        composition: {
          protein: 30,
          carbohydrates: 30,
          fats: 25,
        },
        ingredients: [
          'wołownia',
          'pikle',
          'mąka',
          'ser cheddar',
          'cebula',
          'keczup'
        ]
      }, {
        key: `${Math.random()}`,
        name: 'Hamburger',
        price: '3.50',
        image: {
          uri: 'https://mcdonalds.pl/images/products-og/hamburger.png'
        },
        composition: {
          protein: 100,
          carbohydrates: 20,
          fats: 40,
        },
        ingredients: [
          'wołownia',
          'pikle',
          'ser cheddar',
          'cebula',
          'bułka'
        ]
      }, {
        key: `${Math.random()}`,
        name: 'Chips',
        price: '5.00',
        image: {
          uri: 'https://mcdonalds.pl/images/products-og/frytki.png'
        },
        composition: {
          protein: 190,
          carbohydrates: 26,
          fats: 50,
        },
        ingredients: [
          'wołownia',
          'pikle',
          'ser cheddar',
          'cebula',
          'bułka'
        ]
      },
    ],
    burgerKing: [
      {
        key: `${Math.random()}`,
        name: 'Cheesburger',
        price: '4.00',
        image: {
          uri: 'https://mcdonalds.pl/images/products-og/cheeseburger.png'
        },
        composition: {
          protein: 100,
          carbohydrates: 200,
          fats: 80,
        },
        ingredients: [
          'wołownia',
          'pikle',
          'ser cheddar',
          'cebula',
          'bułka'
        ]
      }, {
        key: `${Math.random()}`,
        name: 'Hamburger',
        price: '3.50',
        image: {
          uri: 'https://mcdonalds.pl/images/products-og/hamburger.png'
        },
        composition: {
          protein: 100,
          carbohydrates: 20,
          fats: 40,
        },
        ingredients: [
          'wołownia',
          'pikle',
          'ser cheddar',
          'cebula',
          'bułka'
        ]
      }, {
        key: `${Math.random()}`,
        name: 'Chips',
        price: '5.00',
        image: {
          uri: 'https://mcdonalds.pl/images/products-og/frytki.png'
        },
        composition: {
          protein: 190,
          carbohydrates: 26,
          fats: 50,
        },
        ingredients: [
          'wołownia',
          'pikle',
          'ser cheddar',
          'cebula',
          'bułka'
        ]
      },
    ],
    others: {
      'Pasibus': [{
          key: `${Math.random()}`,
          name: 'Cheesburger',
          price: '4.00',
          image: {
            uri: 'https://mcdonalds.pl/images/products-og/cheeseburger.png'
          },
          composition: {
            protein: 100,
            carbohydrates: 200,
            fats: 80,
          },
          ingredients: [
            'wołownia',
            'pikle',
            'ser cheddar',
            'cebula',
            'bułka'
          ]
        },
        {
          key: `${Math.random()}`,
          name: 'Hamburger',
          price: '3.50',
          image: {
            uri: 'https://mcdonalds.pl/images/products-og/hamburger.png'
          },
          composition: {
            protein: 100,
            carbohydrates: 20,
            fats: 40,
          },
          ingredients: [
            'wołownia',
            'pikle',
            'ser cheddar',
            'cebula',
            'bułka'
          ]
        },
        {
          key: `${Math.random()}`,
          name: 'Chips',
          price: '5.00',
          image: {
            uri: 'https://mcdonalds.pl/images/products-og/frytki.png'
          },
          composition: {
            protein: 190,
            carbohydrates: 26,
            fats: 50,
          },
          ingredients: [
            'wołownia',
            'pikle',
            'ser cheddar',
            'cebula',
            'bułka'
          ]
        },
      ],
      'Sevi kebab': [{
          key: `${Math.random()}`,
          name: 'Cheesburger',
          price: '4.00',
          image: {
            uri: 'https://mcdonalds.pl/images/products-og/cheeseburger.png'
          },
          composition: {
            protein: 100,
            carbohydrates: 200,
            fats: 80,
          },
          ingredients: [
            'wołownia',
            'pikle',
            'ser cheddar',
            'cebula',
            'bułka'
          ]
        },
        {
          key: `${Math.random()}`,
          name: 'Hamburger',
          price: '3.50',
          image: {
            uri: 'https://mcdonalds.pl/images/products-og/hamburger.png'
          },
          composition: {
            protein: 100,
            carbohydrates: 20,
            fats: 40,
          },
          ingredients: [
            'wołownia',
            'pikle',
            'ser cheddar',
            'cebula',
            'bułka'
          ]
        },
        {
          key: `${Math.random()}`,
          name: 'Chips',
          price: '5.00',
          image: {
            uri: 'https://mcdonalds.pl/images/products-og/frytki.png'
          },
          composition: {
            protein: 190,
            carbohydrates: 26,
            fats: 50,
          },
          ingredients: [
            'wołownia',
            'pikle',
            'ser cheddar',
            'cebula',
            'bułka'
          ]
        },
      ],
      'Kebab King': [{
          key: `${Math.random()}`,
          name: 'Cheesburger',
          price: '4.00',
          image: {
            uri: 'https://mcdonalds.pl/images/products-og/cheeseburger.png'
          },
          composition: {
            protein: 100,
            carbohydrates: 200,
            fats: 80,
          },
          ingredients: [
            'wołownia',
            'pikle',
            'ser cheddar',
            'cebula',
            'bułka'
          ]
        },
        {
          key: `${Math.random()}`,
          name: 'Hamburger',
          price: '3.50',
          image: {
            uri: 'https://mcdonalds.pl/images/products-og/hamburger.png'
          },
          composition: {
            protein: 100,
            carbohydrates: 20,
            fats: 40,
          },
          ingredients: [
            'wołownia',
            'pikle',
            'ser cheddar',
            'cebula',
            'bułka'
          ]
        },
        {
          key: `${Math.random()}`,
          name: 'Chips',
          price: '5.00',
          image: {
            uri: 'https://mcdonalds.pl/images/products-og/frytki.png'
          },
          composition: {
            protein: 190,
            carbohydrates: 26,
            fats: 50,
          },
          ingredients: [
            'wołownia',
            'pikle',
            'ser cheddar',
            'cebula',
            'bułka'
          ]
        },
      ],
    }
  },
  selectedProduct: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_PRODUCT: 
      return {
        ...state,
        selectedProduct: action.isOther ? state.products.others[action.restaurantName].find(product => {
          return product.key === action.productKey;
        }) : state.products[action.restaurantName].find(product => {
          return product.key === action.productKey;
        })
      };
    case DESELECT_PRODUCT: 
      return {
        ...state,
        selectedProduct: null
      };
    default:
      return state;
  }
};

export default reducer;