<template>
  <div>
    <header-component/>
    <navigation-component/>
    <v-main class="full-screen-height">
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
  components: { NavigationComponent, HeaderComponent }
}
</script>
<style>
  #srm .v-navigation-drawer__border {
    display: none
  }
</style>
