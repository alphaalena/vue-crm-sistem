<template>
  <v-row>
    <v-col>
        <v-card-title class="text-h3">Категории</v-card-title>
        <v-card  tile tag="section">
          <v-row>
            <categories-create-component/>
            <v-row >
              <categories-edit-component/>
            </v-row>
          </v-row>
        </v-card>
      </v-col>
  </v-row>
</template>
<script>

import CategoriesEditComponent from '../components/categories-edit.component'
import CategoriesCreateComponent from '../components/categories-create-component'
export default {
  components: { CategoriesCreateComponent, CategoriesEditComponent },
  data () {
    return {}
  }
}
</script>
