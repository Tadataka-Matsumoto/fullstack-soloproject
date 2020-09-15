<template>
  <div class="navbar">
    <a href="#" @click="stateChange">Home</a>
    <input type="file" ref="uploadFile" v-on:change="fileSelected" />
    <button @click="uploadFile">Upload</button>
  </div>
</template>

<script>
import { saveObject } from "../../utils/index";

export default {
  name: "Navbar",
  methods: {
    uploadFile() {
      this.$refs.uploadFile.click();
    },
    fileSelected(photo) {
      saveObject(photo.target.files[0]);
    },
    stateChange() {
      this.$emit("stateChange");
    }
  }
};
</script>

<style>
input {
  position: absolute;
  left: -99999999px;
}
.navbar {
  padding: 2rem;
  display: flex;
  justify-content: space-around;
  background-color: #41b883;
}
</style>
