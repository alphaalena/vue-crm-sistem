<template>
  <div>
    <loading-component v-if="loading"/>
    <div v-else>
    <header-component @click="openNav"/>
    <navigation-component class="mt-16" :isOpenNavigation="$store.state.isOpenNavigation"/>
    <v-main>
      <v-container fluid class="full-parent-size">
    <router-view/>
      </v-container>
    </v-main>
    <v-card-actions class="justify-end pr-14 pt-10">
      <v-spacer/>
      <buttons-component to="/record" :icon="icon" absolute fab/>
    </v-card-actions>
  </div>
  </div>
</template>
<script>
import HeaderComponent from '../components/header-component'
import NavigationComponent from '../components/navigation-component'
import ButtonsComponent from '../components/buttons-component'
import LoadingComponent from '../components/loading-component'
export default {
  name: 'mainLayoutComponent',
  components: { LoadingComponent, ButtonsComponent, NavigationComponent, HeaderComponent },
  data () {
    return {
      icon: 'mdi-plus',
      loading: true
    }
  },
  methods: {
    openNav () {
      this.$store.commit('changeIsOpenNavigation', !this.$store.state.isOpenNavigation)
    }
  },
  async mounted () {
    // данный метод применяется при использовании ассинхронных запросов
    if (this.$store.getters.isInfoEmpty) {
      await this.$store.dispatch('fetchInfo')
    //  делаем запрос на получение данных у пользователя если в сторе в геттерах нет никакой информации о пользователе методом fetchInfo
    }
    this.loading = false
  }
}
</script>
<style>
  #srm .v-navigation-drawer__border {
    display: none
  }
</style>
