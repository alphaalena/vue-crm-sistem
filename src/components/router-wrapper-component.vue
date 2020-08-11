<template>
  <v-main class="full-screen-height">
    <v-container fluid class="full-parent-size">
        <router-view/>
    </v-container>
  </v-main>
</template>
<script>
export default {
  name: 'routerWrapperComponent',
  components: { }
}
</script>
<style scoped>
  .full-screen-height {
    height: calc(100vh - 64px);
    overflow: hidden;
  }
</style>
