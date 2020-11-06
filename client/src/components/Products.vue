<template>
  <div>
    <h1>Products</h1>
    <ProductList :products="products" />
  </div>
</template>

<script>
import ProductList from "./ProductList";
import axios from "axios";
export default {
  data() {
    return {
      products: [],
    }
  },
  mounted() {
    axios.get('http://localhost:8081/api/products')
    .then(res =>  this.products = res.data)
  },
  components: {
    ProductList
  },
}
</script>

<style>

</style>