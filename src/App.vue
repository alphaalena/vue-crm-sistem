<template>
  <v-app>
    <div id="app">
      <component :is="layout">
        <router-view/>
      </component>
    </div>
  </v-app>
</template>

<script>
import EmptyLayoutComponent from './layouts/empty-layout-component'
import MainLayoutComponent from './layouts/main-layout-component'

export default {
  name: 'App',

  components: {
    MainLayoutComponent,
    EmptyLayoutComponent
  },
  computed: {
    layout () {
      return (this.$route.meta.layout || 'main') + '-layout-component'
    }
  }
}
</script>
