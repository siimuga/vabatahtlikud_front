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
          <button type="button" style="margin: 5px" class="btn btn-outline-dark" v-on:click="toMyEventsPage">Minu
            üritused
          </button>
          <button type="button" style="margin: 5px" class="btn btn-outline-dark" v-on:click="toAddEventPage">Lisa üritus
          </button>
          <button type="button" style="margin: 5px" class="btn btn-outline-dark" v-on:click="logOut">Logi välja
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
                <td><input type="text" placeholder="Kasutajanimi"></td>
              </tr>
              <tr>
                <th>Parool</th>
                <td><input type="text" placeholder="Parool"><br></td>
              </tr>
              <tr>
                <th>Eesnimi</th>
                <td><input type="text" placeholder="Eesnimi"><br></td>
              </tr>
              <tr>
                <th>Perekonnanimi</th>
                <td><input type="text" placeholder="Perekonnanimi"></td>
              </tr>
              <tr>
                <th>Sugu</th>
                <td><input type="text" placeholder="M/N"></td>
              </tr>
              <tr>
                <th>Meiliaadress</th>
                <td><input type="text" placeholder="Meiliaadress"></td>
              </tr>
              </tbody>
            </table>
            <button type="button" style="margin: 5px" class="btn btn-outline-dark" v-on:click="updateUser">Muuda
              andmeid
            </button>
            <button type="button" style="margin: 5px" class="btn btn-outline-dark" v-on:click="deleteUser">Kustuta
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
      user: {
        username: '',
        password: '',
        firstName: '',
        lastName: '',
        sex: '',
        email: ''
      }
    }
  },

  methods: {
    toHomePage: function () {
      this.$router.push({name: 'homeRoute'})
    },
    toMyEventsPage: function () {
      this.$router.push({name: 'myEventsRoute'})
    },
    toAddEventPage: function () {
      this.$router.push({name: 'addEventRoute'})
    },
    updateUser: function (user) {
      this.$http.patch("/user/update", {}, {
            params: {
              username: user.username,
              password: user.password,
              firstName: user.firstName,
              lastName: user.lastName,
              sex: user.sex,
              email: user.email
            }
          }
      ).then(response => {
        console.log(response.data)
      }).catch(error => {
        console.log(error)
      })
    },
    deleteUser: function (user) {
      this.$http.delete("/user/delete", {
        params: {
          username: user.username,
          password: user.password,
        }
      }).then(response => {
        console.log(response.data)
      }).catch(error => {
        console.log(error)
      })
    },
    logOut: function () {
      sessionStorage.removeItem('eventId')
      sessionStorage.removeItem('userId')
      this.$router.push({name: 'homeRoute'})
    }
  },
  mounted: function () {
    sessionStorage.removeItem('eventId')
    this.updateUser()
    this.logOut()
  }
}

</script>

<style scoped>

</style>