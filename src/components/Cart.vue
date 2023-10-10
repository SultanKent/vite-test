<template>
  <div v-if="cart.length === 0">
      <p>Ничего нет в корзине</p>
  </div>
  <div v-else class="products-list">
      <div v-for="(item, index) in cart" :key="index" class="product-cart">
        <img src="../assets/Image.png" alt="Image" class="product-img">
        <div class="product_main">
        <h2 class="product-title">{{ item.title }}</h2>
        <div class="product-content">
          <p>{{ item.price }} ₽</p>
          <img src="../assets/close.png" @click="removeFromCart(index)" class="close-img"/>
        </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  computed: {
    cart() {
      return this.$store.state.cart;
    },
  },
  methods: {
    removeFromCart(index) {
      this.$store.commit('removeFromCart', index);
    },
  },
};
</script>

<style>
.product-cart {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  border-radius: 10px;
  box-shadow: 4px 4px 10px 0px rgba(0, 0, 0, 0.20);
}
.product_main {
  padding: 20px;
}
.product_main>product-title {
  line-height: 20px;
}
.product-cart .product-content>p {
  position: absolute;
  bottom: 20px;
}
.close-img {
  position: absolute;
  top: 0;
  right: 0;
}
@media(max-width: 540px) {
  .product-cart {
    max-width: 280px;
  }
}
</style>
