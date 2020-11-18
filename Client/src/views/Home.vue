<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <Products msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Products from '@/components/Products.vue'

export default {
  name: 'Home',
  components: {
    Products
  }
}
</script>
