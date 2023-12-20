<template>
  <div class="home">
    <H1>HOME</H1>
  </div>
  <div class="row">
    <p class="lead" v-for="">

    </p>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'HomeView',
  components: {
  },
  computed: {
    jobTitle(){
      return this.$store.state.jobTitle
    }
  },
  mounted() {
    this.$store.dispatch'fetchjobTitle'
  },
}
</script>
