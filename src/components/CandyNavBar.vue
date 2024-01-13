<template>
  <nav class="candy-navbar">
    <div class="navbar-content">
      <div class="navbar-brand">
        Candy-Shop
      </div>
      <div class="navbar-menu">
        <router-link to="/addProduct" class="navbar-item">Dodaj produkt</router-link>
        <router-link to="/ProductList" class="navbar-item">Lista produktów</router-link>
        <router-link to="/CandyCart" class="navbar-item">Koszyk</router-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'CandyNavBar'
}
</script>

<style>
.candy-navbar {
  background-color: #ffccff; /* Pastelowy róż */
  position: fixed;
  top: 0;
  width: 100%;
  padding: 10px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  z-index: 100;
}

.navbar-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.navbar-brand {
  font-size: 1.5em;
  font-weight: bold;
  color: #5d3a58; /* Ciemniejszy odcień fioletu */
  text-shadow: 1px 1px #ffccff; /* Lekki różowy cień */
}

.navbar-menu {
  display: flex;
  justify-content: center;
}

.navbar-item {
  margin: 0 10px; /* Dodaje marginesy po bokach każdego elementu */
  text-decoration: none;
  color: #ff88cc; /* Różowe akcenty */
  font-size: 1em;
}

.navbar-item:hover {
  color: #ff66aa; /* Nieco ciemniejszy róż przy najechaniu */
  text-decoration: underline;
}
</style>
