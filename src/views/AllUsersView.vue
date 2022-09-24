<template>
  <div>
    <div class="container-xxl">
      <div class="row">
        <div class="col-xl">
          <button type="button" style="margin: 5px" class="btn btn-outline-dark" v-on:click="toHomePage">Esilehele
          </button>
        </div>
        <div class="col-sm">
          <h2><span style="color: #2c3e50">Admin</span></h2>
        </div>
        <div class="col-sm">
          <button type="button" style="margin: 5px" class="btn btn-outline-dark" v-on:click="toAdminPage">Ürituste kontroll</button>
          <button type="button" style="margin: 5px" class="btn btn-outline-dark" v-on:click="toEventsPage">Ürituste info
          </button>
          <button type="button" style="margin: 5px" class="btn btn-outline-dark" v-on:click="logOut">Logi välja
          </button>
        </div>
      </div>
    </div>
    <div class="col-sm">
      <h5 align="left" style="margin: 5px"><u><span style="color: #2c3e50">Kõik kasutajad</span></u></h5>
      <div>
        <table class="table table-hover">
          <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col">Kasutajanimi</th>
            <th scope="col">Salasõna</th>
            <th scope="col">Eesnimi</th>
            <th scope="col">Perekonnanimi</th>
            <th scope="col">Sugu</th>
            <th scope="col">E-mail</th>
            <th scope="col">Staatus</th>
            <th scope="col"></th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="user in users">
            <th scope="row">{{ user.seqNr }}</th>
            <td>{{ user.username }}</td>
            <td>{{ user.password }}</td>
            <td>{{ user.firstName }}</td>
            <td>{{ user.lastName }}</td>
            <td>{{ user.sex }}</td>
            <td>{{ user.email }}</td>
            <td>{{ user.status }}</td>
            <td v-if="user.status === 'aktiivne'"><button type="button" style="margin: 5px" class="btn btn-danger" v-on:click="toDeleteUser(user)">Kustuta
            </button></td>
            <td v-if="user.status === 'kustutatud'"><button type="button" style="margin: 5px" class="btn btn-outline-success" v-on:click="toActivateUser(user)">Aktiveeri
            </button></td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import AlertSuccess from "@/alerts/AlertSuccess";

export default {
  name: "AllUsersView",
  components: {AlertSuccess},
  data: function () {
    return {
      users: []
    }
  },

  methods: {
    toHomePage: function () {
      this.$router.push({name: 'homeRoute'})
    },
    toEventsPage: function () {
      this.$router.push({name: 'allEventsRoute'})
    },
    logOut: function () {
      sessionStorage.removeItem('eventId')
      sessionStorage.removeItem('userId')
      this.$router.push({name: 'homeRoute'})
    },

    toAdminPage: function () {
      this.$router.push({name: 'adminRoute'})
    },
    toDeleteUser: function (user) {
      this.$http.delete("user/delete", {
        params: {
          userId: user.id,
        }
      })
          .then(response => {
            console.log(response.data)
          }).catch(error => {
        console.log(error)
      })
      alert(this.successMessage = 'Konto kustutatud!')
      location.reload()
    },
    toActivateUser: function (user) {
      this.$http.patch("admin/user/confirm",null, {
        params: {
          userId: user.id,
        }
      })
          .then(response => {
            console.log(response.data)
          }).catch(error => {
        console.log(error)
      })
      alert(this.successMessage = 'Konto aktiveeritud!')
      this.findAllUsers()
      location.reload()
    },
    findAllUsers: function () {
      this.$http.get("admin/user/info")
          .then(response => {
            this.users = response.data
          })
          .catch(error => {
            console.log(error)
          })
    }
  },
  mounted() {
    this.findAllUsers()
  }
}
</script>

<style scoped>

</style>