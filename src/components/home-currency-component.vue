<template>
  <v-card dark class="orange bill-card">
    <v-card-text>
      <v-card-title class="text-h5 white--text">Курс валют</v-card-title>
      <v-simple-table class="orange white--text font-weight-bold" hide-default-footer>
        <template v-slot:default>
          <tbody>
          <tr v-for="item in items" :key="item.name">
            <td>{{item.name}}</td>
            <td>{{item.header}}</td>
            <td>{{item.value}}</td>
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
      items: [
        {
          name: 'Валюта',
          header: 'Курс',
          value: 'Дата'
        },
        {
          name: 'руб',
          header: '12121',
          value: '12.12.12'
        }
      ]
    }
  }
}
</script>
<style>
</style>
