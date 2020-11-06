<template>
    <header>
        <div class="icon" @click="changeIcon()" :class="{change: isActive}">
            <div class="line-1"></div>
            <div class="line-2"></div>
            <div class="line-3"></div>
        </div>
        <div class="login-btn">
          <router-link to="/login">Войти</router-link>
        </div>
        <transition name="myslide">
          <aside v-if="isActive">
              <ul>
                  <li v-for="link in links" :key="link.id" @click="isActive = !isActive">
                      <router-link :to="link.link">{{link.name}}</router-link>
                  </li>
              </ul>
          </aside>
        </transition>
    </header>
</template>

<script>
    import axios from "axios";
    export default {
        data() {
            return {
              isActive: false, 
              links: [],
            }
        },
        methods: {
            changeIcon() {
                this.isActive = !this.isActive
            },
        },
        mounted() {
          axios.get('http://localhost:8081/api/pages')
          .then(res => this.links = res.data)
        }
    }
</script>

<style lang="scss" scoped="scoped"> 
@import '../assets/base.scss';
$border: #aaa;
$line_icon: #4ad;
$btn: blue;
$bgheader: #f4f7f7;
header {
  width: 100%;
  padding: 8px;
  height: 56px;
  position: relative;
  border-bottom: 1px solid $border;
  background: $bgheader;
  @import '../assets/icon-style.scss';
  @import '../assets/aside.scss';
  @import '../assets/transition-aside.scss';
  @import '../assets/btn-login.scss';
}
</style>