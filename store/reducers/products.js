import { DESELECT_PRODUCT, SELECT_PRODUCT} from '../actions/actionTypes';

const initialState = {
  products: {
    mcdonalds: [{
        key: `${Math.random()}`,
        name: 'Cheesburger',
        price: '4.00',
        image: {
          uri: 'https://mcdonalds.pl/images/products-og/cheeseburger.png'
        }
      },
      {
        key: `${Math.random()}`,
        name: 'Hamburger',
        price: '3.50',
        image: {
          uri: 'https://mcdonalds.pl/images/products-og/hamburger.png'
        }
      },
      {
        key: `${Math.random()}`,
        name: 'Chips',
        price: '5.00',
        image: {
          uri: 'https://mcdonalds.pl/images/products-og/frytki.png'
        }
      },
    ],
    kfc: [{
        key: `${Math.random()}`,
        name: 'Strips',
        price: '4.00',
        image: {
          uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/McDonald%27s_Golden_Arches.svg/220px-McDonald%27s_Golden_Arches.svg.png'
        }
      },
      {
        key: `${Math.random()}`,
        name: 'Wings',
        price: '3.50',
        image: {
          uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/McDonald%27s_Golden_Arches.svg/220px-McDonald%27s_Golden_Arches.svg.png'
        }
      },
      {
        key: `${Math.random()}`,
        name: 'Chips',
        price: '5.50',
        image: {
          uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/McDonald%27s_Golden_Arches.svg/220px-McDonald%27s_Golden_Arches.svg.png'
        }
      },
    ],
    burgerKing: [{
        key: `${Math.random()}`,
        name: 'Whooper',
        price: '4.00',
        image: {
          uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/McDonald%27s_Golden_Arches.svg/220px-McDonald%27s_Golden_Arches.svg.png'
        }
      },
      {
        key: `${Math.random()}`,
        name: 'Whooper Junior',
        price: '3.50',
        image: {
          uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/McDonald%27s_Golden_Arches.svg/220px-McDonald%27s_Golden_Arches.svg.png'
        }
      },
      {
        key: `${Math.random()}`,
        name: 'Chips',
        price: '6.00',
        image: {
          uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/McDonald%27s_Golden_Arches.svg/220px-McDonald%27s_Golden_Arches.svg.png'
        }
      },
    ],
    others: {
      'Pasibus': [{
          key: `${Math.random()}`,
          name: 'Klasyk',
          price: '4.00',
          image: {
            uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/McDonald%27s_Golden_Arches.svg/220px-McDonald%27s_Golden_Arches.svg.png'
          }
        },
        {
          key: `${Math.random()}`,
          name: 'Whooper Junior',
          price: '3.50',
          image: {
            uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/McDonald%27s_Golden_Arches.svg/220px-McDonald%27s_Golden_Arches.svg.png'
          }
        },
        {
          key: `${Math.random()}`,
          name: 'Chips',
          price: '6.00',
          image: {
            uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/McDonald%27s_Golden_Arches.svg/220px-McDonald%27s_Golden_Arches.svg.png'
          }
        },
      ],
      'Sevi kebab': [{
          key: `${Math.random()}`,
          name: 'Doner kebab',
          price: '4.00',
          image: {
            uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/McDonald%27s_Golden_Arches.svg/220px-McDonald%27s_Golden_Arches.svg.png'
          }
        },
        {
          key: `${Math.random()}`,
          name: 'Whooper Junior',
          price: '3.50',
          image: {
            uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/McDonald%27s_Golden_Arches.svg/220px-McDonald%27s_Golden_Arches.svg.png'
          }
        },
        {
          key: `${Math.random()}`,
          name: 'Chips',
          price: '6.00',
          image: {
            uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/McDonald%27s_Golden_Arches.svg/220px-McDonald%27s_Golden_Arches.svg.png'
          }
        },
      ],
      'Kebab King': [{
          key: `${Math.random()}`,
          name: 'Falafel',
          price: '4.00',
          image: {
            uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/McDonald%27s_Golden_Arches.svg/220px-McDonald%27s_Golden_Arches.svg.png'
          }
        },
        {
          key: `${Math.random()}`,
          name: 'Whooper Junior',
          price: '3.50',
          image: {
            uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/McDonald%27s_Golden_Arches.svg/220px-McDonald%27s_Golden_Arches.svg.png'
          }
        },
        {
          key: `${Math.random()}`,
          name: 'Chips',
          price: '6.00',
          image: {
            uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/McDonald%27s_Golden_Arches.svg/220px-McDonald%27s_Golden_Arches.svg.png'
          }
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