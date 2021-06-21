<template>
<div>
  <v-container class="mx-2">
    <v-row>
    <v-col cols="12" sm="6" md="4" lg="4" xl="4"
      v-for="photo in photos"
      :key="photo.id"
      class="d-flex child-flex"
    >
      <v-hover>
        <template v-slot:default="{ hover }">
          <v-card 
            :elevation="24"
            class="flexCard"
            max-width="500"
          > 
            <v-img :class="imagePlc" :src="thumbUrl(photo.filename)"></v-img>
            <v-card-title>
              <span class="primary--text text-subtitle-2" v-text="photo.title"></span>
            </v-card-title>
            <v-card-text>
              <p class="text-h6 primary--text red" v-text=getText(photo.date)>
              </p>
            </v-card-text>
            <v-fade-transition>
              <v-overlay
                v-if="hover"
                absolute
                color="#036358"
              >
                <v-btn>More Details</v-btn>
              </v-overlay>
            </v-fade-transition>
          </v-card>
        </template>
      </v-hover>
    </v-col>
  </v-row>
  </v-container>
</div>
</template>

<script>
import photos from '@/photos.json';
export default {
  name: 'Gallery',
  data() {
    return {
      photos,
       width: 300,
    };
  },
  methods: {
    thumbUrl(filename) {
      return require(`../assets/images/thumbnails/${filename}`);
    },
    getText(date) {
      return 'Shot on ' + date
    },
  },
};
</script>

<style>
.gridContainer{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  flex-flow: row;
  justify-content: space-evenly;
  width: 100%;
}

.flexCard{
  order: 5;
  flex-grow: 4;
  flex-shrink: 1;
  flex-basis: auto;
  align-self: flex-start;
}
</style>