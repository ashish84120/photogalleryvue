<template>
  <div class="lightbox" @click.self="closeLightbox">
    <img class="thPhoto" :src="photoUrl(photo.filename)">
    <div class="lightbox-info">
      <div class="lightbox-info-inner">
        <p v-if="photo.title">{{ photo.title }}</p>
        <p v-if="photo.location">{{ photo.location }}</p>
        <p v-if="photo.photographer">
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import photos from '@/photos.json';
export default {
  name: 'Photo',
  data() {
    return {
      photos,
    };
  },
  computed: {
    photo() {
      return this.photos.find((photo) => {
        return photo.id === Number(this.$route.params.id);
      });
    },
  },
  methods: {
    photoUrl(filename) {
      return require(`../assets/images/${filename}`);
    },
    closeLightbox() {
      this.$router.push('/');
    }
  },
};
</script>
<style>
  .lightbox {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 2rem;
  }
  .lightbox img {
    margin: auto;
    width: 100%;
    grid-column-start: 2;
    padding: 2rem;
  }
  .lightbox-info {
    margin: auto 2rem auto 0;
  }
  .lightbox-info-inner {
    background-color: #FFFFFF;
    display: inline-block;
    padding: 2rem;
    margin: 10px;
    width: auto;
    height: auto;
  }

  .thPhoto {
    padding: 5rem;
  }
</style>