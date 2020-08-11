<template>
  <div>
    <v-card-title class="text-h4">История записей</v-card-title>
    <hr>

    <v-row>
      <canvas></canvas>
    </v-row>

    <v-card tag="section">
      <v-simple-table>
        <template v-slot:default>
        <thead>
        <tr>
          <th>#</th>
          <th>Сумма</th>
          <th>Дата</th>
          <th>Категория</th>
          <th>Тип</th>
          <th>Открыть</th>
        </tr>
        </thead>

        <tbody>
        <tr>
          <td>1</td>
          <td>1212</td>
          <td>12.12.32</td>
          <td>name</td>
          <td>
            <span  class="pa-2 white--text badge red">Расход</span>
          </td>
          <td>
            <buttons-component :icon="icon" small class="pa-0"/>
          </td>
        </tr>
        </tbody>
        </template>
      </v-simple-table>
    </v-card>
  </div>
</template>
<script>
import ButtonsComponent from '../components/buttons-component'
export default {
  name: 'history',
  components: { ButtonsComponent },
  data () {
    return {
      icon: 'mdi-open-in-new'
    }
  }
}
</script>
<style scoped>
  hr {
    margin: 10px;
    border:1px solid #f1f1f1;
  }
</style>
