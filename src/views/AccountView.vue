<template>
  <div>
    <div class="container-xxl">
      <div class="row">
        <div class="col-xl">
          <button type="button" style="margin: 5px" class="btn btn-outline-dark" v-on:click="toHomePage">Esilehele
          </button>
        </div>
        <div class="col-sm">
          <h2><span style="color: #2c3e50">Minu konto</span></h2>
        </div>
        <div class="col-sm">
          <button type="button" style="margin: 5px" class="btn btn-outline-dark" v-on:click="toMyEventsPage">Minu üritused
          </button>
          <button type="button" style="margin: 5px" class="btn btn-outline-dark" v-on:click="toAddEventPage">Lisa üritus
          </button>
          <button type="button" style="margin: 5px" class="btn btn-outline-dark" v-on:click="toHomePage">Logi välja
          </button>
        </div>
      </div>
    </div>
    <br>
    <br>
    <div>
      <div class="container-xl">
        <div class="row">
          <div class="col-sm">
            <table class="table">
              <tbody>
              <tr>
                <th>Kasutajanimi</th>
                <td><input type="text" placeholder="Kasutajanimi"><!--v-model="example"--></td>
              </tr>
              <tr>
                <th>Parool</th>
                <td><input type="text" placeholder="Parool"> <!--v-model="example"--><br></td>
              </tr>
              <tr>
                <th>Eesnimi</th>
                <td><input type="text" placeholder="Eesnimi"> <!--v-model="example"--><br></td>
              </tr>
              <tr>
                <th>Perekonnanimi</th>
                <td><input type="text" placeholder="Perekonnanimi"> <!--v-model="example"--></td>
              </tr>
              <tr>
                <th>Sugu</th>
                <td><input type="text" placeholder="M/N"> <!--v-model="example"--></td>
              </tr>
              <tr>
                <th>Meiliaadress</th>
                <td><input type="text" placeholder="Meiliaadress"> <!--v-model="example"--></td>
              </tr>
              </tbody>
            </table>

            <button type="button" style="margin: 5px" class="btn btn-outline-dark" v-on:click="toLogInPage">Muuda
              andmeid
            </button>
            <button type="button" style="margin: 5px" class="btn btn-outline-dark" v-on:click="toLogInPage">Kustuta
              konto
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>


</template>

<script>
export default {
  name: "AccountView",
  props: {},

  data: function () {
    return {
      divToHomePage: true,
      example: 'Mari'
    }
  },

  methods: {
    toHomePage: function () {
      this.$router.push({name: 'homeRoute'})
    },
    toLogInPage: function () {
      this.$router.push({name: 'logInRoute'})
    },
    toMyEventsPage: function () {
      this.$router.push({name: 'myEventsRoute'})
    },
    toAddEventPage: function () {
      this.$router.push({name: 'addEventRoute'})
    }
  }
}
</script>

<style scoped>

</style>