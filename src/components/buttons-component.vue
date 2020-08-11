<template>
  <v-btn
    :absolute="absolute"
    color="#2BBBAD"
    dark
    type="submit"
    large
    :fab="fab"
    :small="small"
    :to="to"
  >
    {{ name }}
    <v-icon :class="{'pl-2': name}">
       {{ icon }}
    </v-icon>
  </v-btn>
</template>
<script>
export default {
  name: 'buttonsComponent',
  props: {
    name: {
      type: String
    },
    icon: {
      type: String
    },
    absolute: Boolean,
    small: Boolean,
    fab: Boolean,
    to: String
  }
}
</script>
<style>
</style>
