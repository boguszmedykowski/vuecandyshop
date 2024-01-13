<template>
    <div class="candy-cart">
      <h1>Koszyk</h1>
      <div v-if="cartItems.length">
        <div v-for="item in cartItems" :key="item.id" class="cart-item-container">
          <p>{{ item.name }} - {{ item.quantity }} x {{ item.price }} zł</p>
        </div>
      </div>
      <p v-else>Koszyk jest pusty</p>
    </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'CandyCart',
  data() {
    return {
      cartItems: []
    };
  },
  created() {
    this.fetchCartItems();
  },
  methods: {
    fetchCartItems() {
      axios.get('http://localhost:5000/cart')
        .then(response => {
          this.cartItems = response.data;
        })
        .catch(error => {
          console.error('Błąd przy pobieraniu zawartości koszyka:', error);
        });
    }
  }
};
</script>

<style>
.candy-cart {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.cart-item-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  margin-bottom: 15px;
}

/* Możesz dodać więcej stylów specyficznych dla elementów koszyka */
</style>
