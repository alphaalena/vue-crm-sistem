<template>
  <div>
    <header-component @click="openNav"/>
    <navigation-component  app="isOpen" :isOpen="isOpen"/>
    <v-main>
      <v-container fluid class="full-parent-size">
    <router-view/>
      </v-container>
    </v-main>
  </div>
</template>
<script>
import HeaderComponent from '../components/header-componene'
import NavigationComponent from '../components/navigation-component'
export default {
  name: 'mainLayoutComponent',
  components: { NavigationComponent, HeaderComponent },
  data () {
    return {
      isOpen: true
    }
  },
  methods: {
    openNav () {
      this.isOpen = !this.isOpen
    }
  }
}
</script>
<style>
  #srm .v-navigation-drawer__border {
    display: none
  }
</style>
