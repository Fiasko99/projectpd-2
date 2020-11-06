<template>
  <div class="card-columns" v-if="products.length">
      <div class="card" v-for="product in products" :key="product.id">
        <img class="card-img-top" :src="product.img" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title" :style="{color: product.marked ? 'red' : 'black'}">{{product.title}}</h5>
          <p class="card-text">{{product.body}}</p>
        </div>
        <button class="btn btn-primary rounded-0 w-100" @click="markProduct(product.id)">Mark in favorite</button>
      </div>
    </div>
    <h2 v-else>No products!</h2>
</template>

<script>
import axios from "axios";
export default {
  props: {
    products: Array
  }
}
</script>

<style>

</style>