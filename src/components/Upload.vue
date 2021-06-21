<template>
    <div class="container">
      <v-file-input
        counter
        small-chips
        outlined
        dense
        multiple
        show-size
        accept="image/*"
        label="File input"
        truncate-length="15"
        prepend-icon="mdi-camera"
      ></v-file-input>
      <div class="row">
        <div class="brick"></div>
        <div class="brick"></div>
        <div class="brick"></div>
        <div class="brick"></div>
        <div class="brick"></div>
        <div class="brick"></div>
        <div class="brick"></div>
        <div class="brick"></div>
        <div class="brick"></div>
        <div class="brick"></div>
      </div>
      <div class="row">
        <div class="brick"></div>
        <div class="brick"></div>
        <div class="brick"></div>
        <div class="brick"></div>
        <div class="brick"></div>
        <div class="brick"></div>
        <div class="brick"></div>
        <div class="brick"></div>
        <div class="brick"></div>
        <div class="brick"></div>
      </div>
      <div class="row">
        <div class="brick"></div>
        <div class="brick"></div>
        <div class="brick"></div>
        <div class="brick"></div>
        <div class="brick"></div>
        <div class="brick"></div>
        <div class="brick"></div>
        <div class="brick"></div>
        <div class="brick"></div>
        <div class="brick"></div>
      </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      images: [
        "https://i.wifegeek.com/200426/f9459c52.jpg"
      ],
    };
  },
};
</script>

<style >
.container{
  margin-top: 10px;
  width: 100%;
  background-color: #ccc;
}

.row{
  display: flex;
}

.row:nth-child(even) .brick:first-child, .row:nth-child(even) .brick:last-child{
  width: 8%;
}

.brick{
  width: 19%;
  height: 20px;
  background-color: #bd5858;
  border-radius: 5px;
  margin: 2px;
}
</style>	