<template>
  <v-navigation-drawer v-model="isOpenNavigation" dark  color="#4B928C" absolute clipped fixed>
    <v-list nav>
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
  },
  computed: {
    isOpenNavigation: {
      get () {
        return this.$store.state.isOpenNavigation
      },
      set (value) {
        this.$store.commit('changeIsOpenNavigation', value)
      }
    //  через геттерс и сетерс настраиваем отображение навигации
    }
  }
}
</script>
<style>
</style>
