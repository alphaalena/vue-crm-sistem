<template>
  <v-col cols="3">
    <v-card dark color="light-blue" class="bill-card ">
        <v-card-title class="text-h5 white--text font-weight-bold">Счет в валюте</v-card-title>
      <v-list class="text-h6 " color="light-blue" v-for="coin of coins" :key="coin">
        <v-list-item-group dark>
          <v-list-item class="pb-4">{{getCurrency(coin) | currency(coin)}}</v-list-item>
          <v-divider/>
        </v-list-item-group>
      </v-list>
    </v-card>
  </v-col>
</template>
<script>
export default {
  name: 'homeBillComponent',
  data () {
    return {
      coins: ['RUB', 'EUR', 'USD']
    }
  },
  props: ['rates'],
  computed: {
    base () {
      return this.$store.getters.info.bill / (this.rates['RUB'] / this.rates['EUR'])
    }
  },
  methods: {
    getCurrency (currency) {
      // console.log(this.rates['RUB'])
      return Math.floor(this.base * this.rates[currency])
    }
  }
}
</script>
<style>
</style>
