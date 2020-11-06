<template>
  <div>
    <UserList :users="users" />
  </div>
</template>

<script>
import UserList from "./UserList";
import User from "./UserProfile";
import axios from "axios";
export default {
  data() {
    return {
      users: [],
    }
  },
  mounted() {
    axios.get('http://localhost:8081/api/users')
    .then(res =>  this.users = res.data)
  },
  components: {
    UserList
  },
}
</script>

<style>

</style>