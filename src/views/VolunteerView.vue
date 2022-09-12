<template>
  <div>
    <button type="button" style="margin: 5px" class="btn btn-outline-dark" v-on:click="toLogInPage">Sisene</button>
    <button type="button" style="margin: 5px" class="btn btn-outline-dark" v-on:click="toLogInPage">Loo konto</button>
    <br>
    <h2><span style="color: #2c3e50">Vabatahtlikule</span></h2>
    <br>
  </div>
</template>

<script>
export default {
  name: "VolunteerView",
  data: function () {
    return {
      divToLogInPage: true
    }
  },

  methods: {
    toLogInPage: function () {
      this.$router.push({name: 'logInRoute'})
    },
  },
}
</script>

<style scoped>

</style>