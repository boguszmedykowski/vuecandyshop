<template>
    <div class="product-grid">
        <div v-for="product in products" :key="product.id" class="product-container">
            <h2 class="product-name">{{ product.name }}</h2>
            <p class="product-price">Cena: {{ product.price }} zł</p>
            <div class="form-field">
                <label for="quantity" class="quantity-label">Ilość:</label>
                <input type="number" :id="'quantity-' + product.id" min="1" v-model="product.quantity" class="quantity-input">
            </div>
            <button @click="addToCart(product)" class="add-to-cart-button">Dodaj do Koszyka</button>
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
            this.$axios.get('/products')
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
/* Style dla ProductList */

.product-grid {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}

.product-container {
    background-color: #ffcccb;
    padding: 20px;
    margin: 10px;
    border-radius: 10px;
    text-align: center;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
}

.product-name {
    font-size: 24px;
    font-weight: bold;
    color: #ff1493;
}

.product-price {
    font-size: 18px;
    color: #6495ed;
    padding: 5px;
}

.form-field {
    margin-top: 10px;
}

.quantity-label {
    font-size: 16px;
    color: #ff1493;
    margin-right: 5px;
}

.quantity-input {
    font-size: 16px;
    width: 20%;
    color: #ff1493;
    background-color: #ffeaf5;
    border: 2px solid #ff1493;
    border-radius: 5px;
    padding: 5px 10px;
}

.add-to-cart-button {
    font-size: 18px;
    background-color: #ff1493;
    color: #fff;
    border: none;
    border-radius: 5px;
    padding: 10px 20px;
    cursor: pointer;
    transition: background-color 0.3s;
    margin-top: 10px;
}

.add-to-cart-button:hover {
    background-color: #ff4500;
}
</style>
