<template>
  <div id="app">
    <div>
      <h3><a target="blank" href="http://taikosource.com/song-database/taiko-notation-a-work-in-progress/">Taiko notation</a></h3>
      <textarea id="abc-source" v-model.trim="kuden" @input="parseKudenToAbc"></textarea>
    </div>
    <div>
      <h3><a target="blank" href="http://abcnotation.com/">ABC notation</a></h3>
      <textarea id="abc-converted" disabled v-show="true" v-model="convertedKuden"></textarea>
    </div>
    <div>
      <h3>Output</h3>
      <div id="paper"></div>
    </div>
    <div><p>Using <a href="https://abcjs.net/">abcjs</a> lib</p></div>
  </div>
</template>

<script>
import abcjs from "abcjs"

var mabc = {}

export default {
  name: 'app',
  mounted: function () {
    this.mabc = new abcjs.Editor("abc-converted", {canvas_id: "paper"})
    this.$watch(
        'convertedKuden',
        function (val, oldVal) {
          this.mabc.fireChanged()
        },
        {immediate: true}
      )
	},
  data: function() {
    return {
      kuden: 'Don',
      convertedKuden: 'X:1\nM: 4/4\nL: 1/8\nK: stafflines=1\nc',
      header: 'X:1\nM: 4/4\nL: 1/8\nK: stafflines=1\n'
    }
  },
  methods: {
    parseKudenToAbc() {
      this.convertedKuden = this.header
      if(this.kuden.toLowerCase() === 'don') {
        this.convertedKuden += 'c'
      }
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
  display: flex;
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

textarea {
  height: 150px;
}
</style>
