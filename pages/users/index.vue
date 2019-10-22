<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>
      <div class="text-xs-center">
        <logo />
        <vuetify-logo />
      </div>
      <v-card>
        <v-card-title class="headline"
          >Welcome to the Vuetify + Nuxt.js template</v-card-title
        >
        <v-card-text>
          <ul>
            <li v-for="user in users" :key="user.id">{{ user.name }}</li>
          </ul>
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn color="primary" flat nuxt to="/inspire">Continue</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
// import axios from 'axios'
// import axios from 'axios'
import { mapGetters } from 'vuex'
import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'
export default {
  async asyncData({ store }) {
    if (store.getters.users.length) {
      return
    }
    await store.dispatch('fetchUsers')
  },
  computed: {
    ...mapGetters(['users'])
  },
  components: {
    Logo,
    VuetifyLogo
  },
  data() {
    return {
      // users: []
    }
  },
  created() {
    console.log('aaa')
    this.$axios.$get('http://localhost:3001/users').then(res => {
      console.log(res)
      // this.users = res
    })
  }
}
</script>
