<template>
  <v-card>
    <v-tabs
      v-model="tab"
      align-tabs="center"
      bg-color="blue"
      stacked
    >
      <v-tab value="0">
        <v-icon icon="mdi-table" />
        All
      </v-tab>
      <v-tab value="1">
        <v-icon icon="mdi-heart" />
        Favorites
      </v-tab>
    </v-tabs>

    <v-tabs-window v-model="tab">
      <v-tabs-window-item value="0">
        <All />
      </v-tabs-window-item>
      <v-tabs-window-item value="1">
        <Favorites />
      </v-tabs-window-item>
    </v-tabs-window>
  </v-card>
</template>
<script setup>
  import { ref } from 'vue'
  const tab = ref(0)
</script>
