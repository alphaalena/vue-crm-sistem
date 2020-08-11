<template>
  <v-navigation-drawer v-model="isOpen" dark  color="#4B928C" absolute :app="app" clipped fixed>
    <v-list  nav>
      <v-list-item v-for="item in items" :key="item.name"  :to="item.to">
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
          to: '/'
        },
        {
          name: 'История',
          to: '/history'
        },
        {
          name: 'Планирование',
          to: '/planning'
        },
        {
          name: 'Новая запись',
          to: '/record'
        },
        {
          name: 'Категории',
          to: '/categories'
        }
      ],
      active: true
    }
  },
  props: {
    isOpen: Boolean,
    app: Boolean
  }
}
</script>
<style>
</style>
