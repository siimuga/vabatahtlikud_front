<template>
  <div>
    <div class="container-xxl">
      <div class="row">
        <div class="col-xl">
          <button type="button" style="margin: 5px" class="btn btn-outline-dark" v-on:click="toHomePage">Esilehele
          </button>
        </div>
        <div class="col-sm">
          <h2><span style="color: #2c3e50">Minu üritused</span></h2>
        </div>
        <div class="col-sm">
          <button type="button" style="margin: 5px" class="btn btn-outline-dark" v-on:click="toAccountPage">Minu konto
          </button>
          <button type="button" style="margin: 5px" class="btn btn-outline-dark" v-on:click="toHomePage">Logi välja
          </button>
        </div>
      </div>
    </div>
    <br>
    <br>
    <div>
      <div class="col-sm">
        <h3 align="left" style="margin: 5px"><span style="color: #2c3e50">Eesolevad üritused</span></h3>

        <table class="table table-hover">
          <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col">Ürituse nimi</th>
            <th scope="col">Roll</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <th scope="row">1</th>
            <td>sündmus</td>
            <td>korraldaja</td>
            <td>
              <button type="button" style="margin: 5px" class="btn btn-outline-dark" v-on:click="toChangeEvent">
                Muuda
              </button>
              <button type="button" style="margin: 5px" class="btn btn-danger" v-on:click="toDeleteEvent">Kustuta
              </button>
            </td>

          </tr>
          <tr>
            <th scope="row">2</th>
            <td>sündmus</td>
            <td>vabatahtlik</td>
            <td>
              <button type="button" style="margin: 5px" class="btn btn-danger" v-on:click="toDeleteEvent">Tühista
                osalemine
              </button>
            </td>
          </tr>
          </tbody>
        </table>
        <br>
        <h3 align="left" style="margin: 5px"><span style="color: #2c3e50">Möödunud üritused</span></h3>
        <table class="table table-hover">
          <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col">Ürituse nimi</th>
            <th scope="col">Roll</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <th scope="row">1</th>
            <td>sündmus</td>
            <td>korraldaja</td>
          </tr>

          </tbody>
        </table>

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
    toAccountPage: function () {
      this.$router.push({name: 'accountRoute'})
    },
    toChangeEvent: function () {
      this.$router.push({name: 'addEventRoute'})
    },
    toDeleteEvent: function () {
      this.$router.push({name: 'homeRoute'})
    },
  }
}
</script>

<style scoped>

</style>