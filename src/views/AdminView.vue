<template>
  <div>
    <div class="container-xxl">
      <div class="row">
        <div class="col-xl">
          <button type="button" style="margin: 5px" class="btn btn-outline-dark" v-on:click="toHomePage">Esilehele
          </button>
        </div>
        <div class="col-sm">
          <h2><span style="color: #2c3e50">Admin konto</span></h2>
        </div>
        <div class="col-sm">
          <button type="button" style="margin: 5px" class="btn btn-outline-dark" v-on:click="toHomePage">Logi välja
          </button>
        </div>
      </div>
    </div>
    <div class="col-sm">
      <h5 align="left" style="margin: 5px"><u><span style="color: #2c3e50">Eesolevad üritused</span></u></h5>

      <table class="table table-hover">
        <thead>
        <tr>
          <th scope="col"></th>
          <th scope="col">Ürituse nimi</th>
          <th scope="col">Vabatahtlike arv</th>
          <th scope="col">Registreerunute arv</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <th scope="row">1</th>
          <td>sündmus</td>
          <td>arv</td>
          <td>arv</td>
          <td>
            <button type="button" style="margin: 5px" class="btn btn-outline-dark" v-on:click="toChangeEvent">
              Muuda
            </button>
            <button type="button" style="margin: 5px" class="btn btn-outline-dark" v-on:click="toConfirmEvent">
            Kinnita
          </button>
            <button type="button" style="margin: 5px" class="btn btn-danger" v-on:click="toDeleteEvent">Kustuta
            </button>
          </td>

        </tr>
        <tr>
          <th scope="row">2</th>
          <td>sündmus</td>
          <td>arv</td>
          <td>arv</td>
          <td>
            <button type="button" style="margin: 5px" class="btn btn-outline-dark" v-on:click="toChangeEvent">
              Muuda
            </button>
            <button type="button" style="margin: 5px" class="btn btn-outline-dark" v-on:click="toConfirmEvent">
              Kinnita
            </button>
            <button type="button" style="margin: 5px" class="btn btn-danger" v-on:click="toDeleteEvent">Kustuta
            </button>
          </td>
        </tr>
        </tbody>
      </table>
      <br>
      <h5 align="left" style="margin: 5px"><u><span style="color: #2c3e50">Möödunud üritused</span></u></h5>
      <table class="table table-hover">
        <thead>
        <tr>
          <th scope="col"></th>
          <th scope="col">Ürituse nimi</th>
          <th scope="col">Vabatahtlike arv</th>
          <th scope="col">Registreerunute arv</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <th scope="row">1</th>
          <td>sündmus</td>
          <td>arv</td>
          <td>arv</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>sündmus</td>
          <td>arv</td>
          <td>arv</td>
        </tr>

        </tbody>
      </table>

    </div>
  </div>
</template>

<script>
export default {
  name: "AdminView",

  methods: {
    toHomePage: function () {
      this.$router.push({name: 'homeRoute'})
    },
    toChangeEvent: function () {
      
    },
    toConfirmEvent:function () {
      
    },
    toDeleteEvent: function () {
      
    }
  }
}
</script>

<style scoped>

</style>