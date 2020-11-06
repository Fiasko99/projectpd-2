<template>
  <div class="card-columns" v-if="users.length">
      <div class="card" v-for="user in users" :key="user.id">
        <img class="card-img-top" :src="user.avatar" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title" :style="{color: user.marked ? 'red' : 'black'}">{{user.name}}</h5>
        </div>
        <button class="btn btn-primary rounded-0 w-100" @click="viewProfile(user.id)">View</button>
      </div>
    </div>
    <h2 v-else>No products!</h2>
</template>

<script>
import axios from "axios";
export default {
  props: {
    users: Array
  }
}
</script>

<style>

</style>