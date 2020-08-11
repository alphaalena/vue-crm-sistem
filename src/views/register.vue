<template>
  <v-dialog v-model="dialog" width="600px">
    <v-card class="pa-10">
      <v-card-subtitle class="text-h4">Домашняя бухгалтерия</v-card-subtitle>
      <v-text-field type="text"  label="Email" hint="Email"></v-text-field>
      <v-text-field v-model="password" :type="show ? 'text' : 'password'" label="Password"  placeholder="Пароль"/>
      <v-text-field type="text" label="Имя" hint="Name"></v-text-field>
      <div>
        <v-checkbox label="С правилами согласен"></v-checkbox>
      </div>
      <div>
        <buttons-component :name="name" :icon="icon" class="waves-effect waves-light auth-submit"></buttons-component>
      </div>
      <v-card-actions class="text-center">
        <v-card-text link >Уже есть аккаунт?
         <a class="pl-2" href="/">Войти! </a>
        </v-card-text>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script>
import ButtonsComponent from '../components/buttons-component'
export default {
  name: 'register',
  components: { ButtonsComponent },
  data () {
    return {
      dialog: true,
      password: 'Password',
      show: false,
      name: 'Зарегистрироваться',
      icon: 'mdi-send'
    }
  }
}
</script>
<style>
</style>
