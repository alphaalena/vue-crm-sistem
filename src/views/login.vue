<template>
  <v-col cols="12" class="my-5">
    <v-row justify="center">
      <v-dialog v-model="dialog" width="500px">
        <v-form @submit="submitHandler"
                ref="form"
                v-model="valid"
                lazy-validation>
          <v-card>
            <v-card-subtitle class="text-h5 font-weight-bold text-center pl-0">Домашняя бухгалтерия</v-card-subtitle>
            <v-text-field class="px-10" required v-model="email" label="E-mail" placeholder="E-mail"
                          :rules="emailRules"/>
            <v-text-field counter :rules="passwordRules" required v-model="password" class="px-10" type="password"
                          label="Password" placeholder="Пароль" validate/>
            <v-card-actions>
              <v-col class="px-8">
                <buttons-component :disabled="!valid" @click="validate" type="submit" width="420px" absolute
                                   :icon="iconSend" :name="signIn"/>
                <v-row justify="center" class="my-6 pt-10">
                  <span class="font-weight-light pt-2">Нет аккаунта?</span>
                  <v-btn large text to="/register" color="#FFC107" class="text--darken-2 text-uppercase">
                    Зарегистрироваться
                  </v-btn>
                </v-row>
              </v-col>
            </v-card-actions>
            <v-snackbar v-model="$store.state.isSnackbarVisible" shaped bottom>
              Вы вышли из системы
            </v-snackbar>
          </v-card>
        </v-form>
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
      password: '',
      emailRules: [
        v => !!v || 'Введите е-mail',
        v => /.+@.+\..+/.test(v) || 'E-mail должен быть действительным'
      ],
      passwordRules: [
        v => !!v || 'Введите пароль',
        v => (v && v.length >= 6) || 'Минимальная длина 6 символов'
      ],
      valid: true,
      iconSend: 'mdi-send',
      signIn: 'Войти'
    }
  },
  methods: {
    async submitHandler () {
      const formData = {
        email: this.email,
        password: this.password
      }
      try {
        await this.$store.dispatch('login', formData)
        await this.$router.push('/')
      } catch (e) {}
    },
    validate () {
      this.$refs.form.validate()
    }
  },
  computed: {
    isSnackBarVisible: {
      get () {
        return this.$store.state.isSnackBarVisible
      },
      set (value) {
        this.$store.commit('changeSnackbarVisibility', value)
      //  настройка отображения isSnackBarVisible через гетерс и сеттерс
      }
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
