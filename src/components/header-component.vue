<template>
  <v-app-bar
    app
    color="amber"
    clipped-left
  >
    <v-app-bar-nav-icon @click="$emit('click')" dark/>
    <span class="white--text">{{date | date('datetime')}}</span>
    <v-spacer></v-spacer>
    <span class="title ml-3 mr-5 white--text font-weight-bold text-uppercase">srm system</span>
    <v-spacer/>
    <v-menu rounded>
      <template v-slot:activator="{ on: menu, attrs }">
        <v-btn
          text
          dark
          v-bind="attrs"
          v-on="{...menu }"
          class="pr-6"
        >User name
        </v-btn>
      </template>
      <v-list color="#4B928C" dark>
        <v-list-item v-for="(item, index) in items"
                     :key="index"
                     :to="item.path">
          <v-icon class="pr-2 ma-0">{{item.icon}}</v-icon>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>
<script>
export default {
  name: 'headerComponent',
  data () {
    return {
      drawer: null,
      dialog: false,
      items: [
        {
          title: 'Профиль',
          icon: 'mdi-account',
          path: '/profile'
        },
        {
          title: 'Выйти',
          icon: 'mdi-arrow-right',
          path: '/login'
        }
      ],
      date: new Date()

    }
  },
  mounted () {
    setInterval(() => {
      this.date = new Date()
    }, 1000)
  }
//  setInterval использую для того чтобы передать актуальное время в Date
}
</script>
<style>
</style>
