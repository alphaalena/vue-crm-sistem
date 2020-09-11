<template>
  <v-col cols="6" class="ma-4">
    <v-card-title class="text-h4">
      Создать
    </v-card-title>
    <v-form @submit="submitHandler">
      <v-text-field v-model="title"
                    class="pa-4"
                    autofocus flat
                    type="text"
                    label="Название"
                    color="red"
                    :rules="titleRules">
      </v-text-field>
      <v-text-field v-model.number="limit"
                    class="pa-4"
                    type="number"
                    flat color="red"
                    label="Лимит"
                    :rules="limitRules">
      </v-text-field>
      <buttons-component class="ml-4 pr-2" :icon="icon" :name="name"></buttons-component>
    </v-form>
  </v-col>
</template>
<script>
import ButtonsComponent from './buttons-component'

export default {
  name: 'categoriesEditComponent',
  components: { ButtonsComponent },
  data () {
    return {
      icon: 'mdi-send',
      name: 'Создать',
      limit: '',
      title: '',
      titleRules: [
        v => !!v || 'Введите название категории'
      ],
      limitRules: [
        v => (v && v.length >= 9) || 'Минимальная величина: 10 рублей'
      ]
    }
  },
  methods: {
    async submitHandler () {
      const newCategories = {
        limit: this.limit,
        title: this.title
      }
      try {
        const category = await this.$store.dispatch('createCategory', newCategories)
        console.log(category)
      } catch (error) {
      }
    }
  },
  validate () {
    this.$refs.form.validate()
  }
}
</script>
<style>
</style>
