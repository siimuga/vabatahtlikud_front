<template>
  <div>
    <div class="container-xxl">
      <div class="row">
        <div class="col-xl">
          <button type="button" style="margin: 5px" class="btn btn-outline-dark" v-on:click="toHomePage">Esilehele
          </button>
        </div>
        <div class="col-sm">
          <h2><span style="color: #2c3e50">Sündmus X</span></h2>
        </div>
        <div class="col-sm">
          <button type="button" style="margin: 5px" class="btn btn-outline-dark" v-on:click="toLogInPage">Sisene
          </button>
          <button type="button" style="margin: 5px" class="btn btn-outline-dark" v-on:click="toLogInPage">Loo konto
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "EventView",

  methods: {
    toLogInPage: function () {
      this.$router.push({name: 'logInRoute'})
    },
    toHomePage: function () {
      this.$router.push({name: 'homePageRoute'})
    },
  },

}
</script>

<style scoped>

</style>