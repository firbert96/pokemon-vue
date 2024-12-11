<template>
  <v-app>
    <v-container>
      <v-row wrap>
        <v-col
          v-for="(card, index) in cards"
          :key="index"
          cols="12"
          lg="3"
          md="4"
          sm="6"
        >
          <v-card>
            <v-img height="20vh" :src="card.image" />
            <v-card-title>{{ card.title }}</v-card-title>
            <v-card-subtitle>{{ card.subtitle }}</v-card-subtitle>
            <v-card-text>{{ card.description }}</v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
  export default {
    data () {
      return {
        cards: [
          { title: 'Card 1', subtitle: 'Subtitle 1', description: 'Description 1', image: 'https://via.placeholder.com/200' },
          { title: 'Card 2', subtitle: 'Subtitle 2', description: 'Description 2', image: 'https://via.placeholder.com/200' },
          { title: 'Card 3', subtitle: 'Subtitle 3', description: 'Description 3', image: 'https://via.placeholder.com/200' },
          { title: 'Card 4', subtitle: 'Subtitle 4', description: 'Description 4', image: 'https://via.placeholder.com/200' },
          { title: 'Card 5', subtitle: 'Subtitle 5', description: 'Description 5', image: 'https://via.placeholder.com/200' },
          { title: 'Card 6', subtitle: 'Subtitle 6', description: 'Description 6', image: 'https://via.placeholder.com/200' },
        // Add more cards as needed
        ],
      }
    },
  }
</script>

<style scoped>
</style>
