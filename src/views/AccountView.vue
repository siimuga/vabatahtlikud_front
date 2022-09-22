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
                <td><input type="text" placeholder="Kasutajanimi" v-model="userInfo.username"></td>
              </tr>
              <tr>
                <th>Parool</th>
                <td><input type="password" placeholder="Parool" v-model="userInfo.password"><br></td>
              </tr>
              <tr>
                <th>Eesnimi</th>
                <td><input type="text" placeholder="Eesnimi" v-model="userInfo.firstName"><br></td>
              </tr>
              <tr>
                <th>Perekonnanimi</th>
                <td><input type="text" placeholder="Perekonnanimi" v-model="userInfo.lastName"></td>
              </tr>
              <tr>
                <th>Sugu</th>
                <div class="form-check-inline" style="text-align: left">
                  <input class="form-check-input"
                         type="radio"
                         name="some radio"
                         id="M"
                         value="M"
                         v-model="userInfo.sex">
                  Mees
                </div>
                <div class="form-check-inline" style="text-align: left">
                  <input class="form-check-input"
                         type="radio"
                         name="some radio"
                         id="N"
                         value="N"
                         v-model="userInfo.sex">
                  Naine
                </div>
              </tr>
              <tr>
                <th>Meiliaadress</th>
                <td><input type="email" placeholder="Meiliaadress" v-model="userInfo.email"></td>
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
      userId: sessionStorage.getItem('userId'),
      userInfo: {
        userId: 0,
        username: '',
        password: '',
        firstName: '',
        lastName: '',
        sex: '',
        email: ''
      },
    }
  },

  methods: {
    toHomePage: function () {
      this.$router.push({name: 'homeRoute'})
    },
    toMyEventsPage: function () {
      this.$router.push({name: 'myEventsRoute'})
    },

    updateUser: function () {
      this.userInfo.userId = this.userId
      this.$http.patch("/user/update", this.userInfo
      ).then(response => {
        console.log(response.data)
      }).catch(error => {
        console.log(error)
      })
      alert(this.successMessage = 'Andmed muudetud!')
      location.reload()
    },
    deleteUser: function () {
      this.$http.delete("/user/delete", {
        params: {
          userId: this.userId
        }
      }).then(response => {
        console.log(response.data)
      }).catch(error => {
        console.log(error)
      })
      alert(this.successMessage = 'Konto kustutatud!')
      this.$router.push({name: 'homeRoute'})
    },
    logOut: function () {
      sessionStorage.removeItem('eventId')
      sessionStorage.removeItem('userId')
      this.$router.push({name: 'homeRoute'})
    },
    findUserInfo: function () {
      this.$http.get("/user/user", {
            params: {
              userId: this.userId
            }
          }
      ).then(response => {
        this.userInfo = response.data
        console.log(response.data)
      }).catch(error => {
        console.log(error)
      })
    }
  },
  mounted() {
    sessionStorage.removeItem('eventId')
    this.findUserInfo()
  }
}

</script>

<style scoped>

</style>