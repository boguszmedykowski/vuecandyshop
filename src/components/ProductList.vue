<template>
    <div class="product-grid">
        <div v-for="product in products" :key="product.id" class="product-container">
            <h2>{{ product.name }}</h2>
            <p>Cena: {{ product.price }} zł</p>
            <div class="form-field">
                <label for="quantity">Ilość:</label>
                <input type="number" :id="'quantity-' + product.id" min="1" v-model="product.quantity">
            </div>
            <button @click="addToCart(product)">Dodaj do Koszyka</button>
        </div>
    </div>
</template>
  
<script>
import axios from 'axios';

export default {
    name: 'ProductList',
    data() {
        return {
            products: []
        };
    },
    created() {
        this.fetchProducts();
    },
    methods: {
        fetchProducts() {
            axios.get('http://localhost:5000/products')
                .then(response => {
                    this.products = response.data.map(product => ({ ...product, quantity: 1 }));
                })
                .catch(error => {
                    console.error('Błąd przy pobieraniu produktów:', error);
                });
        },
        addToCart(product) {
            axios.post(`http://localhost:5000/add_to_cart/${product.id}`, { quantity: product.quantity })
                .then(() => {
                    alert(`Dodano ${product.quantity} sztuk produktu ${product.name} do koszyka.`);
                    // Możesz tutaj dodać więcej logiki, na przykład odświeżenie zawartości koszyka
                })
                .catch(error => {
                    console.error('Błąd przy dodawaniu do koszyka:', error);
                    alert('Nie udało się dodać produktu do koszyka.');
                });
        }

    }
};
</script>
  
<style>
.product-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 20px;
    padding: 20px;
    justify-content: center;
}

.product-container {
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

button {
    cursor: pointer;
    /* Dodaj więcej stylów dla przycisku, jeśli potrzebujesz */
}
</style>
  