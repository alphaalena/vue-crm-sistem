<template>
  <v-col cols="12" class="my-5">
    <v-row justify="center">
      <v-dialog v-model="dialog" width="600px">
         <v-card>
          <v-card-title class="font-weight-bold">
            <v-card-text class="headline text-center pl-0">Домашняя бухгалтерия</v-card-text>
          </v-card-title>
              <v-text-field  class="px-10" required v-model="email"
                            label="E-mail" placeholder="E-mail"
              ></v-text-field>
              <v-text-field  class="px-10" v-model="password" :type="show ? 'text' : 'password'" label="Password"  placeholder="Пароль" validate></v-text-field>
          <v-card-actions>
            <v-col class="px-8">
              <buttons-component  absolute :icon="icon" :name="name"/>
              <v-card-text class="my-10 text-start pl-0">
                <span class="font-weight-medium pr-2">Нет аккаунта?</span>
                <a href="/" :color="color" class="text-decoration-none text-uppercase font-weight-bold">Зарегистрироваться</a>
              </v-card-text>
            </v-col>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
  </v-col>
</template>
<script>
import ButtonsComponent from '../components/buttons-component'
export default {
  components: { ButtonsComponent },
  data () {
    return {
      dialog: true,
      email: '',
      show: false,
      password: 'Password',
      valid: true,
      color: '#3CC0B3',
      icon: 'mdi-send',
      name: 'Войти'
    }
  }
}
</script>
<style scoped>
  .v-dialog {
    border-radius: 4px;
    margin: 24px;
    overflow-y: initial;
    pointer-events: auto;
    transition: 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    width: 100%;
    z-index: inherit;
    box-shadow: 0px 11px 15px -7px rgba(0, 0, 0, 0.2), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0, 0, 0, 0.12);
  }
</style>
