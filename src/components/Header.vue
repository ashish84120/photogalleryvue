<template>
  <div class="logoholder">
    <v-img height="120px"
    :src="thumbUrl()"
    class="logo">
    </v-img>
  </div>
</template>      

<script>

export default {
  name: 'Gallery',
  data() {
    return {
       width: 300,
    };
  },
  methods: {
    thumbUrl() {
      return require(`../assets/logo.gif`);
    },
  },
};
</script>

<style>
.logo{
  height: 50px;
  width: auto;
  align-content: center;
}
.logoholder {
  display: flex;
  align-items: center;
}
</style>