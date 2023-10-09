<template>
  <div class="Products">
  <div class="products-list">
    <div v-for="product in paginatedProducts" :key="product.id" class="product">
      <img src="../assets/Image.png" alt="Image" class="product-img">
      <h2 class="product-title">{{ product.title }}</h2>
      <div class="product-content">
      <p>{{ product.price }} ₽</p>
      <img src="../assets/basket.png" @click="addToCart(product)"/>
      </div>
    </div>
  </div>
    <div class="products-buttons">
    <button @click="prevPage">Показать еще</button>
    {{ currentPage }} / {{ pageCount }}
    <button @click="nextPage">Следующая</button>
  </div>
</div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  computed: {
    ...mapState(['products']),
    pageCount() {
      return this.products && this.products.length
        ? Math.ceil(this.products.length / this.itemsPerPage)
        : 0;
    },
    paginatedProducts() {
      if (this.products && this.products.length) {
        const start = (this.currentPage - 1) * this.itemsPerPage;
        const end = start + this.itemsPerPage;
        return this.products.slice(start, end);
      }
      return [];
    },
  },
  methods: {
    ...mapActions(['addToCart']),
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },
    nextPage() {
      if (this.currentPage < this.pageCount) {
        this.currentPage++;
      }
    },
    addToCart(product) {
      this.$store.commit('addToCart', product);
    },
  },
  data() {
    return {
      itemsPerPage: 4,
      currentPage: 1,
    };
  },
  created() {
    console.log(this.products); 
  },
};
</script>

<style>
.products-list {
  display: flex;
  gap: 107px;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
.product {
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  box-shadow: 4px 4px 10px 0px rgba(0, 0, 0, 0.20);
}
.product-title {
  margin-bottom: 59px;
  padding: 20px;
}
.product-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
}
.products-buttons {
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 20px;
  margin-top: 40px;
}
.products-buttons>button {
  border: none;
  border-radius: 4px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  color: #6A6A6A;
}
@media (max-width: 1440px) {
  .products-buttons {
    justify-content: center;
  }
}
</style>