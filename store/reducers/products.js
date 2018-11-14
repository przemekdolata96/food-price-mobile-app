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
        name: 'Classic',
        price: '15.00',
        image: {
          uri: 'https://ocs-pl.oktawave.com/v1/AUTH_876e5729-f8dd-45dd-908f-35d8bb716177/amrest-web-ordering/img%2FKFC%2FWeb%2FWEB%2Fkomponent%2Fkubelek-classic.png'
        },
        composition: {
          protein: 60,
          carbohydrates: 30,
          fats: 25,
        },
        ingredients: [
          '2x Kurczak Kentucky',
          '8x Hot Wings',
          '2x Frytki',
          'Dip czosnkowy',
        ]
      }, {
        key: `${Math.random()}`,
        name: 'Hot&Spicy Strips',
        price: '15.00',
        image: {
          uri: 'https://ocs-pl.oktawave.com/v1/AUTH_876e5729-f8dd-45dd-908f-35d8bb716177/amrest-web-ordering/img%2FKFC%2FWeb%2FWEB%2Fkomponent%2Fkubelek-30-strips.png'
        },
        composition: {
          protein: 80,
          carbohydrates: 20,
          fats: 40,
        },
        ingredients: [
          '15x Strips',
          '2x Frytki',
          'Dip czosnkowy',
        ]
      }, 
      {
        key: `${Math.random()}`,
        name: 'Hot Wings',
        price: '15.00',
        image: {
          uri: 'https://ocs-pl.oktawave.com/v1/AUTH_876e5729-f8dd-45dd-908f-35d8bb716177/amrest-web-ordering/img%2FKFC%2FWeb%2FWEB%2Fkomponent%2F30-hot-wings-kubelek.png'
        },
        composition: {
          protein: 90,
          carbohydrates: 26,
          fats: 50,
        },
        ingredients: [
          '15x Hot Wings',
          '2x Frytki',
        ]
      },
      {
        key: `${Math.random()}`,
        name: 'Best of KFC',
        price: '20.00',
        image: {
          uri: 'https://ocs-pl.oktawave.com/v1/AUTH_876e5729-f8dd-45dd-908f-35d8bb716177/amrest-web-ordering/img%2FKFC%2FWeb%2FWEB%2Fkomponent%2FBestof%2FBestof_dla_4.png'
        },
        composition: {
          protein: 90,
          carbohydrates: 26,
          fats: 50,
        },
        ingredients: [
          '5x Hot Wings',
          '2x Kurczak Kentucky',
          'Bites 135g',
          '2x Frytki',
        ]
      },
      {
        key: `${Math.random()}`,
        name: 'Mix',
        price: '20.00',
        image: {
          uri: 'https://ocs-pl.oktawave.com/v1/AUTH_876e5729-f8dd-45dd-908f-35d8bb716177/amrest-web-ordering/img%2FKFC%2FWeb%2FWEB%2Fkomponent%2Fkubelek-kentucky.png'
        },
        composition: {
          protein: 70,
          carbohydrates: 200,
          fats: 80,
        },
        ingredients: [
          'Kilka opcji kubełka do wyboru'
        ]
      },
    ],
    burgerKing: [
      {
        key: `${Math.random()}`,
        name: 'Cheesburger',
        price: '3.95',
        image: {
          uri: 'http://www.burgerking.pl/site/assets/files/126262/app_cheeseburger.png'
        },
        composition: {
          protein: 70,
          carbohydrates: 200,
          fats: 80,
        },
        ingredients: [
          'wołownia',
          'pikle',
          'ser cheddar',
          'cebula',
          'bułka',
          'keczup',
          'musztarda'
        ]
      }, {
        key: `${Math.random()}`,
        name: 'Hamburger',
        price: '3.50',
        image: {
          uri: 'http://www.burgerking.pl/site/assets/files/126293/app_hamburger-2.png'
        },
        composition: {
          protein: 100,
          carbohydrates: 20,
          fats: 40,
        },
        ingredients: [
          'wołownia',
          'pikle',
          'cebula',
          'bułka',
          'keczup',
          'musztarda'
        ]
      }, {
        key: `${Math.random()}`,
        name: 'ANGUS CROSS XT',
        price: '20.95',
        image: {
          uri: 'http://www.burgerking.pl/site/assets/files/106438/angus-1.png'
        },
        composition: {
          protein: 190,
          carbohydrates: 26,
          fats: 50,
        },
        ingredients: [
          'wołownia',
          'ser cheddar',
          'majonez',
          'bułka',
          'świeża cebula',
          'bekon',
          'sałata',
          'pomidor'
        ]
      },
      {
        key: `${Math.random()}`,
        name: 'Big King',
        price: '15.50',
        image: {
          uri: 'http://www.burgerking.pl/site/assets/files/1856/bigking.png'
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
          'sos Big King',
          'bułka',
          'świeża cebula',
          'bekon',
          'sałata',
        ]
      },
      {
        key: `${Math.random()}`,
        name: 'WHOPPER® JR.',
        price: '4.95',
        image: {
          uri: 'http://www.burgerking.pl/site/assets/files/1674/whopperjr_prod.png'
        },
        composition: {
          protein: 100,
          carbohydrates: 200,
          fats: 80,
        },
        ingredients: [
          'wołownia',
          'pikle',
          'pomidor',
          'keczup',
          'majonez',
          'bułka z sezamem',
          'świeża cebula',
          'bekon',
          'sałata',
        ]
      },
    ],
    others: {
      'Pasibus': [
        {
          key: `${Math.random()}`,
          name: 'Klasyk',
          price: '9.00',
          image: {
            uri: 'https://pasibus.blob.core.windows.net/media/1652/klasyk_hd.jpg'
          },
          composition: {
            protein: 100,
            carbohydrates: 200,
            fats: 80,
          },
          ingredients: [
            '100% wołowiny',
            'sos biały',
            'sałata lodowa',
            'ketchup',
            'ogórek kiszony',
            'cebula'
          ]
        },
        {
          key: `${Math.random()}`,
          name: 'Standard',
          price: '12.00',
          image: {
            uri: 'https://pasibus.blob.core.windows.net/media/1660/standard_hd.jpg'
          },
          composition: {
            protein: 100,
            carbohydrates: 200,
            fats: 80,
          },
          ingredients: [
            '100% wołowiny',
            'sos biały',
            'sałata lodowa',
            'ketchup',
            'ser cheddar',
            'pomidor',
            'ogórek kiszony',
            'cebula'
          ]
        },
        {
          key: `${Math.random()}`,
          name: 'Wiesio',
          price: '17.00',
          image: {
            uri: 'https://pasibus.blob.core.windows.net/media/1661/wiesio_hd.jpg'
          },
          composition: {
            protein: 100,
            carbohydrates: 200,
            fats: 80,
          },
          ingredients: [
            '100% wołowiny',
            'sos biały',
            'sałata lodowa',
            'ketchup',
            'grillowany boczek',
            'jajko sadzone',
            'pomidor',
            'ogórek kiszony',
            'cebula'
          ]
        },
        {
          key: `${Math.random()}`,
          name: 'Gonzales',
          price: '16.00',
          image: {
            uri: 'https://pasibus.blob.core.windows.net/media/1650/gonzales_hd.jpg'
          },
          composition: {
            protein: 100,
            carbohydrates: 200,
            fats: 80,
          },
          ingredients: [
            '100% wołowiny',
            'sos różowy',
            'pasta red curry',
            'rukola',
            'ser cheddar',
            'jalapeno',
            'nachosy'
          ]
        },
        {
          key: `${Math.random()}`,
          name: 'Chorizard',
          price: '17.00',
          image: {
            uri: 'https://pasibus.blob.core.windows.net/media/1649/chorizard_hd.jpg'
          },
          composition: {
            protein: 100,
            carbohydrates: 200,
            fats: 80,
          },
          ingredients: [
            '100% wołowiny',
            'sos różowy',
            'pasta z suszonych pomidorów i żurawiny',
            'rukola',
            'ser cheddar',
            'grillowane chorizo',
            'grillowana pieczarka'
          ]
        },
      ],
      'Sevi kebab': [
        {
          key: `${Math.random()}`,
          name: 'Dürüm Kebab',
          price: '12.50',
          image: {
            uri: 'http://sevikebab.pl/wp-content/uploads/2017/02/I7C8787.jpg'
          },
          composition: {
            protein: 100,
            carbohydrates: 200,
            fats: 80,
          },
          ingredients: [
            'kebab wołowo-barani',
            'tortilla',
            'świeże warzywa',
            'sos do wyboru',
          ]
        },
        {
          key: `${Math.random()}`,
          name: 'Dürüm Chicken',
          price: '12.50',
          image: {
            uri: 'http://sevikebab.pl/wp-content/uploads/2017/02/durumchicken_s.jpg'
          },
          composition: {
            protein: 100,
            carbohydrates: 20,
            fats: 40,
          },
          ingredients: [
            'opiekany kurczak',
            'tortilla',
            'świeże warzywa',
            'sos do wyboru',
          ]
        },
        {
          key: `${Math.random()}`,
          name: 'Pide Kebab',
          price: '13.50',
          image: {
            uri: 'http://sevikebab.pl/wp-content/uploads/2017/02/I7C8637.jpg'
          },
          composition: {
            protein: 100,
            carbohydrates: 200,
            fats: 80,
          },
          ingredients: [
            'kebab wołowo-barani',
            'bułka',
            'świeże warzywa',
            'sos do wyboru',
          ]
        },
        {
          key: `${Math.random()}`,
          name: 'Pide Chicken',
          price: '13.50',
          image: {
            uri: 'http://sevikebab.pl/wp-content/uploads/2017/02/I7C8655.jpg'
          },
          composition: {
            protein: 100,
            carbohydrates: 20,
            fats: 40,
          },
          ingredients: [
            'opiekany kurczak',
            'bułka',
            'świeże warzywa',
            'sos do wyboru',
          ]
        },
        {
          key: `${Math.random()}`,
          name: 'Kebab Doner',
          price: '21.50',
          image: {
            uri: 'http://sevikebab.pl/wp-content/uploads/2017/04/I7C9066.jpg'
          },
          composition: {
            protein: 100,
            carbohydrates: 200,
            fats: 80,
          },
          ingredients: [
            'kebab wołowo-barani',
            'frytki lub kasza bulgur',
            'świeże warzywa',
            'sos do wyboru',
          ]
        },
        {
          key: `${Math.random()}`,
          name: 'Chicken Doner',
          price: '20.50',
          image: {
            uri: 'http://sevikebab.pl/wp-content/uploads/2017/04/I7C8223.jpg'
          },
          composition: {
            protein: 100,
            carbohydrates: 20,
            fats: 40,
          },
          ingredients: [
            'opiekany kurczak',
            'frytki lub kasza bulgur',
            'świeże warzywa',
            'sos do wyboru',
          ]
        },
      ],
      'Kebab King': [
        {
          key: `${Math.random()}`,
          name: 'Dürüm Kebab',
          price: '12.50',
          image: {
            uri: 'http://sevikebab.pl/wp-content/uploads/2017/02/I7C8787.jpg'
          },
          composition: {
            protein: 100,
            carbohydrates: 200,
            fats: 80,
          },
          ingredients: [
            'kebab wołowo-barani',
            'tortilla',
            'świeże warzywa',
            'sos do wyboru',
          ]
        }, {
          key: `${Math.random()}`,
          name: 'Dürüm Chicken',
          price: '12.50',
          image: {
            uri: 'http://sevikebab.pl/wp-content/uploads/2017/02/durumchicken_s.jpg'
          },
          composition: {
            protein: 100,
            carbohydrates: 20,
            fats: 40,
          },
          ingredients: [
            'opiekany kurczak',
            'tortilla',
            'świeże warzywa',
            'sos do wyboru',
          ]
        }, {
          key: `${Math.random()}`,
          name: 'Pide Kebab',
          price: '13.50',
          image: {
            uri: 'http://sevikebab.pl/wp-content/uploads/2017/02/I7C8637.jpg'
          },
          composition: {
            protein: 100,
            carbohydrates: 200,
            fats: 80,
          },
          ingredients: [
            'kebab wołowo-barani',
            'bułka',
            'świeże warzywa',
            'sos do wyboru',
          ]
        }, {
          key: `${Math.random()}`,
          name: 'Pide Chicken',
          price: '13.50',
          image: {
            uri: 'http://sevikebab.pl/wp-content/uploads/2017/02/I7C8655.jpg'
          },
          composition: {
            protein: 100,
            carbohydrates: 20,
            fats: 40,
          },
          ingredients: [
            'opiekany kurczak',
            'bułka',
            'świeże warzywa',
            'sos do wyboru',
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