<template>
  <div>
    <v-row class="ma-12">
    <v-col>
      <v-row justify="space-between">
        <v-card-title class="text-h4">Счет</v-card-title>
        <buttons-component dark :icon="icon" class="mr-3"/>
      </v-row>
      <hr class="mb-5 ">
      <v-row>
        <v-col cols="3">
          <v-card dark color="light-blue" class="bill-card">
            <v-card-text>
              <v-card-title class="text-h5 white--text font-weight-bold">Счет в валюте</v-card-title>
              <p class="currency-line">
                <span>12.0 Р</span>
              </p>
            </v-card-text>
          </v-card>
        </v-col>

        <v-col>
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
        </v-col>
      </v-row>
    </v-col>
  </v-row>
  </div>
</template>

<script>
// @ is an alias to /src

import ButtonsComponent from '../components/buttons-component'
export default {
  name: 'Home',
  components: { ButtonsComponent },
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
      ],
      icon: 'mdi-refresh',
      iconPlus: 'mdi-plus'
    }
  }
}
</script>
<style scoped>
  hr {
    border: 1px solid #d9d5d5;
  }
</style>
