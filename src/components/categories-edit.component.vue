<template>
  <v-col cols="12" class="pa-8">
    <v-card-title class="text-h4">Редактировать</v-card-title>
    <v-select class="pa-4" open-on-clear color="red" label="Выберите категорию" hint="Category"/>
    <v-text-field color="red" class="pa-4" type="number" label="Лимит" hint="LIMIT"></v-text-field>
    <buttons-component :name="name1" :icon="icon1" class="ml-4 pr-2"/>
  </v-col>
</template>
<script>
import ButtonsComponent from './buttons-component'

export default {
  name: 'categoriesCreateComponent',
  components: { ButtonsComponent },
  data () {
    return {
      name1: 'Обновить',
      icon1: 'mdi-send'
    }
  }
}
</script>
<style>
</style>
