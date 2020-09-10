<template>
  <v-card dark class="orange bill-card">
    <v-card-text>
      <v-card-title class="text-h5 white--text">Курс валют</v-card-title>
      <v-simple-table class="orange white--text font-weight-bold" hide-default-footer>
        <template v-slot:default>
          <thead >
          <tr class="font-weight-bold">
            <td>Валюта</td>
            <td>Курс</td>
            <td>Дата</td>
          </tr>
          </thead>
          <tbody>
          <tr v-for="coin in coins" :key="coin">
            <td>{{coin}}</td>
            <td>{{rates[coin].toFixed(2)}}</td>
            <td>{{date | date('date')}}</td>
          </tr>
          </tbody>
        </template>
      </v-simple-table>
    </v-card-text>
  </v-card>
</template>
<script>
export default {
  name: 'homeCurrencyComponent',
  data () {
    return {
      coins: ['RUB', 'EUR', 'USD'],
      header: ['12121'],
      value: ['12.12.12']
    }
  },
  props: ['rates', 'date']
}
</script>
<style>
</style>
