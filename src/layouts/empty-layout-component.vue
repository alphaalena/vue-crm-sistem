<template>
  <div>
    <router-view/>
    <v-snackbar v-model="$store.state.isErrorFromServerVisible" shaped bottom>
      {{$store.state.errorFromServer}}
    </v-snackbar>
  </div>
</template>
<script>
export default {
  name: 'emptyLayoutComponent',
  computed: {
    error () {
      return this.$store.getters.error
      //  возвращает значение ошибки из store
    }
  },
  watch: {
    error (firebaseError) {
      console.log(firebaseError)
      this.$store.commit('changeErrorFromServerVisible', true)
      this.$store.commit('valueErrorFromServer', firebaseError.message)
    }
  }
// watch используем чтобы отследить изменение error
}
</script>
<style>
</style>
