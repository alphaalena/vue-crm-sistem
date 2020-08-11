<template>
  <v-app-bar
    app
    color="amber"
    clipped-left
  >
    <span class="title ml-3 mr-5 font-weight-light text-uppercase" >srm system</span>
    <v-spacer></v-spacer>
    <v-dialog  v-model="dialog" scrollable class="mr-5  text-decoration-none" max-width="300px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn text
        v-bind="attrs"
        v-on="on"
        >
        Имя пользователя
      </v-btn>
      </template>
      <v-card>
        <v-card-title>Профиль</v-card-title>
        <v-card-text>Выйти</v-card-text>
      </v-card>
    </v-dialog>
  </v-app-bar>
</template>
<script>
export default {
  name: 'headerComponent',
  data () {
    return {
      drawer: null,
      dialog: false
    }
  }
}
</script>
<style>
</style>
