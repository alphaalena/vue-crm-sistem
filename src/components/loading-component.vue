<template>
  <div  class="text-center  flex justify-center my-16">
    <v-progress-circular   :size="70"
                           :width="7"
                           :color="color"
                           indeterminate />
  </div>
</template>
<script>
export default {
  name: 'loadingComponent',
  computed: {
    color () {
      const colors = ['primary', 'purple', 'red', 'blue', 'yellow']
      return colors[Math.floor(Math.random() * 3)]
    }
  }
}
</script>
<style>
</style>
