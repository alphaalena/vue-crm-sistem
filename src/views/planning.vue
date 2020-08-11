<template>
  <v-row class="ma-6">
    <v-col>
      <v-row justify="space-between" class="page-title">
      <v-card-title class="text-h4">Планирование</v-card-title>
      <v-card-title class="text-h5">12 212</v-card-title>
    </v-row>
      <v-card tag="section">
      <v-row justify="space-around">
        <v-card-text>
          <strong>Девушка:</strong>
          12 122 из 14 0000
        </v-card-text>
        <v-row class="progress grey">
          <v-col cols="3"
            class="determinate green"
            style="width:40%"
          ></v-col>
        </v-row>
      </v-row>
    </v-card>
    </v-col>
  </v-row>
</template>
<script>
export default {
  name: 'planning'
}
</script>
<style>
</style>
