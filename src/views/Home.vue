<template>
<div >
    <Header />
    <Gallery />
    <Footers />
</div>
</template>
<script>
import Gallery from '@/components/Gallery.vue';
import Header from '@/components/Header.vue';
import Footers from '@/components/Footers.vue';
export default {
  name: 'home',
  components: {
    Gallery,
    Header,
    Footers
  },
};
</script>

<style>
  
</style>