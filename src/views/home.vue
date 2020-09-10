<template>
  <div>
    <v-row class="ma-12">
    <v-col>
      <v-row justify="space-between">
        <v-card-title class="text-h4">Счет</v-card-title>
        <buttons-component dark :icon="icon" class="mr-3"/>
      </v-row>
      <v-divider class="mb-5 "/>
      <loading-component v-if="loading" class="position"/>
      <v-row v-else>
        <home-bill-component :rates="currency.rates"/>
        <v-col>
          <home-currency-component/>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
  </div>
</template>

<script>

import ButtonsComponent from '../components/buttons-component'
import HomeBillComponent from '../components/home-bill-component'
import HomeCurrencyComponent from '../components/home-currency-component'
import LoadingComponent from '../components/loading-component'
export default {
  name: 'Home',
  components: { LoadingComponent, HomeCurrencyComponent, HomeBillComponent, ButtonsComponent },
  data () {
    return {
      icon: 'mdi-refresh',
      iconPlus: 'mdi-plus',
      currency: null,
      loading: true
    }
  },
  async mounted () {
    this.currency = await this.$store.dispatch('fetchCurrency')
    // currency принимает значение fetchCurrency при помощи метода dispatch
    this.loading = false
    console.log(this.currency.rates)
  }
}
</script>
<style scoped>
  hr {
    border: 1px solid #d9d5d5;
  }
  .position {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
  }
</style>
