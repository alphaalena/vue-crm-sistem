<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent class="ma-10" width="400px">
      <v-card>
        <v-card-title>
          <v-card-text class="headline text-center pl-0">Профиль</v-card-text>
        </v-card-title>
        <v-text-field color="#2BBBAD" class="px-10" required type="text" v-model="labelName" :label="label" hint="Name"
                      persistent-hint></v-text-field>
        <v-card-actions>
          <v-spacer/>
          <buttons-component :name="name" :icon="icon" class=" ma-10 px-1 " width="130px"/>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>
<script>
import ButtonsComponent from '../components/buttons-component'

export default {
  name: 'profile',
  components: { ButtonsComponent },
  data () {
    return {
      dialog: true,
      name: 'Обновить',
      icon: 'mdi-send',
      label: '',
      labelName: 'name'
    }
  }
}
</script>
<style>
</style>
