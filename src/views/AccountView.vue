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
          <button type="button" style="margin: 5px" class="btn btn-outline-dark" v-on:click="toLogInPage">Sisene
          </button>
          <button type="button" style="margin: 5px" class="btn btn-outline-dark" v-on:click="toLogInPage">Loo konto
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
            <h3><span style="color: #2c3e50">Profiil</span></h3>
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
                <td><input type="text" placeholder="Sugu"> <!--v-model="example"--></td>
              </tr>
              <tr>
                <th>Email</th>
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
          <div class="col-sm">
            <h3><span style="color: #2c3e50">Eesolevad üritused</span></h3>

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
            <h3><span style="color: #2c3e50">Möödunud üritused</span></h3>
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