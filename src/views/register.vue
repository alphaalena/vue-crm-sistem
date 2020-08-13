<template>
  <v-dialog v-model="dialog" width="600px">
    <v-form @submit="submitHandler" ref="form"
            v-model="valid" lazy-validation
    >
      <v-card class="pa-10">
      <v-card-subtitle class="text-h4">Домашняя бухгалтерия</v-card-subtitle>
      <v-text-field requared  :rules="emailRules" v-model='email' type="text"  label="Email" hint="Email"></v-text-field>
      <v-text-field requared :rules="passwordRules" counter v-model='password' type="password" label="Password" validate placeholder="Пароль"/>
      <v-text-field requared  counter :rules="nameRules" v-model='text' type="text" label="Имя" hint="Name"></v-text-field>
      <div>
        <v-checkbox v-model="checkbox" :rules="checkboxRules" label="С правилами согласен"></v-checkbox>
      </div>
      <div>
        <buttons-component :disabled="!valid"  type="submit" @click="validate" :name="checkIn" :icon="icon" class="waves-effect waves-light auth-submit"></buttons-component>
      </div>
      <v-card-actions class="text-center">
        <v-card-text link >Уже есть аккаунт?
         <a class="pl-2" href="/">Войти! </a>
        </v-card-text>
      </v-card-actions>
    </v-card>
    </v-form>
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
      password: '',
      show: false,
      checkIn: 'Зарегистрироваться',
      icon: 'mdi-send',
      valid: true,
      email: '',
      text: '',
      checkbox: false,
      emailRules: [
        v => !!v || 'Введите пароль',
        v => /.+@.+\..+/.test(v) || 'E-mail должен быть действительным'
      ],
      passwordRules: [
        v => !!v || 'Введите пароль',
        v => (v && v.length >= 6) || 'Минимальная длина 6 символов'
      ],
      nameRules: [
        v => !!v || 'Введите имя',
        v => (v && v.length >= 2) || 'Минимальная длина 2 символов'
      ],
      checkboxRules: [
        v => !!v || 'Согласитесь с правилами, чтобы продолжить!'
      ]
    }
  },
  methods: {
    submitHandler () {
      this.$router.push('/')
      const formData = {
        email: this.email,
        password: this.password,
        userName: this.text
      }
      console.log(formData)
    },
    validate () {
      this.$refs.form.validate()
    }
  }
}
</script>
<style>
</style>
