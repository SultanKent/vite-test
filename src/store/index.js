import { createStore } from 'vuex';
import productsData from '/products.json'; 

const store = createStore({
  state: {
    cart: [],
    products: productsData, 
  },
  mutations: {
    addToCart(state, product) {
      state.cart.push(product);
    },
    removeFromCart(state, index) {
      state.cart.splice(index, 1);
    },
  },
  getters: {
    totalCost(state) {
      return state.cart.reduce((total, product) => total + product.price, 0);
    },
  },
});

export default store;
