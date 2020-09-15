<template>
  <div>
    <div class="imageContainer" v-for="photo in photos" v-bind:key="photo">
      <img class="imageCell" :src="photo" @click="selectPhoto" />
    </div>
  </div>
</template>

<script>
export default {
  name: "AllPhotos",
  props: ["photos"],
  methods: {
    selectPhoto(photo) {
      this.$emit("changeView", photo.target.src);
    }
  }
};
</script>

<style>
.imageContainer {
  display: inline;
}

.imageCell {
  width: 200px;
  margin: 10px;
}
</style>
