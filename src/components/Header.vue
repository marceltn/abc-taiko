<template>
  <div>
    <b-navbar toggleable="md" type="dark" variant="info">

      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

      <b-navbar-brand href="#">abc taiko</b-navbar-brand>

      <b-collapse is-nav id="nav_collapse">

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">

          <b-navbar-item><help></help></b-navbar-item>
          <b-navbar-item><b-btn type="button" @click="toggleAbcNotation">Show/Hide ABC Notation</b-btn></b-navbar-item>

        </b-navbar-nav>

      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
  import Help from "./help/Help.vue"

  export default {
    components: {
      Help
    },
    props: {
        showAbcNotation: Boolean
    },
    methods: {
        toggleAbcNotation() {
            this.$emit('changeAbcNotationFlag', !this.showAbcNotation)
        }
    }
  }

</script>
