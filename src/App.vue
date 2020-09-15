<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <Nav msg="47都道府県の花" />
  </div>
</template>

<script>
import Nav from "./components/Nav";

export default {
  name: "App",
  components: {
    Nav: Nav
  },
  data: () => ({
    title: "Photo Upload App",
    sendAllPhoto: null,
    sendSinglePhoto: null,
    state: true
  }),
  methods: {
    emitted: function(selectedPhoto) {
      // console.log(selectedPhoto);
      //画像表示のチェンジ
      if (this.state) {
        this.state = false;
      } else {
        this.state = true;
      }
      console.log(this.state);
      //singlephotoの表示
      this.sendSinglePhoto = selectedPhoto;
    },
    stateChange: function() {
      //画像表示のチェンジ
      if (this.state) {
        this.state = false;
      } else {
        this.state = true;
      }
    }
  },
  created: function() {
    console.log("tadamon still alive");
    //   listObjects()
    //     .then(result => result.map(elem => getSingleObject(elem.Key)))
    //     .then(result => Promise.all(result))
    //     .then(result => result.map(elem => `data:image;base64,${elem}`))
    //     .then(result => (this.sendAllPhoto = result));
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
