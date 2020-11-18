<template>
  <div class="tov">
    <div v-for="items in info" v-bind:key="items">
      <v-card
        class="mx-auto"
        max-width="344"
        outlined
        >
        <v-list-item three-line>
          <v-list-item-content>
            <div class="header" bold >
              {{items.title}}
            </div>
            <img src="https://stockx-assets.imgix.net/media/New-Product-Placeholder-Default.jpg?fit=fill&bg=FFFFFF&w=140&h=100&auto=format,compress&trim=color&q=90&dpr=2&updated_at=0">
            <v-list-item-title class="headline mb-1">
              {{items.brand}}
            </v-list-item-title>
            <v-list-item-subtitle>{{ 'Retail Price $' + items.retailPrice}}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <v-card-actions>
          <v-btn
            outlined
            rounded
            text
            @click="addToCart()"
          >
            Add To Cart
          </v-btn>
        </v-card-actions>
      </v-card>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Products',
  methods: {
    addToCart () {
      this.$store.dispatch('addProductToCart', {
        product: this.product,
        quantity: 1
      })
    }
  },
  data () {
    return {
      info: null
    }
  },
  mounted () {
    axios
      .get('https://api.thesneakerdatabase.com/v1/sneakers?limit=100')
      .then(response => (this.info = response.data.results))
  }
}
</script>

<style scoped>
  .tov {
    display: flex;
    flex-wrap: wrap;
    flex: 33%;
  }
  .tov > div {
    margin: 50px;
  }
  .mx-auto {
    font-style: bold;
    text-align: center;
  }
</style>
