<template>
  <div>
    <div class="container-xxl">
      <div class="row">
        <div class="col-xl">
          <button type="button" style="margin: 5px" class="btn btn-outline-dark" v-on:click="toHomePage">Esilehele
          </button>
        </div>
        <div class="col-sm">
          <h2><span style="color: #2c3e50">Registreerumine üritusele</span></h2>
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
    <table class="table table-hover">
      <thead>
      <tr>
        <th scope="col">Vali osalemise kuupäev</th>
        <th scope="col">Vali sobivad tööülesanded</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td>
          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
            <label class="form-check-label" for="flexCheckDefault">
              kuupäev 1
            </label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked>
            <label class="form-check-label" for="flexCheckChecked">
              kuupäev 2
            </label>
          </div>
        </td>
        <td>
          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
            <label class="form-check-label" for="flexCheckDefault">
              ülesanne 1
            </label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked>
            <label class="form-check-label" for="flexCheckChecked">
              ülesanne 2
            </label>
          </div>
        </td>
      </tr>
      </tbody>
    </table>

    <table class="table table-hover">
      <thead>
      <tr>
        <th scope="col">Lisainfo korraldajale</th>
        <th scope="col">Osalejate arv</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td><textarea placeholder="Kuni 1000 tähemärki"></textarea></td>
        <td><textarea placeholder="1"></textarea></td>
      </tr>
      </tbody>
    </table>
    <button type="button" style="margin: 5px" class="btn btn-outline-dark" v-on:click="registerToEvent">Registreeru
    </button>
  </div>
</template>

<script>
export default {
  name: "RegisterView",
  data: function () {
    return {
      volunteer: {
        userId: 0,
        eventId: 0,
        volunteersSize: 0,
        info: ''
      }
    }
  },

  methods: {
    toHomePage: function () {
      this.$router.push({name: 'homeRoute'})
    },
    toAccountPage: function () {
      this.$router.push({name: 'accountRoute'})
    },
    registerToEvent:function () {
      this.$http.post("/volunteer/register", this.volunteer
      ).then(response => {
        console.log(response.data)
      }).catch(error => {
        console.log(error)
      })
    },
  },
  mounted() {
    this.registerToEvent()
  }
}
</script>

<style scoped>

</style>