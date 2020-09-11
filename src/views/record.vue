<template>
  <v-col>
    <v-card-title class="text-h4">
      Новая запись
    </v-card-title>

    <v-form>
      <v-card-actions class="input-field" >
        <v-select label="Выберите категорию" hint="name cat"></v-select>
      </v-card-actions>
    <v-radio-group>
      <v-radio  value="profit" class="with-gap" label="Доход"></v-radio>
      <v-radio color="red" label="Расход" class="with-gap"></v-radio>
    </v-radio-group>
      <v-card-actions>
        <v-text-field type="number"  label="Сумма" class="input-field"></v-text-field>
        <span class="helper-text invalid px-16">amount пароль</span>
      </v-card-actions>
      <v-card-actions class="input-field">
        <v-text-field
          type="text"
          label="Описание"
        />
        <span class="helper-text invalid px-13">description пароль</span>
      </v-card-actions>
      <buttons-component :name="name" :icon="icon" class="waves-effect waves-light mt-10"/>
    </v-form>
  </v-col>
</template>
<script>
import ButtonsComponent from '../components/buttons-component'
export default {
  name: 'record',
  components: { ButtonsComponent },
  data () {
    return {
      items: 'Name',
      profit: false,
      name: 'Создать',
      icon: 'mdi-send'
    }
  }
}
</script>
<style>
</style>
