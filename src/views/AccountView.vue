<template>
<div>
  <div class="container-xxl">
    <div class="row">
      <div class="col-xl">
        <button type="button" style="margin: 5px" class="btn btn-outline-dark" v-on:click="toHomePage">Esilehele</button>

      </div>
      <div class="col-sm">
        <h2><span style="color: #2c3e50">Minu konto</span></h2>
      </div>
      <div class="col-sm">
        <button type="button" style="margin: 5px" class="btn btn-outline-dark" v-on:click="toLogInPage">Sisene</button>
        <button type="button" style="margin: 5px" class="btn btn-outline-dark" v-on:click="toLogInPage">Loo konto</button>
      </div>
    </div>
  </div>
  <br>
  <br>
  <div>
    <div class="container-xl">
      <div class="row">
        <div class="col-sm">
          <h3><span style="color: #2c3e50">Profiil</span></h3>
          Kasutajanimi <br>
          Parool <br>
          Eesnimi <br>
          Perekonnanimi <br>
          Sugu <br>
          Meiliaadress <br>
          <br>
          <button type="button" style="margin: 5px" class="btn btn-outline-dark" v-on:click="toLogInPage">Muuda andmeid</button>
          <button type="button" style="margin: 5px" class="btn btn-outline-dark" v-on:click="toLogInPage">Kustuta konto</button>
        </div>
        <div class="col-sm">
          <h3><span style="color: #2c3e50">Eesolevad üritused</span></h3>
          Üritus A <br>
          Üritus B <br>
          <br>
          <br>
          <h3><span style="color: #2c3e50">Möödunud üritused</span></h3>
          Üritus Y <br>
          Üritus Z <br>

        </div>

      </div>
    </div>
  </div>
</div>




</template>

<script>
export default {
  name: "AccountView",

  data: function () {
    return {
      divToHomePage: true
    }
  },

  methods: {
    toHomePage: function () {
      this.$router.push({name: 'homeRoute'})
    },
    toLogInPage: function () {
      this.$router.push({name: 'logInRoute'})
    }
  }
}
</script>

<style scoped>

</style>