<template>
  <v-btn
    class="white--text"
    :absolute="absolute"
    color="#2BBBAD"
    type="submit"
    large
    :fab="fab"
    :small="small"
    :to="to"
    :width="width"
    :text="text"
    :disabled="disabled"
    @click="$emit('click')"
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
    to: String,
    width: String,
    text: Boolean,
    disabled: Boolean
  }
}
</script>
<style>
</style>
