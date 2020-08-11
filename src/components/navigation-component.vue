<template>
  <v-navigation-drawer absolute app clipped fixed>
    <v-list>
      <v-list-item v-for="item in items" :key="item.name">
        {{item.name}}
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>
<script>
export default {
  name: 'navigationComponent',
  data () {
    return {
      items: [
        {
          name: 'Счет',
          icon: ''
        },
        {
          name: 'История',
          icon: ''
        },
        {
          name: 'Планирование',
          icon: ''
        },
        {
          name: 'Новая запись',
          icon: 'add'
        }
      ]
    }
  }
}
</script>
<style>
</style>
