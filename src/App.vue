<template>
  <div id="app">
    <b-container>
      <b-row>
        <b-col>
          <h3><a target="blank" href="http://taikosource.com/song-database/taiko-notation-a-work-in-progress/">Taiko notation</a></h3>
          <textarea id="abc-source" v-model.trim="kuden" @input="parseKudenToAbc"></textarea>
          <input type="checkbox" id="checkbox-showAbcNotation" v-model="showAbcNotation">
          <label for="checkbox-showAbcNotation">Show ABC notation</label>
        </b-col>
        <b-col v-show="showAbcNotation">
          <h3><a target="blank" href="http://abcnotation.com/">ABC notation</a></h3>
          <textarea id="abc-converted" v-model="convertedKuden"></textarea>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <h3>Output</h3>
          <div id="paper"></div>
        </b-col>
      </b-row>
      <div><p>Using <a href="https://abcjs.net/">abcjs</a> lib</p></div>
    </b-container>
  </div>
</template>

<script>
import abcjs from "abcjs"

var mabc = {}
let regexInitChar = /(don|kon|do|ko|d|k|su|s|x[1-4]|x\/\/|x\/|x|m)/

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
      kuden: 'don m kon su ko\ns k don kon do kon\nDon x Kon x\ndon kon don kon\ndoko doko doko doko\ndkdkdkdkdkdkdkdk',
      convertedKuden: 'X:1\nM: 4/4\nL: 1/4\nK: stafflines=1\nczAz/A/|z//A//cAc/A|czAz|cAcA|c/A/c/A/c/A/c/A/|c//A//c//A//c//A//c//A//c//A//c//A//c//A//c//A//|',
      header: 'X:1\nM: 4/4\nL: 1/4\nK: stafflines=1\n',
      showAbcNotation: false,
      measuresTotalPerLine: 4
    }
  },
  methods: {
    parseKudenToAbc() {
      this.convertedKuden = this.header
      let splitedKuden = this.kuden.replace(/ /g,'').toLowerCase().split(regexInitChar)
      let noteLength = 0
      let currentMeasures = 0
      
      for (const value of splitedKuden) {
        if (noteLength == 4) {
          this.convertedKuden += '|'
          currentMeasures += 1
          noteLength = 0
        } else if (noteLength > 4) {
          noteLength = 0
        }

        if (currentMeasures == this.measuresTotalPerLine) {
          this.convertedKuden += '\n'
          currentMeasures = 0
        } else if (this.measuresTotalPerLine > 4) {
          currentMeasures = 0
        }

        switch (value.trim()) {
          case 'don':
            this.convertedKuden += 'c'
            noteLength += 1
            break;
          case 'kon':
            this.convertedKuden += 'A'
            noteLength += 1
            break;
          case 'do':
            this.convertedKuden += 'c/'
            noteLength += 0.5
            break;
          case 'ko':
            this.convertedKuden += 'A/'
            noteLength += 0.5
            break;
          case 'd':
            this.convertedKuden += 'c//'
            noteLength += 0.25
            break;
          case 'k':
            this.convertedKuden += 'A//'
            noteLength += 0.25
            break;
          case 'x//':
          case 's':
            this.convertedKuden += 'z//'
            noteLength += 0.25
            break;
          case 'x/':
          case 'su':
            this.convertedKuden += 'z/'
            noteLength += 0.5
            break;
          case 'x4':
            this.convertedKuden += 'z4'
            noteLength += 4
            break;
          case 'x3':
            this.convertedKuden += 'z3'
            noteLength += 3
            break;
          case 'x2':
            this.convertedKuden += 'z2'
            noteLength += 2
            break;
          case 'x1':
          case 'x':
          case 'm':
            this.convertedKuden += 'z'
            noteLength += 1
            break;
          case '.':
            this.convertedKuden += '>'
            break;
          default:
            break;
        }
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

textarea {
  height: 150px;
}
</style>
