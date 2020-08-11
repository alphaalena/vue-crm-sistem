<template>
  <div>
    <header-component @click="openNav"/>
    <navigation-component  app="isOpen" :isOpen="isOpen"/>
    <v-main>
      <v-container fluid class="full-parent-size">
    <router-view/>
      </v-container>
    </v-main>
    <v-card-actions class="justify-end pr-14 pt-10">
      <v-spacer/>
      <buttons-component to="/record" :icon="icon" absolute fab/>
    </v-card-actions>
  </div>
</template>
<script>
import HeaderComponent from '../components/header-componene'
import NavigationComponent from '../components/navigation-component'
import ButtonsComponent from '../components/buttons-component'
export default {
  name: 'mainLayoutComponent',
  components: { ButtonsComponent, NavigationComponent, HeaderComponent },
  data () {
    return {
      isOpen: true,
      icon: 'mdi-plus'
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
