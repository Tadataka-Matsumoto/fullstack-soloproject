<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div class="navbar">
      <a href="#" @click="stateChange">Home</a>
      <input type="file" ref="uploadFile" v-on:change="fileSelected" />
      <button @click="uploadFile">Upload</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Nav",
  props: {
    msg: String
  },
  methods: {
    // uploadFile() {
    //   this.$refs.uploadFile.click();
    // }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
