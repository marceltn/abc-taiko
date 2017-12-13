<template>
  <div id="app">
    <textarea id="abc-source" v-model="kuden" @input="parseKudenToAbc"></textarea>
    <textarea id="abc-converted" v-model="convertedKuden" hidden></textarea>
    <div id="paper"></div>
  </div>
</template>

<script>
import abcjs from "abcjs"

var mabc = {}

export default {
  name: 'app',
  mounted: function () {
    this.mabc = new abcjs.Editor("abc-converted", {canvas_id: "paper"});
	},
  data: function() {
    return {
      kuden: 'a',
      convertedKuden: 'X:1\nM: 4/4\nL: 1/8\nK: stafflines=1\ncA2Ac2A2',
      header: 'X:1\nM: 4/4\nL: 1/8\nK: stafflines=1\n'
    }
  },
  methods: {
    parseKudenToAbc() {
      this.convertedKuden = this.header
      if(this.kuden === 'Don') {
        this.convertedKuden += 'c'
      }
    }
  },
  watch: {
    convertedKuden() {
      this.mabc.fireChanged()
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
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
