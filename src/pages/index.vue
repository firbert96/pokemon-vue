<template>
  <v-card>
    <v-tabs
      v-model="tab"
      align-tabs="center"
      bg-color="blue"
      stacked
    >
      <v-tab value="tab-1">
        <v-icon icon="mdi-table" />
        All
      </v-tab>
      <v-tab value="tab-2">
        <v-icon icon="mdi-heart" />
        Favorites
      </v-tab>
    </v-tabs>

    <v-tabs-window v-model="tab">
      <v-tabs-window-item
        v-for="i in 2"
        :key="i"
        :value="'tab-' + i"
      >
        <All v-if="i===1" />
        <Favorites v-if="i===2" />
      </v-tabs-window-item>
    </v-tabs-window>
  </v-card>
</template>
<script>
  export default {
    data () {
      return {
        tab: 0,
      }
    },
  }
</script>
