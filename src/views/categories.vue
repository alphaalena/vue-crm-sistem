<template>
  <v-row>
    <v-col>
        <v-card-title class="text-h3">Категории</v-card-title>
        <v-card  tile tag="section">
          <v-row>
            <v-col cols="6" class="ma-4">
              <v-card-title class="text-h4">
                  Создать
              </v-card-title>
              <v-text-field  class="pa-4" autofocus flat type="text" label="Введите название"  color="red" hint="Название"></v-text-field>
              <v-text-field class="pa-4" type="number" flat color="red" label="Лимит" hint="Минимальная величина"></v-text-field>
              <buttons-component class="ml-4 pr-2" :icon="icon" :name="name"></buttons-component>
            </v-col>
            <v-row >
              <v-col cols="12" class="pa-8">
                <v-card-title class="text-h4">Редактировать</v-card-title>
                  <v-select  class="pa-4" open-on-clear color="red" label="Выберите категорию" hint="Category" :items="items"></v-select>
                <v-text-field   color="red" class="pa-4" type="number" label="Лимит" hint="LIMIT"></v-text-field>
                <buttons-component :name="name1" :icon="icon1" class="ml-4 pr-2"/>
              </v-col>
            </v-row>
          </v-row>
        </v-card>
      </v-col>
  </v-row>
</template>
<script>
import ButtonsComponent from '../components/buttons-component'
export default {
  components: { ButtonsComponent },
  data () {
    return {
      items: 'Название категории',
      name: 'Создать',
      icon: 'mdi-send',
      name1: 'Обновить',
      icon1: 'mdi-send'
    }
  }
}
</script>
