<template>
  <div>
    <b-btn v-b-modal.kuden-help>Show Kuden Notes</b-btn>

    <!-- Modal Component -->
    <b-modal ref="kudenHelpModal" hide-footer id="kuden-help" title="Kuden Cheatcode">
      <h2>Notes</h2>
      <b-table fixed :fields="fields" :items="notes">
        <template slot="note" slot-scope="data">
          <img :src="data.item.noteUrl">
        </template>
        <template slot="Kuden" slot-scope="data">
          {{ data.item.kuden }}
        </template>
      </b-table>

      <h2>Pauses</h2>
      <b-table fixed :fields="fields" :items="pauses">
        <template slot="note" slot-scope="data">
          <img :src="data.item.restUrl">
        </template>
        <template slot="Kuden" slot-scope="data">
          {{ data.item.kuden }}
        </template>
      </b-table>
      <b-btn class="mt-3" variant="outline-danger" block @click="hideModal">Close Me</b-btn>
    </b-modal>
  </div>
</template>


<script>
export default {
  data () {
    return {
      fields: [
        'note',
        'Kuden'
      ],
      notes: [
        {
            noteUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Music-quarternote.svg/240px-Music-quarternote.svg.png',
            kuden: 'Don/Kon',
            restUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Crochet2.svg/320px-Crochet2.svg.png'
        },
        {
            noteUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Music-eighthnote.svg/240px-Music-eighthnote.svg.png',
            kuden: 'Do/Ko',
            restUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Music-eighthrest.svg/320px-Music-eighthrest.svg.png'
        },
        {
            noteUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Music-sixteenthnote.svg/240px-Music-sixteenthnote.svg.png',
            kuden: 'd/k',
            restUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Music-sixteenthrest.svg/320px-Music-sixteenthrest.svg.png'
        }
      ],
      pauses: [
        {
          kuden: 'm',
          restUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Crochet2.svg/320px-Crochet2.svg.png'
        },
        {
          kuden: 'su',
          restUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Music-eighthrest.svg/320px-Music-eighthrest.svg.png'
        },
        {
          kuden: 's',
          restUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Music-sixteenthrest.svg/320px-Music-sixteenthrest.svg.png'
        }
      ]
    }
  },
  methods: {
    hideModal () {
      this.$refs.kudenHelpModal.hide()
    }
  }
}
</script>

<style scoped>
    img {
        display: block;
        width: 100%;
    }
</style>
