<template>
  <v-row justify="center">
    <v-col>
      <v-card-title  class="text-h5">
          Расход
      </v-card-title>
      <v-row>
        <v-col cols="6">
          <v-card class="red">
            <v-card-text class=" white--text">
              <v-card-title>Описание:</v-card-title>
              <v-card-title>Сумма:</v-card-title>
              <v-card-title>Категория:</v-card-title>
              <small class="ml-4">12.12.12</small>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>
<script>
export default {
  name: 'detailRecord'
}
</script>
<style>
</style>
