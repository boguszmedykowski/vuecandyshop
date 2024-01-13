<template>
  <div class="form-container">
    <h2>Dodaj Produkt</h2>
    <form @submit.prevent="submitForm" class="add-product-form">
      <div class="form-field">
        <label for="name">Nazwa produktu:</label>
        <input type="text" id="name" v-model="product.name">
      </div>
      <div class="form-field">
        <label for="price">Cena produktu:</label>
        <input type="number" id="price" v-model="product.price">
      </div>
      <button type="submit">Dodaj Produkt</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      product: {
        name: '',
        price: 0
      }
    };
  },
  methods: {
    submitForm() {
      // Używanie globalnie skonfigurowanego Axios
      this.$axios.post('/add_product', this.product)
        .then(response => {
          alert('Produkt został dodany!');
          console.log(response.data);
        })
        .catch(error => {
          alert('Wystąpił błąd przy dodawaniu produktu.');
          console.error(error);
        });
    }
  }
};
</script>

<style>
.form-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* Wysokość na cały ekran */
  flex-direction: column;
}

.add-product-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
}

.form-field {
  margin-bottom: 15px;
}

.form-field label {
  margin-right: 10px;
}
</style>
