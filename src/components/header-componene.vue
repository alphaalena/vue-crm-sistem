<template>
  <v-app-bar
    app
    color="amber"
    clipped-left
  >
    <v-app-bar-nav-icon @click="$emit('click')" dark/>
    <span class="white--text">12.12.12</span>
    <v-spacer></v-spacer>
    <span class="title ml-3 mr-5 white--text font-weight-bold text-uppercase" >srm system</span>
    <v-spacer/>
    <v-dialog  v-model="dialog" scrollable class="mr-5  text-decoration-none" max-width="300px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn text
        v-bind="attrs"
        v-on="on" dark
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
