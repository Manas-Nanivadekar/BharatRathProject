<template>
    <v-toolbar dense color="dark-black" dark>
          <v-btn class="mr-4" to="/">Hunt</v-btn>
          <v-toolbar-items>
            <v-btn text class="mr-2"><v-icon>info</v-icon>About Us</v-btn>
          </v-toolbar-items>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn text class="mr-2">
              <v-icon>add_shopping_cart</v-icon>
              Add To Cart
            </v-btn>
            <v-btn text class="mr-2" to="/register" v-if="!isLoggedIn">
              <v-icon>account_box</v-icon>
              register
            </v-btn>
            <v-btn text class="mr-2" to="/login" v-if="!isLoggedIn">
              <v-icon>fingerprint</v-icon>
              Login
            </v-btn>
            <v-btn text class="mr-2" to="/logout" v-if="isLoggedIn" @click="logout()">
              <v-icon>exit_to_app</v-icon>
              Logout
            </v-btn>
          </v-toolbar-items>
    </v-toolbar>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  computed: {
    ...mapGetters('authentication', [
      'isLoggedIn'
    ])
  },
  methods: {
    ...mapActions('authentication', [
      'logout'
    ])
  }
}
</script>

<style>

</style>
